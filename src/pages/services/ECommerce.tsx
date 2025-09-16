import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, Package, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const ECommerce: React.FC = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Complete Online Store',
      description: 'Full-featured e-commerce platforms with product catalogs, shopping carts, and checkout.',
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Integrated payment gateways with secure transaction processing and fraud protection.',
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Advanced inventory tracking, order management, and shipping integration.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Comprehensive analytics and reporting to track sales, customers, and performance.',
    },
  ];

  const services = [
    {
      title: 'Custom E-commerce Development',
      description: 'Tailored online stores built to meet your specific business requirements and goals.',
      features: ['Custom design', 'Scalable architecture', 'Mobile optimization', 'SEO-friendly structure']
    },
    {
      title: 'Platform Migration',
      description: 'Seamlessly migrate your existing store to modern e-commerce platforms.',
      features: ['Data migration', 'Design preservation', 'SEO maintenance', 'Zero downtime']
    },
    {
      title: 'Multi-vendor Marketplace',
      description: 'Build marketplace platforms where multiple vendors can sell their products.',
      features: ['Vendor management', 'Commission tracking', 'Multi-payment support', 'Review system']
    },
    {
      title: 'Mobile Commerce Apps',
      description: 'Native mobile apps for iOS and Android to expand your reach.',
      features: ['Native performance', 'Push notifications', 'Offline browsing', 'App store optimization']
    }
  ];

  const platforms = [
    { name: 'Shopify', category: 'Platform' },
    { name: 'WooCommerce', category: 'WordPress' },
    { name: 'Magento', category: 'Enterprise' },
    { name: 'BigCommerce', category: 'SaaS' },
    { name: 'Stripe', category: 'Payment' },
    { name: 'PayPal', category: 'Payment' },
    { name: 'Razorpay', category: 'Payment' },
    { name: 'AWS', category: 'Hosting' },
    { name: 'Cloudflare', category: 'CDN' },
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Mailchimp', category: 'Marketing' },
    { name: 'Zendesk', category: 'Support' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              E-Commerce <span className="text-indigo-600 dark:text-indigo-400">Solutions</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build powerful online stores that drive sales and provide exceptional shopping experiences for your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
              Our E-Commerce Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive e-commerce solutions to help you sell online successfully
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
                      <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
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
              Platforms & Integrations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work with leading e-commerce platforms and payment providers
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

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              E-Commerce Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Essential features for a successful online store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Product Catalog Management',
              'Shopping Cart & Checkout',
              'Payment Gateway Integration',
              'Order Management System',
              'Inventory Tracking',
              'Customer Account Portal',
              'Wishlist & Favorites',
              'Product Reviews & Ratings',
              'Discount & Coupon System',
              'Multi-language Support',
              'SEO Optimization',
              'Mobile Responsive Design',
              'Email Notifications',
              'Analytics & Reporting',
              'Security & SSL',
              'Backup & Recovery',
              'Social Media Integration',
              'Live Chat Support'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's build an e-commerce platform that drives sales and grows your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Start Your Store
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/products" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerce;