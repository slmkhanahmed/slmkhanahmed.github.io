import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { content } from '../data/content';

import { Star } from 'lucide-react';

const Experience = () => {
  const { experience } = content;

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star size={14} className="text-neon-purple" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Career Path</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-teal">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-neon-purple/50 via-neon-teal/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-3 h-3 bg-black rounded-full border-2 border-neon-teal z-10 shadow-[0_0_15px_rgba(45,212,191,0.5)] group-hover:scale-125 transition-transform" />

                <div className="flex-1 md:w-1/2"></div>

                <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                  <div className={`relative bg-[#1a1a1a]/60 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-neon-teal/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-teal/5 ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'
                    }`}>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2 text-neon-teal">
                        <Briefcase size={18} />
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-teal transition-colors font-heading">{exp.role}</h3>
                      </div>

                      <h4 className="text-lg font-medium text-gray-300 mb-4">{exp.company}</h4>

                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>

                      <p className="text-gray-400 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
