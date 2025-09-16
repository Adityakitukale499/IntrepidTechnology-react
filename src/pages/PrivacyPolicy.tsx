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
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-12">
                            <p className="text-gray-900 dark:text-white font-medium mb-2">Intrepid Technology</p>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">Email: <a href="mailto:conect@intrepidtechnology.in" className="text-blue-600 dark:text-blue-400 hover:underline">conect@intrepidtechnology.in</a></p>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">Phone: <a href="tel:+917841911347" className="text-blue-600 dark:text-blue-400 hover:underline">+91 78419 11347</a></p>
                            <p className="text-gray-600 dark:text-gray-300">Address: Pune, Maharashtra, India</p>
                        </div>

                        {/* Refund & Cancellation Policy */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Refund & Cancellation Policy
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                                Effective Date: {new Date().toLocaleDateString()}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                At Intrepid Technology, we value our clients, students, and interns. This Refund & Cancellation Policy explains the terms under which payments may be refunded or services canceled.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. General Policy</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>All payments for IT services, consultancy, certifications, internships, and projects are considered final unless otherwise stated.</li>
                                <li>Refunds are only provided under specific conditions mentioned below.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Training & Certification Programs</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>Fees once paid for training or certifications are non-refundable.</li>
                                <li>In case of double payment due to technical error, the extra amount will be refunded within 7–10 working days.</li>
                                <li>If a program is canceled by Intrepid Technology, participants will receive a full refund or the option to transfer fees to another batch/program.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. Internship Programs</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>Internship fees are non-refundable once the application is accepted and the program has started.</li>
                                <li>If an applicant withdraws before the program starts, only 50% of the fees may be refunded (administrative charges apply).</li>
                                <li>If the internship is canceled by Intrepid Technology, a full refund will be issued.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Projects & Consultancy Services</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>For client projects, advance payments are non-refundable once the project has been initiated.</li>
                                <li>If the client cancels before work starts, 80% of the amount will be refunded.</li>
                                <li>If Intrepid Technology cancels the project due to unforeseen reasons, the client will receive a full refund for the unused portion of services.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Payment Errors</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Any duplicate or failed transactions resulting in extra charges will be verified and refunded within 7–10 working days.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. Cancellation Requests</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>All cancellation requests must be sent in writing to conect@intrepidtechnology.in.</li>
                                <li>Verbal or informal requests will not be accepted.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Processing Time</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Approved refunds will be processed within 7–10 business days through the original payment method.
                            </p>
                        </div>

                        {/* Disclaimer Policy */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Disclaimer Policy
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                                Effective Date: {new Date().toLocaleDateString()}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                The information, services, training, certifications, internships, and projects provided by Intrepid Technology ("we," "our," "us") are intended for educational and professional development purposes only. By using our website or services, you agree to the following disclaimers:
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. General Disclaimer</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>While we strive to provide accurate and up-to-date information, we do not guarantee that all content, materials, or services will be free from errors, omissions, or inaccuracies.</li>
                                <li>We reserve the right to modify, update, or discontinue any service, program, or content without prior notice.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Certifications & Training</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>Our certification and training programs are designed to enhance skills and knowledge.</li>
                                <li>Completion of a course or receipt of a certificate does not guarantee employment, promotions, or career advancement.</li>
                                <li>The outcome depends on individual effort, industry demand, and external factors.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. Internship Programs</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>Internships provide learning opportunities but are not a guarantee of permanent employment with Intrepid Technology or any third-party organization.</li>
                                <li>Intern performance evaluation is at the sole discretion of the company.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Projects & Consultancy</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>Project outcomes depend on the requirements, data, and inputs provided by clients or students.</li>
                                <li>We are not responsible for project delays or results caused by incomplete, inaccurate, or delayed inputs from clients or participants.</li>
                                <li>Academic projects are for educational purposes only and should not be presented as original research without acknowledgment.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Third-Party Links</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Our website may contain links to external websites. We are not responsible for the content, policies, or accuracy of information on third-party sites.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. Limitation of Liability</h2>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                                <li>Intrepid Technology shall not be held liable for any direct, indirect, or consequential damages arising from the use of our website, services, certifications, internships, or projects.</li>
                                <li>Users are responsible for how they apply the knowledge and services received.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. No Guarantee</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                While we provide consultancy, training, and project support to the best of our abilities, we do not guarantee specific outcomes, grades, or business results.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Contact Us</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                For questions regarding this Disclaimer, please contact us:
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                                <p className="text-gray-900 dark:text-white font-medium mb-2">Intrepid Technology</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">📧 Email: <a href="mailto:conect@intrepidtechnology.in" className="text-blue-600 dark:text-blue-400 hover:underline">conect@intrepidtechnology.in</a></p>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">📞 Phone: <a href="tel:+917841911347" className="text-blue-600 dark:text-blue-400 hover:underline">+91 78419 11347</a></p>
                                <p className="text-gray-600 dark:text-gray-300">🏢 Address: Pune, Maharashtra, India</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
