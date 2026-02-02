
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const current = TESTIMONIALS[currentIndex];

    return (
        <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-top-left scale-110 opactiy-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                        Client Success
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Hear from the teams we've helped transform.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-background-card/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl relative min-h-[300px] flex flex-col justify-center">
                        <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16 rotate-180" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl text-text-secondary text-center mb-10 leading-relaxed font-light italic">
                                    "{current.quote}"
                                </p>
                                <div className="flex flex-col items-center">
                                    <div className="font-bold text-white text-lg">{current.author}</div>
                                    {current.role && <div className="text-primary">{current.role}</div>}
                                    {current.company && <div className="text-sm text-text-secondary mt-1">{current.company}</div>}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full px-2 md:-mx-16 pointer-events-none">
                            <button
                                onClick={handlePrev}
                                className="pointer-events-auto p-3 rounded-full bg-background border border-white/10 text-white hover:bg-primary hover:border-primary transition-all shadow-lg transform hover:scale-110"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="pointer-events-auto p-3 rounded-full bg-background border border-white/10 text-white hover:bg-primary hover:border-primary transition-all shadow-lg transform hover:scale-110"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {TESTIMONIALS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
