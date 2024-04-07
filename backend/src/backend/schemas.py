from datetime import datetime
from decimal import Decimal
from typing import Optional

from pydantic import BaseModel, ConfigDict, EmailStr, model_validator


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
    when: Optional[datetime] = None
    service_id: int

    @model_validator(mode='after')
    def validator(self):
        self.when = self.when or datetime.now()
        return self
