'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
    const [particles, setParticles] = useState<
        Array<{ id: number; x: number; y: number; size: number; duration: number }>
    >([]);

    useEffect(() => {
        const generateParticles = () => {
            const newParticles = Array.from({ length: 20 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 6 + 20,
                duration: Math.random() * 20 + 5,
            }));
            setParticles(newParticles);
        };
        generateParticles();
    }, []);

    return (
        <div className='fixed pointer-events-none inset-0 z-50 overflow-hidden'>
            {/* Floating Bubbles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className='absolute rounded-full'
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: `
              radial-gradient(circle at 30% 30%, 
                rgba(255, 255, 255, 0.9) 0%, 
                rgba(255, 255, 255, 0.6) 30%, 
                rgba(135, 206, 235, 0.4) 60%, 
                rgba(70, 130, 180, 0.2) 80%, 
                transparent 100%
              )
            `,
                        boxShadow: `
              inset -2px -2px 6px rgba(0, 0, 0, 0.2),
              inset 2px 2px 6px rgba(255, 255, 255, 0.8),
              0 0 10px rgba(135, 206, 235, 0.3)
            `,
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                    }}
                    animate={{
                        y: [0, -100, -200, -300],
                        x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 50 - 25],
                        opacity: [0, 0.8, 0.8, 0],
                        scale: [0.8, 1, 1.1, 0.9],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}>
                    {/* Bubble highlight */}
                    <div
                        className='absolute top-[20%] left-[25%] w-[35%] h-[25%] rounded-full'
                        style={{
                            background:
                                'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.2) 70%, transparent 100%)',
                            filter: 'blur(0.5px)',
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default AnimatedBackground;
