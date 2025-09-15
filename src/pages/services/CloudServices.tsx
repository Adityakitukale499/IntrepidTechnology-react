import React from 'react';
import { Cloud, Shield, Zap, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const CloudServices: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance with industry standards.',
    },
    {
      icon: Zap,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling infrastructure that grows with your business needs.',
    },
    {
      icon: Globe,
      title: 'Global Availability',
      description: 'Deploy your applications globally for better performance and reliability.',
    },
  ];

  const services = [
    {
      title: 'Cloud Migration Services',
      description: 'Move your existing applications and infrastructure to the cloud safely and efficiently.',
      features: ['Assessment & planning', 'Data migration', 'Application modernization', 'Testing & validation']
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive management of your cloud infrastructure and resources.',
      features: ['Infrastructure monitoring', 'Performance optimization', 'Cost management', '24/7 support']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Implement DevOps practices and continuous integration/deployment pipelines.',
      features: ['Pipeline automation', 'Container orchestration', 'Infrastructure as Code', 'Monitoring & logging']
    },
    {
      title: 'Cloud Security Services',
      description: 'Protect your cloud infrastructure with advanced security measures and monitoring.',
      features: ['Security assessment', 'Identity management', 'Data encryption', 'Compliance monitoring']
    }
  ];

  const platforms = [
    { name: 'AWS', category: 'Cloud Provider' },
    { name: 'Microsoft Azure', category: 'Cloud Provider' },
    { name: 'Google Cloud', category: 'Cloud Provider' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'GitLab CI', category: 'CI/CD' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Visualization' },
    { name: 'Ansible', category: 'Automation' },
    { name: 'Helm', category: 'Package Manager' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cloud <span className="text-slate-600 dark:text-slate-400">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-gray-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your business with secure, scalable cloud infrastructure and modern DevOps practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions to modernize your infrastructure and accelerate growth
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
                      <CheckCircle className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0" />
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
              Technologies & Platforms
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Industry-leading cloud platforms and DevOps tools
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

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Cloud Benefits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Why businesses choose cloud solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: '60%', label: 'Cost Reduction' },
              { metric: '99.9%', label: 'Uptime Guarantee' },
              { metric: '10x', label: 'Faster Deployment' },
              { metric: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-600 dark:text-slate-400 mb-2">
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss your cloud migration strategy and modernize your infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Start Cloud Migration
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;