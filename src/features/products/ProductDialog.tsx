import { useEffect, useRef } from 'react';
import { X, Check, ArrowUpRight } from 'lucide-react';
import type { Product } from '../../data/products';
import ProductIcon from './ProductIcon';
export default function ProductDialog({
  product,
  onClose,
  onRequestDemo,
}: {
  product: Product;
  onClose: () => void;
  onRequestDemo: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => element?.close();
  }, []);
  return (
    <dialog
      ref={dialog}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="product-title"
    >
      {product && (
        <div className="dialog-body">
          <button className="dialog-close" aria-label="Cerrar detalle" onClick={() => onClose()}>
            <X />
          </button>
          <span className={'dialog-icon ' + product.color}>
            <ProductIcon name={product.icon} size={32} />
          </span>
          <span className="eyebrow">{product.label}</span>
          <h2 id="product-title">{product.name}</h2>
          <h3>{product.title}</h3>
          <p>{product.detail}</p>
          <ul>
            {product.features.map((f) => (
              <li key={f}>
                <Check size={17} />
                {f}
              </li>
            ))}
          </ul>
          <button className="button dark" onClick={() => onRequestDemo()}>
            Solicitar demostración <ArrowUpRight size={18} />
          </button>
        </div>
      )}
    </dialog>
  );
}
