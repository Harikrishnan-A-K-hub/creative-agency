'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const services = [
  { icon: '🎨', title: 'Brand Identity', desc: 'Crafting unique visual identities that tell your story and connect with your audience.' },
  { icon: '💻', title: 'Web Design', desc: 'Stunning, responsive websites that convert visitors into loyal customers.' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Intuitive mobile experiences that users love and keep coming back to.' },
  { icon: '🚀', title: 'Digital Strategy', data: 'Data-driven campaigns that amplify your reach and drive measurable results.' },
  { icon: '🎬', title: 'Motion Design', desc: 'Captivating animations and videos that bring your brand to life.' },
  { icon: '📸', title: 'Photography', desc: 'Professional visual content that captures the essence of your brand.' },
];

const projects = [
  { title: 'Nexus Dashboard', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' },
  { title: 'Aurora Brand', category: 'Branding', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop' },
  { title: 'Pulse Analytics', category: 'Web Development', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' },
  { title: 'Vertex Mobile', category: 'App Design', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop' },
];

const testimonials = [
  { name: 'Sarah Chen', role: 'CEO, TechFlow', text: 'They transformed our digital presence completely. The results exceeded all expectations.' },
  { name: 'Marcus Webb', role: 'Founder, Artisan', text: 'Incredible attention to detail and creative vision. Our brand has never looked better.' },
  { name: 'Elena Rodriguez', role: 'Marketing Dir, Velocity', text: 'Professional, innovative, and results-driven. A true partnership in every sense.' },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="animated-bg">
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container-custom py-32">
          <div className="max-w-4xl">
            <span className="text-small mb-6 inline-block">CREATIVE DIGITAL AGENCY</span>
            <h1 className="text-display mb-8">
              We Create <span className="gradient-text">Digital</span> Experiences That Matter
            </h1>
            <p className="text-body text-xl mb-12 max-w-2xl">
              A boutique agency specializing in brand identity, web design, and digital strategy. We help ambitious brands stand out in the digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="btn btn-filled">
                View Our Work
              </Link>
              <Link href="/contact" className="btn btn-outlined">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-b border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '12', label: 'Awards Won' },
              { number: '8+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="stat-number">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-small mb-4 block">WHAT WE DO</span>
            <h2 className="text-heading mb-6">Services That Drive Results</h2>
            <p className="text-body max-w-2xl mx-auto">
              We offer a comprehensive suite of digital services designed to elevate your brand and accelerate growth.
            </p>
          </div>
          
          <div className="modern-grid">
            {services.map((service, i) => (
              <div key={i} className="glass-card group">
                <div className="feature-icon text-3xl">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-small mb-4 block">ABOUT US</span>
              <h2 className="text-heading mb-6">We're a Team of Creative Problem Solvers</h2>
              <p className="text-body mb-6">
                Founded in 2018, we've helped over 50 brands transform their digital presence. Our approach combines strategic thinking with bold creativity to deliver results that matter.
              </p>
              <p className="text-body mb-8">
                We believe great design is not just about aesthetics—it's about solving problems and creating meaningful connections between brands and people.
              </p>
              <Link href="/about" className="btn btn-filled">
                Learn More
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card max-w-xs">
                <div className="stat-number text-4xl">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-small mb-4 block">PORTFOLIO</span>
              <h2 className="text-heading">Featured Work</h2>
            </div>
            <Link href="/portfolio" className="btn btn-outlined hidden md:flex">
              View All
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="image-card">
                <img src={project.image} alt={project.title} />
                <div className="image-card-overlay">
                  <span className="tag mb-3">{project.category}</span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <Link href="/portfolio" className="btn btn-outlined mt-8 md:hidden w-full">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-small mb-4 block">TESTIMONIALS</span>
            <h2 className="text-heading">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <p className="text-gray-300 mb-6 relative z-10">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom">
          <div className="glass-card text-center py-20 px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-heading mb-6">Ready to Start Your Project?</h2>
              <p className="text-body max-w-xl mx-auto mb-8">
                Let's collaborate and create something extraordinary together. Your brand deserves to stand out.
              </p>
              <Link href="/contact" className="btn btn-filled">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}