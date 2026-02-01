import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="bg-background min-h-screen text-text-primary selection:bg-primary/30">
            <Navbar />
            <main>
                <Hero />
                <LogoCloud />
                <PainPoints />
                <Solution />
                <Team />
            </main>
            <Footer />
        </div>
    )
}

export default App
