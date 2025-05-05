
import axios from 'axios';
import { Usuario } from '@/interfaces/Usuario';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000',
});

export async function enviarCadastro(dados: Usuario) {
  return api.post('/usuarios/', dados); 
}



export async function enviarDocumento(file: File) {
  const formData = new FormData();
  formData.append('documento', file);

  return api.post('/upload/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}


export async function analisarPerfil(texto: string) {
  return api.post('/analyze-profile', { texto });
}
