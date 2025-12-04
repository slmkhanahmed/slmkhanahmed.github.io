import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import About from './components/About';
import CommandPalette from './components/CommandPalette';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Starfield from './components/Starfield';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="min-h-screen text-white selection:bg-neon-purple selection:text-white cursor-none relative">
            <AnimatePresence mode="wait">
                {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <Starfield />
                    <CustomCursor />
                    <ScrollProgress />
                    <CommandPalette />
                    <Navbar />
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                    <Footer />
                    <ScrollToTop />
                </>
            )}
    </div>
    );
}

export default App;
