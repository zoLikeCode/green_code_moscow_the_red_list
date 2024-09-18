from datetime import datetime

from fastapi import FastAPI, Depends, HTTPException, Body

from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session, joinedload
import models
from database import SessionLocal, engine

from rosreestr_api.clients.rosreestr import PKKRosreestrAPIClient

api_ppk_client = PKKRosreestrAPIClient()

models.Base.metadata.create_all(engine)


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

@app.get('/get_applications/')
async def start(db: Session = Depends(get_db)):
   result = db.query(models.Application).options(joinedload(models.Application.user))\
    .options(joinedload(models.Application.red_list)).all()
   return result

@app.post('/create_application/')
async def create_application(db:Session = Depends(get_db), body = Body(None)):
    get_cadastral = api_ppk_client.get_parcel_by_coordinates(lat = body['lat'], long = body['long'])
    db_application = models.Application(
       user_id = body['user_id'],
       application_date = datetime.now(),
       red_list_id = body['red_list_id'],
       url_photo = body['photo'],
       lat = body['lat'],
       long = body['long'],
       cadastral = get_cadastral['features'][0]['attrs']['cn'],
       status = False
    )
    db.add(db_application)
    db.commit()
    db.refresh(db_application)
    return db_application