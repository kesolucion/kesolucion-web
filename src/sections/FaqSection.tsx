import { ArrowUpRight, Plus } from 'lucide-react';
import { faqs } from '../data/content';
export default function FaqSection() {
  return (
    <section id="preguntas" className="faq section">
      <div className="container faq-grid">
        <div>
          <span className="eyebrow">03 / ANTES DE DAR EL PASO</span>
          <h2>
            Buenas preguntas.
            <br />
            <span>Respuestas claras.</span>
          </h2>
          <p>
            Si tienes una pregunta más específica,
            <br />
            <a href="#contacto">
              conversemos sobre tu caso <ArrowUpRight size={15} />
            </a>
            .
          </p>
        </div>
        <div>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <Plus size={19} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
