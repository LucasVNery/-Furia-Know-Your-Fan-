'use client';

export default function DashboardPage() {
  return (
    <section style={{ maxWidth: 800, margin: '2rem auto' }}>
      <h2>Seu Perfil de Fã</h2>
      <p>Parabéns! Seus dados foram validados com sucesso.</p>

      <div style={{ marginTop: '2rem' }}>
        <h4>Informações:</h4>
        <ul>
          <li>Nome: Vinicius</li>
          <li>CPF: ***.456.***-00</li>
          <li>Status Documento: ✅ Validado</li>
          <li>Status Perfil: ✅ Relevante no e-sports</li>
        </ul>
      </div>
    </section>
  );
}
