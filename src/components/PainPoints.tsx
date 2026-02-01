import { motion } from 'framer-motion';
import { AlertCircle, Clock, Zap } from 'lucide-react';

export const PainPoints = () => {
    const pains = [
        {
            icon: Clock,
            title: "Trapped in Operations",
            desc: "You're the bottleneck. Every decision, big or small, still has to go through you."
        },
        {
            icon: AlertCircle,
            title: "Team misalignment",
            desc: "Your team is busy, but they aren't moving the needle on the things that actually matter."
        },
        {
            icon: Zap,
            title: "Inconsistent Growth",
            desc: "Revenue is up and down. You don't have a predictable system for scaling."
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Still doing too much in your business?</h2>
                    <p className="text-xl text-text-secondary">It’s not a work ethic problem. It’s a structure problem.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pains.map((pain, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <pain.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{pain.title}</h3>
                            <p className="text-text-secondary leading-relaxed">{pain.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
