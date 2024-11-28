import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI-Powered Process Automation',
    description: 'Streamline your workflows with intelligent automation that learns and adapts to your business needs.'
  },
  {
    icon: Database,
    title: 'Intelligent Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced AI analytics solutions.'
  },
  {
    icon: MessageSquare,
    title: 'Business Auditing',
    description: 'Optimize your business with an AI audit to uncover efficiencies and tailored solutions.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Empowering your business with cutting-edge AI solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button
  onClick={() => window.location.href = '/services'}
  className="mt-6 text-green-500 font-semibold hover:text-green-600 transition-colors"
>
  Learn More →
</button>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;