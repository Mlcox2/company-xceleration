export const LogoCloud = () => {
    const logos = [
        { name: "NAMI", src: "https://logo.clearbit.com/nami.org" },
        { name: "Company 2", src: "https://logo.clearbit.com/google.com" }, // Placeholders until we have real ones
        { name: "Company 3", src: "https://logo.clearbit.com/stripe.com" },
        { name: "Company 4", src: "https://logo.clearbit.com/airbnb.com" },
        { name: "Company 5", src: "https://logo.clearbit.com/spotify.com" },
    ];

    return (
        <section className="py-12 border-y border-white/5 bg-white/5">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm text-text-secondary mb-8 uppercase tracking-widest">Trusted by innovative companies</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.name}
                            className="h-8 md:h-10 w-auto object-contain hover:opacity-100 transition-opacity"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
