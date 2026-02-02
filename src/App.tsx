
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { Elevate } from './pages/Elevate';
import { Booking } from './pages/Booking';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { TeamPage } from './pages/TeamPage';
import { SpeakersPage } from './pages/SpeakersPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { Assessment } from './pages/Assessment';
import { AssessmentResult } from './pages/AssessmentResult';
import { assessmentResults } from './data/assessmentContent';

function App() {
    return (
        <Router>
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/elevate" element={<Elevate />} />
                    <Route path="/1-page" element={<Elevate />} /> {/* Alias for the original URL just in case */}
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/speakers" element={<SpeakersPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />

                    {/* Assessment Routes */}
                    <Route path="/assessment" element={<Assessment />} />
                    <Route path="/assessment/result" element={<AssessmentResult />} />

                    {/* Dynamic Assessment Result Routes */}
                    {Object.values(assessmentResults).flatMap(categoryData =>
                        Object.values(categoryData).map((result: any) => (
                            <Route
                                key={result.url}
                                path={result.url}
                                element={<AssessmentResult />}
                            />
                        ))
                    )}
                </Routes>
            </AnimatePresence>
        </Router>
    )
}

export default App;
