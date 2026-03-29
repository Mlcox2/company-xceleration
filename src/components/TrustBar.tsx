
export const TrustBar = () => {
    // We duplicate the logos to create a seamless infinite scroll
    const logos = [
        "/assets/logos/logo-1.png",
        "/assets/logos/logo-2.png",
        "/assets/logos/logo-3.png",
        "/assets/logos/logo-4.jpg",
    ];

    const carouselLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="bg-slate-50 py-10 border-y border-slate-200 relative z-20">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    Trusted by Leading Organizations
                </p>
            </div>

            <div className="relative overflow-hidden w-full">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                {/* Track */}
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">
                    {carouselLogos.map((src, idx) => (
                        <div key={idx} className="mx-8 md:mx-16 w-32 md:w-40 flex items-center justify-center">
                            <img
                                src={src}
                                alt="Client Logo"
                                className="w-full h-16 object-contain opacity-80 hover:opacity-100 transition-all duration-300 mix-blend-multiply"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
