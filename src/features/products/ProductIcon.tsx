import { GraduationCap, Building2, Package, ChartNoAxesCombined } from 'lucide-react';
import type { ProductIconName } from '../../data/products';
const icons = { GraduationCap, Building2, Package, ChartNoAxesCombined };
export default function ProductIcon({ name, size = 25 }: { name: ProductIconName; size?: number }) {
  const Icon = icons[name];
  return <Icon size={size} />;
}
