import React from 'react';

const TermsConditions: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Terms & <span className="text-blue-600 dark:text-blue-400">Conditions</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Please read these terms and conditions carefully before using our services.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none dark:prose-invert">

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            By accessing and using Intrepid Technology's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Description of Service</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Intrepid Technology provides the following services:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li>Web Development and Design</li>
                            <li>Mobile Application Development</li>
                            <li>Software Development and Custom Solutions</li>
                            <li>RPA (Robotic Process Automation)</li>
                            <li>E-commerce Solutions</li>
                            <li>IT Consulting Services</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. User Responsibilities</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            As a user of our services, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li>Provide accurate and complete information when requested</li>
                            <li>Use our services only for lawful purposes</li>
                            <li>Not interfere with or disrupt our services or servers</li>
                            <li>Not attempt to gain unauthorized access to any part of our services</li>
                            <li>Respect intellectual property rights</li>
                            <li>Comply with all applicable laws and regulations</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Project Terms</h2>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4.1 Project Scope</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                All projects will be defined by a detailed project scope document that includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Project objectives and deliverables</li>
                                <li>Timeline and milestones</li>
                                <li>Technical specifications</li>
                                <li>Pricing and payment terms</li>
                                <li>Change management procedures</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4.2 Payment Terms</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Payment terms will be specified in the project agreement. Generally:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>50% payment required to commence project work</li>
                                <li>Remaining 50% due upon project completion</li>
                                <li>Payment methods: Bank transfer, UPI, or other agreed methods</li>
                                <li>Late payment fees may apply as specified in the agreement</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Intellectual Property Rights</h2>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5.1 Client Ownership</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Upon full payment, the client will own:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Custom code developed specifically for the project</li>
                                <li>Project deliverables and documentation</li>
                                <li>Design assets created for the project</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5.2 Intrepid Technology Rights</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Intrepid Technology retains rights to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Pre-existing intellectual property and frameworks</li>
                                <li>General methodologies and processes</li>
                                <li>Portfolio use rights for marketing purposes</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. Confidentiality</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Both parties agree to maintain confidentiality of all proprietary and sensitive information shared during the course of the project. This includes business strategies, technical specifications, and any other confidential information.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Limitation of Liability</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            To the maximum extent permitted by law, Intrepid Technology shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Warranty and Support</h2>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">8.1 Warranty Period</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We provide a 30-day warranty period for all delivered projects, covering:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Bug fixes and technical issues</li>
                                <li>Performance optimization</li>
                                <li>Minor adjustments as per original specifications</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">8.2 Support Services</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Post-launch support services are available at additional cost, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Ongoing maintenance and updates</li>
                                <li>Technical support and troubleshooting</li>
                                <li>Feature enhancements and modifications</li>
                                <li>Hosting and server management</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Termination</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Either party may terminate the project agreement with written notice. In case of termination, payment will be made for work completed up to the termination date, and all confidential information must be returned.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">10. Force Majeure</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Neither party shall be liable for any failure or delay in performance under this agreement which is due to fire, flood, earthquake, elements of nature, acts of God, acts of war, terrorism, labor strikes, or any other cause which is beyond the reasonable control of such party.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">11. Governing Law</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">12. Changes to Terms</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">13. Contact Information</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            If you have any questions about these terms and conditions, please contact us:
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                            <p className="text-gray-900 dark:text-white font-medium mb-2">Intrepid Technology</p>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">Email: <a href="mailto:conect@intrepidtechnology.in" className="text-blue-600 dark:text-blue-400 hover:underline">conect@intrepidtechnology.in</a></p>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">Phone: <a href="tel:+917841911347" className="text-blue-600 dark:text-blue-400 hover:underline">+91 78419 11347</a></p>
                            <p className="text-gray-600 dark:text-gray-300">Address: Pune, Maharashtra, India</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsConditions;
