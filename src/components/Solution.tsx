import { motion } from 'framer-motion';
import { Button } from './Button';
import { Target, Users, Layout, ArrowRight } from 'lucide-react';

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
            </div>
        </section>
    );
};
