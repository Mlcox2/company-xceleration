
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Target, Users, Layout, ArrowRight, Linkedin } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamMembers';

export const Solution = () => {
    const steps = [
        {
            title: "Clarify the Plan",
            desc: "We walk with you to define your vision, set quarterly priorities, and align your leadership team around where you’re going and what matters now. Core tools: Growth Plan, Quarterlies, Weekly Focus.",
            icon: Target
        },
        {
            title: "Align the Team",
            desc: "We help your team shift from good intentions to shared ownership. Clear roles, consistent meetings, and leadership accountability become the new normal. Core tools: Team Roles, Weekly Meetings, Scorecards.",
            icon: Users
        },
        {
            title: "Install Systems That Stick",
            desc: "We don’t just give you a system — we guide you to build one your team actually follows. You walk away with weekly rhythm, team ownership, and real traction. Core tools: SOPs, KPIs, Quarterly Reviews, Accountability Systems.",
            icon: Layout
        }
    ];

    return (
        <section className="py-24 bg-background-card border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading">
                            Here’s how our process works:
                        </h2>
                        <p className="text-xl text-text-secondary mb-8">
                            Stop guessing. Start executing with a proven operating system designed for 7 and 8-figure agencies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="group" onClick={() => window.location.href = '/booking'}>
                                Book A Free Discovery Call
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg" onClick={() => window.location.href = '/assessment'}>
                                Take Free Assessment
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="flex items-start gap-6 p-6 rounded-xl bg-background border border-white/5 hover:border-primary/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <step.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                    <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team Section - Stacked List */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 font-heading">
                        Meet Our Experts
                    </h2>

                    <div className="space-y-16">
                        {TEAM_MEMBERS.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col md:flex-row gap-8 items-start bg-background border border-white/5 p-8 rounded-2xl"
                            >
                                <div className="w-full md:w-1/3 shrink-0">
                                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
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
                                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                    <p className="text-primary font-medium mb-6 uppercase tracking-wider text-sm">{member.role}</p>
                                    <div className="text-text-secondary leading-relaxed whitespace-pre-wrap">
                                        {member.bio}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
