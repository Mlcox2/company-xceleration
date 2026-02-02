import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Booking = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up to avoid duplicates if re-mounting
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="bg-background min-h-screen text-text-primary selection:bg-primary/30">
            <Navbar />
            <main className="pt-32 pb-20 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-white text-center mb-8 font-heading">Schedule Your Discovery Call</h1>
                    <div
                        className="calendly-inline-widget w-full rounded-lg overflow-hidden"
                        data-url="https://calendly.com/matthew-xcel"
                        style={{ minWidth: '320px', height: '700px' }}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};
