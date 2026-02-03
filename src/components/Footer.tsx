import { Button } from './Button';

export const Footer = () => {
    return (
        <footer className="bg-[#000d23] border-t border-white/5 py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="inline-block mb-6">
                            <img src="/assets/images/logo.png" alt="Xcel Team" className="h-12 w-auto" />
                        </a>
                        <p className="text-text-secondary text-sm mb-6">
                            Company Xceleration - Your Scaling Partners. Let’s build a business that runs — even when you’re not in the room.
                        </p>
                        <div className="text-sm text-text-secondary space-y-2">
                            <p>mail@xcel.team</p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-lg mb-6 text-white font-heading">SERVICES</h4>
                        <div className="flex flex-col gap-3 text-sm text-text-secondary">
                            <a href="/assessment" className="hover:text-primary transition-colors">Take Free Assessment</a>
                            <a href="/booking" className="hover:text-primary transition-colors">Schedule Appointment</a>
                            <div className="h-px bg-white/5 my-1" />
                            <p className="font-bold text-white text-xs uppercase tracking-wider mb-1">Our Programs</p>
                            <a href="/elevate#foundation" className="hover:text-primary transition-colors">Foundation Tier</a>
                            <a href="/elevate#growth" className="hover:text-primary transition-colors">Growth System</a>
                            <a href="/elevate#systems" className="hover:text-primary transition-colors">Strategic System</a>
                            <div className="h-px bg-white/5 my-1" />
                            <a href="/faq" className="hover:text-primary transition-colors">Frequently Asked Questions</a>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-lg mb-6 text-white font-heading">SUBSCRIBE TO OUR NEWSLETTER</h4>
                        <p className="text-text-secondary mb-4 text-sm">We go deep every Tuesday with Tools & Tips to help you level up.</p>
                        <div className="flex gap-2 max-w-md">
                            <Button onClick={() => window.open('https://companyxceleration.beehiiv.com/', '_blank')}>
                                Subscribe Now!
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
                    <p>Copyrights 2025 | Company Xceleration™</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
