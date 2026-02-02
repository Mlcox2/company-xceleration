
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TEAM_MEMBERS } from '../data/teamMembers';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export const TeamPage = () => {
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
                        Meet Our Experts
                    </motion.h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        We aren't just coaches. We are operators who have built, scaled, and exited companies.
                    </p>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-4xl mx-auto space-y-16">
                        {TEAM_MEMBERS.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col md:flex-row gap-8 items-start bg-background-card/50 border border-white/5 p-8 rounded-2xl"
                            >
                                <div className="w-full md:w-1/3 shrink-0">
                                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                        />
                                        {member.linkedin && (
                                            <div className="absolute bottom-4 right-4">
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-black rounded-lg hover:bg-primary hover:text-white transition-colors block">
                                                    <Linkedin size={20} />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{member.name}</h2>
                                    <p className="text-primary font-medium mb-6 uppercase tracking-wider text-sm">{member.role}</p>
                                    <div className="text-text-secondary leading-relaxed whitespace-pre-wrap text-lg">
                                        {member.bio}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
