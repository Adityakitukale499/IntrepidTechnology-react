import React from 'react';
import { Target, Award, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We focus on delivering solutions that align with your business objectives and drive real results.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality ensures every project meets the highest standards of performance.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'We build lasting partnerships by understanding your unique needs and challenges.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We leverage cutting-edge technologies to create forward-thinking solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Intrepid Technology is an IT services and consultancy that specializes in creating innovative solutions for businesses. We believe practical knowledge is the key to success and invest in the future through hands-on learning with live projects and real-world examples.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Intrepid Technology
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Delivering Excellence in Technology Solutions for Over 50+ Projects. With a proven track record, we combine technical expertise with innovative thinking to deliver solutions that drive business growth and digital transformation.
            </p>
            <a href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              Get Started Today
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;