export interface ProjectImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  achievements: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  images: ProjectImage[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'Cloud & AWS' | 'Python, Data & IA' | 'Bases de Datos & Backend';
  date: string;
  credentialUrl: string;
  badgeText: string;
  credentialId?: string;
}

export const certificationsData: Certification[] = [
  // Con enlaces directos específicos a las publicaciones/credenciales de LinkedIn:
  {
    id: "data-engineer-assoc",
    title: "Data Engineer Associate",
    issuer: "DataCamp",
    category: "Python, Data & IA",
    date: "2026",
    credentialUrl: "https://lnkd.in/p/e4_ArD8J",
    badgeText: "Data Engineering"
  },
  {
    id: "python-data-dev-assoc",
    title: "Python Data & Developer Associate",
    issuer: "DataCamp",
    category: "Python, Data & IA",
    date: "2026",
    credentialUrl: "https://lnkd.in/p/ep3_TQVf",
    badgeText: "Python Dev"
  },
  {
    id: "ai-engineer-devs",
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp",
    category: "Python, Data & IA",
    date: "2026",
    credentialUrl: "https://lnkd.in/p/eVFWB7vY",
    badgeText: "AI Engineering"
  },
  {
    id: "aws-data-engineering",
    title: "AWS Academy Graduate - Data Engineering",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud & AWS",
    date: "Oct 2026",
    credentialUrl: "https://lnkd.in/p/eX4Eyn4E",
    badgeText: "AWS Data"
  },
  {
    id: "aws-data-pipeline",
    title: "AWS Academy Graduate - Cloud Data Pipeline Builder",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud & AWS",
    date: "Oct 2026",
    credentialUrl: "https://lnkd.in/p/e_j6SAiz",
    badgeText: "AWS Pipeline"
  },

  // Con enlace directo al apartado de Licencias y Certificaciones de LinkedIn:
  {
    id: "aws-web-builder",
    title: "AWS Academy Graduate - Cloud Web Application Builder",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud & AWS",
    date: "May 2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "AWS Cloud"
  },
  {
    id: "aws-genai",
    title: "AWS Academy Graduate - Generative AI Foundations",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud & AWS",
    date: "Abr 2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "AWS GenAI"
  },
  {
    id: "aws-ml",
    title: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud & AWS",
    date: "Oct 2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "AWS ML"
  },
  {
    id: "oci-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    category: "Cloud & AWS",
    date: "Oct 2025",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "OCI Architecture"
  },
  {
    id: "oci-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    category: "Cloud & AWS",
    date: "Oct 2025",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "OCI AI & GenAI"
  },
  {
    id: "ai-engineer-ds",
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    category: "Python, Data & IA",
    date: "2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "AI & Data Science"
  },
  {
    id: "data-scientist-assoc",
    title: "Data Scientist Associate",
    issuer: "DataCamp",
    category: "Python, Data & IA",
    date: "2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "Data Science"
  },
  {
    id: "data-analyst-assoc",
    title: "Data Analyst Associate",
    issuer: "DataCamp",
    category: "Python, Data & IA",
    date: "2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "Data Analytics"
  },
  {
    id: "neo4j-prof",
    title: "Neo4j Certified Professional",
    issuer: "Neo4j GraphAcademy",
    category: "Bases de Datos & Backend",
    date: "May 2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "Graph Database",
    credentialId: "d3e38289-547f-476e-b254-d8295344b729"
  },
  {
    id: "mongodb-modeling",
    title: "MongoDB Data Modeling Path",
    issuer: "MongoDB University",
    category: "Bases de Datos & Backend",
    date: "Jun 2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "NoSQL Modeling",
    credentialId: "MDBbjkukayuxlq"
  },
  {
    id: "mongodb-ai-agents",
    title: "Building AI Agents with MongoDB",
    issuer: "MongoDB",
    category: "Bases de Datos & Backend",
    date: "Jun 2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "AI Agents"
  },
  {
    id: "mongodb-vector-search",
    title: "Building AI-Powered Search with MongoDB Vector Search",
    issuer: "MongoDB",
    category: "Bases de Datos & Backend",
    date: "May 2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "Vector Search"
  },
  {
    id: "datadog-backend",
    title: "Backend Engineer Learning Path",
    issuer: "Datadog",
    category: "Bases de Datos & Backend",
    date: "Abr 2026",
    credentialUrl: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356/details/certifications/",
    badgeText: "Backend & Observability"
  }
];

export const personalData = {
  initials: "EGFN",
  name: "Eduardo Gino Flores Navarro",
  role: "Estudiante de Ingeniería de Sistemas / Junior Developer",
  location: "Tacna, Perú",
  timezoneText: "Soy de Tacna, Perú (GMT-5), disponible para trabajar de forma remota y colaborar en proyectos tecnológicos.",
  bio: "Estudiante de 8vo ciclo de Ingeniería de Sistemas apasionado por la tecnología y la investigación por cuenta propia en temas de arquitectura de software, seguridad de datos, Cloud Computing e Inteligencia Artificial. Me enfoco en construir soluciones eficientes aplicando código limpio y principios SOLID.",
  typewriterWords: ["TypeScript", "Python", "Java", "React", "Cloud & IA"],
  email: "ginonavarro11@gmail.com",
  phone: "+51 993599305",
  github: "https://github.com/Gino019",
  linkedin: "https://www.linkedin.com/in/gino-eduardo-flores-navarro-381433356",
  principles: ["SOLID", "POO", "Clean Code", "Arquitectura Modular", "Scrum", "SecOps"],
  certifications: certificationsData.map((c) => c.title)
};

export const projectsData: Project[] = [
  {
    id: "gymdesk",
    title: "GymDesk",
    category: "Aplicación de Escritorio • Gestión Administrativa de Gimnasios",
    shortDescription: "Aplicación de escritorio para gimnasios pequeños y comunitarios que centraliza la gestión de socios, membresías, caja y pagos, promociones, asistencia, rutinas, comprobantes y reportes en un entorno 100% offline.",
    fullDescription: "Sistema administrativo de escritorio desarrollado en Java 17 con Java Swing y SQLite bajo una arquitectura en 4 capas (Presentación, Aplicación, Dominio e Infraestructura) aplicando principios SOLID. Diseñado para ser estable, económico de mantener y comercializable en distintos gimnasios sin conexión a internet, gestionando roles de Administrador y Recepcionista, cobros multipago (Efectivo, Yape, Plin, Transferencia), promociones mixtas, emisión de recibos en PDF y respaldos seguros.",
    achievements: [
      "Arquitectura limpia en 4 capas (Presentación, Aplicación, Dominio e Infraestructura) aplicando principios SOLID y patrones Repository y Strategy.",
      "Centralización operativa de socios, planes, caja y pagos (Efectivo, Yape, Plin), motor mixto de promociones, asistencia, rutinas, comprobantes PDF y reportes.",
      "Seguridad con permisos validados en capa de servicios por rol (Administrador y Recepcionista), hash de contraseñas con sal, auditoría de anulaciones y respaldos de SQLite."
    ],
    technologies: ["java-17", "java-swing", "sqlite", "jdbc", "maven", "solid"],
    githubUrl: "https://github.com/Gino019/GymDesk.git",
    downloadUrl: "/downloads/GymDeskDemo.zip",
    downloadLabel: "Descargar Sistema",
    images: [
      { url: "/projects/gymdesk-1.png", caption: "Dashboard principal con resumen de socios activos, vencimientos, asistencias e ingresos" },
      { url: "/projects/gymdesk-2.png", caption: "Módulo de gestión de socios, planes de membresía y registro de asistencia" },
      { url: "/projects/gymdesk-3.png", caption: "Módulo de caja, detección de promociones vigentes y emisión de recibos en PDF" }
    ]
  }
];
