import { Mail, ArrowUpRight } from 'lucide-react';
import { site } from '../data/content';
import DemoRequestForm from '../features/contact/DemoRequestForm';
export default function ContactSection({
  interest,
  onInterestChange,
}: {
  interest: string;
  onInterestChange: (interest: string) => void;
}) {
  return (
    <section className="contact section" id="contacto">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">
            <span className="live-dot" /> EL SIGUIENTE PASO ES UNA CONVERSACIÓN
          </span>
          <h2>
            Tu próximo
            <br />
            gran cambio
            <br />
            <span>empieza aquí.</span>
          </h2>
          <p>
            Cuéntanos qué necesitas. Exploremos juntos
            <br className="desktop-break" /> una forma más simple de trabajar.
          </p>
          <a className="email-link" href={'mailto:' + site.email}>
            <Mail size={18} />
            {site.email}
            <ArrowUpRight size={18} />
          </a>
          <div className="contact-note">
            <span>¿Ya sabes qué sistema te interesa?</span>
            <p>Indícalo y enfoquemos la demostración en lo que importa para tu organización.</p>
          </div>
        </div>
        <DemoRequestForm interest={interest} onInterestChange={onInterestChange} />
      </div>
    </section>
  );
}
