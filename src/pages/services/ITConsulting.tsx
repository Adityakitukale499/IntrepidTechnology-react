import React from 'react';
import { Users, Lightbulb, TrendingUp, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const ITConsulting: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Strategic Planning',
      description: 'Develop comprehensive IT strategies aligned with your business objectives.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Access to experienced IT consultants and technology experts.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation initiatives.',
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Optimize your IT processes and workflows for maximum efficiency.',
    },
  ];

  const services = [
    {
      title: 'IT Strategy & Planning',
      description: 'Develop comprehensive IT strategies that align with your business goals and objectives.',
      features: ['Technology roadmap', 'Budget planning', 'Risk assessment', 'Vendor evaluation']
    },
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation to stay competitive.',
      features: ['Process digitization', 'Technology adoption', 'Change management', 'Training programs']
    },
    {
      title: 'System Integration',
      description: 'Integrate disparate systems and applications for seamless data flow.',
      features: ['API development', 'Data migration', 'Legacy modernization', 'Workflow automation']
    },
    {
      title: 'IT Governance & Compliance',
      description: 'Establish IT governance frameworks and ensure regulatory compliance.',
      features: ['Policy development', 'Compliance audits', 'Security frameworks', 'Documentation']
    }
  ];

  const expertise = [
    { area: 'Cloud Strategy', category: 'Infrastructure' },
    { area: 'Cybersecurity', category: 'Security' },
    { area: 'Data Analytics', category: 'Analytics' },
    { area: 'Enterprise Architecture', category: 'Architecture' },
    { area: 'Project Management', category: 'Management' },
    { area: 'Agile Transformation', category: 'Methodology' },
    { area: 'IT Service Management', category: 'Operations' },
    { area: 'Business Intelligence', category: 'Analytics' },
    { area: 'ERP Implementation', category: 'Systems' },
    { area: 'CRM Strategy', category: 'Customer' },
    { area: 'Mobile Strategy', category: 'Mobile' },
    { area: 'IoT Solutions', category: 'Innovation' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              IT <span className="text-emerald-600 dark:text-emerald-400">Consulting</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategic IT consulting services to help your business leverage technology for competitive advantage and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Expert guidance to help you make informed technology decisions and drive business success
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
                      <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Deep expertise across various technology domains and business functions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-all duration-300">
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {item.area}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A structured approach to deliver maximum value and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Comprehensive analysis of your current IT landscape and business needs.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop tailored strategies and recommendations based on findings.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Guide and support the implementation of recommended solutions.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and optimization for sustained success.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your IT Strategy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how our IT consulting services can help drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;