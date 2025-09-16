import React from 'react';

const CookiePolicy: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Cookie <span className="text-blue-600 dark:text-blue-400">Policy</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Learn about how we use cookies and similar technologies on our website.
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

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Are Cookies and Browser Storage?</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Cookies are small text files stored on your device when you visit a website. Browser storage includes localStorage and sessionStorage, which are technologies that allow websites to store data locally in your browser. At Intrepid Technology, we use minimal cookies and browser storage only for essential website functionality.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How We Use Cookies and Browser Storage</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            We use cookies and browser storage technologies only for essential website functionality:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li>To remember your theme preference (light or dark mode)</li>
                            <li>To prevent showing the contact modal multiple times</li>
                            <li>To ensure basic website functionality</li>
                        </ul>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
                            <p className="text-blue-800 dark:text-blue-200">
                                <strong>Important:</strong> We do not use tracking cookies, analytics cookies, advertising cookies, or any third-party cookies for marketing purposes.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Specific Cookies and Storage We Use</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Essential Functionality Cookies</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Name</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Purpose</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Duration</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-mono">intrepid_contact_captured</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Prevents showing contact modal repeatedly</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">180 days</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Cookie</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-mono">theme</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Remembers your light/dark theme preference</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Persistent</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">LocalStorage</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-mono">intrepid_contact_captured</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Session-based contact modal tracking</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Session only</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">SessionStorage</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What We Don't Use</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            To protect your privacy, we do NOT use:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li><strong>Google Analytics</strong> or any website analytics tracking</li>
                            <li><strong>Social media tracking pixels</strong> (Facebook, Twitter, etc.)</li>
                            <li><strong>Advertising cookies</strong> or remarketing tags</li>
                            <li><strong>Third-party marketing</strong> or behavioral tracking</li>
                            <li><strong>Cross-site tracking</strong> or fingerprinting</li>
                            <li><strong>Performance monitoring</strong> or error tracking services</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Managing Your Browser Storage</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Since we use minimal cookies and browser storage, you have full control over them:
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Browser Settings</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                You can manage cookies and browser storage through your browser settings:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Clear all cookies and site data</li>
                                <li>Block cookies from specific sites</li>
                                <li>Delete localStorage and sessionStorage data</li>
                                <li>Set up notifications when cookies are set</li>
                            </ul>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                                    <strong>Note:</strong> Clearing our cookies and storage will reset your theme preference and may show the contact modal again on your next visit.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">No Cookie Consent Banner</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Since we only use essential cookies for basic website functionality and do not track or collect personal data through cookies, we do not require a cookie consent banner. All our cookies are:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Essential for website functionality</li>
                                <li>Do not track your behavior across sites</li>
                                <li>Do not collect personal information</li>
                                <li>Used only to improve your user experience</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browser-Specific Instructions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Chrome</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Settings → Privacy and security → Cookies and other site data
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mozilla Firefox</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Options → Privacy & Security → Cookies and Site Data
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Safari</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Preferences → Privacy → Manage Website Data
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Microsoft Edge</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Settings → Cookies and site permissions → Cookies and site data
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Privacy-First Approach</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            At Intrepid Technology, we believe in respecting your privacy. Our minimal use of cookies and browser storage reflects our commitment to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li>Transparency about data collection</li>
                            <li>Using only necessary technologies</li>
                            <li>Respecting user privacy by default</li>
                            <li>Avoiding unnecessary tracking or profiling</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Updates to This Cookie Policy</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated "Last updated" date.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            If you have any questions about our use of cookies or this cookie policy, please contact us:
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

export default CookiePolicy;
