from datetime import datetime


import shutil
from pathlib import Path
import uuid

from fastapi import FastAPI, Depends, Body, File, UploadFile, Form
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
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['GET, POST, OPTIONS'],
    allow_headers=['*'],
)

def get_db():
    db = SessionLocal()
    try:
      yield db
    finally:
      db.close()


@app.get('/get_photo/')
async def get_photo(photo):
   return FileResponse('./photo/' + photo)


@app.get('/get_image/')
async def get_photo(image):
   return FileResponse('./image/' + image)
   

@app.get('/get_applications/')
async def get_applications(db: Session = Depends(get_db)):
   result = db.query(models.Application).options(joinedload(models.Application.user))\
    .options(joinedload(models.Application.red_list)).all()
   return result

@app.get('/get_red_list/')
async def get_applications(db: Session = Depends(get_db), skip: int = 0, limit: int = 5):
   result = db.query(models.RedList).offset(skip).limit(limit).all()
   return result


@app.post('/create_application/')
async def create_application(
   db:Session = Depends(get_db),
   file: UploadFile = File(...),
   user_id: int = Form(...),
   red_list_id: int = Form(...),
   lat: float = Form(...),
   long: float = Form(...)
   ):

   new_filename = f'{uuid.uuid4()}_{Path(file.filename)}'

   file_location = UPLOAD_DIR / new_filename

   with file_location.open('wb') as buffer:
      shutil.copyfileobj(file.file, buffer)

   get_cadastral = api_ppk_client.get_parcel_by_coordinates(lat = lat, long = long)

   db_application = models.Application(
      user_id = user_id,
      application_date = datetime.now(),
      red_list_id = red_list_id,
      url_photo = new_filename,
      lat = lat,
      long = long,
      cadastral = get_cadastral['features'][0]['attrs']['cn'],
      status = False
     )
   db.add(db_application)
   db.commit()
   db.refresh(db_application)
   return db_application