import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-white">
                        See what your business really runs on.
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Book a free discovery call, or start with the free assessment and get your results in minutes.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button size="lg" className="group" onClick={() => window.location.href = '/booking'}>
                            Book A Free Discovery Call
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="inverse" size="lg" onClick={() => window.location.href = '/assessment'}>
                            Take Free Assessment
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
