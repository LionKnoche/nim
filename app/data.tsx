import React from 'react'; // Importiere React für JSX in Typdefinitionen
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaLanguage,
  FaMicrosoft, // Office Icon
} from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiNextdotjs, // Next.js Icon
} from 'react-icons/si';
import { LuBrainCircuit } from 'react-icons/lu'; // Beispiel für Kreativität/Problemlösung
import { PiUsersThree } from 'react-icons/pi'; // Beispiel für Teamwork
import {
  MdOutlineConnectWithoutContact,
  MdWorkOutline,
  MdSchool,
} from 'react-icons/md'; // Beispiel für Kommunikation, Erfahrung, Bildung

// --- BEIBEHALTENE TYPEN ---
export type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

// --- Education TYPE ADDED ---
// (Wichtig: WorkExperience und Education haben jetzt unterschiedliche Typen,
// falls sie sich in Zukunft stärker unterscheiden sollten.
// Momentan ist die Struktur gleich, aber mit 'details' Feld)
export type EducationEntry = {
  company: string; // Institution name
  title: string;   // Degree or field of study
  start: string;
  end?: string;
  details?: string; // <<< Dieses Feld wird für den Hover genutzt
  id: string;      // <<< Wichtig für den Hover-State
};


export type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end?: string;
  link?: string;
  id?: string; // Optional ID
  details?: string; // Optional Details for Work Experience too
};


export type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

export type SocialLink = {
  label: string;
  link: string;
};

// Typ für Soft Skills
export type SoftSkillDetailed = {
  id: string;
  name: string;
  description: string;
};

// --- NEUER TYP FÜR HARD SKILLS ---
export type HardSkillCategory =
  | 'Sprachen'
  | 'Webentwicklung'
  | 'Design'
  | 'Software & Tools'
  | 'Sonstiges';

export type HardSkill = {
  id: string;
  name: string;
  category: HardSkillCategory;
  icon: React.ReactElement;
};

// --- DATEN ---

// Projekte
export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
];

// Berufserfahrung
export const WORK_EXPERIENCE: WorkExperience[] = [
    {
    company: 'Werkstudent',
    title: 'Choya Umeshu Germany',
    start: '2024',
    end: 'Present',
    link: '/blog/Werkstudent_Choya',
    details: 'Marketingaufgaben, Social Media Management, Eventplanung und -durchführung.', // Beispiel Detail
    id: 'work1',
  },
  {
    company: 'Werkstudent',
    title: 'Sushi Matsumoto',
    start: '2022',
    end: '2024',
    link: '/blog/Werkstudent_Sushi_Matsumoto',
    details: 'Kundenbetreuung, Service, Bestellungsaufnahme und -abwicklung im gehobenen Gastronomieumfeld.', // Beispiel Detail
    id: 'work2',
  },
  {
    company: 'Verwaltungspraktikum',
    title: 'Finanzamt Hilden',
    start: '2021',
    link: '/blog/Finanzamt_Hilden',
    details: 'Einblicke in die Bearbeitung von Steuererklärungen und Verwaltungsabläufe.', // Beispiel Detail
    id: 'work3',
  },
  {
    company: 'IKEA Deutschland GmbH & Co. KG',
    title: 'Teilzeitbeschäftigung',
    start: '2016',
    end: '2017',
    details: 'Kundenservice im Bereich Umtausch und Reklamation, Kommissionierung von Waren im Lager.',
    id: 'work-ikea',
  },
  {
    company: 'Volksbank im Bergischen Land',
    title: 'Schülerpraktikum',
    start: '2016',
    details:
      'Verbuchung von Überweisungsträgern, Teilnahme an Finanzberatungsgesprächen, Einblicke in den Schalterbetrieb.',
    id: 'work-volksbank',
  },
  {
    company: 'KNIPEX Deutschland',
    title: 'Schülerpraktikum',
    start: '2015',
    details: 'Auftragsbearbeitung mit dem SAP SD Modul, Erstellung von Lieferscheinen und Rechnungen.',
    id: 'work-knipex',
  },
];

// Ausbildung - WICHTIG: details Feld nutzen wir jetzt!
export const EDUCATION: EducationEntry[] = [ // Typ EducationEntry verwenden
  {
    company: 'Heinrich Heine Universität',
    title: 'Japanologie und Politikwissenschaften',
    start: '2022',
    end: 'Present',
    details:
      'Schwerpunkte: Moderne japanische Gesellschaft, internationale Beziehungen Ostasiens, politische Theorie, quantitative Methoden. Aktueller Notenschnitt: 1.8.',
    id: 'edu-heinrich2',
  },
  {
    company: 'Heinrich Heine Universität',
    title: 'Juristisches Hauptstudium',
    start: '2020',
    end: '2022',
    details: 'Fokus auf Öffentliches Recht und Steuerrecht. Wechsel des Studiengangs zur besseren Vereinbarkeit von Interessen.',
    id: 'edu-heinrich1',
  },
  {
    company: 'Universität Leipzig',
    title: 'Rechtswissenschaften',
    start: '2018',
    end: '2020',
    details: 'Erfolgreicher Abschluss der juristischen Zwischenprüfung. Grundlegende Kenntnisse im Zivil-, Straf- und Öffentlichen Recht erworben.',
    id: 'edu-leipzig',
  },
  {
    company: 'Lore Lorentz Schule',
    title: 'Hochschulreife (Abitur)',
    start: '2014',
    end: '2017',
    details: 'Leistungskurse: Betriebswirtschaftslehre, Englisch. Abiturientia 2017.',
    id: 'edu-abitur',
  },
];

// Blog Posts
export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Die Kunst des Kamon: Identität in Mustern',
    description:
      '15 March 2025 | Ein Blick in die faszinierende Welt der japanischen Familienwappen, ihre Geschichte, Bedeutung und ihren Einfluss auf die moderne Gesellschaft.',
    link: '/blog/kamon-identitaet-in-mustern',
    uid: 'blog-1',
  },
  {
    title: 'Roland Barthes und der Mythos: Wie Bedeutungen manipuliert werden',
    description:
      '2 March 2025 | Mythen im Kontext des 21. Jahrhunderts und wie sie unsere Wahrnehmung prägen.',
    link: '/blog/roland-barthes-mythos',
    uid: 'blog-2',
  },
  {
    title: 'Was ist eigentlich subsidiärer Schutz?',
    description:
      '17 February 2025 | Ein Überblick über Status, Debatten und Zahlen.',
    link: '/blog/subsidiaerer-schutz',
    uid: 'blog-3',
  },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Github', link: 'https://github.com/your-github' }, // Bitte anpassen
  // { label: 'Twitter', link: 'https://twitter.com/your-twitter' }, // Bitte anpassen
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/your-linkedin' }, // Bitte anpassen
  // { label: 'Instagram', link: 'https://www.instagram.com/your-instagram' }, // Bitte anpassen
];

// E-Mail
export const EMAIL = 'lion.knoche@hotmail.de';

// --- NEUE DETAILLIERTE HARD SKILLS ---
export const DETAILED_HARD_SKILLS: HardSkill[] = [
  // Webentwicklung
  { id: 'html', name: 'HTML5', category: 'Webentwicklung', icon: <FaHtml5 size={20} /> },
  { id: 'css', name: 'CSS3', category: 'Webentwicklung', icon: <FaCss3Alt size={20} /> },
  { id: 'js', name: 'JavaScript', category: 'Webentwicklung', icon: <FaJsSquare size={20} /> },
  { id: 'nextjs', name: 'Next.js', category: 'Webentwicklung', icon: <SiNextdotjs size={20} /> },
  { id: 'react', name: 'React', category: 'Webentwicklung', icon: <FaReact size={20} /> },

  // Design
  { id: 'photoshop', name: 'Adobe Photoshop', category: 'Design', icon: <SiAdobephotoshop size={20} /> },
  { id: 'indesign', name: 'Adobe InDesign', category: 'Design', icon: <SiAdobeindesign size={20} /> },
  { id: 'illustrator', name: 'Adobe Illustrator', category: 'Design', icon: <SiAdobeillustrator size={20} /> },
  { id: 'premiere', name: 'Adobe Premiere Pro', category: 'Design', icon: <SiAdobepremierepro size={20} /> },

  // Software & Tools
  { id: 'office', name: 'MS Office Suite', category: 'Software & Tools', icon: <FaMicrosoft size={20} /> },
  // Hier könnten noch weitere Tools wie SAP etc. hinzugefügt werden
];

// Sprachen
export const LANGUAGES = [
  { language: 'Deutsch', proficiency: 'Muttersprache'}, // Explizit hinzufügen
  { language: 'Englisch', proficiency: 'Fließend in Wort und Schrift (C1)' }, // GER-Level hinzufügen
  { language: 'Spanisch', proficiency: 'Gute Kenntnisse (B1)' }, // GER-Level hinzufügen
  { language: 'Japanisch', proficiency: 'Fortgeschrittene Kenntnisse (JLPT N3 / B1)' }, // JLPT/GER Level hinzufügen
  { language: 'Französisch', proficiency: 'Grundlegendes Leseverständnis (A2)' }, // GER-Level hinzufügen
];

// Soft Skills
export const DETAILED_SOFT_SKILLS: SoftSkillDetailed[] = [
  {
    id: 'teamwork',
    name: 'Teamfähigkeit',
    description:
      'Aktive Zusammenarbeit in Projekten, offener Wissensaustausch und konstruktives Feedback zur Erreichung gemeinsamer Ziele (z.B. bei Gruppenarbeiten im Studium, Koordination bei Werkstudententätigkeiten).',
  },
  {
    id: 'creativity',
    name: 'Kreativität & Initiative', // Kombiniert
    description:
      'Entwicklung neuer Lösungsansätze und Ideen, proaktives Erkennen von Verbesserungspotenzialen und eigenständige Einarbeitung in neue Themen (z.B. bei der Gestaltung von Inhalten, Optimierung von Arbeitsabläufen).',
  },
  {
    id: 'communication',
    name: 'Kommunikationsstärke', // Umbenannt
    description:
      'Klarer, respektvoller und serviceorientierter Austausch mit Kollegen, Vorgesetzten und Kunden (z.B. im Kundenservice bei IKEA, Interaktion mit Gästen bei Sushi Matsumoto, Präsentationen im Studium).',
  },
  {
    id: 'autonomy',
    name: 'Selbstständigkeit & Organisation', // Kombiniert
    description:
      'Eigenverantwortliches Bearbeiten von Aufgaben, effiziente Zeitplanung und Priorisierung zur Einhaltung von Deadlines.',
  },
  {
    id: 'problem-solving',
    name: 'Analytisches Denkvermögen', // Umbenannt
    description:
      'Strukturiertes Herangehen an Problemstellungen, Identifikation von Ursachen und Entwicklung pragmatischer Lösungen (z.B. bei unerwarteten Herausforderungen im Arbeitsalltag, Analyse komplexer Sachverhalte im Studium).',
  },
  {
    id: 'intercultural',
    name: 'Interkulturelle Kompetenz', // Neu hinzugefügt
    description:
      'Sensibilität und Verständnis für kulturelle Unterschiede, erworben durch das Japanologie-Studium und internationale Arbeitsumgebungen.',
  },
];

// Kontaktdaten
export const CONTACT = {
  email: 'lion.knoche@hotmail.de',
  phone: '+49 152 5277 1470',
  address: 'Eschenweg 41, 40699 Erkrath',
};