'use client'

import { useState } from 'react';

export default function UploadDocumentoPage() {
  const [file, setFile] = useState<File | null>(null);
  const [textoExtraido, setTextoExtraido] = useState<string>('');
  const [validacao, setValidacao] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  const handleUpload = async () => {
    if (!file) return alert('Selecione um arquivo primeiro');

    const formData = new FormData();
    formData.append('documento', file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || data.status === 'falha') {
        setErro(data.mensagem || 'Erro ao processar o documento');
        setTextoExtraido('');
        setValidacao('');
        setMensagem('');
        return;
      }

      setTextoExtraido(data.textoExtraido || '');

      switch (data.validacao) {
        case 'valido':
          setMensagem('✅ Documento de identificação válido.');
          break;
        case 'invalido':
          setMensagem('❌ Documento não reconhecido como identificação.');
          break;
        default:
          setMensagem('⚠️ Não foi possível determinar se é um documento válido.');
      }

      setErro('');
    } catch (err) {
      console.error(err);
      setErro('Erro ao enviar o arquivo.');
      setTextoExtraido('');
      setMensagem('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: 'auto' }}>
      <h2>Upload de Documento</h2>
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload} style={{ marginTop: '1rem' }}>
        Enviar para OCR
      </button>

      {erro && (
        <div style={{ marginTop: '2rem', color: 'red' }}>
          <strong>Erro:</strong> {erro}
        </div>
      )}

      {mensagem && (
        <div style={{ marginTop: '2rem', fontWeight: 'bold' }}>
          {mensagem}
        </div>
      )}

      {textoExtraido && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Texto extraído:</h3>
          <pre>{textoExtraido}</pre>
        </div>
      )}
    </div>
  );
}
