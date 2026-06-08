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
    'Sou estudante de desenvolvimento web, focado em criar interfaces modernas, organizadas e responsivas. Tenho interesse em Angular, Tailwind CSS, JavaScript, TypeScript e desenvolvimento de sistemas completos.',
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

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    description: 'Estruturação de páginas web.',
  },
  {
    name: 'CSS',
    description: 'Estilização, responsividade e organização visual.',
  },
  {
    name: 'JavaScript',
    description: 'Lógica, manipulação de tela e interatividade.',
  },
  {
    name: 'TypeScript',
    description: 'Código mais seguro, organizado e tipado.',
  },
  {
    name: 'Angular',
    description: 'Componentes, rotas, serviços e construção de interfaces.',
  },
  {
    name: 'Tailwind CSS',
    description: 'Criação rápida de layouts modernos e responsivos.',
  },
  {
    name: 'Node.js',
    description: 'Base para APIs, backend e integrações.',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'SYSLIB',
    description:
      'Sistema de livraria online para cadastro, gerenciamento, venda e aluguel de livros.',
    techs: ['Angular', 'Tailwind CSS', 'Node.js'],
    image: '/projects/syslib.jpg',
    video: '',
    link: 'https://seusite.com',
    repository: 'https://github.com/seuusuario/syslib',
  },
  {
    title: 'Portfólio pessoal',
    description:
      'Landing page pessoal para apresentar experiências, projetos, habilidades e contatos.',
    techs: ['Angular', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/portfolio.jpg',
    video: '',
    link: '',
    repository: '',
  },
];

export const JOBS: Experience[] = [
  {
    title: 'Auxiliar ou Analista de TI',
    place: 'Nome da empresa',
    period: '2024 até atualmente',
    description:
      'Atuação com suporte, desenvolvimento de soluções internas, automações, sistemas web e melhoria de processos.',
    image: '/experience/trabalho.jpg',
  },
];

export const STUDIES: Experience[] = [
  {
    title: 'Curso ou Faculdade',
    place: 'Nome da instituição',
    period: '2024 até atualmente',
    description:
      'Estudos voltados para desenvolvimento de sistemas, lógica de programação, banco de dados e tecnologias web.',
    image: '/experience/estudo.jpg',
  },
];

export const CONTACT: Contact = {
  email: 'JSContato@gmail.com',
  github: 'https://github.com/JhonSalvador',
  linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-victor-salvador-201bb3227/',
};
