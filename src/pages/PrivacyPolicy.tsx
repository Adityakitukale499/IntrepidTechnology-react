import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Privacy <span className="text-blue-600 dark:text-blue-400">Policy</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Information We Collect</h2>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We may collect personal information that you voluntarily provide to us, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Name and contact information (email address, phone number)</li>
                                <li>Company information and job title</li>
                                <li>Project requirements and specifications</li>
                                <li>Communication preferences</li>
                                <li>Any other information you choose to provide</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Automatically Collected Information</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                When you visit our website, we may automatically collect certain information, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>IP address and location data</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages visited and time spent on our site</li>
                                <li>Referring website</li>
                                <li>Device information</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. How We Use Your Information</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            We use the information we collect for various purposes, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li>Providing and improving our services</li>
                            <li>Responding to your inquiries and requests</li>
                            <li>Processing project proposals and contracts</li>
                            <li>Sending you updates about our services</li>
                            <li>Analyzing website usage and performance</li>
                            <li>Complying with legal obligations</li>
                            <li>Protecting our rights and preventing fraud</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. Information Sharing and Disclosure</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li>With your explicit consent</li>
                            <li>To comply with legal requirements or court orders</li>
                            <li>To protect our rights, property, or safety</li>
                            <li>With trusted service providers who assist us in operating our website</li>
                            <li>In connection with a business transfer or acquisition</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Data Security</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Data Retention</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. Your Rights</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Depending on your location, you may have certain rights regarding your personal information, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li>The right to access your personal information</li>
                            <li>The right to correct inaccurate information</li>
                            <li>The right to delete your personal information</li>
                            <li>The right to restrict processing of your information</li>
                            <li>The right to data portability</li>
                            <li>The right to object to processing</li>
                            <li>The right to withdraw consent</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Cookies and Tracking Technologies</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            We use cookies and similar tracking technologies to enhance your experience on our website. For more information about our use of cookies, please see our <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</a>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Third-Party Links</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Children's Privacy</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">10. Changes to This Privacy Policy</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. We encourage you to review this privacy policy periodically.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">11. Contact Us</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            If you have any questions about this privacy policy or our privacy practices, please contact us:
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

export default PrivacyPolicy;
