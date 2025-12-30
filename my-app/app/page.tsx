import React from 'react';
import { Palette, Monitor, Layers, Target } from 'lucide-react';

export default function NexusStudioHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg.jpg)' }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between p-6 lg:p-8">
          <div className="text-white text-xl lg:text-2xl font-bold">
            Nexus Studio
          </div>
          <nav className="flex items-center gap-4 lg:gap-8">
            <a href="#about" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base hidden sm:inline">
              About us
            </a>
            <a href="#services" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base hidden sm:inline">
              Services
            </a>
            <a href="#projects" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base hidden sm:inline">
              Projects
            </a>
            <button className="bg-white text-gray-900 px-4 lg:px-6 py-2 rounded hover:bg-gray-100 transition-colors text-sm lg:text-base font-medium">
              Get Support
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center px-6 lg:px-16 xl:px-24">
          <div className="max-w-7xl w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                Bold ideas, beautiful digital design.
              </h1>
              <p className="text-white/90 text-base lg:text-lg mb-8 max-w-xl">
                Nexus Studio helps you bring bold ideas to life with sleek, modern digital design—perfect for portfolios, agencies, startups, and creative professionals.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-gray-900 px-6 lg:px-8 py-3 rounded font-medium hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                  Book A Call
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 lg:px-8 py-3 rounded font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95 border border-white/20">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Services Section */}
        <section className="px-6 lg:px-16 xl:px-24 pb-12 lg:pb-16">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Branding */}
              <div className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                    <Palette className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Branding</h3>
                  <p className="text-white/70 text-sm">
                    Craft unique narratives that capture attention and elevate your brand's voice.
                  </p>
                </div>
              </div>

              {/* Web Design */}
              <div className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                    <Monitor className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Web Design</h3>
                  <p className="text-white/70 text-sm">
                    Design modern, responsive websites that look stunning on every device.
                  </p>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                    <Layers className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">UI/UX Design</h3>
                  <p className="text-white/70 text-sm">
                    Create seamless experiences that delight users and drive lasting engagement.
                  </p>
                </div>
              </div>

              {/* Strategy */}
              <div className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Strategy</h3>
                  <p className="text-white/70 text-sm">
                    Develop smart digital strategies that connect vision with impactful execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
      }
