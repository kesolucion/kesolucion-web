import {
  ArrowUpRight,
  ArrowRight,
  Check,
  GraduationCap,
  Building2,
  Package,
  ChartNoAxesCombined,
} from 'lucide-react';
import DashboardPreview from '../components/illustrations/DashboardPreview';
export default function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" /> TECNOLOGÍA CON UN PROPÓSITO: EL TUYO
          </div>
          <h1>
            Menos
            <br />
            complicaciones.
            <br />
            <span>Más posibilidades.</span>
          </h1>
          <p>
            Tu organización tiene mucho por hacer.
            <br className="desktop-break" /> Dale un sistema que le ayude a avanzar.
          </p>
          <p className="hero-description">
            Software para conectar tus procesos, ordenar tu información y trabajar con más claridad.
          </p>
          <div className="hero-actions">
            <a href="#soluciones" className="button dark">
              Encuentra tu solución <ArrowUpRight size={19} />
            </a>
            <a href="#contacto" className="text-link">
              Solicitar una demo <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-footnote">
            <span>
              <Check size={14} /> Soluciones propias
            </span>
            <span>
              <Check size={14} /> Trato directo
            </span>
            <span>
              <Check size={14} /> Enfoque en tu operación
            </span>
          </div>
        </div>
        <DashboardPreview />
      </div>
      <div className="container sector-strip">
        <span>
          UNA SOLUCIÓN PARA
          <br />
          <strong>cada forma de avanzar.</strong>
        </span>
        <div>
          <GraduationCap /> Educación
        </div>
        <div>
          <Building2 /> Universidades
        </div>
        <div>
          <Package /> Negocios
        </div>
        <div>
          <ChartNoAxesCombined /> Administración
        </div>
      </div>
    </section>
  );
}
