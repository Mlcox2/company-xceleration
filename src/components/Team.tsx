import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const TeamMember = ({ name, role, image, delay }: { name: string, role: string, image: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group relative"
    >
        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6">
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-lg backdrop-blur-sm transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-lg backdrop-blur-sm transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </div>
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-primary font-medium">{role}</p>
    </motion.div>
);

export const Team = () => {
    return (
        <section id="team" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Your Scaling Partners</h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        We aren't just coaches. We are operators who have built, scaled, and exited companies.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <TeamMember
                        name="Dr. JD Bock"
                        role="Systems & Simplification"
                        image="/assets/images/jd-bock.webp"
                        delay={0}
                    />
                    <TeamMember
                        name="Matthew Cox"
                        role="Leadership & Clarity"
                        image="/assets/images/matthew-cox.webp"
                        delay={0.1}
                    />
                    <TeamMember
                        name="Dan Cox"
                        role="Operations & Execution"
                        image="/assets/images/dan-cox.jpg"
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};
