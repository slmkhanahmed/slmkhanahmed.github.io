import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { content } from '../data/content';

const About = () => {
  const { about, skills } = content;

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <User size={14} className="text-neon-purple" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-teal">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={about.image}
                alt="About Me"
                className="w-full object-cover aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-neon-purple/30 rounded-[2.5rem] -z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-neon-teal/30 rounded-[2.5rem] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 mb-10">
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                {about.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 font-heading text-white">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-neon-purple/50 hover:text-white hover:bg-neon-purple/10 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
