import { Button } from './Button';

export const Footer = () => {
    return (
        <footer className="bg-card border-t border-white/5 py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="inline-block mb-6">
                            <img src="/assets/images/logo.png" alt="Xcel Team" className="h-12 w-auto" />
                        </a>
                        <p className="text-text-secondary max-w-sm mb-6">
                            Helping founders build businesses that run with structure, not stress.
                        </p>
                        <div className="text-sm text-text-secondary">
                            <p>Hurricane, Utah 84737</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Navigation</h4>
                        <ul className="space-y-4 text-text-secondary">
                            <li><a href="#" className="hover:text-primary transition-colors">Process</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Team</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Stay Connected</h4>
                        <p className="text-text-secondary mb-4 text-sm">Join our newsletter for scaling tips.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-background border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary transition-colors"
                            />
                            <Button size="sm">Join</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
                    <p>&copy; {new Date().getFullYear()} Company Xceleration. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
