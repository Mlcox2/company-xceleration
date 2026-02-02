
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { BookOpen, MonitorPlay, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const ResourcesPage = () => {
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
                        Books & Courses
                    </motion.h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Deepen your knowledge with our curated learning materials. From leadership principles to technical skill-building, these resources are designed to help you execute.
                    </p>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                        {/* Book Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-background-card border border-white/5 rounded-3xl overflow-hidden flex flex-col group hover:border-primary/30 transition-all"
                        >
                            <div className="h-64 bg-gradient-to-br from-blue-900 to-slate-900 relative flex items-center justify-center p-8">
                                <BookOpen className="text-white/20 w-32 h-32 absolute rotate-12" />
                                <div className="z-10 text-center">
                                    <h3 className="text-3xl font-bold text-white font-heading mb-2">Courage to Learn</h3>
                                    <p className="text-white/80">by Matthew Cox</p>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-primary uppercase tracking-wider text-sm font-bold mb-4">
                                    <BookOpen size={16} />
                                    <span>Featured Book</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Unlocking Potential and Growth</h3>
                                <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                                    Discover the principles of learning and leadership that have helped countless organizations scale. This book provides a roadmap for personal and professional development, drawing on decades of experience in high-stakes environments.
                                </p>
                                <Button
                                    fullWidth
                                    onClick={() => window.open('https://courage-to-learn-platform.vercel.app/', '_blank')}
                                >
                                    Get the Book <ExternalLink className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Course Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-background-card border border-white/5 rounded-3xl overflow-hidden flex flex-col group hover:border-primary/30 transition-all"
                        >
                            <div className="h-64 bg-gradient-to-br from-emerald-900 to-slate-900 relative flex items-center justify-center p-8">
                                <MonitorPlay className="text-white/20 w-32 h-32 absolute -rotate-6" />
                                <div className="z-10 text-center relative max-w-md">
                                    <h3 className="text-2xl font-bold text-white font-heading mb-2">Master Insurance & Medicaid Billing</h3>
                                    <p className="text-white/80">Community Health Worker Training</p>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-emerald-400 uppercase tracking-wider text-sm font-bold mb-4">
                                    <MonitorPlay size={16} />
                                    <span>Online Course</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Technical Skills for Scale</h3>
                                <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                                    A comprehensive deep-dive into the critical systems of insurance and Medicaid billing. Designed for Community Health Workers and agency leaders looking to optimize their revenue cycle and compliance.
                                </p>
                                <Button
                                    variant="outline"
                                    fullWidth
                                    onClick={() => window.open('https://nas.io/company-xceleration/events/community-health-worker-training-master-insurance-medicaid-billing', '_blank')}
                                >
                                    Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>

                    </div>
                </section>

                <section className="container mx-auto px-6 mb-24 text-center">
                    <p className="text-text-secondary mb-6">Looking for custom training for your team?</p>
                    <a href="/booking" className="text-primary hover:text-white transition-colors font-medium inline-flex items-center">
                        Book a consultation <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
};
