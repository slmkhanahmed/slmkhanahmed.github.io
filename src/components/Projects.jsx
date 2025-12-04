import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { content } from '../data/content';

import { Layers } from 'lucide-react';

const Projects = () => {
  const { projects } = content;

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-neon-teal/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Layers size={14} className="text-neon-teal" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Portfolio</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-teal">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A collection of digital experiences, applications, and experiments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#1a1a1a] border border-white/5 rounded-3xl overflow-hidden hover:border-neon-purple/30 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-lg hover:shadow-neon-purple/10"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10 opacity-80" />

                {/* Image Hover Effect */}
                <div className="absolute inset-0 bg-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />

                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-neon-purple hover:text-white transition-all border border-white/10"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-neon-teal hover:text-black transition-all border border-white/10"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20 -mt-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neon-teal transition-colors font-heading">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm border-l-2 border-white/5 pl-4 group-hover:border-neon-purple/50 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/5 rounded-full text-gray-400 group-hover:text-white group-hover:border-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
