import React from 'react';
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const DigitalMarketing: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and increase organic traffic to your website.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven strategies to accelerate your business growth and customer acquisition.',
    },
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Reach the right audience with precision-targeted advertising campaigns.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting and analytics to measure and optimize performance.',
    },
  ];

  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Improve your website\'s visibility in search engines and drive organic traffic.',
      features: ['Keyword research', 'On-page optimization', 'Technical SEO', 'Link building']
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Targeted advertising campaigns on Google Ads, Facebook, and other platforms.',
      features: ['Google Ads management', 'Facebook advertising', 'Campaign optimization', 'ROI tracking']
    },
    {
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with customers on social media platforms.',
      features: ['Content creation', 'Community management', 'Social advertising', 'Influencer marketing']
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable content that attracts and engages your target audience.',
      features: ['Content strategy', 'Blog writing', 'Video content', 'Email marketing']
    }
  ];

  const platforms = [
    { name: 'Google Ads', category: 'PPC' },
    { name: 'Facebook Ads', category: 'Social' },
    { name: 'Instagram', category: 'Social' },
    { name: 'LinkedIn', category: 'B2B' },
    { name: 'YouTube', category: 'Video' },
    { name: 'Twitter', category: 'Social' },
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'SEMrush', category: 'SEO' },
    { name: 'Mailchimp', category: 'Email' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'Hootsuite', category: 'Management' },
    { name: 'Canva', category: 'Design' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Digital <span className="text-orange-600 dark:text-orange-400">Marketing</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Grow your business with comprehensive digital marketing strategies that drive traffic, generate leads, and increase conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to boost your online presence and drive results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Platforms & Tools We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Industry-leading platforms and tools for maximum marketing effectiveness
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-all duration-300">
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {platform.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {platform.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Results We Deliver
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Measurable outcomes that drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: '300%', label: 'Average Traffic Increase' },
              { metric: '150%', label: 'Lead Generation Boost' },
              { metric: '200%', label: 'Social Media Growth' },
              { metric: '95%', label: 'Client Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's create a digital marketing strategy that drives real results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Start Marketing Campaign
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;