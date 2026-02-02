import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Play, X, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TeamMember } from '../components/Team';
import { TEAM_MEMBERS } from '../data/teamMembers';

interface TierProps {
    name: string;
    price: string;
    target: string;
    features: string[];
    popular?: boolean;
    note?: string;
}

const PricingTier = ({ name, price, target, features, popular, note }: TierProps) => (
    <div className={`relative p-8 rounded-2xl border ${popular ? 'border-primary bg-primary/5' : 'border-white/10 bg-background-card'} flex flex-col h-full`}>
        {popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                MOST POPULAR
            </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="text-4xl font-bold text-primary mb-2">{price}</div>
        {note && <p className="text-xs text-text-secondary mb-4 italic">{note}</p>}
        <p className="text-text-secondary mb-6">{target}</p>
        <div className="flex-1 space-y-4 mb-8">
            {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">{feat}</span>
                </div>
            ))}
        </div>
        <Button variant={popular ? 'primary' : 'outline'} className="w-full" onClick={() => window.location.href = '/booking'}>
            Get Started
        </Button>
    </div>
);

const Testimonial = ({ quote, author }: { quote: string, author?: string }) => (
    <div className="p-6 rounded-xl bg-background-card border border-white/5 italic text-text-secondary relative">
        <span className="absolute -top-3 -left-3 bg-primary rounded-full p-2">
            <Star className="w-4 h-4 text-white fill-current" />
        </span>
        "{quote}"
        {author && <div className="mt-4 text-sm font-bold text-white not-italic">- {author}</div>}
    </div>
);

export const Elevate = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const openVideo = () => setIsVideoModalOpen(true);
    const closeVideo = () => setIsVideoModalOpen(false);

    return (
        <div className="bg-background min-h-screen text-text-primary selection:bg-primary/30 font-body">
            <Navbar />

            <main>
                {/* Hero / VSL Section */}
                <section className="pt-32 pb-20 relative overflow-hidden">
                    <div className="container mx-auto px-6 text-center z-10 relative">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading"
                        >
                            Build Your Practice, Help More People and <span className="text-primary">Recover Lost Money</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-text-secondary mb-12"
                        >
                            So You Can Get Back More Personal Time!
                        </motion.p>

                        <div
                            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer bg-black hover:scale-[1.01] transition-transform duration-300"
                            onClick={openVideo}
                        >
                            {/* Video Placeholder/Thumbnail - In a real app, use the actual thumbnail */}
                            <div className="aspect-video relative flex items-center justify-center bg-gray-900">
                                <img
                                    src="https://storage.googleapis.com/msgsndr/nSmi03CFhTx89dc3EbIf/media/6728617c975abe47258e1f33.webp"
                                    alt="Video Thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                    </div>
                                </div>
                                <div className="absolute bottom-6 bg-black/60 px-4 py-2 rounded-lg backdrop-blur text-white text-sm font-medium z-10">
                                    Don't forget to UN-MUTE the video
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Button size="lg"
                                className="w-full md:w-auto text-xl px-12 py-6 shadow-[0_0_30px_rgba(249,115,22,0.5)] animate-pulse"
                                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                DON'T WAIT - TAKE CONTROL NOW!
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Pain Points */}
                <section className="py-20 bg-background-card/50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white mb-16">Are You Tired of Facing These Challenges Alone?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Testimonial quote="I feel like I'm drowning in paperwork and insurance claims..." />
                            <Testimonial quote="It's beyond frustrating to spend countless hours on billing, only to have claims denied..." />
                            <Testimonial quote="We've worked so hard to build this practice, but it feels like we're stuck in quicksand..." />
                            <Testimonial quote="Every day feels like a battle. We're constantly fighting fires..." />
                            <Testimonial quote="Our patients trust us to be there for them, but with all the chaos... I worry we're letting them down." />
                        </div>
                    </div>
                </section>

                {/* Conversion / Questions */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Ready for a Change?</h2>
                        <div className="space-y-8 text-left">
                            <div className="flex gap-4 items-start p-6 rounded-xl bg-background-card border border-white/5">
                                <div className="bg-red-500/10 p-3 rounded-lg text-red-500">
                                    <X size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Losing Money?</h3>
                                    <p className="text-text-secondary">Are you losing money because insurance won’t pay and won't provide clear instructions on how to solve it?</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-6 rounded-xl bg-background-card border border-white/5">
                                <div className="bg-red-500/10 p-3 rounded-lg text-red-500">
                                    <X size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Too Busy?</h3>
                                    <p className="text-text-secondary">Is running your practice making you too busy to care for your patients?</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-6 rounded-xl border border-primary/20 bg-primary/5">
                                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                    <Check size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">The Solution</h3>
                                    <p className="text-text-secondary">What if you could grow your practice and still take great care of your patients without feeling more stressed?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section id="pricing" className="py-20 bg-background-card border-y border-white/5 scroll-mt-24">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">Choose Your Path</h2>
                        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16">
                            Scalable solutions designed for your practice's specific needs.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <PricingTier
                                name="Foundation Tier"
                                price="$499/mo"
                                target="Professionals starting out or seeking a strong base."
                                features={[
                                    "Access to a supportive community",
                                    "Expert coaching from seasoned leaders",
                                    "Monthly group coaching calls with Q&A",
                                    "Ongoing guidance"
                                ]}
                            />
                            <PricingTier
                                name="Growth Tier"
                                price="$1,499/mo"
                                popular={true}
                                target="Established practices ready to scale and refine operations."
                                features={[
                                    "All Foundation Tier benefits",
                                    "Intimate group settings",
                                    "Personalized coaching sessions",
                                    "Grant writing and funding support",
                                    "KPI tracking and goal setting"
                                ]}
                            />
                            <PricingTier
                                name="Pinnacle Tier"
                                price="$2,999/mo"
                                note="*Requires $8999 engagement fee"
                                target="Advanced practices aiming for long-term strategic success."
                                features={[
                                    "All benefits of Foundation and Growth",
                                    "Comprehensive strategic planning",
                                    "Full program support",
                                    "Intensive growth strategies",
                                    "Side-by-side grant writing"
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-white">Who Are We?</h2>
                            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                                We are a team of specialists dedicated to your growth.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {TEAM_MEMBERS.map((member, index) => (
                                <TeamMember
                                    key={member.name}
                                    {...member}
                                    delay={0.1 * (index + 1)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Urgency Footer */}
                <section className="py-20 bg-gradient-to-br from-background to-primary/10">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">Don't Wait Until It's Too Late</h2>
                        <div className="max-w-2xl mx-auto text-text-secondary mb-12 space-y-4">
                            <p>Every day you wait is money lost in denied claims and operational chaos.</p>
                            <p className="text-white font-medium">Stop the bleeding. Start the healing.</p>
                        </div>
                        <Button size="lg" className="text-lg px-12" onClick={() => window.location.href = '/booking'}>
                            Join The Elevate Program
                        </Button>
                    </div>
                </section>

            </main>
            <Footer />

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
                    <button
                        onClick={closeVideo}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                    >
                        <X size={32} />
                    </button>
                    <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10">
                        <video
                            src="https://storage.googleapis.com/msgsndr/nSmi03CFhTx89dc3EbIf/media/6728624d975abe0af88e2074.mp4"
                            controls
                            autoPlay
                            className="w-full h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
