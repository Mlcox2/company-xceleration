import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

const LAST_UPDATED = 'October 15, 2026';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="mb-10">
        <h2 className="text-2xl font-bold text-navy mb-4 font-heading">{title}</h2>
        <div className="text-text-secondary leading-relaxed space-y-4">{children}</div>
    </section>
);

export const PrivacyPage = () => {
    return (
        <div className="bg-background min-h-screen text-text-primary font-body">
            <Navbar />

            <main className="pt-32">
                <section className="container mx-auto px-6 mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-navy mb-6 font-heading"
                    >
                        Privacy Policy
                    </motion.h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Last updated: {LAST_UPDATED}
                    </p>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12">
                        <Section title="Who We Are">
                            <p>
                                Company Xceleration ("we," "us," or "our") operates the website xcel.team.
                                We help business owners and leadership teams build companies that run on
                                proven systems. This policy explains what information we collect when you
                                use our website or interact with our ads and forms, how we use it, and the
                                choices you have.
                            </p>
                        </Section>

                        <Section title="Information We Collect">
                            <p>
                                <strong className="text-navy">Information you give us.</strong> When you fill
                                out a form on our site or on a platform like Facebook or Instagram (for
                                example, a lead form, our free assessment, a booking request, the book
                                pre-order list, or our newsletter signup), we collect what you submit. That
                                typically includes your name, email address, phone number, company name, and
                                your answers to any questions in the form.
                            </p>
                            <p>
                                <strong className="text-navy">Information collected automatically.</strong>{' '}
                                Like most websites, we use cookies and similar technologies to understand how
                                visitors use our site. This can include your IP address, browser type, device
                                information, pages visited, and how you arrived at our site. We use HubSpot
                                for analytics and contact management, and advertising platforms like Meta may
                                set cookies or pixels to measure ad performance.
                            </p>
                        </Section>

                        <Section title="How We Use Your Information">
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Respond to your inquiries and schedule appointments you request</li>
                                <li>Deliver resources you sign up for, like our assessment results, newsletter, or book updates</li>
                                <li>Send you emails about our services, content, and events</li>
                                <li>Understand how our website and ads perform so we can improve them</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                            <p>
                                Every marketing email we send includes an unsubscribe link. You can opt out
                                at any time.
                            </p>
                        </Section>

                        <Section title="How We Share Information">
                            <p>
                                We do not sell your personal information. We share it only with service
                                providers who help us run our business, such as HubSpot (CRM and email),
                                beehiiv (newsletter), Meta (advertising), scheduling tools, and our website
                                hosting provider. These providers process your information on our behalf and
                                under their own privacy and security commitments. We may also disclose
                                information if required by law.
                            </p>
                        </Section>

                        <Section title="Cookies">
                            <p>
                                You can set your browser to refuse cookies or alert you when cookies are
                                being sent. Some parts of the site may not work as smoothly without them,
                                but the site will still function.
                            </p>
                        </Section>

                        <Section title="Data Retention and Security">
                            <p>
                                We keep personal information for as long as we need it to serve you and meet
                                our legal obligations, then delete or anonymize it. We use reasonable
                                administrative and technical safeguards to protect your information, though
                                no method of transmission or storage is completely secure.
                            </p>
                        </Section>

                        <Section title="Your Rights and Choices">
                            <p>
                                Depending on where you live, you may have the right to access, correct, or
                                delete the personal information we hold about you, or to opt out of certain
                                uses of it. To make a request, email us at the address below and we will
                                respond within the time required by applicable law. Nevada residents may
                                also submit a request directing us not to sell their personal information;
                                as noted above, we do not sell it.
                            </p>
                        </Section>

                        <Section title="Children's Privacy">
                            <p>
                                Our website and services are for business audiences and are not directed to
                                children under 13. We do not knowingly collect personal information from
                                children.
                            </p>
                        </Section>

                        <Section title="Changes to This Policy">
                            <p>
                                We may update this policy from time to time. When we do, we will post the
                                new version here and update the date at the top of this page.
                            </p>
                        </Section>

                        <Section title="Contact Us">
                            <p>
                                Questions about this policy or your information? Reach us at:
                            </p>
                            <p>
                                Company Xceleration
                                <br />
                                Email: <a href="mailto:mail@xcel.team" className="text-primary hover:underline">mail@xcel.team</a>
                            </p>
                        </Section>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
