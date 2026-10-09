import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Compass, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

const AUDIENCES = [
    {
        icon: Briefcase,
        title: 'CEOs and owners',
        body: "You're carrying the weight of every change. This shows you what's really happening underneath your rollout.",
    },
    {
        icon: Users,
        title: 'Operators and managers',
        body: "You're stuck in the middle, holding it all together. This gives you the tools to lead people through the change, not just the process.",
    },
    {
        icon: Compass,
        title: 'Implementation coaches',
        body: 'EOS, Scale, Bloom, or your own system. Every one of them runs on people. This is the playbook for the part the software can\'t fix.',
    },
];

const ROLES = ['CEO or owner', 'Operator or manager', 'Implementation coach', 'Other'];

export const BookPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(ROLES[0]);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            setError('Enter your name.');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
            setError('Enter a valid email address.');
            return;
        }
        setError('');
        const subject = 'Pre-order: The Hidden Operating System';
        const body = `Please add me to the pre-order list for The Hidden Operating System.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nRole: ${role}`;
        window.location.href = `mailto:matthew@xcel.team?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSubmitted(true);
    };

    return (
        <div className="bg-background min-h-screen text-text-primary font-body">
            <Navbar />

            <main className="pt-32">
                <section className="container mx-auto px-6 mb-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute -inset-6 bg-primary/10 rounded-3xl blur-3xl" />
                                <img
                                    src="/assets/images/hidden-os-cover.jpg"
                                    alt="The Hidden Operating System by Matthew and Dan Cox"
                                    className="relative w-64 md:w-80 rounded-r-xl rounded-l-md shadow-2xl border border-slate-200"
                                />
                            </div>
                        </motion.div>

                        <div>
                            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent-dark mb-6">
                                <span className="font-semibold text-sm tracking-wide uppercase">Pre-order list open</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-navy font-heading leading-tight">
                                The Hidden Operating System
                            </h1>
                            <p className="text-xl text-text-secondary mb-4 leading-relaxed">
                                CEOs are carrying the weight. Managers are stuck in the middle, holding it all together. And great systems stall for one reason: people.
                            </p>
                            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                Matthew and Dan Cox wrote the book for the middle, where behavior decides whether the system works. Get on the pre-order list and you'll be first to know the day it's available.
                            </p>

                            {submitted ? (
                                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-navy mb-1">One last step</p>
                                        <p className="text-text-secondary">
                                            Your email app should have opened with your details filled in. Hit send and you're on the list.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4" noValidate>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-navy mb-1">Name</span>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => { setName(e.target.value); setError(''); }}
                                                placeholder="Jordan Lee"
                                                className="w-full h-11 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="block text-sm font-medium text-navy mb-1">Email</span>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                                placeholder="jordan@company.com"
                                                className="w-full h-11 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                            />
                                        </label>
                                    </div>
                                    <label className="block">
                                        <span className="block text-sm font-medium text-navy mb-1">I'm a</span>
                                        <select
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                            className="w-full h-11 px-4 rounded-lg border border-slate-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                        >
                                            {ROLES.map((r) => <option key={r}>{r}</option>)}
                                        </select>
                                    </label>
                                    {error && <p className="text-sm text-red-600">{error}</p>}
                                    <Button type="submit" size="lg" fullWidth className="group">
                                        Pre-order your copy
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <p className="text-xs text-text-secondary text-center">
                                        No payment today. We'll email you the moment it's available.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                <section className="bg-white border-y border-slate-200 py-20">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading text-center mb-12">
                            Written for everyone living through the change
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {AUDIENCES.map(({ icon: Icon, title, body }, i) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-background border border-slate-200 rounded-2xl p-6"
                                >
                                    <Icon className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
                                    <p className="text-text-secondary leading-relaxed">{body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 py-20 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-6">
                        Your people are ready. Give them the playbook.
                    </h2>
                    <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Pre-order your copy
                    </Button>
                </section>
            </main>

            <Footer />
        </div>
    );
};
