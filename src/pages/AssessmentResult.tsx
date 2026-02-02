
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ArrowRight, Mail, CheckCircle2, AlertTriangle, HelpCircle, Target } from 'lucide-react';
import { assessmentResults } from '../data/assessmentContent';
import type { Category, Temperature } from '../data/assessmentContent';

export const AssessmentResult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [resultData, setResultData] = useState<any>(null);

    useEffect(() => {
        // Try to find data based on URL path first (support direct links)
        const path = location.pathname;
        let found = false;

        // Loop through all data to match URL
        Object.entries(assessmentResults).forEach(([cat, temps]) => {
            Object.entries(temps).forEach(([temp, data]) => {
                if (data.url === path) {
                    setResultData({ ...data, category: cat, temperature: temp });
                    found = true;
                }
            });
        });

        // If not found by URL, check state (fallback)
        if (!found && location.state) {
            const { category, temperature } = location.state;
            if (category && temperature) {
                const data = assessmentResults[category as Category][temperature as Temperature];
                setResultData({ ...data, category, temperature });
                found = true;
            }
        }

        // If still not found, redirect to assessment start
        if (!found) {
            // navigate('/assessment'); // Commented out for now to prevent loops during dev if something is wrong
            console.warn("No result data found for this path/state");
        }

        if (location.state?.answers) {
            // Can use answers here if needed
        }
    }, [location, navigate]);

    if (!resultData) {
        return <div className="min-h-screen bg-background flex items-center justify-center text-white">Loading...</div>;
    }

    const constructEmailLink = () => {
        const subject = `Assessment Results: ${resultData.category}`;
        const body = `
Hello Xceleration Team,

Here are my assessment results:

Category: ${resultData.category}
Status: ${resultData.temperature}
Key Pain Point: ${resultData.frustration}

My Goals:
${resultData.desires[0]}

I would like to discuss next steps.
        `.trim();
        return `mailto:mail@xcel.team?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="bg-background min-h-screen text-text-primary font-body">
            <Navbar />

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-20" />
                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-bold mb-6 border border-primary/20">
                        {resultData.temperature === 'Hot' ? '🔥 Critical Opportunity' :
                            resultData.temperature === 'Warm' ? '⚠️ Growth Potential' : '🌱 Foundation Building'}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-heading leading-tight">
                        {resultData.headline}
                    </h1>

                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12">
                        {resultData.frustration}
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                            <Target className="text-primary" />
                            Your Path Forward
                        </h3>
                        <p className="text-lg text-white/90">
                            {resultData.result}
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-20 px-6">
                <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Diagnostics */}
                    <div className="space-y-12">
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <AlertTriangle className="text-orange-500" />
                                What's Holding You Back
                            </h3>
                            <ul className="space-y-4">
                                {resultData.problems.slice(0, 5).map((item: string, idx: number) => (
                                    <li key={idx} className="bg-background-card border border-white/5 p-4 rounded-lg text-text-secondary flex gap-3 items-start">
                                        <span className="text-orange-500 mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <HelpCircle className="text-blue-400" />
                                Critical Questions to Ask
                            </h3>
                            <ul className="space-y-4">
                                {resultData.questions.slice(0, 5).map((item: string, idx: number) => (
                                    <li key={idx} className="bg-background-card border border-white/5 p-4 rounded-lg text-text-secondary flex gap-3 items-start">
                                        <span className="text-blue-400 mt-1">?</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Solutions & CTA */}
                    <div className="space-y-12 h-fit lg:sticky lg:top-32">
                        <section className="bg-gradient-to-br from-background-card to-background rounded-3xl p-8 border border-white/10 shadow-2xl">
                            <h3 className="text-3xl font-bold text-white mb-6">Take Action Now</h3>

                            <div className="space-y-6 mb-8">
                                <p className="text-text-secondary">
                                    You've identified the gaps. Now it's time to bridge them. Our team at Company Xceleration specializes in solving exactly these challenges for businesses like yours.
                                </p>

                                <div className="space-y-3">
                                    <h4 className="font-semibold text-white">We can help you:</h4>
                                    {resultData.desires.slice(0, 3).map((item: string, idx: number) => (
                                        <div key={idx} className="flex gap-2 items-start text-sm text-text-secondary">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button
                                    size="lg"
                                    fullWidth
                                    className="bg-primary hover:bg-primary-dark text-white"
                                    onClick={() => window.open(constructEmailLink(), '_blank')}
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Email Me These Results
                                </Button>

                                <div className="relative my-4 text-center">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/10"></div>
                                    </div>
                                    <span className="relative bg-background-card px-2 text-sm text-text-secondary">OR</span>
                                </div>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    fullWidth
                                    onClick={() => navigate('/booking')}
                                >
                                    Book Your Free Strategy Call
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>

                            <p className="mt-4 text-xs text-text-secondary text-center">
                                No obligation. 100% confidential discussion about your business goals.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
