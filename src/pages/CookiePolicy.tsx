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

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Are Cookies?</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How We Use Cookies</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            We use cookies and similar technologies for several purposes:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li>To ensure our website functions properly</li>
                            <li>To remember your preferences and settings</li>
                            <li>To analyze how visitors use our website</li>
                            <li>To improve our website's performance and user experience</li>
                            <li>To provide personalized content and advertisements</li>
                            <li>To integrate with social media platforms</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Cookies We Use</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Essential Cookies</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your preferences. The website cannot function properly without these cookies.
                            </p>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                                <p className="text-sm text-blue-800 dark:text-blue-200">
                                    <strong>Examples:</strong> Session cookies, authentication cookies, security cookies
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Analytics Cookies</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                            </p>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                                <p className="text-sm text-green-800 dark:text-green-200">
                                    <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Functional Cookies</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                These cookies enable enhanced functionality and personalization, such as remembering your language preference, region, or other settings.
                            </p>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
                                <p className="text-sm text-purple-800 dark:text-purple-200">
                                    <strong>Examples:</strong> Language preferences, theme settings, user interface customization
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Marketing Cookies</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                These cookies are used to track visitors across websites to display relevant and engaging advertisements. They may also be used to measure the effectiveness of advertising campaigns.
                            </p>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-4">
                                <p className="text-sm text-orange-800 dark:text-orange-200">
                                    <strong>Examples:</strong> Social media integration, advertising networks, remarketing pixels
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Third-Party Cookies</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Some cookies on our website are set by third-party services. These may include:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                            <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                            <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                            <li><strong>Advertising Networks:</strong> For displaying relevant advertisements</li>
                            <li><strong>Content Delivery Networks:</strong> For faster website loading</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cookie Duration</h2>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Session Cookies</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                These cookies are temporary and are deleted when you close your browser. They are used to maintain your session while browsing our website.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Persistent Cookies</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                These cookies remain on your device for a set period or until you delete them. They remember your preferences and settings for future visits.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Managing Your Cookie Preferences</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            You have several options for managing cookies:
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Browser Settings</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Most web browsers allow you to control cookies through their settings. You can:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Block all cookies</li>
                                <li>Allow only first-party cookies</li>
                                <li>Delete existing cookies</li>
                                <li>Set up notifications when cookies are set</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Please note that blocking certain cookies may affect the functionality of our website.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cookie Consent</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                When you first visit our website, you may see a cookie consent banner. You can:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                                <li>Accept all cookies</li>
                                <li>Reject non-essential cookies</li>
                                <li>Customize your cookie preferences</li>
                                <li>Change your preferences at any time</li>
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

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Updates to This Cookie Policy</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
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
