import { Contact, Experience, Project, Skill } from '../models/portfolio';

export const PROFILE = {
  name: 'João Victor',
  initials: 'JS',
  role: 'Desenvolvedor Front-end & Infraestrutura de redes | Angular, Next.js, Tailwind CSS + Zabbix e Grafana',
  photo: '/perfil/casual.jpg',
  professionalPhoto: '/perfil/profissional.jpg',
  logo: '/logo/logo.png',
  logoVellarum: '/logo/vellarum.png',
  background: '/fundo/fundo.svg',
  about:
    'Sou estudante de desenvolvimento de software e passei pela parte de infraestrutura de redes, hoje estou focado em criar interfaces modernas, organizadas e responsivas, mas ja tive a experiência em ambientes de infraestrutura e monitoramento como Zabbix e Grafana. Tenho interesse em Angular, Tailwind CSS e desenvolvimento de sistemas completos além da criação de paineis e dashboards de monitoramento de redes e sistemas.',
  company: {
    name: 'Vellarum',
    title: 'CEO & Fundador',
    description:
      'A Vellarum nasceu para entregar infraestrutura, segurança e desenvolvimento com o mesmo nível de exigência que se espera em ambientes críticos. Unimos engenharia, método e execução para transformar tecnologia em desempenho, estabilidade e crescimento.',
    focus: [
      'Projetos com metodologia, documentação e padrão profissional',
      'Foco em segurança, performance e escalabilidade desde o início',
      'Entrega clara: prazos, escopo e próximos passos sempre alinhados',
      'Redução de riscos, e previsibilidade para o negócio',
    ],
  },
};

export const WEB_DEVELOPMENT_SKILLS: Skill[] = [
  // Parte de Desenvolvimento Web
  {
    name: 'HTML',
    description: 'Estruturação de páginas web.',
  },
  {
    name: 'CSS',
    description: 'Estilização, responsividade e organização visual.',
  },
  {
    name: 'Angular',
    description: 'Componentes, rotas, serviços e construção de interfaces.',
  },
  {
    name: 'Next.js',
    description: 'Criação rápida de layouts modernos e responsivos.',
  },
  {
    name: 'Nuxt.js',
    description: 'Criação rápida de layouts modernos e responsivos.',
  },
  {
    name: 'Tailwind CSS',
    description: 'Criação rápida de layouts modernos e responsivos.',
  },
];

export const INFRASTRUCTURE_SKILLS: Skill[] = [
  // Parte de Redes e Infraestrutura
  {
    name: 'Zabbix',
    description: 'Monitoramento e alerta de sistemas.',
  },
  {
    name: 'Grafana',
    description: 'Visualização e análise de dados em tempo real.',
  },
  {
    name: 'Mikrotik',
    description: 'Configuração e gerenciamento de redes.',
  },
  {
    name: 'Roteadores Cisco',
    description: 'Configuração e gerenciamento de redes.',
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Paroquia Santa Teresa D'Ávila",
    description:
      "Desenvolvimento de um sistema de gestão para a Paróquia Santa Teresa D'Ávila, incluindo site institucional e sistema de gerenciamento de eventos",
    techs: ['Next.js', 'CSS', 'HTML', 'TypeScript'],
    image: '/projects/paroquia.png',
    video: '',
    link: 'https://paroquiadavila.org.br/',
    repository: '',
  },
  {
    title: 'Portfólio pessoal',
    description:
      'Landing page pessoal para apresentar experiências, projetos, habilidades e contatos.',
    techs: ['Angular', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/portfolio.png',
    video: '',
    link: '',
    repository: '',
  },
  {
    title: 'Vellarum',
    description: 'Landing page para apresentar a empresa e seus serviços.',
    techs: ['Nuxt.js', 'Tailwind CSS', 'JavaScript'],
    image: '/projects/vellarum.png',
    video: '',
    link: 'https://vellarum.com.br/',
    repository: '',
  },
  {
    title: 'Hosts do ZABBIX monitorados por painéis no GRAFANA',
    description:
      'Criação de painéis de monitoramento para visualização de métricas e dados em tempo real utilizando Grafana.',
    techs: ['GRAFANA / ZABBIX', 'MIB-OIDS', 'SNMP'],
    image: '/projects/grafana.png',
    video: '',
    link: '',
    repository: '',
  },
];

export const JOBS: Experience[] = [
  {
    title: 'Analista de desenvolvimento de sistemas | Pleno',
    place: 'I.RIEDI & CIA LTDA',
    period: '2021 até atualmente',
    description:
      'Atuação com suporte, desenvolvimento de soluções internas, automações, redes e monitoramento, sistemas web e melhoria de processos.',
    image: '/experience/iriedi.png',
  },
];

export const STUDIES: Experience[] = [
  {
    title: 'Faculdade de Engenharia de Software',
    place: 'FAG - Fundação Assis Gurgacz',
    period: '2025 até atualmente',
    description:
      'Estudos voltados para desenvolvimento de sistemas, lógica de programação, banco de dados e tecnologias web.',
    image: '/experience/fag.png',
  },
  {
    title: 'Ensino Médio Técnico de Informática',
    place: 'CEEP - Centro Estadual de Educação Profissional Pedro Boaretto Neto',
    period: '2019 até 2023',
    description:
      'Estudo gerais da área de informática, programação básica e lógica de programação.',
    image: '/experience/ceep.png',
  },
];

export const CONTACT: Contact = {
  email: 'voltyz99@gmail.com',
  github: 'https://github.com/JhonSalvador',
  linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-victor-salvador-201bb3227/',
  instagram: 'https://www.instagram.com/joaov.salvador/',
};
