import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { site } from '../../data/content';
import { products } from '../../data/products';
import { buildDemoMailto } from '../../lib/demoRequest';
export default function DemoRequestForm({
  interest,
  onInterestChange,
}: {
  interest: string;
  onInterestChange: (interest: string) => void;
}) {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = (field: string) => String(data.get(field) ?? '').trim();
    window.location.href = buildDemoMailto(site.email, {
      name: text('nombre'),
      organization: text('empresa'),
      email: text('correo'),
      interest,
      message: text('mensaje'),
    });
    setPrepared(true);
  }
  return (
    <form onSubmit={submit} onChange={() => setPrepared(false)}>
      <h3>Hablemos de tu organización.</h3>
      <p>Un poco de contexto para empezar con buen pie.</p>
      <div className="form-row">
        <label>
          Tu nombre
          <input
            name="nombre"
            placeholder="¿Cómo te llamas?"
            autoComplete="name"
            required
            maxLength={100}
          />
        </label>
        <label>
          Organización
          <input
            name="empresa"
            placeholder="Empresa o institución"
            autoComplete="organization"
            required
            maxLength={150}
          />
        </label>
      </div>
      <label>
        Correo electrónico
        <input
          type="email"
          name="correo"
          placeholder="tu@organizacion.com"
          autoComplete="email"
          required
          maxLength={150}
        />
      </label>
      <label>
        ¿Qué solución te interesa?
        <select value={interest} onChange={(e) => onInterestChange(e.target.value)}>
          {[site.defaultInterest, ...products.map((p) => p.name), site.customInterest].map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </label>
      <label>
        ¿Qué te gustaría mejorar?
        <textarea
          name="mensaje"
          placeholder="Cuéntanos brevemente tu necesidad…"
          rows={3}
          required
          maxLength={3000}
        />
      </label>
      <button className="button lime" type="submit">
        Preparar solicitud de demo <ArrowUpRight size={20} />
      </button>
      <p className="form-note">
        Se abrirá tu aplicación de correo con la solicitud lista para revisar y enviar. No
        almacenamos estos datos en el sitio.
      </p>
      {prepared && (
        <p className="form-feedback" role="status">
          Solicitud preparada. Envíala desde tu aplicación de correo. Si no se abrió, escríbenos
          directamente a {site.email}.
        </p>
      )}
    </form>
  );
}
