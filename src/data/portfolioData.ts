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
    id: "ecotacna",
    title: "ECOTACNA",
    category: "Proyecto Universitario • Web & Pagos",
    shortDescription: "Plataforma web modular que automatiza y asegura el cobro de transacciones electrónicas mediante la integración de la pasarela de pagos Culqi.",
    fullDescription: "Plataforma diseñada e implementada con arquitectura modular tipada en TypeScript y backend en Java, integrando la pasarela de pagos Culqi para procesar transacciones seguras bajo principios de Programación Orientada a Objetos.",
    achievements: [
      "Diseño e implementación de la lógica de negocio y estructura modular con TypeScript.",
      "Integración completa de la pasarela de pagos Culqi para automatizar cobros.",
      "Separación de responsabilidades aplicando principios de POO."
    ],
    technologies: ["typescript", "java", "culqi-api", "poo"],
    githubUrl: "https://github.com/Gino019/ECOTACNA",
    images: [
      { url: "/projects/ecotacna-1.png", caption: "Vista principal del sistema ECOTACNA y módulo de comercio electrónico" },
      { url: "/projects/ecotacna-2.png", caption: "Flujo de integración y pasarela de pagos con Culqi" }
    ]
  },
  {
    id: "scopus-enmask",
    title: "Proyecto Scopus (Motor Enmask)",
    category: "Proyecto Académico • SecOps & DBA Tools",
    shortDescription: "Plataforma SecOps y DBA que protege datos sensibles mediante enmascaramiento dinámico en tiempo real mientras monitorea el rendimiento de la infraestructura.",
    fullDescription: "Herramienta especializada de seguridad y administración de bases de datos desarrollada en Python bajo principios SOLID, capaz de enmascarar datos en tiempo real mientras supervisa el rendimiento del servidor.",
    achievements: [
      "Fusión de motor de enmascaramiento dinámico con monitor de rendimiento e infraestructura.",
      "Arquitectura desacoplada y escalable implementando principios SOLID en Python."
    ],
    technologies: ["python", "secops", "dba-tools", "solid"],
    githubUrl: "https://github.com/Gino019/unificate-MotorEnmask",
    images: [
      { url: "/projects/scopus-1.png", caption: "Dashboard del monitor de rendimiento e infraestructura del servidor" },
      { url: "/projects/scopus-2.png", caption: "Motor de enmascaramiento dinámico procesando consultas en tiempo real" }
    ]
  },
  {
    id: "enmask-db",
    title: "Enmask",
    category: "Proyecto Universitario • Seguridad de Datos",
    shortDescription: "Sistema de seguridad de datos que anonimiza información confidencial mediante enmascaramiento estático en bases de datos SQL y NoSQL.",
    fullDescription: "Solución multiplataforma en Python y TypeScript diseñada para anonimizar y proteger información confidencial tanto en motores relacionales como no relacionales antes de pasar a entornos de pruebas.",
    achievements: [
      "Implementación de algoritmos de enmascaramiento estático para bases de datos relacionales y no relacionales.",
      "Interfaz y control de ejecución integrando TypeScript y Python."
    ],
    technologies: ["python", "typescript", "sql", "nosql"],
    githubUrl: "https://github.com/Gino019/Proyecto-Final-Basede-Datos2",
    images: [
      { url: "/projects/enmask-1.png", caption: "Configuración de conexión y selección de tablas/colecciones a enmascarar" },
      { url: "/projects/enmask-2.png", caption: "Resultado de datos confidenciales anonimizados correctamente" }
    ]
  },
  {
    id: "gakom-flashcourier",
    title: "Gakom FlashCourier",
    category: "Proyecto Personal • Gestión Logística",
    shortDescription: "Aplicación de gestión logística que optimiza el registro, control operativo y seguimiento de envíos de paquetes de extremo a extremo.",
    fullDescription: "Sistema de escritorio construido íntegramente en Java para optimizar el flujo operativo de envíos, control de estados de paquetes y trazabilidad logística.",
    achievements: [
      "Optimización del flujo de registro y seguimiento de envíos.",
      "Estructura modular bajo principios de Programación Orientada a Objetos para fácil mantenimiento."
    ],
    technologies: ["java", "poo", "desktop-app"],
    githubUrl: "https://github.com/Gino019/Gakom-FlashCourier",
    images: [
      { url: "/projects/gakom-1.png", caption: "Interfaz principal de registro y gestión de envíos en Gakom FlashCourier" },
      { url: "/projects/gakom-2.png", caption: "Panel de seguimiento de estado y trazabilidad de paquetes" }
    ]
  }
];
