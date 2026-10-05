import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Book = () => {
    return (
        <section id="book" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute -inset-6 bg-blue-600/20 rounded-3xl blur-3xl" />
                            <div className="relative w-64 md:w-72 aspect-[2/3] rounded-r-xl rounded-l-md bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 border border-white/10 shadow-2xl flex flex-col justify-between p-8">
                                <div className="text-blue-200 text-xs font-bold tracking-[0.25em] uppercase">Coming Soon</div>
                                <div>
                                    <div className="text-white font-heading font-bold text-3xl leading-tight mb-3">The Hidden Operating System</div>
                                    <div className="text-blue-200/80 text-sm leading-relaxed">Why human behavior, not software, runs your company</div>
                                </div>
                                <div className="text-blue-100 text-sm font-semibold tracking-wide">Matthew Cox &amp; Dan Cox</div>
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/10 rounded-l-md" />
                            </div>
                        </div>
                    </motion.div>

                    <div>
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                            <span className="font-semibold text-sm tracking-wide uppercase">The Book</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading">
                            The Hidden Operating System
                        </h2>
                        <p className="text-xl text-text-secondary mb-4 leading-relaxed">
                            The real operating system in your company isn't software. It's human behavior.
                        </p>
                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            Matthew and Dan Cox show middle managers, and the leaders above them, how behavioral habits shape every team. You'll learn to audit your own patterns and rebuild the ones holding your people back.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="group"
                                onClick={() => window.location.href = 'mailto:matthew@xcel.team?subject=Notify%20me%20when%20The%20Hidden%20Operating%20System%20launches'}
                            >
                                Get Launch Updates
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
