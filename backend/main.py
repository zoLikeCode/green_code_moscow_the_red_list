from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['GET, POST, OPTIONS'],
    allow_headers=['*'],
)

SQLALCHEMY_DATABASE_URL = "postgresql://green:12345@go.itatmisis.ru/green_code"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

db = SessionLocal

@app.get('/start')
async def start():
   query = text('SELECT 1')
   result = db.execute(query)
   return result