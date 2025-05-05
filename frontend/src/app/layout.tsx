
import '../styles/globals.css'; 
import { ReactNode } from 'react';
import Header from '../components/Header';

export const metadata = {
  title: 'Know Your Fan',
  description: 'Descubra seu nível de fã de e-sports!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main style={{ maxWidth: '900px', margin: '0 auto', padding: '1rem' }}>
          {children}
        </main>
      </body>
    </html> 
  );
}
