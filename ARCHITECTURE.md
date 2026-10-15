# Arquitectura de Kesolucion

React y TypeScript con Vite. La organización sigue el portafolio: componentes por responsabilidad, estado cerca de quien lo usa y datos independientes de la interfaz.

```text
main → app/App → pages/HomePage
                    ├─ components/layout
                    ├─ sections
                    ├─ features/products
                    └─ features/contact

secciones y funcionalidades → data + components + hooks + lib
data y lib/demoRequest → sin dependencias de React
```

## Responsabilidades

- `main.tsx`: arranque de React, fuentes y estilos globales.
- `app/App.tsx`: composición raíz; lugar para futuros proveedores globales.
- `pages/HomePage.tsx`: orden de las secciones y coordinación de la solución seleccionada para la solicitud de demo.
- `sections/`: presentación, propuesta de valor, proceso, preguntas y contacto. Los textos propios de una sección se editan junto a su estructura.
- `features/products/`: catálogo, filtros, tarjeta, diálogo y asociación entre iconos y productos. El filtro y el producto abierto pertenecen a esta funcionalidad.
- `features/contact/`: formulario y estado de solicitud preparada. Usa la función pura `buildDemoMailto`; aquí puede reemplazarse el envío por una futura integración sin modificar el catálogo.
- `components/layout/`: cabecera y pie. El estado del menú vive en la cabecera.
- `components/Brand.tsx`: marca compartida.
- `components/illustrations/`: maqueta visual independiente del contenido comercial.
- `data/products.ts`: contrato `Product`, catálogo, categorías y función de filtrado. Los iconos son identificadores; los datos no importan React ni Lucide.
- `data/content.ts`: configuración de contacto, navegación, preguntas y contenido repetido.
- `hooks/useEscapeKey.ts`: suscripción al teclado con limpieza al desmontar y cambiar dependencias.
- `lib/`: construcción del correo y navegación hacia contacto. El acceso al navegador queda explícito en `navigation.ts`.
- `styles/`: CSS por responsabilidad. `index.css` define el orden de carga y `responsive.css` aplica adaptaciones y movimiento reducido al final.

No hay API ni almacenamiento de datos; no se añaden servicios, repositorios, enrutador o estado global hasta que una necesidad real los requiera.

## Cambios habituales

| Cambio                                 | Archivo                                                               |
| -------------------------------------- | --------------------------------------------------------------------- |
| Agregar o editar un sistema            | `src/data/products.ts`                                                |
| Cambiar correo o dominio de contacto   | `src/data/content.ts`                                                 |
| Cambiar preguntas, valores o pasos     | `src/data/content.ts`                                                 |
| Reordenar secciones                    | `src/pages/HomePage.tsx`                                              |
| Editar el texto principal              | `src/sections/HeroSection.tsx`                                        |
| Cambiar campos o envío de la solicitud | `src/features/contact/DemoRequestForm.tsx` y `src/lib/demoRequest.ts` |
| Ajustar una tarjeta o su diálogo       | `src/features/products/`                                              |
| Paleta de colores                      | `src/styles/theme.css`                                                |
| Tipografías y botones                  | `src/styles/base.css` y estilos de cada sección                       |
| Metadatos y dominio SEO                | `index.html`, `public/robots.txt` y `public/sitemap.xml`              |

El selector del formulario y el contador del catálogo se generan desde los productos. Un nuevo producto de las categorías existentes no requiere cambiar componentes. Para crear una categoría o variante visual se amplían sus tipos, filtros y estilos correspondientes.

## Accesibilidad y comportamiento

HTML semántico, enlace para saltar al contenido, foco visible, filtros con `aria-pressed`, campos etiquetados y feedback con `role=status`. El menú responde a Escape y limpia su listener. El diálogo usa `showModal()` y se cierra al desmontarse; esto conserva el manejo nativo del foco, el fondo inerte y Escape, también bajo Strict Mode. La navegación respeta movimiento reducido.

La solicitud abre la aplicación de correo; no afirma que el mensaje se haya enviado. El sitio no guarda los campos ni incorpora analítica.

## Verificación

```sh
npm test
npm run typecheck
npm run format:check
npm run build
```

Las pruebas verifican la selección por sector, la incorporación de nuevos productos y la integridad del correo frente a acentos, saltos y caracteres que podrían alterar los parámetros. TypeScript comprueba contratos e imports sin uso. El formato se aplica con Prettier. Estas verificaciones no sustituyen la revisión visual en navegador.
