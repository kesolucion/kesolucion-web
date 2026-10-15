export type ProductCategory = 'Educación' | 'Negocios';
export type ProductFilter = 'Todas' | ProductCategory;
export type ProductIconName = 'GraduationCap' | 'Building2' | 'Package' | 'ChartNoAxesCombined';
export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  label: string;
  title: string;
  description: string;
  features: readonly string[];
  icon: ProductIconName;
  color: 'green' | 'lavender' | 'peach' | 'blue';
  audience: string;
  detail: string;
};
export const products: readonly Product[] = [
  {
    id: 'sisac',
    name: 'SISAC',
    category: 'Educación',
    label: 'GESTIÓN ACADÉMICA',
    title: 'Más tiempo para educar.',
    description:
      'Conecta la información de tus estudiantes, matrículas y procesos académicos en un mismo lugar.',
    features: [
      'Gestión de estudiantes y niveles académicos',
      'Solicitudes de matrícula',
      'Administración de usuarios',
    ],
    icon: 'GraduationCap',
    color: 'green',
    audience: 'Centros educativos',
    detail:
      'Organiza los procesos de tu centro educativo con una aplicación web que relaciona estudiantes, matrícula y administración. Revisamos contigo los módulos que necesita tu institución.',
  },
  {
    id: 'ucajup',
    name: 'UCAJUP',
    category: 'Educación',
    label: 'GESTIÓN UNIVERSITARIA',
    title: 'Tu universidad, conectada.',
    description:
      'Relaciona estudiantes, docentes, carreras y planificación para una operación académica más organizada.',
    features: [
      'Estudiantes, docentes y carreras',
      'Grupos, asignaturas y períodos',
      'Planificación y horarios',
    ],
    icon: 'Building2',
    color: 'lavender',
    audience: 'Instituciones universitarias',
    detail:
      'Una solución organizada por módulos para conectar la información universitaria y su planificación académica. Consulta una demostración y evaluemos su adaptación a tu institución.',
  },
  {
    id: 'inventario',
    name: 'Inventario',
    category: 'Negocios',
    label: 'GESTIÓN DE PRODUCTOS',
    title: 'El orden empieza aquí.',
    description:
      'Centraliza tu catálogo de productos y simplifica la consulta de información de tu inventario.',
    features: ['Listado de productos', 'Consulta del catálogo', 'Interfaz web de gestión'],
    icon: 'Package',
    color: 'peach',
    audience: 'Negocios y comercios',
    detail:
      'El módulo de inventario de Kesolucion reúne la gestión de productos en una interfaz web. En una demostración revisamos las funciones actuales y las necesidades de tu negocio.',
  },
  {
    id: 'reportes',
    name: 'KE Report',
    category: 'Negocios',
    label: 'DISEÑO DE REPORTES',
    title: 'Dale forma a tu información.',
    description:
      'Diseña y previsualiza reportes para presentar la información que tu equipo necesita consultar.',
    features: ['Diseñador de reportes', 'Edición de bloques', 'Vista previa de reportes'],
    icon: 'ChartNoAxesCombined',
    color: 'blue',
    audience: 'Equipos administrativos',
    detail:
      'Un proyecto con diseñador, edición de propiedades y vista previa de reportes. Revisamos tus fuentes de información y el alcance de la integración antes de preparar una propuesta.',
  },
];
export const productFilters: readonly ProductFilter[] = ['Todas', 'Educación', 'Negocios'];
export function filterProducts(
  catalog: readonly Product[],
  filter: ProductFilter,
): readonly Product[] {
  return catalog.filter((product) => filter === 'Todas' || product.category === filter);
}
