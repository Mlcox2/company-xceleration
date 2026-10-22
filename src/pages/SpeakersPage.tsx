
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TEAM_MEMBERS } from '../data/teamMembers';
import { Button } from '../components/Button';
import { Mail, Mic, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SPEAKER_NAMES = ['Matthew Cox, MPA, HonD', 'Dan Cox', 'Kim Riggs'];
const SPEAKERS = TEAM_MEMBERS.filter((member) => SPEAKER_NAMES.includes(member.name));

const SPEAKING_TOPICS = [
    {
        title: 'The Hidden Operating System',
        description: "Every company runs on two systems: the one on paper and the one people actually live by. This talk shows leaders how to see the behavioral habits running their teams and rebuild the ones holding them back.",
    },
    {
        title: 'Leading From the Middle',
        description: "Managers carry the CEO's vision and the frontline's reality at the same time. Practical tools for turning big priorities into weekly action without burning out the people in between.",
    },
    {
        title: 'From Meetings to Momentum',
        description: "Most leadership meetings end in good intentions. Learn how to build operating rhythms, scorecards and quarterly plans that keep a team moving long after everyone leaves the room.",
    },
    {
        title: 'Accountability Without Fear',
        description: "Accountability isn't about pressure. It's about clear seats, clear numbers and promises people keep. How to build a culture where ownership is the norm and problems surface early.",
    },
    {
        title: 'Scaling Without Breaking',
        description: "Growth exposes every crack in how a company runs. Drawn from building and selling a multi-state healthcare company, this talk covers what has to change at each stage so growth doesn't outrun the team.",
    },
];

export const SpeakersPage = () => {
    const handleBooking = (name?: string) => {
        const subject = name ? `Speaker Booking Request: ${name}` : 'General Speaker Booking Request';
        window.location.href = `mailto:matthew@xcel.team?subject=${encodeURIComponent(subject)}`;
    };

    return (
        <div className="bg-background min-h-screen text-text-primary font-body">
            <Navbar />

            <main className="pt-32">
                <section className="container mx-auto px-6 mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-navy mb-6 font-heading"
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
                        {SPEAKERS.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col group hover:border-primary/30 transition-colors shadow-sm"
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

                                <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
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

                <section className="container mx-auto px-6 mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">Speaking Topics</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            Keynotes, workshops and panels on business and leadership, built from decades of running real companies.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {SPEAKING_TOPICS.map((topic, index) => (
                            <motion.div
                                key={topic.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-primary/30 transition-colors"
                            >
                                <div className="text-accent font-bold text-sm tracking-widest mb-3">0{index + 1}</div>
                                <h3 className="text-xl font-bold text-navy mb-3 font-heading">{topic.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{topic.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <div className="grid md:grid-cols-[auto,1fr] gap-10 md:gap-16 items-center max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                                <img
                                    src="/assets/images/hidden-os-cover.jpg"
                                    alt="The Hidden Operating System by Matthew and Dan Cox"
                                    className="relative w-48 md:w-56 rounded-r-xl rounded-l-md shadow-2xl border border-slate-200"
                                />
                            </div>
                        </motion.div>

                        <div className="text-center md:text-left">
                            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-5">
                                <span className="font-semibold text-sm tracking-wide uppercase">The Book</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">
                                The Hidden Operating System
                            </h2>
                            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                                Matthew and Dan Cox wrote the book on why human behavior, not software, runs your company.
                            </p>
                            <p className="text-text-secondary mb-8 leading-relaxed">
                                Their talks bring it to the stage: how habits in the middle of an organization decide whether any system sticks, and what leaders can do about it.
                            </p>
                            <Button size="lg" className="group" onClick={() => window.location.href = '/book'}>
                                Join the Pre-Order List
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 mb-24 text-center bg-white/5 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-navy mb-4">Ready to elevate your event?</h2>
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
