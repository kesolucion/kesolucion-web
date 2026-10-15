import { useState, useCallback } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Brand from '../Brand';
import { navigation } from '../../data/content';
import { useEscapeKey } from '../../hooks/useEscapeKey';
export default function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const dismiss = useCallback(() => setMenu(false), []);
  useEscapeKey(menu, dismiss);
  return (
    <header>
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-button"
          aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menu}
          aria-controls="navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav id="navigation" className={menu ? 'open' : ''} aria-label="Navegación principal">
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
          <a className="button small dark" href="#contacto" onClick={() => setMenu(false)}>
            Hablemos de tu proyecto <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
