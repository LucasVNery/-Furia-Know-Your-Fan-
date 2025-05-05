# app/schemas/usuario_schema.py
from pydantic import BaseModel, Field
from typing import List

class UsuarioSchema(BaseModel):
    nome: str
    cpf: str = Field(..., pattern=r"^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$")
    dataNascimento: str
    endereco: str
    interesses: List[str]
