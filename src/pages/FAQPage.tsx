
import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FAQS } from '../data/faqs';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                        Frequently Asked Questions
                    </motion.h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Everything you need to know about how we help organizations scale.
                    </p>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-3xl mx-auto space-y-4">
                        {FAQS.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-background-card border border-white/5 rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                                    {openIndex === index ? (
                                        <Minus className="text-primary shrink-0" />
                                    ) : (
                                        <Plus className="text-primary shrink-0" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-text-secondary leading-relaxed whitespace-pre-line border-t border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
