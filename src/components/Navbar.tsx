import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Our Process', href: '/#process' },
        { name: 'Team', href: '/team' },
        { name: 'Speakers', href: '/speakers' },
        { name: 'Resources', href: '/resources' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Elevate', href: '/elevate' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-[0_8px_30px_rgba(15,23,42,0.08)] py-4' : 'bg-background/80 backdrop-blur-sm py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2">
                    <img src="/assets/images/logo-dark.png" alt="Xcel Team" className="h-10 w-auto" />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-navy/80 hover:text-navy font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4">
                        <Button size="sm" onClick={() => window.location.href = '/booking'}>Book Discovery Call</Button>
                        <Button size="sm" variant="outline" onClick={() => window.location.href = '/faq'}>FAQ</Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-navy"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-t border-slate-200"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-navy/80 hover:text-navy font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button fullWidth onClick={() => window.location.href = '/booking'}>Book Discovery Call</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
