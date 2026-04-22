import type { TimelineEntry } from '@/types/timeline'

/** Newest first — matches portfolio template timeline flow */
export const timeline: TimelineEntry[] = [
  {
    id: 'layerx',
    role: {
      en: 'Frontend Engineer',
      pt: 'Engenheiro frontend'
    },
    company: 'LayerX',
    companyUrl: 'https://layer.xyz',
    location: {
      en: 'Porto, Portugal (remote)',
      pt: 'Porto, Portugal (remoto)'
    },
    start: '11/2021',
    end: '02/2026',
    type: 'job',
    techs: 'Next.js, React, TypeScript, Node.js, GraphQL, Jest, PostgreSQL',
    summaryHtml: {
      en: 'Built and maintained customer-facing product surfaces on a <b>TypeScript, React, Next.js and Node.js</b> stack, with attention to testing and data-backed features.',
      pt: 'Construí e mantive superfícies de produto voltadas ao cliente em <b>TypeScript, React, Next.js e Node.js</b>, com foco em testes e funcionalidades orientadas a dados.'
    }
  },
  {
    id: 'mace',
    role: {
      en: 'Senior Frontend Engineer',
      pt: 'Engenheiro frontend sênior'
    },
    company: 'Mace',
    companyUrl: 'https://mace.ag',
    location: {
      en: 'Canada (remote)',
      pt: 'Canadá (remoto)'
    },
    start: '07/2024',
    end: '12/2025',
    type: 'job',
    techs: 'Design System, Figma, Web Components, Javascript, Typescript, SASS, Vite, Lit',
    summaryHtml: {
      en: 'Led the frontend development of a DEX aggregator that processed over <b>$3.85M</b> in volume and <b>55.94K</b> transactions, ensuring smooth and performant trade experience for the users.',
      pt: 'Liderou o desenvolvimento frontend de um agregador de DEX que processou mais de <b>$3.85M</b> em volume e <b>55.94K</b> transações, garantindo uma experiência de trade suave e performática para os usuários.'
    }
  },
  {
    id: 'asa-analyst',
    role: {
      en: 'Systems Analyst',
      pt: 'Analista de sistemas'
    },
    company: 'Asa Branca',
    companyUrl: 'https://asabranca.ind.br',
    location: {
      en: 'Alagoas, Brazil',
      pt: 'Alagoas, Brasil'
    },
    start: '09/2019',
    end: '11/2021',
    type: 'job',
    techs: 'Javascript, Git, React, Django, SQL Server, Oracle Database',
    summaryHtml: {
      en: 'Delivered internal and customer systems bridging <b>React</b> frontends with Django and relational databases, that generated over <b>R$2M</b> in revenue and optmized internal processes by <b>80%</b>.',
      pt: 'Entrega de sistemas internos e para clientes conectando frontends em <b>React</b> com Django e bancos relacionais, que gerou mais de <b>R$2M</b> em receita e otimizou processos internos em <b>80%</b>.'
    }
  },
  {
    id: 'asa-intern',
    role: {
      en: 'IT Intern',
      pt: 'Estagiário de TI'
    },
    company: 'Asa Branca',
    companyUrl: 'https://asabranca.ind.br',
    location: {
      en: 'Alagoas, Brazil',
      pt: 'Alagoas, Brasil'
    },
    start: '12/2018',
    end: '09/2019',
    type: 'job',
    techs: 'Python, Django, JavaScript, SQL, customer support',
    summaryHtml: {
      en: 'Supported production systems, wrote <b>Python/Django</b> services, and helped unblock users on operational issues.',
      pt: 'Suporte a sistemas em produção, serviços em <b>Python/Django</b> e apoio a usuários em incidentes operacionais.'
    }
  },
  // {
  //   id: 'ufal',
  //   role: {
  //     en: 'Bachelor of Computer Science',
  //     pt: 'Bacharel em Ciência da Computação'
  //   },
  //   company: 'UFAL',
  //   companyUrl: 'https://ufal.br/',
  //   location: {
  //     en: 'Alagoas, Brazil',
  //     pt: 'Alagoas, Brasil'
  //   },
  //   start: '01/2016',
  //   end: '12/2020',
  //   type: 'education',
  //   techs: '',
  //   summaryHtml: {
  //     en: 'Foundations in algorithms, software engineering, and databases.',
  //     pt: 'Formação em algoritmos, engenharia de software e banco de dados.'
  //   }
  // },
  {
    id: 'ifal-monitor',
    role: {
      en: 'Algorithms and Database monitor',
      pt: 'Monitor de Algoritmos e Banco de Dados'
    },
    company: 'IFAL',
    companyUrl: 'https://www2.ifal.edu.br/',
    location: {
      en: 'Alagoas, Brazil',
      pt: 'Alagoas, Brasil'
    },
    start: '06/2013',
    end: '12/2013',
    type: 'job',
    techs: 'Algorithms, database, MySQL, Java, C',
    summaryHtml: {
      en: 'Taught practical labs and supported students on <b>SQL</b> and core Computer Technician disciplines.',
      pt: 'Aulas práticas e apoio a alunos em <b>SQL</b> e disciplinas núcleo de Técnico em Informática.'
    }
  },
  // {
  //   id: 'ifal-tech',
  //   role: {
  //     en: 'Computer Technician',
  //     pt: 'Técnico em Informática'
  //   },
  //   company: 'IFAL',
  //   companyUrl: 'https://www2.ifal.edu.br/',
  //   location: {
  //     en: 'Alagoas, Brazil',
  //     pt: 'Alagoas, Brasil'
  //   },
  //   start: '01/2011',
  //   end: '12/2014',
  //   type: 'education',
  //   techs: '',
  //   summaryHtml: {
  //     en: 'Technical diploma alongside early exposure to real-world IT operations.',
  //     pt: 'Curso técnico com primeiras experiências em operações reais de TI.'
  //   }
  // }
]
