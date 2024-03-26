import datetime
from fastapi import FastAPI, HTTPException
from sqlalchemy import select
import uvicorn

import models
import schemas
from database import AsyncSession


app = FastAPI()


# @app.get("/")
# def read_root():
#     return {"Hello": "World"}


# @app.get("/clientes", response_model=list[schemas.Cliente])
# async def clientes(db: AsyncSession):
#     response = []
#     async with db.begin() as session:
#         async_result = await session.stream_scalars(select(models.Cliente))

#         async for row in async_result:
#             cliente = schemas.Cliente.model_validate(row)
#             response.append(cliente)
#     return response


@app.get("/clientes/{id}/extrato", response_model=schemas.Extrato)
async def extrato(id: int, db: AsyncSession):
    async with db.begin() as session:
        cliente = await session.get(models.Cliente, id)
        if not cliente:
            raise HTTPException(status_code=404, detail='Cliente não existe.')
        saldo = schemas.SaldoOut(
            total=cliente.saldo,
            limite=cliente.limite,
            data_extrato=datetime.datetime.utcnow(),
        )
        async_result = await session.stream_scalars(
            select(models.Transacao)
            .where(models.Transacao.cliente_id == id)
            .order_by(models.Transacao.id.desc())
            .limit(10)
        )
        ultimas_transacoes = []
        async for row in async_result:
            transacao = schemas.Transacao.model_validate(row)
            ultimas_transacoes.append(transacao)
    return schemas.Extrato(saldo=saldo, ultimas_transacoes=ultimas_transacoes)


@app.post("/clientes/{id}/transacoes", response_model=schemas.SaldoTransacaoOut)
async def transacoes(id: int, transacao: schemas.TransacaoIn, db: AsyncSession):
    multiplicadores = {
        schemas.TipoTransacao.DEBITO.value: -1,
        schemas.TipoTransacao.CREDITO.value: 1,
    }
    async with db.begin() as session:
        cliente = await session.get(models.Cliente, id, with_for_update=True)
        if not cliente:
            raise HTTPException(status_code=404, detail='Cliente não existe.')
        saldo_final = cliente.saldo + cliente.limite
        if (
            transacao.tipo == schemas.TipoTransacao.DEBITO
            and saldo_final < transacao.valor
        ):
            raise HTTPException(status_code=422, detail="Saldo insuficiente!")
        transacao = models.Transacao(
            valor=transacao.valor,
            tipo=transacao.tipo.value,
            descricao=transacao.descricao,
            realizada_em=datetime.datetime.utcnow(),
            cliente_id=id,
        )
        multiplicador = multiplicadores[transacao.tipo]
        cliente.saldo += multiplicador * transacao.valor
        session.add(transacao)
        saldo_transacao = schemas.SaldoTransacaoOut(
            limite=cliente.limite, saldo=cliente.saldo
        )
    return saldo_transacao


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=9999, reload=True, workers=4)
