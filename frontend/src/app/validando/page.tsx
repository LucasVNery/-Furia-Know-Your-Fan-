'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ValidandoPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulação de tempo de análise IA
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h2>Estamos validando seus dados...</h2>
      <p>Isso pode levar alguns segundos. Por favor, aguarde.</p>
    </section>
  );
}
