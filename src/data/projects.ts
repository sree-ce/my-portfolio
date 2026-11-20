import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'hrms',
    name: 'HRMS',
    tagline: 'Human Resource Management System',
    summary:
      'A full-stack HR platform that began as a self-driven project and was later adopted for internal use. I built most of its modules, from leave approvals to role-based permissions.',
    role: 'Full-Stack Developer',
    category: 'Internal product',
    stack: ['React.js', 'TypeScript', 'NestJS', 'Node.js', 'PostgreSQL', 'TypeORM', 'Redux Toolkit', 'RTK Query'],
    visual: 'hrms',
    overview:
      'HRMS is a human resource management system covering everyday HR workflows such as leave management and approvals, with access governed by roles and permissions. I developed most of the application’s modules and worked across the React frontend, the NestJS backend and the PostgreSQL database.',
    context:
      'It started as a self-driven project to strengthen my full-stack skills. As it matured, it was adopted as an internal company project, which brought real requirements and a data model that had to keep evolving with them.',
    responsibilities: [
      'Developed most of the application’s modules.',
      'Implemented leave management and its approval workflows.',
      'Implemented role-based access control and permission management.',
      'Developed backend REST APIs using NestJS.',
      'Designed the initial database entities using TypeORM.',
      'Modified database structures as requirements evolved.',
      'Worked across frontend, backend and database development.',
      'Took ownership of features throughout implementation.',
    ],
    features: [
      'Leave management',
      'Approval workflows',
      'Role-based access control',
      'Permission management',
      'REST APIs built with NestJS',
      'PostgreSQL data layer modelled with TypeORM',
    ],
    challenges: [
      {
        title: 'Owning features across the stack',
        context:
          'Most modules needed work at every layer: the interface, the API and the database entities behind them.',
        approach: [
          'Built the frontend with React, TypeScript and Redux Toolkit, using RTK Query to work with the API.',
          'Developed the matching REST endpoints in NestJS.',
          'Took each feature through implementation across frontend, backend and database.',
        ],
      },
      {
        title: 'Roles and permissions',
        context: 'Different users need access to different parts of the application.',
        approach: ['Implemented role-based access control and permission management across the application.'],
      },
      {
        title: 'Approval workflows',
        context: 'Leave requests move through an approval process rather than ending at a form submission.',
        approach: ['Implemented the leave management module together with its approval workflows.'],
      },
      {
        title: 'An evolving data model',
        context:
          'Moving from a personal project to an internal tool meant requirements kept changing, and the database had to follow.',
        approach: [
          'Designed the initial database entities with TypeORM.',
          'Modified the database structure as requirements evolved.',
        ],
      },
    ],
    note: 'HRMS was developed for internal company use. Its code, data and screenshots are not publicly available, so the visuals on this page are illustrative.',
  },
  {
    slug: 'streetlogic',
    name: 'StreetLogic',
    tagline: 'Traffic Analysis Tool',
    summary:
      'I led frontend development on this traffic analysis tool, building reusable components, application workflows and a resilient large-file video upload flow with Uppy.',
    role: 'Frontend Technical Lead',
    category: 'Client product',
    stack: ['React.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Uppy'],
    visual: 'streetlogic',
    overview:
      'StreetLogic is a traffic analysis tool. I joined after the initial application structure was in place and led frontend development from there: building features against product requirements, coordinating frontend work, reviewing code and mentoring developers.',
    context:
      'With the foundation already established, the focus was on delivering product features consistently: reusable components, application workflows and a dependable way to upload video.',
    responsibilities: [
      'Developed reusable frontend components.',
      'Implemented application workflows based on product requirements.',
      'Developed video-upload functionality using Uppy.',
      'Supported large-file uploads with progress tracking, retry handling and error management.',
      'Coordinated frontend development.',
      'Reviewed code, mentored developers and provided technical guidance.',
    ],
    features: [
      'Video upload built on Uppy',
      'Large-file upload support',
      'Upload progress tracking',
      'Retry handling for failed uploads',
      'Error management',
      'Reusable frontend components',
    ],
    challenges: [
      {
        title: 'Large video uploads',
        context:
          'Users needed to upload large video files from the browser. Transfers of that size take time and can fail partway, so the experience had to stay clear and recoverable throughout.',
        approach: [
          'Built the video-upload functionality on Uppy.',
          'Added support for large-file uploads.',
          'Implemented upload progress tracking so users can follow each upload.',
          'Implemented retry handling for uploads that fail.',
          'Implemented error management so failures are handled rather than lost.',
        ],
      },
      {
        title: 'Consistency across the frontend',
        context:
          'Several developers were building features on the same frontend, so shared building blocks and review mattered.',
        approach: [
          'Developed reusable components and implemented workflows on top of them.',
          'Reviewed code and provided technical guidance to keep frontend work aligned.',
          'Mentored developers working on the frontend.',
        ],
      },
    ],
    note: 'StreetLogic is a client product. The initial application structure was established before I joined; my work covered frontend features and leading frontend development. Visuals on this page are illustrative.',
  },
  {
    slug: 'bingo',
    name: 'Bingo',
    tagline: 'Event-Based Image Uploading Application',
    summary:
      'An event platform where administrators host events and participants join as players to upload photos. I built frontend and backend modules, REST APIs and a Stripe one-time payment integration.',
    role: 'Full-Stack Developer',
    category: 'Client product',
    stack: ['React.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'REST APIs', 'Stripe'],
    visual: 'bingo',
    overview:
      'Bingo is an event-based application. Administrators host events, and participants join them as players and upload photos from the event. I worked across the application: frontend and backend modules, REST APIs, business logic, database operations and the Stripe payment integration.',
    context:
      'Because I worked on both sides of the application, part of the job was keeping the frontend and backend in step as features were built.',
    responsibilities: [
      'Developed frontend and backend modules.',
      'Implemented application workflows.',
      'Developed REST APIs.',
      'Implemented backend business logic.',
      'Handled database operations.',
      'Integrated Stripe for one-time payment processing.',
      'Maintained frontend and backend integration across the application.',
    ],
    features: [
      'Event hosting for administrators',
      'Players joining events',
      'Event photo uploads',
      'One-time payments with Stripe',
      'REST APIs',
    ],
    challenges: [
      {
        title: 'Application workflows',
        context:
          'The application revolves around two kinds of users: administrators who host events and players who join them and upload photos.',
        approach: [
          'Implemented the application workflows on the frontend.',
          'Implemented the backend business logic behind them.',
          'Handled the supporting database operations in PostgreSQL.',
        ],
      },
      {
        title: 'Payment integration',
        context: 'The application needed to accept one-time payments through a third-party provider.',
        approach: ['Integrated Stripe and implemented one-time payment processing.'],
      },
      {
        title: 'Keeping frontend and backend in step',
        context: 'Features spanned the React frontend and the NestJS backend at the same time.',
        approach: [
          'Developed the REST APIs that the frontend consumes.',
          'Worked across the application to maintain frontend and backend integration.',
        ],
      },
    ],
    note: 'Bingo is a client product. Visuals on this page are illustrative and do not depict the actual application.',
  },
  {
    slug: 'humsum',
    name: 'Humsum',
    tagline: 'Eco Social Platform',
    summary:
      'An eco-focused social platform for a non-profit organisation. I started out fixing issues in the application and grew into building features across the React frontend and Express backend.',
    role: 'Full-Stack Developer',
    category: 'Non-profit platform',
    stack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'Material UI'],
    visual: 'humsum',
    overview:
      'Humsum is an eco-focused social platform built for a non-profit organisation. My work began with application fixes and progressed into feature development on both the frontend and the backend.',
    context:
      'This project marks a shift in my role: from maintaining an existing application to building new features for it, working with the team to implement client requirements.',
    responsibilities: [
      'Worked on application fixes.',
      'Progressed into feature development.',
      'Developed frontend features.',
      'Developed backend features.',
      'Built reusable React components.',
      'Integrated REST APIs.',
      'Collaborated with the team to implement client requirements.',
    ],
    features: [
      'Frontend features in React with Material UI',
      'Backend features with Node.js and Express.js',
      'Reusable React components',
      'REST API integration',
    ],
    challenges: [
      {
        title: 'From maintenance to feature development',
        context: 'Starting with fixes meant working within an existing codebase before building on top of it.',
        approach: [
          'Worked on application fixes first.',
          'Progressed into developing frontend and backend features.',
        ],
      },
      {
        title: 'Reusable components',
        context: 'New features needed to fit into the existing interface.',
        approach: ['Built reusable React components with Material UI.'],
      },
      {
        title: 'API integration and collaboration',
        context: 'Features depended on both the frontend and the Express backend, and on requirements from the client.',
        approach: [
          'Integrated REST APIs between the frontend and backend.',
          'Collaborated with the team to implement client requirements.',
        ],
      },
    ],
    note: 'Humsum was built for a non-profit organisation. Visuals on this page are illustrative and do not depict the actual platform.',
  },
]

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
