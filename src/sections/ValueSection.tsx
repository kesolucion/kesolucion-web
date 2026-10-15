import { ArrowUpRight } from 'lucide-react';
import { values } from '../data/content';
export default function ValueSection() {
  return (
    <section className="value section">
      <div className="container value-grid">
        <div>
          <span className="eyebrow">TECNOLOGÍA QUE TIENE SENTIDO</span>
          <h2>
            El software importa.
            <br />
            <span>Entenderte, más.</span>
          </h2>
          <p>
            Elegir un sistema empieza por entender tu trabajo. Por eso hablamos de tus procesos, tus
            dificultades y lo que necesitas mejorar.
          </p>
          <a href="#contacto" className="text-link">
            Cuéntanos qué necesitas <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="value-list">
          {values.map(([n, t, d]) => (
            <div key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
              <ArrowUpRight size={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
