
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TEAM_MEMBERS } from '../data/teamMembers';
import { Button } from '../components/Button';
import { Mail, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

export const SpeakersPage = () => {
    const handleBooking = (name?: string) => {
        const subject = name ? `Speaker Booking Request: ${name}` : 'General Speaker Booking Request';
        window.location.href = `mailto:matthew@xcelteam.com?subject=${encodeURIComponent(subject)}`;
    };

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
                        Book Our Speakers
                    </motion.h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                        Bring industry-leading expertise to your next event. Our team of seasoned operators and leaders are available for keynotes, workshops, and panels.
                    </p>
                    <Button size="lg" onClick={() => handleBooking()}>
                        <Mail className="w-5 h-5 mr-2" />
                        Inquire For Booking
                    </Button>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {TEAM_MEMBERS.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-background-card border border-white/5 p-6 rounded-2xl flex flex-col group hover:border-primary/30 transition-colors"
                            >
                                <div className="relative aspect-square mb-6 rounded-xl overflow-hidden border border-white/10">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Mic size={20} />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</p>

                                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-4 flex-grow">
                                    {member.bio}
                                </p>

                                <Button variant="outline" fullWidth onClick={() => handleBooking(member.name)}>
                                    Book {member.name.split(' ')[0]}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-6 mb-24 text-center bg-white/5 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to elevate your event?</h2>
                    <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                        Contact us directly to discuss availability, topics, and how we can add value to your audience.
                    </p>
                    <Button size="lg" onClick={() => handleBooking()}>
                        Contact Booking Team
                    </Button>
                </section>
            </main>

            <Footer />
        </div>
    );
};
