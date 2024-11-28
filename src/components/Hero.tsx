import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronDown, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToProduct = () => {
    const productSection = document.getElementById('product');
    productSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 bg-green-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-block"
            >
              <Users className="w-16 h-16 text-green-400 mb-8" />
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Employee Onboarding
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join 100+ companies that have revolutionized their hiring process with our AI-powered system.
              Reduce onboarding time by 70% while boosting employee satisfaction.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                'Automate paperwork and documentation',
                'Personalized training paths',
                'Real-time progress tracking',
                'Compliance automation',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                onClick={scrollToProduct}
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Employee Onboarding"
              className="rounded-lg shadow-2xl"
            />
            {/* Floating Stats */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-xl"
            >
              <div className="text-2xl font-bold text-green-500">70%</div>
              <div className="text-sm text-gray-600">Faster Onboarding</div>
            </motion.div>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-xl"
            >
              <div className="text-2xl font-bold text-green-500">95%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToProduct}
        >
          <ChevronDown className="w-8 h-8 text-green-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
