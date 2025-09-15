import React from 'react';
import { Workflow, Cpu, FileText, LineChart, CheckCircle } from 'lucide-react';

const RPAAutomation: React.FC = () => {
    const features = [
        { icon: Workflow, title: 'Process Discovery', description: 'Identify automation candidates and map current workflows.' },
        { icon: Cpu, title: 'Bot Development', description: 'Build resilient bots with exception handling and retries.' },
        { icon: FileText, title: 'Document Automation', description: 'OCR/AI to process invoices, forms, and unstructured docs.' },
        { icon: LineChart, title: 'Monitoring & Scaling', description: 'Orchestrate, schedule, and scale bots reliably.' },
    ];

    const offerings = [
        {
            title: 'Discovery & Design',
            description: 'Hands‑on workshops and process mapping to quantify ROI and define a roadmap.',
            bullets: ['Process walkthroughs', 'Automation backlog', 'Business case & ROI', 'Solution design']
        },
        {
            title: 'Implementation',
            description: 'Rapid bot development with secure credentials, retries, and observability.',
            bullets: ['UiPath / Power Automate / AA', 'Credential vaults', 'Resilient workflows', 'Dashboards & alerts']
        },
        {
            title: 'Hypercare & Scale',
            description: 'Handover with training and expansion to new processes and teams.',
            bullets: ['Runbooks & training', 'Handover & KT', 'Roadmap for scale', 'Support SLAs']
        },
    ];

    const process = [
        { step: '01', title: 'Assess', description: 'Assess processes and build the automation backlog.' },
        { step: '02', title: 'Automate', description: 'Implement bots with CI/CD and governance.' },
        { step: '03', title: 'Adopt', description: 'Enable teams and measure outcomes.' },
        { step: '04', title: 'Scale', description: 'Expand to new processes and units securely.' },
    ];

    return (
        <div className="min-h-screen">
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">RPA <span className="text-blue-600 dark:text-blue-400">Automation</span></h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">Automate repetitive tasks and improve operational efficiency with UiPath, Power Automate, and Automation Anywhere.</p>
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
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our RPA Services</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">From discovery to scale with enterprise governance</p>
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
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Iterative delivery with measurable outcomes</p>
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
        </div>
    );
};

export default RPAAutomation;


