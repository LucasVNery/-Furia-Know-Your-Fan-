'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Usuario } from '@/interfaces/Usuario';
import { enviarCadastro } from '@/services/api';

export default function CadastroPage() {
  const { register, handleSubmit, reset } = useForm<Usuario>();
  const router = useRouter();

  const onSubmit = async (data: Usuario) => {
    try {
      await enviarCadastro(data);
      reset(); 
      router.push('/upload-documento');
    } catch (error) {
      console.error('Erro ao enviar cadastro:', error);
      router.push('/erro');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 600, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <h2>Cadastro</h2>

      <input {...register('nome')} placeholder="Nome completo" required />
      <input {...register('cpf')} placeholder="CPF" required />
      <input type="date" {...register('dataNascimento')} required />
      <input {...register('endereco')} placeholder="Endereço" required />

      <label>Interesses:</label>
      <select multiple {...register('interesses')} style={{ height: '6rem' }}>
        <option value="CSGO">CS:GO</option>
        <option value="Valorant">Valorant</option>
        <option value="FURIA">FURIA</option>
        <option value="CBLOL">CBLOL</option>
        <option value="LoL">League of Legends</option>
      </select>

      <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: 6 }}>
        Continuar
      </button>
    </form>
  );
}
