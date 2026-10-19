/**
 * Central configuration for ALL site content (spec §7).
 *
 * Edit this file to update copy, links and projects.
 * Never hardcode URLs or personal data inside components.
 */

/** Valid project status values (spec §6.3). */
export type ProjectStatus = 'Planeado' | 'En desarrollo' | 'Completado';

/** Icon key rendered by ProjectCard (own inline SVGs, no third-party assets). */
export type ProjectIcon = 'bug' | 'flask' | 'graph';

export interface Project {
  /** Stable id used as React/HTML key. */
  id: string;
  name: string;
  category: string;
  description: string;
  /** Technologies actually used/foreseen for the project (spec §6.3). */
  stack: string[];
  status: ProjectStatus;
  /**
   * Real repository URL, or null when it does not exist yet.
   * When null the card shows the status chip instead of a link (spec §6.3).
   */
  repoUrl: string | null;
  icon: ProjectIcon;
}

export const site = {
  /** Brand name, always lowercase (spec §2). */
  brand: 'ifelse',
  /** Visible name (spec §18: replace if you prefer another professional name). */
  displayName: 'Aleja',
  /** <title> tag (spec §13). */
  title: 'ifelse — Desarrollo de software y QA',
  /** Meta description (spec §13): reuse the spec presentation text verbatim. */
  description:
    'Desarrollo software y aseguro su calidad a través de pruebas automatizadas. Me apasiona crear soluciones funcionales, eficientes y con propósito.',
  /** Footer tagline (spec §2). */
  tagline: 'BUILD / TEST / IMPROVE',
  /** Hero eyebrow (spec §6.2). */
  eyebrow: 'HOLA, SOY ALEJA 👋',
  /** Monospace subtitle rendered between the eyebrow and the headline. */
  subtitle: {
    line1: 'Ingeniería de Sistemas',
    line2: 'Universidad de Antioquia · 6.º semestre',
  },
  /** Hero headline (spec §6.2); `highlight` renders in lime. */
  headline: {
    line1: 'Código, pruebas ',
    line2: 'y buenas ',
    highlight: 'decisiones.',
  },
  /** Hero description (spec §6.2). */
  heroDescription:
    'Desarrollo software y aseguro su calidad a través de pruebas automatizadas. Me apasiona crear soluciones funcionales, eficientes y con propósito.',
  /**
   * Sobre mí copy (spec §6.4): emphatic lead followed by ordered paragraphs.
   * `**text**` runs are turned into <strong> by About.astro (no markdown lib).
   */
  about: {
    lead: 'Me gusta entender cómo funcionan las cosas, descubrir cómo pueden mejorar y construir soluciones que realmente aporten valor.',
    paragraphs: [
      'Soy estudiante de **sexto semestre de Ingeniería de Sistemas en la Universidad de Antioquia (UdeA)** y me interesa la tecnología como una forma de resolver problemas, transformar ideas y crear soluciones útiles.',
      'Mi camino en tecnología combina dos perspectivas que considero fundamentales en la ingeniería de software: **desarrollar soluciones y asegurar su calidad**. Mi experiencia en QA me ha enseñado a cuestionar supuestos, explorar distintos escenarios y prestar atención a los detalles que pueden marcar la diferencia entre un software que simplemente funciona y uno en el que las personas pueden confiar.',
      'He explorado distintas áreas del desarrollo, desde aplicaciones web y servicios backend hasta automatización de pruebas y tecnologías cloud. Trabajo con herramientas como JavaScript, React, Node.js, Spring Boot, Cypress, Selenium, SQL y Microsoft Azure, mientras continúo ampliando mis conocimientos en programación y buenas prácticas de ingeniería.',
      'Disfruto aprender, experimentar y enfrentar desafíos que me permitan conectar la lógica, la creatividad y la resolución de problemas. A través de mis proyectos personales, busco llevar las ideas desde su concepción hasta su implementación, probarlas en distintos escenarios y encontrar oportunidades para mejorarlas.',
      '**Creo que desarrollar software no consiste únicamente en hacer que algo funcione, sino en entender por qué funciona, comprobar que siga haciéndolo y encontrar formas de hacerlo mejor.** Esa es la mentalidad que quiero aportar a cada proyecto y a cada equipo del que forme parte.',
    ],
  },
  /** Contacto invitation (spec §6.5). */
  contactInvitation: '¿Tienes una oportunidad o una idea para construir? Hablemos.',
} as const;

/** Section anchors used by the navbar and hero CTAs (spec §9). */
export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
] as const;

// ---------------------------------------------------------------------------
// Contact links (spec §18)
// TODO: fill in the values you want to publish. Leave a value empty to hide
//       that link entirely (spec §9): components never render `href="#"` or
//       fictitious URLs.
// ---------------------------------------------------------------------------

/** TODO: real GitHub profile URL (scheme https). */
export const github = 'https://github.com/MalejandraR';

/** TODO: real LinkedIn profile URL (scheme https); kept empty BY CHOICE for now. */
export const linkedin = '';

/** TODO: real professional email; rendered as a mailto: link. */
export const email = 'maria.ramirez6@udea.edu.co';

/**
 * TODO / configurable: phone as RAW digits (no spaces, no `+57`, no `tel:`).
 * The scheme and country code are added by getPhone(); an empty or invalid
 * value renders no phone link at all.
 */
export const phone = '3104381846';

/** Keys understood by the SocialLinks icon set; `phone` is opt-in (Contacto). */
export type SocialKey = 'github' | 'linkedin' | 'email' | 'phone';

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
}

/** Basic sanity check for http(s) URLs (spec §9: only valid URLs render). */
function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Digits only, 7–15 of them (E.164 maximum without the `+`). */
function isPhone(value: string): boolean {
  return /^\d{7,15}$/.test(value);
}

/**
 * Returns only the contact links whose configuration value is valid (spec §9).
 * Empty/invalid values are omitted entirely — never rendered as dead links.
 * Phone is intentionally NOT part of this list: it is exposed through
 * getPhone() and rendered only where a labeled phone link fits (Contacto),
 * so the navbar and footer stay clean.
 */
export function getSocials(): SocialLink[] {
  const links: SocialLink[] = [];

  if (isHttpUrl(github)) {
    links.push({ key: 'github', label: 'GitHub', href: github });
  }
  if (isHttpUrl(linkedin)) {
    links.push({ key: 'linkedin', label: 'LinkedIn', href: linkedin });
  }
  if (isEmail(email)) {
    links.push({ key: 'email', label: 'Correo electrónico', href: `mailto:${email}` });
  }

  return links;
}

/** Dial prefix applied by the code — never stored in the config above. */
const PHONE_COUNTRY_CODE = '+57';

/** Groups digits for display: `3104381846` → `310 438 1846`. */
function formatPhone(digits: string): string {
  const parts: string[] = [];
  let rest = digits;
  while (rest.length > 4) {
    parts.push(rest.slice(0, 3));
    rest = rest.slice(3);
  }
  parts.push(rest);
  return parts.join(' ');
}

export interface PhoneLink {
  /** `tel:` URI including the country code added by the code. */
  href: string;
  /** Human-readable digits, e.g. `310 438 1846`. */
  text: string;
}

/**
 * Returns the phone link when the configured value is valid, otherwise null
 * (spec §9: an empty/invalid phone renders no `tel:` link, never a dead one).
 */
export function getPhone(): PhoneLink | null {
  if (!isPhone(phone)) return null;
  return { href: `tel:${PHONE_COUNTRY_CODE}${phone}`, text: formatPhone(phone) };
}

export const projects: Project[] = [
  {
    id: 'bugtrack',
    name: 'BugTrack',
    category: 'Full Stack · Gestión de incidencias',
    description:
      'Aplicación web para registrar, consultar y dar seguimiento a errores de software. Incluye API, base de datos y pruebas E2E.',
    stack: ['React', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Cypress'],
    status: 'En desarrollo',
    repoUrl: null, // TODO: set the real repository URL when it is public (spec §18).
    icon: 'bug',
  },
  {
    id: 'qa-automation-lab',
    name: 'QA Automation Lab',
    category: 'Testing · Cypress',
    description:
      'Suite de pruebas automatizadas para validar la aplicación BugTrack. Incluye casos positivos, negativos y reportes de ejecución.',
    stack: ['Cypress', 'JavaScript', 'GitHub Actions'],
    status: 'En desarrollo',
    repoUrl: null, // TODO: set the real repository URL when it is public (spec §18).
    icon: 'flask',
  },
  {
    id: 'qualitygate',
    name: 'QualityGate',
    category: 'CI/CD · GitHub Actions',
    description:
      'Pipeline de integración continua que ejecuta pruebas automáticamente en cada pull request y ayuda a mantener la calidad del código.',
    stack: ['GitHub Actions', 'Cypress', 'Node.js'],
    status: 'Planeado',
    repoUrl: null, // TODO: set the real repository URL when it is public (spec §18).
    icon: 'graph',
  },
];
