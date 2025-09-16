import React from 'react';
import { Link } from 'react-router-dom';
import { ServerCog, Boxes, Shield, Activity, CheckCircle, ArrowRight } from 'lucide-react';

const SoftwareDevelopment: React.FC = () => {
    const features = [
        { icon: ServerCog, title: 'Robust Architecture', description: 'Design-first approach with scalable, maintainable architectures.' },
        { icon: Boxes, title: 'Microservices & APIs', description: 'Decoupled services and well-documented APIs for agility.' },
        { icon: Shield, title: 'Security by Design', description: 'Best practices for auth, data protection, and compliance.' },
        { icon: Activity, title: 'Reliability & Observability', description: 'CI/CD, monitoring, and SLOs for dependable releases.' },
    ];

    const offerings = [
        {
            title: 'Platform & Backoffice Systems',
            description: 'Core business platforms and internal backoffice tools that streamline operations.',
            bullets: ['Admin consoles', 'Workflow automation', 'Role-based access', 'Audit trails']
        },
        {
            title: 'API Platforms & Integrations',
            description: 'High‑throughput services and 3rd‑party integrations built for scale.',
            bullets: ['REST/GraphQL', 'Event-driven messaging', 'ETL/data sync', 'Partner integrations']
        },
        {
            title: 'Data & Reporting',
            description: 'Data pipelines and reporting layers for decision making.',
            bullets: ['ETL pipelines', 'Data warehousing', 'BI dashboards', 'Exports & compliance']
        },
        {
            title: 'Quality & Delivery',
            description: 'Automated quality gates and release management for faster iteration.',
            bullets: ['Automated testing', 'CI/CD pipelines', 'Blue/green deploys', 'Rollback & recovery']
        },
    ];

    const process = [
        { step: '01', title: 'Discovery', description: 'Requirements, architecture vision, and delivery roadmap.' },
        { step: '02', title: 'Implementation', description: 'Incremental delivery with code reviews and test automation.' },
        { step: '03', title: 'Hardening', description: 'Performance, security, and reliability validations.' },
        { step: '04', title: 'Go‑Live & Handover', description: 'Release, docs, and knowledge transfer with support plan.' },
    ];

    return (
        <div className="min-h-screen">
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Software <span className="text-blue-600 dark:text-blue-400">Development</span></h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">Enterprise‑grade software solutions tailored to your business processes and requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <f.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Software Services</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">End‑to‑end delivery from architecture to operations</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {offerings.map((card, idx) => (
                            <div key={idx} className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{card.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">{card.description}</p>
                                <div className="space-y-2">
                                    {card.bullets.map((b, bi) => (
                                        <div key={bi} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300">{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Proven methodology for predictable outcomes</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((p, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">{p.step}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{p.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Ready to Build Your Next Software?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Let's discuss your project requirements and turn your ideas into a powerful solution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                            Start Your Project
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link to="/products" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                            View Our Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SoftwareDevelopment;


