from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.db import Base

class Startup(Base):
    __tablename__ = "startups"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    category = Column(String)
    goal_amount = Column(Float)
    owner_id = Column(Integer, ForeignKey("users.id"))
