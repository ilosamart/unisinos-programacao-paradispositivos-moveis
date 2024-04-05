from typing import List
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select
import uvicorn

import backend.models
import backend.schemas
from backend.database import AsyncSession, init_db


app = FastAPI(
    title="Store Backend",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def on_startup():
    await init_db()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post(
    "/service-catalog",
    status_code=204,
)
async def post_service_catalog(
    service_catalog: backend.schemas.ServiceCatalog, db: AsyncSession
):
    async with db.begin() as session:
        new_service = backend.models.ServiceCatalog(
            photo=service_catalog.photo,
            name=service_catalog.name,
            description=service_catalog.description,
            when=service_catalog.when,
            value=service_catalog.value,
        )
        session.add(new_service)
    return


@app.get("/service-catalog", response_model=List[backend.schemas.ServiceCatalog])
async def get_service_catalog(db: AsyncSession, page: int = 1, rows_per_page: int = 10):
    offset = rows_per_page * (page - 1)
    retval = []
    async with db.begin() as session:
        services = await session.stream_scalars(
            select(backend.models.ServiceCatalog).offset(offset).limit(rows_per_page)
        )
        async for service in services:
            retval.append(backend.schemas.ServiceCatalog.model_validate(service))
    return retval


@app.post(
    "/customer-contact",
    status_code=204,
)
async def post_contact(
    potential_customer: backend.schemas.PotentialCustomer, db: AsyncSession
):
    async with db.begin() as session:
        service = await session.get(
            backend.models.ServiceCatalog, potential_customer.service_id
        )
        if not service:
            raise HTTPException(status_code=404, detail="Serviço não existe.")

        new_potential_customer = backend.models.PotentialCustomer(
            name=potential_customer.name,
            email=potential_customer.email,
            message=potential_customer.message,
            service_id=potential_customer.service_id,
        )
        session.add(new_potential_customer)
    return


if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=9999, reload=True, workers=4)
