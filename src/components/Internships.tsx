import React from 'react';

const applyUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd_Fy8ms7b7AvsgrlymG-8LbKYdjMH1Nk4E4yss8Z4C6dchBg/viewform';

const internships = [
    {
        title: 'UiPath Program',
        description: 'Master UiPath RPA development with hands-on training in process automation, workflow design, and bot deployment for enterprise solutions.',
        tags: ['RPA', 'Automation', 'Enterprise'],
    },
    {
        title: 'Microsoft Power Automate Program',
        description: 'Create automated workflows, integrate business processes, and build cloud-based automation solutions.',
        tags: ['Power Automate', 'Workflows', 'Cloud'],
    },
    {
        title: 'Automation Anywhere Program',
        description: 'Develop expertise in Automation Anywhere platform for intelligent automation and cognitive bots.',
        tags: ['Cognitive Bots', 'Intelligent', 'Enterprise'],
    },
    {
        title: 'Website Development',
        description: 'Learn modern web development with HTML, CSS, JavaScript, React, Node.js, and full-stack projects.',
        tags: ['Frontend', 'Backend', 'Full Stack'],
    },
    {
        title: 'Mobile App Development',
        description: 'Build cross-platform apps using React Native/Flutter and native iOS/Android with modern UI/UX.',
        tags: ['iOS', 'Android', 'Cross-Platform'],
    },
    {
        title: 'E-commerce Development',
        description: 'Build complete e-commerce solutions with payment integration and inventory management.',
        tags: ['Payment', 'Inventory', 'Modern UI'],
    },
];

const Internships: React.FC = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Internships We Offer!
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Join our exciting internship journey and gain hands-on experience in cutting-edge technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {internships.map((item) => (
                        <div key={item.title} className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                            <div className="mb-4">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={applyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                            >
                                Apply
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;


