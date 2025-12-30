'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header / Navigation */}
      <header className="relative z-50 px-6 py-8 md:px-12 lg:px-24">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-cyan-600"
          >
            qixels
          </motion.div>

          <ul className="hidden md:flex items-center space-x-10 text-sm">
            {['Features', 'Team', 'Sign In'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white py-8 px-6 md:hidden shadow-lg"
          >
            <ul className="flex flex-col space-y-6 text-center">
              {['Features', 'Team', 'Sign In'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-lg hover:text-cyan-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-white pb-32">
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pt-12 md:pt-24 text-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="https://fylo-dark-theme-landing-page-frontendmentor.vercel.app/images/illustration-intro.png"
            alt="Manage your tasks efficiently"
            className="mx-auto max-w-full h-auto md:max-w-2xl lg:max-w-4xl"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 text-3xl md:text-5xl font-bold leading-tight"
          >
            Manage all your tasks in one place,<br />
            stay organized anywhere.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg"
          >
            qixels helps you track tasks, deadlines, and progress efficiently.
            Collaborate with your team or work solo, anytime, anywhere.
          </motion.p>

          <motion.a
            href="/auth/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-block px-10 py-4 bg-cyan-600 text-white hover:bg-cyan-500 rounded-full font-medium shadow-lg transition"
          >
            Continue with Google
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto">
          {[
            {
              title: 'Organize Tasks',
              description:
                'Create, update, and manage all your tasks in one simple dashboard.',
              icon: Mail,
            },
            {
              title: 'Track Progress',
              description:
                'Monitor task completion and productivity in real-time.',
              icon: Phone,
            },
            {
              title: 'Collaborate',
              description:
                'Share tasks and updates with your team seamlessly.',
              icon: MapPin,
            },
            {
              title: 'Stay Notified',
              description:
                'Get reminders for deadlines and priority tasks automatically.',
              icon: ArrowRight,
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-100 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-4 text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h3 className="text-3xl font-bold text-cyan-600 mb-4">qixels</h3>
            <p className="text-gray-600 flex items-start">
              <MapPin className="mr-2 mt-1 flex-shrink-0" />
              Manage your tasks efficiently and stay organized wherever you are.
            </p>
          </div>

          <div>
            <p className="flex items-center mb-2">
              <Phone className="mr-2" />
              +1-543-123-4567
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" />
              support@qixels.com
            </p>
          </div>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
