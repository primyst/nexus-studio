'use client';

import React from 'react';
import { Sparkles, Globe, Layout, Lightbulb } from 'lucide-react';

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bg.jpg)', // Place your background image (Nike sneakers reflection) in public/bg.jpg
          }}
        />
        
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation */}
          <nav className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold tracking-tight">Nexus Studio</h1>
              <div className="hidden md:flex items-center gap-8 text-sm">
                <a href="#" className="hover:text-gray-300 transition">About us</a>
                <a href="#" className="hover:text-gray-300 transition">Services</a>
                <a href="#" className="hover:text-gray-300 transition">Projects</a>
                <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
                  Get Support
                </button>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <main className="flex-1 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  Bold ideas, beautiful digital design.
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
                  Nexus Studio helps you bring bold ideas to life with sleek, modern digital design—perfect for portfolios, agencies, startups, and creative professionals.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                    Book a Call
                  </button>
                  <button className="border border-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition duration-300 transform hover:scale-105">
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Services Section */}
          <section className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Branding */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Branding</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Craft unique identities that capture attention and define your brand's voice.
                </p>
              </div>

              {/* Web Design */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Design modern, responsive websites that look stunning on every device.
                </p>
              </div>

              {/* UI/UX Design */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                  <Layout className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Create seamless experiences that delight users and drive lasting engagement.
                </p>
              </div>

              {/* Strategy */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Develop smart digital strategies that connect vision with impactful execution.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
                    }
