
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PainPoints } from '../components/PainPoints';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const TestimonialsPage = () => {
    return (
        <div className="bg-background min-h-screen text-text-primary font-body">
            <Navbar />

            <main className="pt-32">
                <section className="container mx-auto px-6 mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading"
                    >
                        Client Success Stories
                    </motion.h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        See what happens when leaders decide to stop settling and start growing.
                    </p>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <div className="masonry-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((t, idx) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-background-card p-8 rounded-2xl border border-white/5 mb-8 break-inside-avoid relative group hover:border-primary/30 transition-colors"
                            >
                                <Quote className="absolute top-6 right-6 text-primary/10 w-10 h-10 rotate-180" />

                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                    ))}
                                </div>

                                <p className="text-text-secondary mb-6 leading-relaxed relative z-10">
                                    "{t.quote}"
                                </p>

                                <div className="border-t border-white/5 pt-4">
                                    <div className="font-bold text-white text-lg">{t.author}</div>
                                    {t.role && <div className="text-sm text-primary">{t.role}</div>}
                                    {t.company && <div className="text-sm text-text-secondary italic">{t.company}</div>}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <PainPoints />
            </main>

            <Footer />
        </div>
    );
};
