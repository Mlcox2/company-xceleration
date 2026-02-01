import { motion } from 'framer-motion';
import { Button } from './Button';
import { Target, Users, Layout, ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamMembers';

export const Solution = () => {
    const kimRiggs = TEAM_MEMBERS.find(m => m.name === 'Kim Riggs');
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
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading">
                            Here’s how our process works:
                        </h2>
                        <p className="text-xl text-text-secondary mb-8">
                            Stop guessing. Start executing with a proven operating system designed for 7 and 8-figure agencies.
                        </p>
                        <Button size="lg" className="group">
                            Book A Free Discovery Call
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
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

                {/* Kim Riggs Feature */}
                {kimRiggs && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-24 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-background via-background-card to-primary/5 border border-white/5"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/3 shrink-0">
                                <div className="relative aspect-[3/4] md:aspect-square rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={kimRiggs.image}
                                        alt={kimRiggs.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-2xl font-bold text-white font-heading">{kimRiggs.name}</h3>
                                        <p className="text-primary font-medium">{kimRiggs.role}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">
                                    Expert Leadership in Health Programs
                                </h3>
                                <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
                                    <p>{kimRiggs.bio}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
