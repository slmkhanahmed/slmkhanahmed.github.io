import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30);

    // Glitch text effect
    const textTimer = setInterval(() => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
      const originalText = "INITIALIZING SYSTEM...";
      
      if (Math.random() > 0.7) {
        const glitchText = originalText.split('').map((char, index) => {
          if (Math.random() > 0.8) {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return char;
        }).join('');
        setText(glitchText);
      } else {
        setText(originalText);
      }
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-64 md:w-96">
        <div className="flex justify-between mb-2 text-neon-purple font-mono text-sm">
          <span>{text}</span>
          <span>{progress}%</span>
        </div>
        
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-purple to-neon-teal"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-500 font-mono">
          ESTABLISHING SECURE CONNECTION
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
