import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { TEAM_MEMBERS, LEAD_SYSTEM_SPECIALISTS } from '../data/teamMembers';

const leadSystemSpecialists = TEAM_MEMBERS.filter((member) => LEAD_SYSTEM_SPECIALISTS.includes(member.name as typeof LEAD_SYSTEM_SPECIALISTS[number]));
const scalingPartners = TEAM_MEMBERS.filter((member) => !LEAD_SYSTEM_SPECIALISTS.includes(member.name as typeof LEAD_SYSTEM_SPECIALISTS[number]));

export const TeamMember = ({ name, role, image, delay, bio, shortBio, linkedin }: { name: string, role: string, image: string, delay: number, bio?: string, shortBio?: string, linkedin?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group relative max-w-sm mx-auto bg-white border border-slate-200 shadow-sm rounded-2xl p-6"
    >
        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 border border-slate-200">
            <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 hover:bg-white text-white hover:text-navy rounded-lg backdrop-blur-sm transition-colors">
                            <Linkedin size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
        <h3 className="text-2xl font-bold mb-1 text-navy text-center font-heading">{name}</h3>
        <p className="text-primary font-medium text-center mb-2">{role}</p>
        <p className="text-text-secondary text-sm text-center leading-relaxed line-clamp-4">
            {shortBio || bio}
        </p>
    </motion.div>
);

export const Team = () => {
    return (
        <section id="team" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-navy">Lead System Specialists</h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        We aren't just coaches. We are operators who have built, scaled, and exited companies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center mb-20">
                    {leadSystemSpecialists.map((member, index) => (
                        <div key={member.name} className="w-full">
                            <TeamMember
                                {...member}
                                delay={0.1 * (index + 1)}
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-navy">Meet Our Scaling Partners</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
                    {scalingPartners.map((member, index) => (
                        <div key={member.name} className="w-full">
                            <TeamMember
                                {...member}
                                delay={0.1 * (index + 1)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
