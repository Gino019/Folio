export interface ProjectImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'Funcionando en Localhost' | 'En Desarrollo' | 'Producción';
  shortDescription: string;
  fullDescription: string;
  achievements: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: ProjectImage[];
}

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
  certifications: [
    "AWS Academy Cloud Web Application Builder",
    "Oracle Cloud Infrastructure 2025 Foundations Associate",
    "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    "Neo4j Certified Professional (ID: Credencial Verificada)",
    "MongoDB Data Modeling Path"
  ]
};

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  badgeLabel: string;
  category: "cloud" | "ai" | "database";
}

export const certificationsDetailed: CertificationItem[] = [
  {
    id: "aws-builder",
    name: "AWS Academy Cloud Web Application Builder",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
    badgeLabel: "AWS Cloud",
    category: "cloud",
  },
  {
    id: "oci-foundations",
    name: "Oracle Cloud Infrastructure 2025 Foundations Associate",
    issuer: "Oracle University",
    year: "2025",
    badgeLabel: "OCI Architecture",
    category: "cloud",
  },
  {
    id: "oci-ai",
    name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle University",
    year: "2025",
    badgeLabel: "OCI AI & GenAI",
    category: "ai",
  },
  {
    id: "neo4j-pro",
    name: "Neo4j Certified Professional",
    issuer: "Neo4j GraphAcademy",
    year: "2024",
    credentialId: "ID: Credencial Verificada",
    badgeLabel: "Graph Database",
    category: "database",
  },
  {
    id: "mongodb-modeling",
    name: "MongoDB Data Modeling Path",
    issuer: "MongoDB University",
    year: "2024",
    badgeLabel: "NoSQL Modeling",
    category: "database",
  },
];

export const projectsData: Project[] = [
  {
    id: "ecotacna",
    title: "ECOTACNA",
    category: "Proyecto Universitario • Web & Pagos",
    status: "Funcionando en Localhost",
    shortDescription: "Sistema modular con integración de pasarela de pagos Culqi para automatizar y asegurar transacciones.",
    fullDescription: "Plataforma diseñada e implementada con arquitectura modular tipada en TypeScript y backend en Java, integrando la pasarela de pagos Culqi para procesar transacciones seguras bajo principios de Programación Orientada a Objetos.",
    achievements: [
      "Diseño e implementación de la lógica de negocio y estructura modular con TypeScript.",
      "Integración completa de la pasarela de pagos Culqi para automatizar cobros.",
      "Separación de responsabilidades aplicando principios de POO."
    ],
    technologies: ["typescript", "java", "culqi-api", "poo"],
    githubUrl: "https://github.com/Gino019/ECOTACNA",
    images: [
      { url: "/projects/ecotacna-1.png", caption: "Vista principal del sistema ECOTACNA ejecutándose en servidor local" },
      { url: "/projects/ecotacna-2.png", caption: "Flujo de integración y pasarela de pagos con Culqi funcionando" }
    ]
  },
  {
    id: "scopus-enmask",
    title: "Proyecto Scopus (Motor Enmask)",
    category: "Proyecto Académico • SecOps & DBA Tools",
    status: "Funcionando en Localhost",
    shortDescription: "Plataforma SecOps/DBA que fusiona un motor de enmascaramiento dinámico de datos con monitoreo de infraestructura.",
    fullDescription: "Herramienta especializada de seguridad y administración de bases de datos desarrollada en Python bajo principios SOLID, capaz de enmascarar datos en tiempo real mientras supervisa el rendimiento del servidor.",
    achievements: [
      "Fusión de motor de enmascaramiento dinámico con monitor de rendimiento e infraestructura.",
      "Arquitectura desacoplada y escalable implementando principios SOLID en Python."
    ],
    technologies: ["python", "secops", "dba-tools", "solid"],
    githubUrl: "https://github.com/Gino019/unificate-MotorEnmask",
    images: [
      { url: "/projects/scopus-1.png", caption: "Dashboard del monitor de rendimiento e infraestructura en ejecución" },
      { url: "/projects/scopus-2.png", caption: "Motor de enmascaramiento dinámico procesando consultas en tiempo real" }
    ]
  },
  {
    id: "enmask-db",
    title: "Enmask",
    category: "Proyecto Universitario • Seguridad de Datos",
    status: "Funcionando en Localhost",
    shortDescription: "Sistema completo de enmascaramiento estático para proteger datos sensibles en bases de datos SQL y NoSQL.",
    fullDescription: "Solución multiplataforma en Python y TypeScript diseñada para anonimizar y proteger información confidencial tanto en motores relacionales como no relacionales antes de pasar a entornos de pruebas.",
    achievements: [
      "Implementación de algoritmos de enmascaramiento estático para bases de datos relacionales y no relacionales.",
      "Interfaz y control de ejecución integrando TypeScript y Python."
    ],
    technologies: ["python", "typescript", "sql", "nosql"],
    githubUrl: "https://github.com/Gino019/Proyecto-Final-Basede-Datos2",
    images: [
      { url: "/projects/enmask-1.png", caption: "Configuración de conexión y selección de tablas/colecciones a enmascarar" },
      { url: "/projects/enmask-2.png", caption: "Resultado de datos sensibles anonimizados correctamente en local" }
    ]
  },
  {
    id: "gakom-flashcourier",
    title: "Gakom FlashCourier",
    category: "Proyecto Personal • Gestión Logística",
    status: "Funcionando en Localhost",
    shortDescription: "Aplicación de escritorio enfocada en la gestión logística, registro y seguimiento de paquetes.",
    fullDescription: "Sistema de escritorio construido íntegramente en Java para optimizar el flujo operativo de envíos, control de estados de paquetes y trazabilidad logística.",
    achievements: [
      "Optimización del flujo de registro y seguimiento de envíos.",
      "Estructura modular bajo principios de Programación Orientada a Objetos para fácil mantenimiento."
    ],
    technologies: ["java", "poo", "desktop-app"],
    githubUrl: "https://github.com/Gino019/Gakom-FlashCourier",
    images: [
      { url: "/projects/gakom-1.png", caption: "Interfaz principal de registro y gestión de envíos en Gakom FlashCourier" },
      { url: "/projects/gakom-2.png", caption: "Panel de seguimiento de estado de paquetes funcionando en local" }
    ]
  }
];

