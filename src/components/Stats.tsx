import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '3+',
    label: 'Years in AI Development',
  },
  {
    icon: Users,
    value: '70+',
    label: 'Successful Deployments',
  },
  {
    icon: Briefcase,
    value: '95%',
    label: 'Client Satisfaction',
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
