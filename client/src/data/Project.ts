export interface Project {
  name: string
  badge: string
  description: string
  fullDescription: string
  stack: string[]
  links: {
    live?: string
    github?: string
  }
  img: string
}

import portfolio from '../images/portfolio.jpg'
import studease from '../images/studease.png'
import todoapp from '../images/todoapp.jpg'
import buka from '../images/buka.png'
import phonebook from '../images/phonebook.jpg'
import nexid from '../images/nexid.jpg'
import chat from '../images/chat.jpg'

export const projects: Project[] = [
  {
    name: 'StudEase',
    badge: 'Fullstack',
    description: 'A digital support system for managing portal related issues in a school.',
    fullDescription:
      'StudEase is a fullstack student support ticketing system built with the MERN stack. It allows students to submit issues related to school portals while administrators can track, respond, and resolve tickets efficiently. The backend includes structured MongoDB schemas, authentication logic, and role based access control.',
    stack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
    links: {
      github: 'https://github.com/devadedejimike/StudEase---Student-Support-Ticketing-System',
    },
    img: studease,
  },
  {
    name: 'Buka',
    badge: 'Frontend',
    description: 'A landing page for an authentic Nigerian cuisine brand in Ibadan.',
    fullDescription:
      'Buka is a responsive restaurant landing page designed with React and TailwindCSS. It focuses on clean layout structure, responsive design principles, and user engagement through modern UI techniques.',
    stack: ['ReactJS', 'TailwindCSS'],
    links: {
      live: 'https://bukka-app.pxxl.click',
      github: 'https://github.com/devadedejimike/Bukka-App',
    },
    img: buka,
  },
  {
    name: 'Chat System',
    badge: 'Fullstack',
    description: 'A real time chat system with authentication and messaging.',
    fullDescription:
      'A fullstack chat system built with NodeJS, Express, and MongoDB. Includes JWT authentication, chat schema design, message persistence, and real time communication logic. Designed with scalability and clean API structure in mind.',
    stack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
    links: {
      github: 'https://github.com/devadedejimike/Chat-Frontend',
    },
    img: chat,
  },
  {
    name: 'NexID',
    badge: 'Frontend',
    description: 'A modern digital identity platform landing page.',
    fullDescription:
      'NexID is a digital identity platform concept focused on secure QR based ID verification. The landing page was built using React and TailwindCSS with emphasis on branding, product positioning, and clean responsive layout.',
    stack: ['ReactJS', 'TailwindCSS'],
    links: {
      live: 'https://nexid.pxxl.click',
      github: 'https://github.com/devadedejimike/NexID',
    },
    img: nexid,
  },
  {
    name: 'Phonebook App',
    badge: 'Fullstack',
    description: 'A contact management system with CRUD operations.',
    fullDescription:
      'A fullstack contact management application allowing users to add, edit, search, and delete contacts. Backend logic handles data persistence while frontend ensures responsive user experience.',
    stack: ['ReactJS', 'TailwindCSS', 'JSON Server'],
    links: {
      github: 'https://github.com/devadedejimike/Phonebook-App',
    },
    img: phonebook,
  },
  {
    name: 'Daily Task Manager',
    badge: 'Frontend',
    description: 'A modern task manager for organizing daily activities.',
    fullDescription:
      'A task management web application built with React and TailwindCSS. Implements CRUD functionality and structured component design to maintain clean state logic.',
    stack: ['ReactJS', 'TailwindCSS', 'JSON Server'],
    links: {
      github: 'https://github.com/devadedejimike/Todo-List-App-Using-ReactJs',
    },
    img: todoapp,
  },
  {
    name: 'Portfolio Website',
    badge: 'Frontend',
    description: 'My personal portfolio built with React and TypeScript.',
    fullDescription:
      'A responsive portfolio website showcasing projects, skills, and experience. Built with React, TypeScript, TailwindCSS, and component based architecture for scalability.',
    stack: ['ReactJS', 'TypeScript', 'TailwindCSS'],
    links: {
      live: 'https://devadedejimike.pxxl.click',
      github: 'https://github.com/devadedejimike/My-Portfolio-Website',
    },
    img: portfolio,
  },
]