import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamMembers';

export const TeamMember = ({ name, role, image, delay, bio, shortBio }: { name: string, role: string, image: string, delay: number, bio?: string, shortBio?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group relative max-w-sm mx-auto"
    >
        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 border border-white/10">
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-lg backdrop-blur-sm transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </div>
        <h3 className="text-2xl font-bold mb-1 text-white text-center font-heading">{name}</h3>
        <p className="text-primary font-medium text-center mb-2">{role}</p>
        <p className="text-text-secondary text-sm text-center leading-relaxed line-clamp-4">
            {shortBio || bio}
        </p>
    </motion.div>
);

export const Team = () => {
    // Filter for the leaders for the home page (Matthew, Dan)
    const leaders = TEAM_MEMBERS.filter(m => m.name.includes('Matthew') || m.name.includes('Dan'));

    return (
        <section id="team" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-white">Meet Your Scaling Partners</h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        We aren't just coaches. We are operators who have built, scaled, and exited companies.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 max-w-5xl mx-auto">
                    {leaders.map((leader, index) => (
                        <div key={leader.name} className="w-full md:w-1/3">
                            <TeamMember
                                {...leader}
                                delay={0.1 * (index + 1)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
