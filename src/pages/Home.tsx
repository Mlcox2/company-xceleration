import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { PainPoints } from '../components/PainPoints';
import { Solution } from '../components/Solution';
import { Team } from '../components/Team';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <div className="bg-background min-h-screen text-text-primary selection:bg-primary/30">
            <Navbar />
            <main>
                <Hero />
                <PainPoints />
                <Solution />
                <Team />
            </main>
            <Footer />
        </div>
    );
};
