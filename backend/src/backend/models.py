import datetime

from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Numeric
from sqlalchemy.orm import relationship

from backend.database import Base


class ServiceCatalog(Base):
    __tablename__ = "service_catalog"

    id = Column(Integer, primary_key=True)
    photo = Column(String(10))
    name = Column(String(10))
    description = Column(String(10))
    when = Column(DateTime, default=datetime.datetime.utcnow)
    value = Column(Numeric(6, 2))

    potential_customers = relationship("PotentialCustomer", back_populates="service")



class PotentialCustomer(Base):
    __tablename__ = "potential_customers"

    id = Column(Integer, primary_key=True)
    name = Column(String(10))
    email = Column(String(10))
    message = Column(String(400))
    service_id = Column(Integer, ForeignKey("service_catalog.id"))

    service = relationship("ServiceCatalog", back_populates="potential_customers")
