import React from 'react';
import ecommerce from '../assets/ecommerce.png';
import bussiness from '../assets/bussiness.png';
import social from '../assets/social.png';
import helthcare from '../assets/helthcare.png';
import education from '../assets/education.png';
import fintech from '../assets/fintech.png';

const Products: React.FC = () => {
    const websites = [
        {
            title: 'Professional Business Websites',
            tag: 'Corporate',
            image: 'https://websitedemos.net/wp-content/uploads/2021/05/digital-agency-02-home.jpg',
            description: 'Corporate websites, consulting firms, and service-based businesses with modern layouts.'
        },
        {
            title: 'Blog & Magazine Websites',
            tag: 'Content',
            image: 'https://wpastra.com/wp-content/uploads/2025/03/news-blog-04-2-scaled-astra_template_preview.jpg',
            description: 'Beautiful blogs and magazines for content creators and publishers.'
        },
        {
            title: 'E-commerce Websites',
            tag: 'E-commerce',
            image: 'https://wpastra.com/wp-content/uploads/2024/01/organic-shop-02-home-1-1-scaled-astra_template_preview.jpg',
            description: 'Online stores with shopping cart, payments, and modern retail experiences.'
        },
        {
            title: 'Portfolio Websites',
            tag: 'Creative',
            image: 'https://websitedemos.net/wp-content/uploads/2019/07/accountant-02.jpg',
            description: 'Stunning portfolio sites for photographers, designers, and creatives.'
        },
        {
            title: 'Startup & SaaS Websites',
            tag: 'SaaS',
            image: 'https://websitedemos.net/wp-content/uploads/2025/05/web-agency-04-600x3516.jpg',
            description: 'Modern startup and SaaS websites with clean designs for tech products.'
        },
        {
            title: 'Restaurant & Food Websites',
            tag: 'Food',
            image: 'https://websitedemos.net/wp-content/uploads/2019/07/italian-restaurant-02-home-1.jpg',
            description: 'Appetizing food and restaurant sites designed to showcase menus.'
        },
        {
            title: 'Education & Learning Websites',
            tag: 'Education',
            image: 'https://websitedemos.net/wp-content/uploads/2019/07/education-04-home.jpg',
            description: 'Websites for educational institutions, online courses, and e-learning.'
        },
        {
            title: 'Real Estate Websites',
            tag: 'Real Estate',
            image: 'https://cdn.shortpixel.ai/spai/w_397+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/real-estate-companys-04-2-scaled-astra_template_preview.jpg',
            description: 'Real estate platforms with property listings, search and showcase.'
        },
    ];

    const apps = [
        {
            title: 'E-commerce Mobile Apps',
            tag: 'E-commerce',
            image: ecommerce,
            description: 'Mobile shopping with payments, inventory and user-friendly UI.'
        },
        {
            title: 'Business Management Apps',
            tag: 'Business',
            image: bussiness,
            description: 'Apps for project management, CRM, and collaboration.'
        },
        {
            title: 'Social & Community Apps',
            tag: 'Social',
            image: social,
            description: 'Real-time messaging and community features.'
        },
        {
            title: 'Healthcare & Fitness Apps',
            tag: 'Healthcare',
            image: helthcare,
            description: 'Health tracking, appointment booking, and wellness features.'
        },
        {
            title: 'Education & Learning Apps',
            tag: 'Education',
            image: education,
            description: 'Interactive learning with course management and tracking.'
        },
        {
            title: 'Fintech & Banking Apps',
            tag: 'Fintech',
            image: fintech,
            description: 'Secure financial apps with payments and digital banking.'
        },
    ];

    return (
        <div className="min-h-screen">
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            We can create product for you
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Explore our website and mobile app solutions. We deliver complete digital products using premium templates and modern tech.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Websites we build</h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-3">Business, e-commerce, content, and more</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {websites.map((item) => (
                            <div key={item.title} className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="relative overflow-hidden" style={{ height: 300 }}>
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">{item.tag}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mobile apps we build</h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-3">Android & iOS native and cross-platform</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {apps.map((item) => (
                            <div key={item.title} className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="relative overflow-hidden" style={{ height: 300 }}>
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">{item.tag}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;


