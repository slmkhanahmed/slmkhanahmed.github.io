import { Heart } from 'lucide-react';
import { content } from '../data/content';

const Footer = () => {
  const { contact } = content;

  return (
    <footer className="py-8 bg-black border-t border-white/10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 relative z-10">
        <div className="flex gap-6">
          {contact.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-purple hover:text-white hover:border-neon-purple transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <p className="text-gray-500 text-sm flex items-center gap-2">
          Made with <Heart size={14} className="text-neon-teal fill-neon-teal animate-pulse" /> by Salman Ahmed Khan
        </p>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
