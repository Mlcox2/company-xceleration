import { motion } from 'framer-motion';
import { Settings, Users, Mountain, ArrowRight } from 'lucide-react';

export const Offers = () => {
    const offers = [
        {
            icon: Settings,
            title: 'Operating System Implementation',
            desc: 'A 12-month engagement to install the full operating system with your leadership team: meeting rhythm, quarterly priorities, scorecards and real accountability. Bloom Growth OS, EOS, Scaling Up, or the system you already run.',
            href: '/booking',
            cta: 'Learn More',
        },
        {
            icon: Users,
            title: 'Leadership Team Coaching',
            desc: 'Ongoing coaching for founders and their managers, grounded in 20 years of building, scaling and exiting real companies. The system only works when the humans running it change how they lead.',
            href: '/booking',
            cta: 'Learn More',
        },
        {
            icon: Mountain,
            title: 'The Lakehouse Retreat',
            desc: 'Three days at a Utah lakehouse with your leadership team. You leave with your annual plan, your seats and your meeting rhythm built, not a binder that sits on a shelf.',
            href: '/booking',
            cta: 'Learn More',
        },
    ];

    return (
        <section id="offers" className="py-24 bg-background-card border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-white">Three ways to work with us</h2>
                    <p className="text-xl text-text-secondary">Start where your business is. Every path begins with a free discovery call.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {offers.map((offer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-colors group flex flex-col"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <offer.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{offer.title}</h3>
                            <p className="text-text-secondary leading-relaxed mb-6 flex-grow">{offer.desc}</p>
                            <a
                                href={offer.href}
                                className="inline-flex items-center text-primary hover:text-primary-light transition-colors font-semibold"
                            >
                                {offer.cta} <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
