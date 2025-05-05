
'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <section style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h2>Bem-vindo ao Know Your Fan</h2>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
        Descubra seu perfil como fã de e-sports, conecte suas redes sociais, envie seus documentos e faça parte da comunidade mais dedicada do cenário!
      </p>

      <button
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onClick={() => router.push('/cadastro')}
      >
        Comece agora
      </button>
    </section>
  );
}
