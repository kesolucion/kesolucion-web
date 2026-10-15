import { ArrowUpRight } from 'lucide-react';
import Brand from '../Brand';
import { site } from '../../data/content';
export default function SiteFooter() {
  return (
    <footer>
      <div className="container footer-top">
        <Brand />
        <p>Ideas claras. Sistemas que conectan.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Kesolucion. Todos los derechos reservados.</span>
        <span>Hecho para dar el siguiente paso.</span>
        <a href={site.url}>
          kesolucion.com <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}
