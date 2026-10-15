import { ArrowRight } from 'lucide-react';
import { steps } from '../data/content';
export default function ProcessSection() {
  return (
    <section className="process section" id="proceso">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / ASÍ EMPEZAMOS</span>
            <h2>
              De “necesito mejorar”
              <br />a “así lo resolvemos”.
            </h2>
          </div>
          <p>
            Sin perderte entre términos técnicos.
            <br />
            Con claridad en cada paso.
          </p>
        </div>
        <div className="steps">
          {steps.map(([n, t, d]) => (
            <article key={n}>
              <span>
                {n}
                <ArrowRight size={20} />
              </span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
