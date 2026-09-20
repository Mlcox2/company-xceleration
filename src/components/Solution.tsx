
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Target, Users, Layout, ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamMembers';

export const Solution = () => {
    const steps = [
        {
            title: "Clarify the Plan",
            desc: "We walk with you to define your vision, set quarterly priorities, and align your leadership team around where you’re going and what matters now. Whether you're on Bloom Growth OS, EOS, Scaling Up, or a system you built yourselves, this is where it starts.",
            icon: Target
        },
        {
            title: "Align the Team",
            desc: "We help your team shift from good intentions to shared ownership. Clear roles, consistent meetings, and leadership accountability become the new normal, inside whatever operating system you've already chosen.",
            icon: Users
        },
        {
            title: "Install Systems That Stick",
            desc: "We don’t just hand you a system — we work alongside your team until it actually runs without us in the room. You walk away with weekly rhythm, real ownership, and traction that holds past the leadership meeting.",
            icon: Layout
        }
    ];

    return (
        <section id="process" className="py-24 bg-background-card border-y border-white/5">
            <div className="container mx-auto px-6">

                {/* Team Section - Grid with links */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 font-heading">
                        Meet Our Experts
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {TEAM_MEMBERS.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-background border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all text-center"
                            >
                                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-6 uppercase tracking-wider">{member.role}</p>

                                <a
                                    href="/team"
                                    className="inline-flex items-center text-text-secondary hover:text-white transition-colors text-sm font-medium"
                                >
                                    View Full Bio <ArrowRight className="ml-1 w-4 h-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Our Process Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading">
                            Here’s how our process works:
                        </h2>
                        <p className="text-xl text-text-secondary mb-4">
                            We're not consultants, we're system specialists. Already running Bloom Growth OS, EOS, or Scaling Up? We help your leadership team make it stick. Building your own system instead? We'll help you install one that actually runs.
                        </p>
                        <p className="text-lg text-text-secondary mb-8">
                            Stop guessing. Start executing with an operating rhythm built for growing companies, generally 10 to 250 employees and $2M to $50M in revenue.
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

            </div>
        </section>
    );
};
