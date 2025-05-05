import pytesseract
from PIL import Image
import os
from pdf2image import convert_from_path

# Caminhos para Tesseract e Poppler
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
os.environ["TESSDATA_PREFIX"] = r'C:\Program Files\Tesseract-OCR\tessdata'

def extrair_texto_de_imagem(path_arquivo: str) -> str:
    imagem = Image.open(path_arquivo)
    texto = pytesseract.image_to_string(imagem, lang='por')
    return texto

def extrair_texto_de_pdf(path_pdf: str) -> str:
    imagens = convert_from_path(
        path_pdf,
        dpi=300,
        poppler_path=r"D:\poppler-24.08.0\Library\bin"
    )
    texto_total = ''
    for imagem in imagens:
        texto_total += pytesseract.image_to_string(imagem, lang='por') + '\n'
    return texto_total
