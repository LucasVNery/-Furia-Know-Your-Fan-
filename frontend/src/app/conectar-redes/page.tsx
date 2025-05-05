'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ConectarRedesPage() {
  const router = useRouter();

  const handleContinue = () => {

    router.push('/validando');
  };

  return (
    <section style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h2>Conectar Redes Sociais</h2>
      <p>Conecte suas redes sociais para validar seu perfil de fã.</p>
      <button onClick={() => signIn('twitter')}>Conectar Twitter</button>
      <br /><br />
      <button onClick={handleContinue}>Pular e Continuar</button>
    </section>
  );
}
