from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.ocr_service import extrair_texto_de_imagem, extrair_texto_de_pdf
from app.utils.file_utils import salvar_arquivo_temporario
from app.services.openrouter_service import validar_com_ia

router = APIRouter()

@router.post("/upload")
async def upload_documento(documento: UploadFile = File(...)):

    extensao = documento.filename.lower().split('.')[-1]

    if extensao not in ["jpg", "jpeg", "png", "pdf"]:
        raise HTTPException(status_code=400, detail="Tipo de arquivo inválido. Use JPG, PNG ou PDF.")

    caminho = salvar_arquivo_temporario(documento)

    if extensao == "pdf":
        texto = extrair_texto_de_pdf(caminho)
    else:
        texto = extrair_texto_de_imagem(caminho)

    validacao_ia = await validar_com_ia(texto)

    print("AAAAAAAAAAAAAAAATexto extraído:", texto)

    return {
        "status": "sucesso",
        "validacao": validacao_ia
    }
