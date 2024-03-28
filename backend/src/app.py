import datetime
from typing import List
from fastapi import FastAPI, HTTPException
from sqlalchemy import select
import uvicorn

import backend.models
import backend.schemas
from backend.database import AsyncSession, init_db


app = FastAPI(
    title="Store Backend",
)


@app.on_event("startup")
async def on_startup():
    await init_db()


@app.get("/")
def read_root():
    return {"Hello": "World"}


# @app.get("/clientes", response_model=list[schemas.Cliente])
# async def clientes(db: AsyncSession):
#     response = []
#     async with db.begin() as session:
#         async_result = await session.stream_scalars(select(models.Cliente))

#         async for row in async_result:
#             cliente = schemas.Cliente.model_validate(row)
#             response.append(cliente)
#     return response


# @app.get("/clientes/{id}/extrato", response_model=schemas.Extrato)
# async def extrato(id: int, db: AsyncSession):
#     async with db.begin() as session:
#         cliente = await session.get(models.Cliente, id)
#         if not cliente:
#             raise HTTPException(status_code=404, detail='Cliente não existe.')
#         saldo = schemas.SaldoOut(
#             total=cliente.saldo,
#             limite=cliente.limite,
#             data_extrato=datetime.datetime.utcnow(),
#         )
#         async_result = await session.stream_scalars(
#             select(models.Transacao)
#             .where(models.Transacao.cliente_id == id)
#             .order_by(models.Transacao.id.desc())
#             .limit(10)
#         )
#         ultimas_transacoes = []
#         async for row in async_result:
#             transacao = schemas.Transacao.model_validate(row)
#             ultimas_transacoes.append(transacao)
#     return schemas.Extrato(saldo=saldo, ultimas_transacoes=ultimas_transacoes)


# @app.post("/clientes/{id}/transacoes", response_model=schemas.SaldoTransacaoOut)
# async def transacoes(id: int, transacao: schemas.TransacaoIn, db: AsyncSession):
#     multiplicadores = {
#         schemas.TipoTransacao.DEBITO.value: -1,
#         schemas.TipoTransacao.CREDITO.value: 1,
#     }
#     async with db.begin() as session:
#         cliente = await session.get(models.Cliente, id, with_for_update=True)
#         if not cliente:
#             raise HTTPException(status_code=404, detail='Cliente não existe.')
#         saldo_final = cliente.saldo + cliente.limite
#         if (
#             transacao.tipo == schemas.TipoTransacao.DEBITO
#             and saldo_final < transacao.valor
#         ):
#             raise HTTPException(status_code=422, detail="Saldo insuficiente!")
#         transacao = models.Transacao(
#             valor=transacao.valor,
#             tipo=transacao.tipo.value,
#             descricao=transacao.descricao,
#             realizada_em=datetime.datetime.utcnow(),
#             cliente_id=id,
#         )
#         multiplicador = multiplicadores[transacao.tipo]
#         cliente.saldo += multiplicador * transacao.valor
#         session.add(transacao)
#         saldo_transacao = schemas.SaldoTransacaoOut(
#             limite=cliente.limite, saldo=cliente.saldo
#         )
#     return saldo_transacao


@app.post(
    "/service-catalog/", status_code=204,
)
async def post_service_catalog(
    service_catalog: backend.schemas.ServiceCatalog, db: AsyncSession
):
    async with db.begin() as session:
        new_service = backend.models.ServiceCatalog(
            photo = service_catalog.photo,
            name = service_catalog.name,
            description = service_catalog.description,
            when = service_catalog.when,
            value = service_catalog.value,
        )
        session.add(new_service)
    return


@app.get(
    "/service-catalog/", response_model=List[backend.schemas.ServiceCatalog]
)
async def get_service_catalog(db: AsyncSession, page: int = 1, rows_per_page: int = 10):
    offset = rows_per_page * (page - 1)
    retval = []
    async with db.begin() as session:
        services = await session.stream_scalars(
            select(backend.models.ServiceCatalog).offset(offset).limit(rows_per_page)
        )
        async for service in services:
            retval.append(
                backend.schemas.ServiceCatalog.model_validate(service)
            )
    return retval


@app.post("/customer-contact/", status_code=204,)
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
