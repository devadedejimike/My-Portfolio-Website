import portfolio from '../images/portfolio.jpg';
import studease from '../images/studease.png';
import todoapp from '../images/todoapp.jpg';
import buka from '../images/buka.jpg';
import phonebook from '../images/phonebook.jpg'
import nexid from '../images/nexid.jpg'

const Projects: React.FC = () => {
    const projects = [
        {
            name: 'StudEase',
            badge: 'Fullstack',
            description: 'A digital support system for managing portal related issues in a school',
            stack: ['MongoDB', 'ExpressJS','ReactJs', 'NodeJS'],
            links: {
                live: '',
                github: 'https://github.com/devadedejimike/StudEase---Student-Support-Ticketing-System',
            },
            img: studease
        },
        {
            name: 'Buka',
            badge: 'Frontend',
            description: 'A landing page for an authentic Nigerian cuisine served with love in Ibadan',
            stack: ['ReactJs', 'NodeJS', 'TailwindCSS'],
            links: {
                live: 'https://bukka-app.pxxl.click',
                github: 'https://github.com/devadedejimike/Bukka-App',
            },
            img: buka
        },
        {
            name: 'Daily Task Manager',
            badge: 'Frontend',
            description:'A modern and intuitive Todo List web app that helps users organize daily activities — from chores to personal goals. Features CRUD operations powered by a JSON server backend and a clean, responsive UI built with React and TailwindCSS.',
            stack: ['ReactJS', 'TailwindCSS', 'JSON Server'],
            links: {
                live: 'https://dailytaskmanager.pxxl.click',
                github: 'https://github.com/devadedejimike/Todo-List-App-Using-ReactJs',
            },
            img: todoapp
        },
        {
            name: 'Portfolio Website',
            badge: 'Frontend',
            description: 'Mordern responsive Portfolio website built with React and TailwindCSS. Features smooth animations,etc.',
            stack: ['ReactJs','TypeScript' , 'TailwindCSS', 'ShadCN UI', 'NodeJS'],
            links: {
                live: 'https://devadedejimike.pxxl.click',
                github: 'https://github.com/devadedejimike/My-Portfolio-Website',
            },
            img: portfolio
        },
        {
            name: 'Phonebook App',
            badge: 'Fullstack',
            description:
                'A simple yet powerful contact management app that lets users add, edit, search, and delete contacts. Built with React and TailwindCSS, and powered by a JSON Server backend for storing and retrieving contact data in real-time.',
            stack: ['ReactJS', 'TailwindCSS', 'JSON Server'],
            links: {
                live: 'phonebook-app.pxxl.click',
                github: 'https://github.com/devadedejimike/Phonebook-App',
            },
            img: phonebook
        },
        {
            name: 'Daily Task Manager',
            badge: 'Frontend',
            description:'A modern and intuitive Todo List web app that helps users organize daily activities — from chores to personal goals. Features CRUD operations powered by a JSON server backend and a clean, responsive UI built with React and TailwindCSS.',
            stack: ['ReactJS', 'TailwindCSS', 'JSON Server'],
            links: {
                live: 'https://dailytaskmanager.pxxl.click',
                github: 'https://github.com/devadedejimike/Todo-List-App-Using-ReactJs',
            },
            img: todoapp
        },
        {
            name: 'NexID Landing Page',
            badge: 'Frontend',
            description:'A modern digital identity platform that allows users and organizations to create, manage, and verify secure ID cards using QR-based authentication.',
            stack: ['ReactJS', 'TailwindCSS', 'JSON Server'],
            links: {
                live: 'https://nexid.pxxl.click',
                github: 'https://github.com/devadedejimike/NexID',
            },
            img: nexid
        },

    ] 
    const duplicatedProjects = [...projects, ...projects];
    return (
        <section
            id="projects"
            className="w-full py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
        >
            <div className="text-center mb-10">
                <h2 className="font-bold text-3xl text-blue-600">Featured Projects</h2>
                <p className="text-gray-600 mt-2 max-w-xl mx-auto">A showcase of my recent work built with mordern technologies and thoughtful design.</p>
            </div>
            <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll gap-8 w-max">
            {duplicatedProjects.map((project, index) => (
                    <div
                    key={index}
                    className="flex-none w-[320px] sm:w-[380px] md:w-[420px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-[420px] box-border"
                    >
                        <img
                            src={project.img}
                            alt={project.name}
                            className="w-full h-48 object-cover rounded-t-2xl"
                        />

                        <div className="p-4 flex flex-col flex-1 text-left">
                            <span className="text-xs font-semibold text-blue-600 uppercase">
                            {project.badge}
                            </span>

                            <h3 className="text-lg font-bold text-gray-800 mt-1">{project.name}</h3>

                            <p className="text-sm text-gray-600 mt-2 flex-grow overflow-hidden whitespace-normal break-words">
                            {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                            {project.stack.map((tech) => (
                                <span
                                key={tech}
                                className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded-full"
                                >
                                {tech}
                                </span>
                            ))}
                            </div>

                            <div className="flex gap-3 mt-4">
                                {project.links.live && (
                                    <a 
                                        href={project.links.live} 
                                        target='_blank' 
                                        className="text-sm px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition"
                                        
                                    >
                                        Live Preview
                                    </a>
                                )}
                                {/* {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className="text-sm px-3 py-1 rounded-full text-white bg-gray-800 hover:bg-gray-900  transition"
                                    >
                                        Github
                                    </a>
                                )} */}
                                
                            </div>
                        </div>
                    </div>

                ))}
                </div>
            </div>

        </section>
    );
};

export default Projects;