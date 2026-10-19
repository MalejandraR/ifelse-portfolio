# ifelse — Portafolio personal

Sitio web personal para presentar proyectos de desarrollo de software y aseguramiento de calidad (QA). Una sola página, estática, con estética dark tech: fondo grafito, verde lima y tipografía monoespaciada.

## Qué es

- Landing de una sola página con secciones: **Inicio**, **Proyectos**, **Sobre mí** y **Contacto**.
- Tres tarjetas de proyectos con estados honestos (`Planeado`, `En desarrollo`).
- Sin backend, sin base de datos y sin CMS: todo el contenido vive en un archivo de configuración.

## Tecnologías

- [Astro](https://astro.build) 5.x — salida estática, sin adaptador.
- HTML + CSS puro (variables en `:root`), sin frameworks de UI ni CSS frameworks.
- JavaScript vanilla solo para el menú móvil accesible.
- TypeScript para el archivo de datos (`src/data/site.ts`).
- GitHub Actions para integración continua.

## Requisitos

- Node.js 24 o superior (LTS).
- npm 11 o superior.

## Comandos

```bash
npm install        # instala dependencias (genera package-lock.json)
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve dist/ en local para revisar el build
```

## Configuración

Todo el contenido configurable está en `src/data/site.ts`. Campos a editar:

| Campo | Qué controla |
| --- | --- |
| `site.displayName` | Nombre visible en el footer. |
| `github` | URL real del perfil de GitHub. Vacío = el enlace no se muestra. |
| `linkedin` | URL real del perfil de LinkedIn. Vacío = el enlace no se muestra. |
| `email` | Correo profesional. Vacío = el enlace `mailto:` no se muestra. |
| `projects[].status` | Estado real de cada proyecto: `Planeado`, `En desarrollo` o `Completado`. |
| `projects[].repoUrl` | URL real del repositorio. `null` = la tarjeta muestra solo el estado, sin enlace roto. |
| `projects[].stack` | Tecnologías listadas en cada tarjeta. |
| `site.about` | Texto de la sección Sobre mí. |

Regla importante: los enlaces sociales solo se renderizan si el valor es una URL válida. Nunca se emiten `href="#"` ni URLs ficticias.

## Despliegue (GitHub Pages)

Plataforma elegida para el MVP: **GitHub Pages**. Hay dos workflows:

- `.github/workflows/ci.yml` — en cada push y pull request ejecuta `npm ci` + `npm run build` y valida que el sitio compile.
- `.github/workflows/deploy.yml` — en cada push a `main` compila y **publica** el sitio en GitHub Pages.

Pasos:

1. Sube el proyecto a un repositorio de GitHub (rama `main`).
2. En el repositorio: **Settings → Pages → Source → GitHub Actions**.
3. Espera a que termine el workflow **Deploy to GitHub Pages** (pestaña *Actions*). Cuando termina, la URL pública aparece en **Settings → Pages**.

### Si el repositorio es una página de proyecto

Si la URL final **no** es `https://<usuario>.github.io` (por ejemplo, `https://<usuario>.github.io/<nombre-repo>`), debes indicar la ruta base en `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://<usuario>.github.io',
  base: '/<nombre-del-repositorio>',
  output: 'static',
});
```

- `site`: URL completa del sitio (sin barra final).
- `base`: ruta del repositorio, siempre con barra inicial y final.
- Si el repositorio se llama `<usuario>.github.io`, no hace falta `base`.

No reemplaces estos valores por una URL inventada: usa la URL real que muestra GitHub Pages.

### Dominio propio (opcional)

Si comprás un dominio, agregalo en **Settings → Pages → Custom domain** y volvé a definir `site` en `astro.config.mjs` con esa URL (sin `base` si el dominio apunta a la raíz).

## Estructura de carpetas

```text
.
├── .github/workflows/ci.yml    # CI: npm ci + npm run build (push y PR)
├── .github/workflows/deploy.yml # Publica dist/ en GitHub Pages (push a main)
├── public/
│   └── favicon.svg            # símbolo de ramificación (logo)
├── src/
│   ├── components/            # Logo, Navbar, Hero, BranchingVisual,
│   │                          # ProjectCard, About, Contact, Footer, SocialLinks
│   ├── data/
│   │   └── site.ts            # TODO el contenido configurable
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML base, SEO, estilos globales
│   ├── pages/
│   │   └── index.astro        # compone las secciones (inicio, proyectos, sobre-mi, contacto)
│   └── styles/
│       └── global.css         # tokens de diseño y estilos
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Pendientes (antes de publicar)

Valores a personalizar según la especificación (§18):

- [ ] Nombre visible (`site.displayName`).
- [ ] URL del perfil GitHub.
- [ ] URL del perfil LinkedIn.
- [ ] Correo profesional, si deseas mostrarlo.
- [ ] Estado real de cada proyecto.
- [ ] URL del repositorio de cada proyecto (`repoUrl`).
- [ ] URL del sitio desplegado (`site` y, si aplica, `base` en `astro.config.mjs`).
