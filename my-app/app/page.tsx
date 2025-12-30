'use client';

import { ArrowRight, Play, Palette, Globe, Layers, Target } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: 'Branding',
    description: 'Craft unique identities that capture attention and define your brand’s voice.',
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: 'Web Design',
    description: 'Design modern, responsive websites that look stunning on every device.',
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Create seamless experiences that delight users and drive engagement.',
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: 'Strategy',
    description: 'Develop smart digital strategies that connect vision with execution.',
    icon: <Target className="h-6 w-6" />,
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between">
          <span className="text-lg font-semibold">Nexus Studio</span>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a className="hover:text-white transition">About us</a>
            <a className="hover:text-white transition">Services</a>
            <a className="hover:text-white transition">Projects</a>
          </div>

          <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition">
            Get Support
          </button>
        </nav>

        {/* Hero */}
        <div className="mt-24 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bold ideas, <br /> beautiful digital design.
          </h1>

          <p className="mt-6 text-white/80">
            Nexus Studio helps you bring bold ideas to life with sleek, modern
            digital design—perfect for portfolios, agencies, startups, and
            creative professionals.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="group flex items-center gap-2 rounded-md bg-white px-6 py-3 text-black font-medium hover:bg-white/90 transition">
              Book a Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-white hover:bg-white/10 transition">
              <Play className="h-4 w-4" />
              Watch Video
            </button>
          </div>
        </div>

        {/* Services */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-white/10 p-6 backdrop-blur-sm hover:bg-white/15 transition"
            >
              <div className="mb-4 text-white">{service.icon}</div>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
