from datetime import datetime


import shutil
from pathlib import Path
import uuid

from fastapi import FastAPI, Depends, File, UploadFile, Form, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session, joinedload
import models
from database import SessionLocal, engine

from rosreestr_api.clients.rosreestr import PKKRosreestrAPIClient

api_ppk_client = PKKRosreestrAPIClient()

models.Base.metadata.create_all(engine)

UPLOAD_DIR = Path('photo/')
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"], 
    expose_headers=["*"],  
)

def get_db():
    db = SessionLocal()
    try:
      yield db
    finally:
      db.close()

#Получение фото, загруженное гражданином
@app.get('/get_photo/')
async def get_photo(photo):
   return FileResponse('./photo/' + photo)

#Изображения из красной книги
@app.get('/get_image/')
async def get_image(image):
   return FileResponse('./image/' + image)
   
#Получение всех заявок
@app.get('/get_applications/')
async def get_applications(db: Session = Depends(get_db)):
   result = db.query(models.Application).options(joinedload(models.Application.user))\
    .options(joinedload(models.Application.red_list)).all()
   
   return result

#Получение подтвержденных заявок
@app.get('/get_applications_with_true/')
async def get_applications(
   db: Session = Depends(get_db),
   skip: int = 0,
   limit: int = 5,
   filter: str = None
   ):
   if filter is None:
      result = db.query(models.Application).options(joinedload(models.Application.user))\
      .options(joinedload(models.Application.red_list)).filter(models.Application.status == True).offset(skip).limit(limit).all()
   else:
      result = db.query(models.Application).options(joinedload(models.Application.user))\
      .options(joinedload(models.Application.red_list)).filter(models.Application.status == True)\
         .join(models.Application.red_list).filter(models.RedList.chapter == filter).offset(skip).limit(limit).all()
   
   count = db.query(models.Application).count()
   
   return {
      'count': count,
      'array':result
   }

#Получение животных из базы данных
@app.get('/get_red_list/')
async def get_red_list(
   db: Session = Depends(get_db),
   skip: int = 0,
   limit: int = 5
   ):
   result = db.query(models.RedList).offset(skip).limit(limit).all()
   return {
      'count': db.query(models.RedList).count(),
      'array': result
   }

#Получение конкретного животного
@app.get('/get_red_list/{red_list_id}')
async def get_red_list_by_id(red_list_id: int, db: Session = Depends(get_db)):
   result = db.query(models.RedList).filter(models.RedList.red_list_id == red_list_id).all()
   return result

#Создание заявки, для мобильного приложения
@app.post('/create_application/')
async def create_application(
   db:Session = Depends(get_db),
   file: UploadFile = File(None),
   user_id: int = Form(...),
   red_list_id: int = Form(...),
   latitude: float = Form(...),
   longitude: float = Form(...)
   ):

   if file is None:
      new_filename = ''
   else:
      new_filename = f'{uuid.uuid4()}_{Path(file.filename)}'

      file_location = UPLOAD_DIR / new_filename

      with file_location.open('wb') as buffer:
         shutil.copyfileobj(file.file, buffer)

   #Реализация кадастрового номера по координатам
   get_cadastral = api_ppk_client.get_parcel_by_coordinates(lat = latitude, long = longitude)

   db_application = models.Application(
      user_id = user_id,
      application_date = datetime.now(),
      red_list_id = red_list_id,
      url_photo = new_filename,
      lat = latitude,
      long = longitude,
      cadastral = get_cadastral['features'][0]['attrs']['cn'],
      status = False
     )
   db.add(db_application)
   db.commit()
   db.refresh(db_application)
   return db_application

#Изменение данных заявки (в соответствии с критериями)
@app.patch('/application/{id}')
async def update_name(
   id: int,
   db : Session = Depends(get_db),
   red_list_id: int = Form(...)
   ):

   item = db.query(models.Application).filter(models.Application.application_id == id).first()

   if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
   
   item.red_list_id = red_list_id

   db.commit()
   db.refresh(item)

   return {'message': 'Изменения сохранены!'}

