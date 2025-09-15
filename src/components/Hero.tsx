import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Transforming Ideas into Digital Reality with Expert Technology Solutions
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Intrepid Technology delivers cutting-edge website development, custom software solutions, mobile applications, automation systems, and comprehensive IT services. With over 50+ successful projects, we empower businesses with innovative technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Get Inquiry
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd_Fy8ms7b7AvsgrlymG-8LbKYdjMH1Nk4E4yss8Z4C6dchBg/viewform"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}
            >
              Apply Internship
            </a>

            <a
              href="https://wa.me/919518746631"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/80 dark:bg-gray-800/60 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              Connect on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '40+', label: 'Happy Clients' },
              { number: '3', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;