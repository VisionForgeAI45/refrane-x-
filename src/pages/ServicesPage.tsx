import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, BarChart } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'AI-Powered Process Automation',
    description: 'Streamline your workflows with intelligent automation that learns and adapts to your business needs.',
    features: ['Custom workflow design', 'Intelligent document processing', 'Automated decision making', '24/7 operation capability']
  },
  // {
  //   icon: Database,
  //   title: 'Intelligent Data Analytics',
  //   description: 'Transform raw data into actionable insights with our advanced AI analytics solutions.',
  //   features: ['Predictive analytics', 'Real-time data processing', 'Custom dashboards', 'Automated reporting']
  // },
  // {
  //   icon: MessageSquare,
  //   title: 'Natural Language Processing',
  //   description: 'Leverage the power of NLP to understand and interact with your customers more effectively.',
  //   features: ['Sentiment analysis', 'Chatbot development', 'Text classification', 'Language understanding']
  // },
  {
    icon: Brain,
    title: 'Smart Assistant Development',
    description: 'Create lasting connections with AI-driven chatbots, voice assistants, and digital agents that resonate with your customers.',
    features: ['Custom Chatbot, Voice Assistant', 'Natural language processing', 'Speech Recognition & Synthesis', 'Multi-Channel Integration']
  },
  {
    icon: BarChart,
    title: 'AI Business Auditing',
    description: 'Optimize your operations with a thorough AI audit, uncovering potential efficiencies and innovative solutions tailored to your business.',
    features: ['Comprehensive business analysis', 'AI integration recommendations', 'Tailored strategies for growth', 'Implementation Roadmap']
  },
  // {
  //   icon: Cloud,
  //   title: 'Cloud AI Services',
  //   description: 'Leverage cloud-based AI services for maximum scalability and efficiency.',
  //   features: ['Multi-cloud support', 'Serverless computing', 'API development', 'Cost optimization']
  // }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can transform your business operations
            and drive unprecedented growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors w-full">
                Learn More
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;