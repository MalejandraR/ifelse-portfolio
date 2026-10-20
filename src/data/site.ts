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
   * Sobre mí copy (spec §6.4): emphatic lead, short first-person paragraphs
   * and a highlighted pull-quote. `**text**` runs are turned into <strong>
   * by About.astro (no markdown lib).
   */
  about: {
    lead: 'Construyo software y compruebo que funcione.',
    paragraphs: [
      'Soy estudiante de sexto semestre de Ingeniería de Sistemas en la Universidad de Antioquia. Me muevo entre dos mundos: desarrollar soluciones y asegurar que sean confiables.',
      'Mi experiencia en QA me enseñó a cuestionar supuestos y a buscar los escenarios donde algo puede fallar. Esa mentalidad la llevo a mis proyectos personales, donde construyo la aplicación y también sus pruebas automatizadas.',
      'Busco una oportunidad laboral en desarrollo de software o QA, en un equipo donde pueda aportar y seguir creciendo.',
    ],
    quote:
      'Desarrollar software no es solo hacer que algo funcione, sino entender por qué funciona, comprobar que siga haciéndolo y encontrar cómo mejorarlo.',
    /** Technologies shown as chips under the About copy, grouped by area. */
    techGroups: [
      { label: 'Lenguajes y frameworks', items: ['JavaScript', 'React', 'Node.js', 'Spring Boot'] },
      { label: 'Testing', items: ['Cypress', 'Selenium'] },
      { label: 'Datos y cloud', items: ['SQL', 'Microsoft Azure'] },
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

/** Real GitHub profile URL (scheme https). */
export const github = 'https://github.com/MalejandraR';

/** Real LinkedIn profile URL (scheme https). */
export const linkedin = 'https://www.linkedin.com/in/maria-alejandrar/';

/** Real professional email; rendered as a mailto: link. */
export const email = 'maria.ramirez6@udea.edu.co';

/** Keys understood by the SocialLinks icon set. */
export type SocialKey = 'github' | 'linkedin' | 'email';

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

/**
 * Returns only the contact links whose configuration value is valid (spec §9).
 * Empty/invalid values are omitted entirely — never rendered as dead links.
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
