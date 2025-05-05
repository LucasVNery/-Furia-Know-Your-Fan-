
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Início' },
  { href: '/cadastro', label: 'Cadastro' },
  { href: '/upload-documento', label: 'Documento' },
  { href: '/conectar-redes', label: 'Redes Sociais' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{ padding: '1rem', backgroundColor: '#111', color: '#fff' }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5rem' }}>Know Your Fan</h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                color: pathname === href ? '#00F2A6' : '#fff',
                fontWeight: pathname === href ? 'bold' : 'normal',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
