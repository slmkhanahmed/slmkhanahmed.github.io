import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable elements
            const target = e.target;
            const isClickable = target.closest('a') ||
                target.closest('button') ||
                target.closest('.cursor-pointer') ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA';

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1.5,
            backgroundColor: "rgba(124, 58, 237, 0.2)",
            borderColor: "rgba(45, 212, 191, 0.8)",
            mixBlendMode: "difference"
        }
    };

    return (
        <>
            {/* Main Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-neon-purple pointer-events-none z-[9999] hidden md:block"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />

            {/* Trailing Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-neon-teal rounded-full pointer-events-none z-[9999] hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4
                }}
                transition={{
                    type: "spring",
                    stiffness: 2000,
                    damping: 50
                }}
            />
        </>
    );
};

export default CustomCursor;
