from datetime import datetime
from enum import Enum

from pydantic import BaseModel, ConfigDict, Field


class TipoTransacao(Enum):
    CREDITO = "c"
    DEBITO = "d"


class Transacao(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    valor: int
    tipo: str
    descricao: str
    realizada_em: datetime


class Cliente(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    nome: str
    limite: int
    saldo: int


class ClienteComTransacoes(Cliente):
    transacoes: list[Transacao] = []


class TransacaoIn(BaseModel):
    valor: int
    tipo: TipoTransacao
    descricao: str = Field(max_length=10, min_length=1)


class SaldoTransacaoOut(BaseModel):
    limite: int
    saldo: int


class SaldoOut(BaseModel):
    total: int
    limite: int
    data_extrato: datetime


class Extrato(BaseModel):
    saldo: SaldoOut
    ultimas_transacoes: list[Transacao] = []
