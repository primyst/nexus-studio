'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/bg.jpg)' }}
        />
        
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {/* Navigation */}
          <nav className="container mx-auto px-6 pt-8 md:px-12 lg:px-16">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white md:text-3xl">Nexus Studio</h1>
              <ul className="hidden items-center space-x-8 text-sm font-medium text-white md:flex">
                <li className="cursor-pointer hover:text-gray-300 transition-colors">About us</li>
                <li className="cursor-pointer hover:text-gray-300 transition-colors">Services</li>
                <li className="cursor-pointer hover:text-gray-300 transition-colors">Projects</li>
              </ul>
              <button className="rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-black">
                Get Support
              </button>
            </div>
          </nav>

          {/* Hero Main Content */}
          <div className="container mx-auto flex flex-1 flex-col justify-center px-6 md:px-12 lg:px-16">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                Bold ideas, beautiful digital design.
              </h2>
              <p className="mt-6 text-base text-white/80 md:text-lg">
                Nexus Studio helps you bring bold ideas to life with sleek, modern digital design—perfect for portfolios, agencies, startups, and creative professionals.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:bg-gray-200 hover:scale-105 active:scale-95">
                  Book a Call
                </button>
                <button className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95">
                  Watch Video
                </button>
              </div>
            </div>
          </div>

          {/* Services Section (Bottom Cards) */}
          <div className="container mx-auto px-6 pb-16 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Branding */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 transition-all hover:bg-white/20">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-white">Branding</h3>
                <p className="mt-4 text-sm text-white/80">
                  Craft unique identities that capture attention and define your brand&apos;s voice.
                </p>
              </div>

              {/* Web Design */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 transition-all hover:bg-white/20">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold text-white">Web Design</h3>
                <p className="mt-4 text-sm text-white/80">
                  Design modern, responsive websites that look stunning on every device.
                </p>
              </div>

              {/* UI/UX Design */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 transition-all hover:bg-white/20">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
                <p className="mt-4 text-sm text-white/80">
                  Create seamless experiences that delight users and drive lasting engagement.
                </p>
              </div>

              {/* Strategy */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 transition-all hover:bg-white/20">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white">Strategy</h3>
                <p className="mt-4 text-sm text-white/80">
                  Develop smart digital strategies that connect vision with impactful execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
            }
