import React from 'react';
import { Target, Award, Users, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver innovative technology solutions that transform businesses and drive digital growth.',
    },
    {
      icon: Award,
      title: 'Our Vision',
      description: 'To be the leading IT solutions provider, recognized for excellence and innovation.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Experienced professionals dedicated to delivering exceptional results for our clients.',
    },
    {
      icon: Zap,
      title: 'Our Approach',
      description: 'We combine cutting-edge technology with creative solutions to exceed expectations.',
    },
  ];

  const values = [
    'Innovation and Creativity',
    'Quality and Excellence',
    'Client Satisfaction',
    'Continuous Learning',
    'Integrity and Trust',
    'Collaborative Partnership',
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Intrepid Technology</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a leading IT solutions company dedicated to transforming businesses through 
              innovative technology solutions and exceptional service delivery.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between technology and business success, 
                Intrepid Technology has grown from a small startup to a trusted partner for 
                businesses across various industries.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Our journey began with a simple belief: that technology should empower businesses 
                to achieve their goals more efficiently and effectively. Today, we continue to 
                uphold this belief by delivering cutting-edge solutions that drive real results.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We specialize in web development, mobile applications, digital marketing, and 
                comprehensive IT consulting services. Our team of experts works closely with 
                clients to understand their unique challenges and deliver tailored solutions.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built on strong values and driven by clear mission and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Intrepid Technology?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: 'Proven Expertise',
                    description: 'Years of experience delivering successful projects across various industries and technologies.'
                  },
                  {
                    title: 'Client-Centric Approach',
                    description: 'We prioritize understanding your business needs and delivering solutions that drive real value.'
                  },
                  {
                    title: 'Cutting-Edge Technology',
                    description: 'We stay updated with the latest technologies and best practices to deliver modern solutions.'
                  },
                  {
                    title: 'Ongoing Support',
                    description: 'Our relationship doesn\'t end at delivery. We provide continuous support and maintenance.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Why Choose Us"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;