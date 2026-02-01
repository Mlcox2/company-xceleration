import { motion } from 'framer-motion';
import { AlertCircle, Clock, Zap, Target } from 'lucide-react';

export const PainPoints = () => {
    const pains = [
        {
            icon: Clock,
            title: "Every decision still rolls up to you",
            desc: "Founder dependency slowing down progress."
        },
        {
            icon: AlertCircle,
            title: "Meetings lack clarity, accountability, or follow-through",
            desc: "Lack of structured communication and ownership."
        },
        {
            icon: Zap,
            title: "Your team means well—but progress feels slow and scattered",
            desc: "Inconsistent alignment across the organization."
        },
        {
            icon: Target,
            title: "You’re in growth mode, but scaling feels heavier than it should",
            desc: "Systems aren't prepared for sustainable expansion."
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-white">Still doing too much in your business?</h2>
                    <p className="text-xl text-text-secondary">It’s not a work ethic problem. It’s a structure problem.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {pains.map((pain, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-background-card border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                <pain.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{pain.title}</h3>
                            <p className="text-text-secondary leading-relaxed">{pain.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
