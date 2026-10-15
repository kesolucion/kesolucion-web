# Kesolucion · Sitio comercial

Sitio de presentación y captación de consultas para **kesolucion.com**, independiente de las aplicaciones de gestión. React, TypeScript y Vite; salida estática sin backend.

## Ejecutar

Node.js 22.12 o posterior. `npm ci`, `npm run dev`. Para verificar tipos: `npm run typecheck`. Producción: `npm run build`. Subir `dist/` a hosting estático.

## Contenido

- `src/app/` y `src/pages/`: composición de la aplicación y orden de las secciones.
- `src/data/`: catálogo tipado, contacto, navegación y contenido repetido.
- `src/sections/`: secciones de presentación y contacto.
- `src/features/products/`: filtros, tarjetas y diálogo de producto.
- `src/features/contact/`: formulario de solicitud de demo.
- `src/components/`, `src/hooks/` y `src/lib/`: piezas compartidas y comportamiento aislado.
- `src/styles/`: estilos separados por responsabilidad y adaptaciones responsive.
- `public/`: identidad, robots y sitemap.
- `index.html`: metadatos, canonical y datos estructurados.

Ver [ARCHITECTURE.md](ARCHITECTURE.md) para el flujo de dependencias y una guía de qué archivo modificar en cada caso. `npm test` verifica el filtrado del catálogo y la preparación del correo. `npm run format:check` comprueba el formato; `npm run format` lo aplica.

Contacto confirmado: **fran_martine@hotmail.com**. La solicitud prepara un `mailto:`; el visitante revisa y envía desde su aplicación de correo. No hay almacenamiento, envío automático, CRM, analítica ni cookies de seguimiento. Un servidor de formularios y WhatsApp requieren configuración posterior.

Las capacidades proceden de los repositorios locales SPASISAC, SPA-UCAJUP, Kesolucion_SPA, ke-report y AgenteConversacional_Public y del contenido revisado del portafolio. La IA se describe como prototipo; no se prometen funciones de producción. Confirmar condiciones comerciales, soporte y disponibilidad de cada producto antes del lanzamiento público. La maqueta de SISAC contiene datos ficticios y está rotulada como vista conceptual. No se copió código ni información de clientes.

## Identidad

Ver `BRAND.md`. Fuentes locales Manrope y DM Sans incluidas mediante Fontsource y sus licencias en las dependencias. Iconos Lucide, licencia ISC. Símbolo de marca dibujado para esta propuesta.

## Publicación

### GitHub Pages

El workflow `.github/workflows/pages.yml` compila y publica automáticamente cada push a `main`. En el repositorio de GitHub, elegir **Settings → Pages → Source → GitHub Actions** antes del primer despliegue.

El despliegue obtiene la ruta y URL desde Pages: adapta los recursos, canonical, Open Graph, robots y sitemap sin cambiar la configuración de desarrollo ni la publicación de Sites. También funciona con un dominio personalizado configurado en Pages. El dominio y su DNS se configuran por separado.

Para verificar localmente la salida para un repositorio llamado `kesolucion-web`:

```powershell
npm test
npm run build -- --base /kesolucion-web/
node scripts/pages-metadata.mjs https://kesolucion.github.io/kesolucion-web
```

Compatible con Cloudflare Pages, Netlify y cualquier alojamiento estático. Comando: `npm run build`. Directorio: `dist`. Configurar el dominio y HTTPS en el proveedor elegido. El dominio en metadatos no cambia el DNS. La vista privada de Sites usa `.openai/hosting.json`.

El repositorio Git local es independiente y está en `kesolucion-web/`. El repositorio público es https://github.com/kesolucion/kesolucion-web y el sitio se publica en https://kesolucion.github.io/kesolucion-web/. No incluir `node_modules` ni `dist`. El remoto de sincronización de Sites es distinto del repositorio de GitHub.
