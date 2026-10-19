import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { identifyContact } from '../lib/hubspot';

const WINS = [
    'A more aligned leadership team',
    'Clearer quarterly priorities',
    'Better meetings and follow-through',
    'Stronger accountability',
];

const inputClass =
    'w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none';

const QuestionCard = ({ num, children }: { num: number; children: React.ReactNode }) => (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex gap-4 items-start">
            <span className="shrink-0 w-9 h-9 rounded-full bg-accent/10 text-accent-dark font-bold grid place-items-center">
                {num}
            </span>
            <div className="flex-1 min-w-0 space-y-4">{children}</div>
        </div>
    </div>
);

export const FeedbackPage = () => {
    const [wins, setWins] = useState<string[]>([]);
    const [otherChecked, setOtherChecked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const toggleWin = (w: string) =>
        setWins((prev) => (prev.includes(w) ? prev.filter((x) => x !== w) : [...prev, w]));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const get = (k: string) => String(data.get(k) || '').trim();

        if (!get('firstname')) {
            setError('Enter your first name.');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(get('email'))) {
            setError('Enter a valid email address.');
            return;
        }
        if (!get('testimonial')) {
            setError('Add a few words for your testimonial in question 5.');
            return;
        }
        setError('');
        identifyContact({
            email: get('email'),
            firstname: get('firstname'),
            lastname: get('lastname'),
            company: get('company'),
        });
        window.setTimeout(() => {
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400);
    };

    return (
        <div className="bg-background min-h-screen text-text-primary font-body">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-2xl">
                    <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent-dark mb-6">
                        <span className="font-semibold text-sm tracking-wide uppercase">Bloom Growth Coaching</span>
                    </div>

                    {submitted ? (
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex gap-4 items-start">
                            <CheckCircle2 className="w-7 h-7 text-primary shrink-0 mt-1" />
                            <div>
                                <h1 className="text-3xl font-bold text-navy font-heading mb-2">Thank you, {firstName.trim()}.</h1>
                                <p className="text-text-secondary text-lg leading-relaxed">
                                    Your feedback means a lot. It helps us keep doing what's working and shows other business owners what coaching can do.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy font-heading leading-tight">
                                How has coaching changed your business?
                            </h1>
                            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                                Five quick questions, about five minutes. Your answers help Matthew keep doing what's working, and help other business owners see what coaching can do.
                            </p>

                            <form onSubmit={handleSubmit} id="coaching-feedback-form" name="coaching-feedback" className="space-y-5" noValidate>
                                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-navy mb-1">First name</span>
                                            <input type="text" name="firstname" autoComplete="given-name" value={firstName}
                                                onChange={(e) => { setFirstName(e.target.value); setError(''); }} className={inputClass} />
                                        </label>
                                        <label className="block">
                                            <span className="block text-sm font-medium text-navy mb-1">Last name</span>
                                            <input type="text" name="lastname" autoComplete="family-name" className={inputClass} />
                                        </label>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-navy mb-1">Email</span>
                                            <input type="email" name="email" autoComplete="email" onChange={() => setError('')} className={inputClass} />
                                        </label>
                                        <label className="block">
                                            <span className="block text-sm font-medium text-navy mb-1">Company</span>
                                            <input type="text" name="company" autoComplete="organization" className={inputClass} />
                                        </label>
                                    </div>
                                </div>

                                <QuestionCard num={1}>
                                    <label className="block">
                                        <span className="block text-lg font-semibold text-navy mb-3">
                                            What was the biggest challenge in your business before we started working together?
                                        </span>
                                        <textarea name="feedback_challenge" rows={4} placeholder="Before coaching, our biggest challenge was..." className={inputClass} />
                                    </label>
                                </QuestionCard>

                                <QuestionCard num={2}>
                                    <fieldset>
                                        <legend className="text-lg font-semibold text-navy">
                                            What's the biggest win you've seen since starting Bloom Growth coaching?
                                        </legend>
                                        <p className="text-sm text-text-secondary mt-1 mb-3">Pick as many as apply.</p>
                                        <div className="space-y-2">
                                            {WINS.map((w) => (
                                                <label key={w} className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${wins.includes(w) ? 'border-primary bg-primary/5' : 'border-slate-300 bg-white'}`}>
                                                    <input type="checkbox" name="feedback_wins" value={w} checked={wins.includes(w)} onChange={() => toggleWin(w)} className="w-4 h-4 accent-primary" />
                                                    {w}
                                                </label>
                                            ))}
                                            <label className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${otherChecked ? 'border-primary bg-primary/5' : 'border-slate-300 bg-white'}`}>
                                                <input type="checkbox" name="feedback_wins" value="Other" checked={otherChecked} onChange={(e) => setOtherChecked(e.target.checked)} className="w-4 h-4 accent-primary" />
                                                Other
                                            </label>
                                            {otherChecked && (
                                                <input type="text" name="feedback_wins_other" placeholder="Tell us your win" className={inputClass} autoFocus />
                                            )}
                                        </div>
                                    </fieldset>
                                </QuestionCard>

                                <QuestionCard num={3}>
                                    <label className="block">
                                        <span className="block text-lg font-semibold text-navy mb-3">
                                            What's Matthew's greatest strength as your coach, and how has it helped you?
                                        </span>
                                        <textarea name="feedback_strength" rows={4} placeholder="What I appreciate most about Matthew is..." className={inputClass} />
                                    </label>
                                </QuestionCard>

                                <QuestionCard num={4}>
                                    <fieldset className="space-y-3">
                                        <legend className="text-lg font-semibold text-navy mb-3">
                                            Would you recommend Matthew to another business owner?
                                        </legend>
                                        {['Yes, absolutely', 'Yes'].map((v) => (
                                            <label key={v} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-300 bg-white cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                                <input type="radio" name="feedback_recommend" value={v} className="w-4 h-4 accent-primary" />
                                                {v}
                                            </label>
                                        ))}
                                    </fieldset>
                                    <label className="block">
                                        <span className="block text-sm font-semibold text-navy mb-2">What would you tell them?</span>
                                        <textarea name="feedback_recommend_why" rows={3} placeholder="If you're thinking about getting a coach..." className={inputClass} />
                                    </label>
                                </QuestionCard>

                                <QuestionCard num={5}>
                                    <label className="block">
                                        <span className="block text-lg font-semibold text-navy">Share your testimonial in your own words.</span>
                                        <span className="block text-sm text-text-secondary mt-1 mb-3">
                                            Not sure where to start? Try: "Before working with Matthew, I... Now, I..."
                                        </span>
                                        <textarea name="testimonial" rows={7} onChange={() => setError('')}
                                            placeholder="Working with Matthew and Bloom Growth coaching has..." className={inputClass} />
                                    </label>
                                    <p className="text-sm text-text-secondary">
                                        By submitting, you agree that Company Xceleration may share your testimonial, name and company on our website and marketing.
                                    </p>
                                </QuestionCard>

                                {error && <p className="text-sm text-red-600">{error}</p>}
                                <Button type="submit" size="lg" fullWidth className="group">
                                    Submit my feedback
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};
