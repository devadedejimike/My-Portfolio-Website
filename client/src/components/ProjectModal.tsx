import type { Project } from '../data/Project'
import { X } from 'lucide-react'

interface Props {
  project: Project
  onClose: () => void
}

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl transform transition-all duration-300"
      >
        {/* Close Button - fixed at top of modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md text-gray-600 hover:text-black hover:bg-white transition-all duration-200"
        >
          <X size={20} />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] rounded-3xl">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-72 object-cover rounded-t-3xl"
          />

          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-600">{project.name}</h2>

            <p className="mt-6 text-gray-700 leading-relaxed text-base">
              {project.fullDescription}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10 flex-wrap">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Live Demo
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-100 text-gray-800 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal