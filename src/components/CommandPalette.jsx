import { AnimatePresence, motion } from 'framer-motion';
import { Command, FileText, Github, Home, Linkedin, Mail, Search, User } from 'lucide-react';
import { useEffect, useState } from 'react';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const actions = [
        {
            id: 'home',
            label: 'Go to Home',
            icon: Home,
            action: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            id: 'about',
            label: 'Go to About',
            icon: User,
            action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            id: 'projects',
            label: 'Go to Projects',
            icon: Command,
            action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            id: 'contact',
            label: 'Go to Contact',
            icon: Mail,
            action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            id: 'resume',
            label: 'Download Resume',
            icon: FileText,
            action: () => window.open('/Salman CV.pdf', '_blank')
        },
        {
            id: 'github',
            label: 'Visit GitHub',
            icon: Github,
            action: () => window.open('https://github.com/slmkhanahmed', '_blank')
        },
        {
            id: 'linkedin',
            label: 'Visit LinkedIn',
            icon: Linkedin,
            action: () => window.open('https://www.linkedin.com/in/slmkhanahmed/', '_blank')
        },
    ];

    const filteredActions = actions.filter((action) =>
        action.label.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    const handleSelect = (action) => {
        action.action();
        setIsOpen(false);
        setQuery('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center px-4 border-b border-white/10">
                            <Search className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Type a command or search..."
                                className="w-full px-4 py-4 bg-transparent text-white placeholder-gray-500 outline-none"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                            />
                            <div className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">ESC</div>
                        </div>

                        <div className="max-h-[300px] overflow-y-auto py-2">
                            {filteredActions.length === 0 ? (
                                <div className="px-4 py-8 text-center text-gray-500 text-sm">
                                    No results found.
                                </div>
                            ) : (
                                filteredActions.map((action, index) => (
                                    <button
                                        key={action.id}
                                        onClick={() => handleSelect(action)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${index === selectedIndex ? 'bg-neon-purple/10 text-neon-purple' : 'text-gray-300 hover:bg-white/5'
                                            }`}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                    >
                                        <action.icon className="w-5 h-5" />
                                        <span className="flex-1">{action.label}</span>
                                        {index === selectedIndex && (
                                            <motion.span layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                                        )}
                                    </button>
                                ))
                            )}
                        </div>

                        <div className="px-4 py-2 bg-white/5 border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
                            <span>Navigation</span>
                            <div className="flex gap-2">
                                <span>↑↓ to navigate</span>
                                <span>↵ to select</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
