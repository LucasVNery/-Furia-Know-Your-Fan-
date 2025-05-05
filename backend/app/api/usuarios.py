from fastapi import APIRouter
from app.schemas.usuario_schema import UsuarioSchema
from app.services.firebase_service import salvar_usuario

router = APIRouter(
    prefix="/usuarios",
    tags=["Usuários"]
)

@router.post("/")
async def criar_usuario(usuario: UsuarioSchema):
    salvar_usuario(usuario)
    return {"mensagem": "Usuário salvo com sucesso"}
