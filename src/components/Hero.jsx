import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { content } from '../data/content';

const Hero = () => {
  const { hero } = content;

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-neon-purple/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-neon-teal/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-default"
          >
            <Sparkles size={16} className="text-neon-teal" />
            <span className="text-gray-300 font-medium tracking-wide text-sm">Welcome to my universe</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] font-heading tracking-tight">
            <span className="block text-white mix-blend-difference">I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              {hero.title}
            </span>
          </h1>

          <div className="text-2xl md:text-4xl font-bold mb-8 h-12 flex items-center gap-3">
            <span className="text-gray-400 font-light">I build</span>
            <div className="text-neon-purple drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              <Typewriter
                options={{
                  strings: [hero.role, "Digital Experiences", "Future Tech", "Solutions"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursor: '_',
                }}
              />
            </div>
          </div>

          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed border-l-2 border-neon-teal/30 pl-6">
            {hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all cursor-pointer flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">{hero.ctaPrimary}</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-teal to-neon-purple opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>

            <a
              href="/Salman CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 hover:border-white/40 transition-all cursor-pointer flex items-center gap-2 backdrop-blur-sm"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* 3D Tilt Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:flex items-center justify-center perspective-1000"
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-square max-w-lg cursor-pointer"
          >
            {/* Abstract Shapes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-teal rounded-full opacity-20 blur-[80px] animate-pulse -z-10" />

            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group shadow-2xl transform-style-3d">

              {/* Holographic Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none mix-blend-overlay" />

              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            </div>

            {/* Floating Elements with Parallax */}
            <motion.div
              style={{ translateZ: 50 }}
              className="absolute -top-8 -right-8 bg-[#1a1a1a] p-4 rounded-2xl border border-white/10 shadow-2xl shadow-neon-purple/20 z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neon-teal animate-pulse shadow-[0_0_10px_#2dd4bf]" />
                <span className="text-sm font-bold text-white">Open to work</span>
              </div>
            </motion.div>

            <motion.div
              style={{ translateZ: 80 }}
              className="absolute -bottom-8 -left-8 bg-[#1a1a1a]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl z-30"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🚀</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Experience</p>
                  <p className="text-xl font-bold text-white">2+ Years</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
