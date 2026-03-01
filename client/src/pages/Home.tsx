import { motion } from 'framer-motion'
import devadedejimikeCV from '../Resume/devadedejimikeCV.pdf'

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-blue-100 to-green-100"
      >
        {/* Name */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Hey👋, I&apos;m{' '}
          <span className="text-blue-600">Adeyemi Adedeji Michael</span>.
        </motion.h2>

        {/* Role */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Fullstack JavaScript Developer
        </motion.p>

        {/* Description */}
        <motion.p
          className="max-w-2xl text-gray-600 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          I craft beautiful, responsive web applications using modern technologies.
          <br />
          Passionate about creating exceptional user experiences and writing clean, scalable code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="space-x-6 p-3 font-medium"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <button className="px-6 py-3 bg-white rounded-full hover:bg-blue-300 hover:text-white">
            <a href="#contact">Hire Me</a>
          </button>
          <button className="px-6 py-3 bg-blue-100 rounded-full hover:bg-blue-300 hover:text-white">
            <a href={devadedejimikeCV} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default Home