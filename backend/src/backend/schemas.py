from datetime import datetime
from decimal import Decimal

from pydantic import BaseModel, ConfigDict, Field, EmailStr


class ServiceCatalog(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    photo: str
    name: str
    description: str
    when: datetime
    value: Decimal



class PotentialCustomer(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: EmailStr
    message: str
    when: datetime
    service_id: int
