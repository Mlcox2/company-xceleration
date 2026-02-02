import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Elevate } from './pages/Elevate';
import { Booking } from './pages/Booking';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/elevate" element={<Elevate />} />
                <Route path="/1-page" element={<Elevate />} /> {/* Alias for the original URL just in case */}
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </Router>
    )
}

export default App
