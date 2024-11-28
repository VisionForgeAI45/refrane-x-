import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, FileCheck, BookOpen, BarChart2, Shield, Clock } from 'lucide-react';

const ProductPage = () => {
  const features = [
    {
      icon: Users,
      title: 'Smart Employee Profiles',
      description: "AI-powered profiles that adapt and grow with each employee's journey",
    },
    {
      icon: FileCheck,
      title: 'Automated Documentation',
      description: 'Intelligent system handles all paperwork and compliance requirements',
    },
    {
      icon: BookOpen,
      title: 'Personalized Learning',
      description: 'Custom training paths based on role and experience level',
    },
    {
      icon: BarChart2,
      title: 'Progress Analytics',
      description: 'Real-time insights into onboarding progress and effectiveness',
    },
    {
      icon: Shield,
      title: 'Compliance Tracking',
      description: 'Automated compliance monitoring and documentation',
    },
    {
      icon: Clock,
      title: 'Time Optimization',
      description: 'Reduce onboarding time by up to 70% with AI automation',
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'demo', // Add type field with a default value
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>('');

  const webhookURL = 'https://hook.eu2.make.com/54n672i5bf9pggjgla67sjminq61cmbt';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', type: 'demo' });
      } else {
        throw new Error('Failed to send request. Please try again later.');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              AI-Powered Employee Onboarding System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your onboarding process with our intelligent system that automates
              paperwork, personalizes training, and ensures compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-green-500 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">See It in Action</h2>
              <p className="text-xl text-gray-600 mb-8">
                Watch how our AI-powered system transforms the onboarding experience
                for both HR teams and new employees.
              </p>
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                  alt="Platform Demo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Demo</h3>
              {isSubmitted ? (
                <p className="text-green-500">Thank you! We'll reach out to schedule your demo.</p>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your company"
                      required
                    />
                  </div>
                  <button className="w-full px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                    Schedule Demo
                  </button>
                </form>
              )}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
