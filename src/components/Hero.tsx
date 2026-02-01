import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/images/hero-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                        <span className="font-semibold text-sm tracking-wide uppercase">Operational Freedom & Scale</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                        Build a Business That Runs With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-dark">Structure</span> — Not Stress
                    </h1>

                    <p className="text-xl text-text-secondary mb-8 leading-relaxed max-w-lg">
                        Company Xceleration helps growth-minded founders eliminate chaos, align their team, and finally lead with clarity.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="group">
                            Book Your Discovery Call
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="secondary" size="lg">
                            Take Free Assessment
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-sm text-text-secondary">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-background flex items-center justify-center text-xs">
                                    User
                                </div>
                            ))}
                        </div>
                        <p>Trusted by 100+ Founders</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-3xl" />
                    <img
                        src="/assets/images/hero-graphic.jpg"
                        alt="Dashboard Preview"
                        className="relative rounded-2xl shadow-2xl border border-white/10"
                    />
                </motion.div>
            </div>
        </section>
    );
};
