import { motion } from 'framer-motion';
import { Button } from './Button';
import { Target, Users, Layout, ChevronRight } from 'lucide-react';

export const Solution = () => {
    const steps = [
        {
            title: "Clarify the Plan",
            desc: "We define exactly where you're going and the metrics that matter.",
            icon: Target
        },
        {
            title: "Align the Team",
            desc: "Get everyone rowing in the same direction with clear ownership.",
            icon: Users
        },
        {
            title: "Build the System",
            desc: "Install the operating system that makes growth predictable.",
            icon: Layout
        }
    ];

    return (
        <section className="py-24 bg-card/30 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            We Help You Build the Infrastructure to Scale — <span className="text-primary">Without Burning Out</span>
                        </h2>
                        <p className="text-xl text-text-secondary mb-8">
                            Stop guessing. Start executing with a proven operating system designed for 7 and 8-figure agencies.
                        </p>
                        <Button size="lg">
                            See How It Works
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
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-text-secondary">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
