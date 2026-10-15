import { useState } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import {
  products,
  productFilters,
  filterProducts,
  type Product,
  type ProductFilter,
} from '../../data/products';
import { site } from '../../data/content';
import ProductCard from './ProductCard';
import ProductDialog from './ProductDialog';
export default function ProductsSection({
  onRequestDemo,
}: {
  onRequestDemo: (interest: string) => void;
}) {
  const [filter, setFilter] = useState<ProductFilter>('Todas');
  const [selected, setSelected] = useState<Product | null>(null);
  const visibleProducts = filterProducts(products, filter);
  return (
    <>
      <section className="solutions section" id="soluciones">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / ENCUENTRA TU SOLUCIÓN</span>
              <h2>
                Tu próximo paso.
                <br />
                <span>Mucho más simple.</span>
              </h2>
            </div>
            <p>
              Cada organización tiene su propio ritmo.
              <br />
              Explora los sistemas y descubre cuál
              <br className="desktop-break" /> encaja con la tuya.
            </p>
          </div>
          <div className="filter-row">
            <div className="filters" role="group" aria-label="Filtrar soluciones">
              {productFilters.map((f) => (
                <button
                  key={f}
                  className={filter === f ? 'active' : ''}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  {f === 'Todas' && <span>{String(products.length).padStart(2, '0')}</span>}
                </button>
              ))}
            </div>
            <span className="catalog-label" aria-live="polite">
              {visibleProducts.length} soluciones para explorar
            </span>
          </div>
          <div className="product-grid">
            {visibleProducts.map((p) => (
              <ProductCard key={p.id} product={p} onExplore={setSelected} />
            ))}
          </div>
          <div className="custom-banner">
            <span className="custom-icon">
              <Sparkles />
            </span>
            <div>
              <h3>¿Tu reto necesita algo diferente?</h3>
              <p>
                Conversemos sobre desarrollo a medida o una prueba de concepto de IA para tus
                documentos.
              </p>
            </div>
            <button onClick={() => onRequestDemo(site.customInterest)} className="text-link">
              Exploremos tu idea <ArrowUpRight size={19} />
            </button>
          </div>
        </div>
      </section>
      {selected && (
        <ProductDialog
          product={selected}
          onClose={() => setSelected(null)}
          onRequestDemo={() => {
            setSelected(null);
            onRequestDemo(selected.name);
          }}
        />
      )}
    </>
  );
}
