import firebase_admin
from firebase_admin import credentials, firestore
from app.schemas.usuario_schema import UsuarioSchema

cred_path = "app/config/firebase-key.json"

if not firebase_admin._apps:
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred)

db = firestore.client()

def salvar_usuario(usuario: UsuarioSchema):
    doc_ref = db.collection("usuarios").document(usuario.cpf)
    doc_ref.set(usuario.model_dump())
