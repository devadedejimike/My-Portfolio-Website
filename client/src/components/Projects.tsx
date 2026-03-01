import { motion } from 'framer-motion'
import portfolio from '../images/portfolio.jpg';
import studease from '../images/studease.png';
import todoapp from '../images/todoapp.jpg';
import buka from '../images/buka.png';
import phonebook from '../images/phonebook.jpg';
import nexid from '../images/nexid.jpg';
import chat from '../images/chat.jpg';
import { Dot } from 'lucide-react';
import AllProjects from './AllProjects';

const Projects: React.FC = () => {
  const projects = [
    studease,
    buka,
    chat,
    nexid,
    todoapp,
    phonebook,
    portfolio
  ];

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section
  id="projects"
  className="w-full py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
>
  {/* Header */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    className="text-center mb-10"
  >
    <h2 className="font-bold text-3xl text-blue-600">Featured Projects</h2>
    <p className="text-gray-600 mt-2 max-w-xl mx-auto">
      A showcase of my recent work built with modern technologies and thoughtful design.
    </p>
  </motion.div>

  {/* Slider */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative w-full overflow-hidden"
  >
    <div className="flex animate-scroll pause-on-hover gap-8 w-max">
      {duplicatedProjects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="relative flex-none w-[420px] h-[330px] rounded-2xl bg-gray-200 flex items-center justify-center shadow-md"
        >
          <Dot size={18} className='absolute top-3 left-3 text-gray-500 shadow-lg bg-gray-200 rounded-full'/>
          <Dot size={18} className='absolute top-3 right-3 text-gray-500 shadow-lg bg-gray-200 rounded-full rotate-12'/>
          <Dot size={18} className='absolute bottom-3 right-3 text-gray-500 shadow-lg bg-gray-200 rounded-full rotate-12'/>
          <Dot size={18} className='absolute bottom-3 left-3 text-gray-500 shadow-lg bg-gray-200 rounded-full rotate-12'/>

          <div className="w-[360px] h-[260px] rounded-lg flex items-center justify-center overflow-hidden duration-300 transition-transform transform hover:scale-105 shadow-inner">
            <img
              src={project}
              className="w-full h-full object-cover"
              alt={`Project ${index + 1}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>

  <AllProjects />
</section>
  );
};

export default Projects;