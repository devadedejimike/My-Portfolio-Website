import { motion } from "framer-motion"
import { useState } from "react"
import type { Project } from "../data/Project"
import { projects } from "../data/Project"
import ProjectModal from "./ProjectModal"

const AllProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAll, setShowAll] = useState(false)

  // Only show first 4 unless expanded
  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-white">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-blue-600">All Projects</h2>
        <p className="text-gray-600 mt-2">
          Detailed breakdown of my work.
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-5xl mx-auto justify-center"
      >
        {visibleProjects.map((project) => (
          <motion.div
            key={project.name}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs bg-blue-600 text-white font-semibold px-3 py-1 w-fit rounded-full">
                {project.badge}
              </span>

              <h3 className="text-lg font-bold mt-4">
                {project.name}
              </h3>

              <p className="text-sm text-gray-600 mt-3 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="w-full mt-5 p-3 border rounded text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      {projects.length > 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border border-blue-500 text-blue-500 hover:text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            {showAll ? "View Less" : "View More Projects"}
          </button>
        </motion.div>
      )}

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default AllProjects