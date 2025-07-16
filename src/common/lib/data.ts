import React from 'react';

import auditMasterImg from '@/../public/images/audit-master.png';
import bloomieImg from '@/../public/images/bloomie.svg';
import bricksImg from '@/../public/images/bricks-new.png';
import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import portfolioImg from '@/../public/images/portfolio.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import UtomImg from '@/../public/images/utom.svg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'DA INC LIMITED ',
    location: 'Upper Walthamstow Road, London E17 3QQ.',
    description:
      'Front-end Developer. I build responsive web interfaces using React, Next.js, TypeScript, and TailwindCSS. I integrate APIs, develop reusable components, and collaborate with teams to deliver features efficiently. My work has helped reduce bugs, cut costs by 20%, and improve development speed by 25%.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jan 2025 - Present',
  },
  {
    title: 'Peddle Technologies',
    location: 'Lagos, Nigeria',
    description:
      'Fullstack Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development, handling DevOps on Digital Ocean.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'August 2022 - July 2023',
  },
  {
    title: ' Idorak Nigeria Limited',
    location: 'Abuja, Nigeria',
    description: `Front-end Developer. Responsible for implemntation of accessible and interactive interface. Working on various projects with AI integration..`,
    icon: React.createElement(BookIcon),
    date: 'May 2021 - Jun 2022',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Utom Ai',
    description: `Utom provides an on-demand AI workforce that helps startups automate busywork, boost efficiency, and scale faster—without increasing headcount or compromising agility.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Python',
      'Tailwind',
      'Zod',
      'Gasp',
    ],
    imageUrl: UtomImg,
    link: 'https://www.utom.dev/',
  },
  {
    title: 'Bloomie',
    description: `Adaptive learning for your child. Experience learning that evolves with your child, adapting to their pace and progress.`,
    tags: [
      'Next.js',
      'TypeScript',
      'Python',
      'NextAuth',
      'Tailwind',
      'Zod',
      'Shadcn',
    ],
    imageUrl: bloomieImg,
    link: 'https://www.bloomie.com/',
  },
  {
    title: 'Audit Master',
    description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, Due Diligence & more.`,
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'SCRUM Methodology'],
    imageUrl: auditMasterImg,
    link: 'https://auditmaster.ai/',
  },
  {
    title: 'Bricks Development Technology',
    description:
      'Empowering Your Vision with Scalable, Intelligent Software Solutions. ',
    tags: ['TypeScript', 'Nextjs', 'Next.js', 'Tailwind'],
    imageUrl: bricksImg,
    link: 'https://brickdev.vercel.app/',
  },
  {
    title: 'FileDrive',
    description:
      'A platform for decentralized file storage with robust user management.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Convex',
      'Clerk',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/bbyc4kes/file-drive',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/moebrainz/mosesumana',
  },

  {
    title: 'Surge',
    description:
      'Service that allows users to build and manage their own websites with integrated payment processing.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'MySQL',
      'Clerk',
      'Stripe Connect',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/bbyc4kes/surge',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Golang', '/svgs/golang.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
