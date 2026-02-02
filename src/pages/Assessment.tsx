
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { surveyQuestions, assessmentResults } from '../data/assessmentContent';
import type { Temperature, Category } from '../data/assessmentContent';

export const Assessment = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleOptionSelect = (value: string) => {
        setAnswers(prev => ({ ...prev, [surveyQuestions[currentStep].id]: value }));

        if (currentStep < surveyQuestions.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 300);
        } else {
            finishAssessment({ ...answers, [surveyQuestions[currentStep].id]: value });
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const calculateResult = (finalAnswers: Record<number, string>) => {
        // Calculate Temperature
        let score = 0;
        const scoreableIds = [1, 2, 3, 5, 6, 7]; // Q4 is Category, Q8 is Pref

        scoreableIds.forEach(id => {
            const val = finalAnswers[id];
            if (val === 'Hot') score += 2;
            else if (val === 'Warm') score += 1;
            // Cold = 0
        });

        let temperature: Temperature = 'Cold';
        // Max score = 12
        if (score >= 9) temperature = 'Hot';
        else if (score >= 5) temperature = 'Warm';
        else temperature = 'Cold';

        // Get Category
        const category = finalAnswers[4] as Category;

        return { category, temperature };
    };

    const finishAssessment = async (finalAnswers: Record<number, string>) => {
        setIsAnalyzing(true);

        // Simulate analysis
        await new Promise(resolve => setTimeout(resolve, 1500));

        const { category, temperature } = calculateResult(finalAnswers);
        const resultData = assessmentResults[category][temperature];

        if (resultData && resultData.url) {
            // Navigate to specific URL with state
            navigate(resultData.url, { state: { category, temperature, answers: finalAnswers } });
        } else {
            // Fallback
            navigate('/assessment/result', { state: { category, temperature, answers: finalAnswers } });
        }
    };

    const currentQuestion = surveyQuestions[currentStep];
    const progress = ((currentStep + 1) / surveyQuestions.length) * 100;

    return (
        <div className="bg-background min-h-screen text-text-primary font-body flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-2xl">
                    {/* Progress Bar */}
                    <div className="mb-12">
                        <div className="flex justify-between text-sm text-text-secondary mb-2">
                            <span>Question {currentStep + 1} of {surveyQuestions.length}</span>
                            <span>{Math.round(progress)}% Complete</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {!isAnalyzing ? (
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-background-card border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative"
                            >
                                {/* Back Button */}
                                {currentStep > 0 && (
                                    <button
                                        onClick={handlePrev}
                                        className="absolute top-8 left-8 text-text-secondary hover:text-white transition-colors"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                )}

                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-heading mt-6">
                                    {currentQuestion.question}
                                </h2>

                                <div className="space-y-4">
                                    {currentQuestion.options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionSelect(option.value)}
                                            className={`w-full text-left p-6 rounded-xl border transition-all duration-200 flex items-center justify-between group
                                                ${answers[currentQuestion.id] === option.value
                                                    ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                                                    : 'bg-white/5 border-white/10 text-text-secondary hover:bg-white/10 hover:border-white/20 hover:text-white'
                                                }
                                            `}
                                        >
                                            <span className="text-lg">{option.text}</span>
                                            {answers[currentQuestion.id] === option.value && (
                                                <CheckCircle2 className="text-primary w-6 h-6" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="analyzing"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-8" />
                                <h2 className="text-3xl font-bold text-white mb-4">Analyzing Your Results...</h2>
                                <p className="text-text-secondary text-xl">Identifying your best path to growth.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
};
