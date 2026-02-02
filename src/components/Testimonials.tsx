
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Working with them has helped our team create goals for the next year and process difficult situations between teams.",
        author: "Client Partner"
    },
    {
        text: "Working with them has helped our team create goals for the next year and process difficult situations between teams.",
        author: "Client Partner"
    },
    {
        text: "Working with them has helped our team create goals for the next year and process difficult situations between teams.",
        author: "Client Partner"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-top-left scale-110 opactiy-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                        Client Success
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Hear from the teams we've helped transform.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="bg-background-card p-8 rounded-2xl border border-white/5 relative group hover:border-primary/30 transition-colors shadow-lg">
                            <Quote className="absolute top-8 right-8 text-primary/20 w-12 h-12 rotate-180" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg text-text-secondary mb-8 leading-relaxed min-h-[5rem]">
                                "{item.text}"
                            </p>
                            <div className="border-t border-white/5 pt-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                    {item.author[0]}
                                </div>
                                <div className="font-bold text-white">{item.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
