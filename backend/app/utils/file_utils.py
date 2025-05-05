import os
from fastapi import UploadFile

def salvar_arquivo_temporario(file: UploadFile) -> str:
    os.makedirs("temp", exist_ok=True)
    caminho = os.path.join("temp", file.filename)

    with open(caminho, "wb") as buffer:
        buffer.write(file.file.read())

    return caminho
