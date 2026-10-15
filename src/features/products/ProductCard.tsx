import { Check, ArrowUpRight } from 'lucide-react';
import type { Product } from '../../data/products';
import ProductIcon from './ProductIcon';
export default function ProductCard({
  product: p,
  onExplore,
}: {
  product: Product;
  onExplore: (product: Product) => void;
}) {
  return (
    <article className={'product ' + p.color} key={p.id}>
      <div className="product-top">
        <span className="product-icon">
          <ProductIcon name={p.icon} />
        </span>
        <span>{p.audience}</span>
      </div>
      <span className="product-label">{p.label}</span>
      <h3>{p.name}</h3>
      <h4>{p.title}</h4>
      <p>{p.description}</p>
      <div className="feature-tags">
        {p.features.slice(0, 2).map((f) => (
          <span key={f}>
            <Check size={12} />
            {f}
          </span>
        ))}
      </div>
      <button className="product-link" onClick={() => onExplore(p)}>
        Conocer la solución{' '}
        <span>
          <ArrowUpRight size={21} />
        </span>
      </button>
    </article>
  );
}
