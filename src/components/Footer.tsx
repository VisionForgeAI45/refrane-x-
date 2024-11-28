import React, { useState } from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Handle form submission
  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await fetch('https://hook.eu2.make.com/54n672i5bf9pggjgla67sjminq61cmbt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'subscribe',
          email: email,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail(''); // Clear the email input after success
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Refrane</h3>
            <p className="text-sm">
              Transforming businesses through innovative AI solutions.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="/product" className="hover:text-green-400 transition-colors">Product</a></li>
              <li><a href="/about" className="hover:text-green-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>dina@refrane.com</li>
              <li>+264 81362-7326</li>
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay Updated on the Latest in AI Innovation</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg bg-gray-800 border-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {isSuccess && <p className="text-green-400 mt-2">Successfully subscribed!</p>}
            {isError && <p className="text-red-400 mt-2">There was an error, please try again.</p>}
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Refrane. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.instagram.com/refrane.ai/profilecard/?igsh=NnJveHA5OWl5ZnF3" className="hover:text-green-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            {/* <a href="#" className="hover:text-green-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-green-400 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-green-400 transition-colors"><Mail className="w-5 h-5" /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
