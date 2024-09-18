from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, TIMESTAMP, FLOAT, TEXT
from sqlalchemy.orm import relationship, deferred

from database import Base

class User(Base):
   __tablename__ = 'user_a'

   user_id = Column(Integer, primary_key=True)
   user_name = Column(String)

class RedList(Base):
   __tablename__ = 'red_list'

   red_list_id = Column(Integer, primary_key=True)
   red_list_name = Column(String)
   url_image = Column(TEXT)
   chapter = Column(String)
   detachment = Column(String)
   red_order = Column(String)
   red_family = Column(String)
   red_status = Column(TEXT)
   distribution = Column(TEXT)
   red_size = Column(TEXT)
   habitat_features = Column(TEXT)
   limiting_factors = Column(TEXT)
   red_security = Column(TEXT)
   state_changes = Column(TEXT)
   events = Column(TEXT)

class Application(Base):
   __tablename__ = 'application'

   application_id = Column(Integer, primary_key=True)
   user_id = deferred(Column(Integer, ForeignKey(User.user_id)))
   application_date = Column(TIMESTAMP)
   red_list_id = deferred(Column(Integer, ForeignKey(RedList.red_list_id)))
   url_photo = Column(String)
   lat = Column(FLOAT)
   long = Column(FLOAT)
   cadastral = Column(String)
   status = Column(Boolean)

   user = relationship('User', foreign_keys='Application.user_id')
   red_list = relationship('RedList', foreign_keys='Application.red_list_id')