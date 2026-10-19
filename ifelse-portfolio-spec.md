# ifelse — Guía de construcción del portafolio personal

> Documento de contexto y especificación para entregarle a una IA de programación (Cursor, Claude Code, Copilot, ChatGPT u otra) y construir rápidamente el sitio web de portafolio **ifelse**.

## 1. Objetivo

Construir un sitio web personal, moderno, responsive y desplegable para presentar mis proyectos de desarrollo de software y aseguramiento de calidad (QA).

El sitio debe seguir la referencia visual adjunta: tema oscuro, estética tecnológica minimalista, tipografía monoespaciada, acentos verde lima y un símbolo de conexiones/ramificación que represente decisiones, lógica y caminos alternativos.

**Prioridad principal:** tener pronto una primera versión funcional, bonita y fácil de mantener. Evitar sobreingeniería. No construir backend propio en esta primera versión.

## 2. Identidad visual

- **Nombre de marca:** `ifelse` (todo en minúsculas y sin guion).
- **Concepto:** construir, probar y mejorar soluciones de software.
- **Tagline:** `BUILD / TEST / IMPROVE`.
- **Titular principal:** `Código, pruebas y buenas decisiones.`
- **Texto de presentación:** `Desarrollo software y aseguro su calidad a través de pruebas automatizadas. Me apasiona crear soluciones funcionales, eficientes y con propósito.`
- **Estilo:** dark tech, minimalista, profesional, con pequeños detalles inspirados en código.
- **Color de fondo:** negro grafito, aproximadamente `#0B0D10` o `#101114`.
- **Color de acento:** verde lima, aproximadamente `#C8FF45` o `#D4FF65`.
- **Texto principal:** blanco suave `#F4F5FA`.
- **Texto secundario:** gris azulado claro `#B8C2D8`.
- **Bordes:** gris oscuro `#2A303A`.
- **Tipografía:** una monoespaciada legible para el logo, titulares y detalles de interfaz. Se puede combinar con una sans-serif para textos largos si mejora la legibilidad.
- **Logo:** símbolo de conexiones ramificadas con nodos circulares + palabra `ifelse`. El símbolo debe poder reutilizarse solo como favicon.
- **No usar:** gradientes intensos, exceso de animaciones, colores muy saturados adicionales, grandes ilustraciones de stock ni tarjetas visualmente recargadas.

### Idea del símbolo

Crear un SVG propio, sencillo y ligero, inspirado en un grafo/árbol de decisión: líneas conectadas y nodos circulares. Debe verse bien en pequeño y en verde lima. No copiar logotipos de terceros.

## 3. Referencia de diseño

Usar la imagen adjunta por el usuario como referencia visual principal. La composición contiene:

1. **Navbar** horizontal, con logo a la izquierda.
2. Navegación central: `Inicio`, `Proyectos`, `Sobre mí`, `Contacto`.
3. Accesos a GitHub, LinkedIn y un control de tema (si se implementa correctamente).
4. Hero dividido en dos columnas:
   - Izquierda: saludo, titular principal, breve descripción y dos botones.
   - Derecha: ilustración de conexiones y ramas condicionales `if` / `else`, con acciones como `crear`, `mejorar` y `aprender`.
5. Sección de proyectos destacados con tres tarjetas.
6. Pie o separador con `BUILD / TEST / IMPROVE`.

La captura es una guía visual, no una exigencia de reproducir cada píxel. Mantener el mismo lenguaje visual, pero priorizar legibilidad, responsive y calidad real del código.

## 4. Stack recomendado para construir rápido

Elegir el stack más simple que permita desarrollar y desplegar con rapidez:

- **Astro** para la estructura del sitio.
- **React solo si hace falta** para componentes interactivos; evitarlo si el sitio puede resolverse con Astro y HTML/CSS.
- **CSS** o CSS Modules para los estilos. Mantener variables de diseño en `:root`.
- **JavaScript/TypeScript** solo para interacciones necesarias.
- **Lucide** o SVG propios para iconos.
- **Git + GitHub** para versionado.
- **GitHub Pages, Netlify o Vercel** para despliegue; escoger una opción sencilla compatible con Astro.
- No necesita base de datos ni backend en la primera versión.

Si ya existe un proyecto Astro iniciado, **inspeccionar primero la estructura y continuar sobre él**. No sobrescribir ni recrear archivos sin revisar el estado existente.

## 5. Alcance de la primera versión (MVP)

### Incluido

- Página de inicio completa.
- Navbar con enlaces a secciones.
- Hero con texto y visual condicional.
- Tres tarjetas de proyectos.
- Sección `Sobre mí`.
- Sección `Contacto`.
- Footer con marca y tagline.
- Diseño responsive para móvil, tablet y escritorio.
- Enlaces reales configurables a GitHub y LinkedIn.
- Accesibilidad básica: contraste, foco visible, etiquetas, navegación por teclado y textos alternativos cuando aplique.
- Metadatos básicos para compartir/encontrar el sitio: title, description y favicon.
- README con instrucciones de desarrollo y despliegue.

### No incluido en la primera versión

- Backend propio, base de datos, autenticación o panel de administración.
- CMS.
- Blog completo.
- Animaciones complejas.
- Formulario de contacto que prometa enviar mensajes sin tener un servicio conectado.
- Estadísticas ficticias, testimonios inventados o proyectos que todavía no existan.
- Selector de tema si aumenta el tiempo y no queda bien probado.

## 6. Estructura visual detallada

### 6.1 Navbar

- Logo `ifelse` con icono de conexiones.
- Enlaces: Inicio, Proyectos, Sobre mí, Contacto.
- Iconos de GitHub y LinkedIn.
- El control de tema puede omitirse en el MVP; el tema oscuro es el diseño principal.
- En escritorio, distribución horizontal como en la referencia.
- En móvil, navegación compacta y accesible; no dejar que los elementos se desborden.

### 6.2 Hero

Texto:

- Eyebrow: `HOLA, SOY ALEJA 👋`
- H1: `Código, pruebas y buenas decisiones.`
- Resaltar `decisiones.` en verde lima.
- Descripción: `Desarrollo software y aseguro su calidad a través de pruebas automatizadas. Me apasiona crear soluciones funcionales, eficientes y con propósito.`
- CTA principal: `Ver proyectos →`, desplazándose a la sección de proyectos.
- CTA secundario: `Sobre mí`, desplazándose a la sección correspondiente.

Visual a la derecha:
- Un grafo de conexiones en verde lima.
- Dos ramas etiquetadas `if` y `else`.
- Tarjetas pequeñas con palabras `crear`, `mejorar` y `aprender`.
- Preferir SVG/CSS hecho en el proyecto para que sea nítido, responsive y no dependa de una imagen externa.
- El visual es decorativo; no debe ser la única forma de comunicar información.

### 6.3 Proyectos destacados

Crear tres tarjetas:

**Proyecto 1 — BugTrack**
- Categoría: `Full Stack · Gestión de incidencias`
- Descripción: `Aplicación web para registrar, consultar y dar seguimiento a errores de software. Incluye API, base de datos y pruebas E2E.`
- Tecnologías previstas: React, JavaScript, Node.js, Express, PostgreSQL, Cypress.
- Estado inicial: `En desarrollo` hasta que exista una versión funcional.
- Enlace a repositorio: configurable; si no existe todavía, mostrar una etiqueta de estado en vez de un enlace roto.

**Proyecto 2 — QA Automation Lab**
- Categoría: `Testing · Cypress`
- Descripción: `Suite de pruebas automatizadas para validar la aplicación BugTrack. Incluye casos positivos, negativos y reportes de ejecución.`
- Tecnologías previstas: Cypress, JavaScript, GitHub Actions.
- Estado inicial: `Planeado` o `En desarrollo`, según la situación real.
- Enlace a repositorio: configurable; no inventar URLs.

**Proyecto 3 — QualityGate**
- Categoría: `CI/CD · GitHub Actions`
- Descripción: `Pipeline de integración continua que ejecuta pruebas automáticamente en cada pull request y ayuda a mantener la calidad del código.`
- Tecnologías previstas: GitHub Actions, Cypress, Node.js.
- Estado inicial: `Planeado` o `En desarrollo`, según la situación real.
- Enlace a repositorio: configurable; no inventar URLs.

Cada tarjeta debe tener:
- Icono sencillo.
- Nombre.
- Categoría.
- Descripción breve.
- Etiquetas de tecnologías.
- Enlace solo si hay una URL real configurada.
- Estado honesto: Planeado, En desarrollo o Completado.
- No mostrar iconos de tecnologías que no se estén usando realmente.

### 6.4 Sobre mí

Redactar un texto corto y profesional, natural y en primera persona. Borrador inicial:

`Soy una profesional en transición hacia el desarrollo de software y la automatización de pruebas. Me interesa crear soluciones útiles, entender cómo funcionan y comprobar que respondan correctamente. En este espacio comparto mis proyectos, aprendizajes y experimentos mientras sigo creciendo en tecnología.`

No inventar años de experiencia, títulos técnicos, certificaciones o empleos.

### 6.5 Contacto

- Invitación breve: `¿Tienes una oportunidad o una idea para construir? Hablemos.`
- Enlaces configurables a GitHub, LinkedIn y correo.
- Usar placeholders claramente identificados en configuración durante desarrollo, pero no publicar enlaces ficticios.
- Si no hay backend ni servicio de formularios, no mostrar un formulario que aparente enviar mensajes. Usar enlace `mailto:` cuando exista el correo real.

### 6.6 Footer

- Logo `ifelse`.
- Texto `BUILD / TEST / IMPROVE`.
- Año actual calculado en tiempo de build o actualizado manualmente.
- Enlaces sociales reales.

## 7. Datos configurables

Centralizar el contenido de proyectos y enlaces en un archivo de configuración, por ejemplo:

`src/data/site.ts` o `src/data/site.js`

Debe contener:
- Nombre de marca.
- Nombre visible.
- Descripción.
- URL de GitHub.
- URL de LinkedIn.
- Correo (si se desea publicar).
- Lista de proyectos con nombre, descripción, stack, estado y URL opcional.

No dispersar enlaces y textos repetidos por múltiples componentes.

## 8. Estructura de carpetas sugerida para Astro

Adaptarla a lo que exista; no forzar esta estructura si el proyecto ya está organizado de otra manera.

```text
ifelse-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Logo.astro
│   │   ├── Hero.astro
│   │   ├── BranchingVisual.astro
│   │   ├── ProjectCard.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── site.js
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .gitignore
├── package.json
├── astro.config.mjs
└── README.md
```

## 9. Requisitos funcionales

- Los enlaces del navbar llevan a secciones correctas mediante IDs.
- El botón principal desplaza a Proyectos.
- El botón secundario desplaza a Sobre mí.
- Los enlaces sociales solo se muestran como activos si tienen URL válida.
- Las tarjetas no deben tener enlaces vacíos o `href="#"`.
- El diseño no debe producir scroll horizontal en pantallas pequeñas.
- El contenido debe leerse sin depender de animaciones.
- Si hay animaciones, respetar `prefers-reduced-motion`.
- Los botones y enlaces deben tener foco visible.
- El menú móvil, si se implementa, debe funcionar con teclado y lector de pantalla.
- Los estados de los proyectos deben reflejar la realidad.

## 10. Dirección visual y responsive

### Escritorio
- Navbar superior con borde inferior sutil.
- Hero de dos columnas, aproximadamente 45/55.
- Título grande y con saltos de línea intencionales.
- Visual SVG a la derecha.
- Tres tarjetas de proyectos en una fila si el ancho lo permite.
- Espaciado generoso, bordes finos y esquinas ligeramente redondeadas.

### Tablet
- Mantener la jerarquía visual.
- Reducir tamaños y espacios.
- Permitir que las tarjetas se acomoden en dos columnas.

### Móvil
- Navbar compacta.
- Hero en una columna; texto primero y visual debajo o simplificado.
- Título con tamaño adaptable.
- Tarjetas en una columna.
- Botones con áreas táctiles cómodas.
- Evitar iconos diminutos y textos demasiado pequeños.

### CSS
Usar variables CSS como:

```css
:root {
  color-scheme: dark;
  --color-bg: #0b0d10;
  --color-surface: #101114;
  --color-accent: #d4ff65;
  --color-text: #f4f5fa;
  --color-muted: #b8c2d8;
  --color-border: #2a303a;
}
```

Ajustar los colores tras revisar contraste y legibilidad real.

## 11. Calidad y pruebas

Para llegar rápido a una primera versión, no instalar un framework de testing adicional si no es necesario. Priorizar:

1. Ejecutar `npm run build` y corregir errores.
2. Revisar enlaces internos, enlaces externos y ausencia de URLs vacías.
3. Comprobar el diseño manualmente en móvil, tablet y escritorio.
4. Verificar navegación por teclado y foco visible.
5. Comprobar consola del navegador sin errores.
6. Si el tiempo lo permite, añadir Playwright o Cypress para verificar:
   - La página de inicio carga.
   - Los enlaces de navegación funcionan.
   - Se muestran los tres proyectos.
   - No hay enlaces rotos en elementos activos.
   - El layout móvil no desborda horizontalmente.

## 12. CI/CD mínimo

Añadir un workflow de GitHub Actions que se ejecute en `push` y `pull_request`:
- Checkout del repositorio.
- Configuración de Node.js LTS.
- Instalación reproducible con `npm ci` si hay `package-lock.json`.
- Ejecución de `npm run build`.

El despliegue puede hacerse en GitHub Pages, Netlify o Vercel. Elegir una sola plataforma para el MVP y seguir su configuración oficial actual. No añadir varias plataformas ni secretos innecesarios.

Si se elige GitHub Pages, configurar correctamente la base path si el sitio se publica como un repositorio de proyecto y no como un sitio de usuario.

## 13. SEO y detalles de publicación

- Título: `ifelse — Desarrollo de software y QA`.
- Meta description breve en español.
- Favicon SVG con el icono de conexiones.
- Open Graph básico cuando haya una imagen de portada.
- Enlaces sociales reales.
- Página accesible mediante HTTPS.
- README con comandos, tecnologías, capturas y enlace al sitio desplegado.

## 14. Plan acelerado de ejecución

Objetivo: primera versión publicada en 3–5 días, dependiendo de la disponibilidad.

### Día 1 — Base visual
- Revisar el repositorio existente.
- Crear o ajustar proyecto Astro.
- Configurar layout, variables CSS, tipografía y navbar.
- Implementar logo e icono de conexiones.

### Día 2 — Hero y proyectos
- Implementar hero y visual condicional con SVG.
- Crear tarjetas de proyectos basadas en datos configurables.
- Ajustar espaciados, colores y estados reales de los proyectos.

### Día 3 — Resto del sitio
- Añadir Sobre mí, Contacto y footer.
- Implementar navegación por anclas.
- Hacer el responsive para móvil y tablet.

### Día 4 — Calidad
- Revisar accesibilidad, enlaces, SEO y estados de proyectos.
- Ejecutar build y corregir problemas.
- Añadir workflow de GitHub Actions.

### Día 5 — Publicación
- Desplegar en una plataforma.
- Probar la URL publicada en móvil y escritorio.
- Completar README con capturas y enlace público.

Si ya existe un repositorio funcional, adaptar el plan al estado real y reutilizar lo que sirva.

## 15. Criterios de aceptación

La primera versión está lista cuando:

- [ ] La página de inicio se parece claramente a la referencia visual.
- [ ] El logo `ifelse` y el icono de conexiones se ven bien en navbar y favicon.
- [ ] Las secciones Inicio, Proyectos, Sobre mí y Contacto funcionan.
- [ ] Hay tres tarjetas con contenido y estados honestos.
- [ ] Los enlaces no configurados no parecen funcionales ni llevan a URLs ficticias.
- [ ] El sitio funciona en escritorio, tablet y móvil.
- [ ] No hay errores de build.
- [ ] GitHub Actions ejecuta el build correctamente.
- [ ] Existe un README con instrucciones.
- [ ] El sitio está desplegado y la URL funciona.

## 16. Instrucciones directas para la IA que implemente el proyecto

Trabaja como una desarrolladora frontend senior orientada a entregar un MVP limpio y rápido.

1. Inspecciona primero los archivos y el estado actual del repositorio.
2. No sobrescribas trabajo existente sin revisarlo.
3. Si no hay proyecto creado, usa Astro con la configuración mínima necesaria.
4. Implementa primero una versión completa y funcional; después pule detalles.
5. Sigue la referencia visual del usuario: fondo oscuro, verde lima, tipografía monoespaciada, icono de conexiones, hero de dos columnas y tres tarjetas.
6. Usa componentes reutilizables, pero no fragmentes cada elemento en un componente sin necesidad.
7. No agregues backend, base de datos ni CMS.
8. No inventes datos personales, URLs, proyectos completados ni métricas.
9. Comprueba el build y corrige errores reales antes de terminar.
10. Explica los archivos creados/modificados, los comandos para ejecutar localmente y los pasos exactos para desplegar.
11. Si falta un dato personal, deja un valor claramente marcado para configurar en vez de inventarlo.
12. Evita detenerte a preguntar por detalles menores: elige valores razonables siguiendo esta especificación.

**Resultado esperado:** un sitio `ifelse` visualmente cuidado, responsive, accesible, rápido de cargar, fácil de mantener y listo para empezar a mostrar proyectos reales en GitHub.

---

## 17. Primer comando sugerido

Si todavía no existe un proyecto y tienes Node.js instalado:

```bash
npm create astro@latest ifelse-portfolio
cd ifelse-portfolio
npm install
npm run dev
```

El asistente de Astro puede presentar opciones de configuración. Para empezar rápido, elige una plantilla mínima y usa npm. Si ya tienes un repositorio, no ejecutes estos comandos encima sin revisar antes su contenido.

## 18. Datos pendientes de personalizar

Antes de publicar, sustituye estos valores por los reales:

- Nombre visible: `Aleja` (o el nombre profesional que prefieras).
- URL del perfil GitHub.
- URL de LinkedIn.
- Correo profesional, si deseas mostrarlo.
- Estado real de cada proyecto.
- URL del sitio desplegado.

**Importante:** mantén este archivo como documento de especificación. La IA de programación debe implementar el sitio a partir de él, no limitarse a generar otra descripción del proyecto.
