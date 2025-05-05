import httpx
import os
from dotenv import load_dotenv

load_dotenv()
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

async def validar_com_ia(texto_extraido: str) -> str:
    if not OPENROUTER_API_KEY:
        raise RuntimeError("OPENROUTER_API_KEY não definida no .env")

    prompt = (
        "O texto a seguir foi extraído de um documento enviado por um usuário. "
        "Seu papel é analisar se esse texto parece ter sido extraído de um documento oficial de identificação pessoal, "
        "como RG, CPF ou CNH. Responda apenas com 'sim' se parecer válido ou 'não' se não for possível identificar."
        f"\n\nTexto extraído:\n{texto_extraido}\n"
    )

    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": "meta-llama/llama-3-8b-instruct",
                "messages": [
                    {"role": "system", "content": "Responda apenas com 'sim' ou 'não'."},
                    {"role": "user", "content": prompt},
                ],
            },
            timeout=30,
        )

        response.raise_for_status()
        resposta = response.json()["choices"][0]["message"]["content"].strip().lower()
        print(f"Resposta da IA: {resposta}")

        if resposta.startswith("sim"):
            return "valido"
        elif resposta.startswith("não") or resposta.startswith("nao"):
            return "invalido"
        else:
            return "indefinido"
