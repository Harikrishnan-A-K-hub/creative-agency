'use client';

import Link from 'next/link';

const services = [
  { icon: '🎨', title: 'Brand Identity', desc: 'Crafting unique visual identities that tell your story and connect with your audience.' },
  { icon: '💻', title: 'Web Design', desc: 'Stunning, responsive websites that convert visitors into loyal customers.' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Intuitive mobile experiences that users love and keep coming back to.' },
  { icon: '🚀', title: 'Digital Strategy', desc: 'Data-driven campaigns that amplify your reach and drive measurable results.' },
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
  return (
    <div className="animated-bg">
      {/* Hero */}
      <section className="flex items-center relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="container-custom" style={{ padding: '128px 24px' }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="text-small" style={{ display: 'block', marginBottom: '24px' }}>CREATIVE DIGITAL AGENCY</span>
            <h1 className="text-display" style={{ marginBottom: '32px' }}>
              We Create <span className="gradient-text">Digital</span> Experiences That Matter
            </h1>
            <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '48px', maxWidth: '600px' }}>
              A boutique agency specializing in brand identity, web design, and digital strategy. We help ambitious brands stand out in the digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="btn btn-filled">View Our Work</Link>
              <Link href="/contact" className="btn btn-outlined">Start a Project</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-custom">
          <div className="stats-row">
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
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <span className="text-small" style={{ display: 'block', marginBottom: '16px' }}>WHAT WE DO</span>
            <h2 className="text-heading" style={{ marginBottom: '24px' }}>Services That Drive Results</h2>
            <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
              We offer a comprehensive suite of digital services designed to elevate your brand and accelerate growth.
            </p>
          </div>
          <div className="modern-grid">
            {services.map((service, i) => (
              <div key={i} className="glass-card">
                <div className="feature-icon">{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px' }}>{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container-custom">
          <div className="about-grid">
            <div>
              <span className="text-small" style={{ display: 'block', marginBottom: '16px' }}>ABOUT US</span>
              <h2 className="text-heading" style={{ marginBottom: '24px' }}>We&apos;re a Team of Creative Problem Solvers</h2>
              <p className="text-body" style={{ marginBottom: '24px' }}>
                Founded in 2018, we&apos;ve helped over 50 brands transform their digital presence. Our approach combines strategic thinking with bold creativity to deliver results that matter.
              </p>
              <p className="text-body" style={{ marginBottom: '32px' }}>
                We believe great design is not just about aesthetics—it&apos;s about solving problems and creating meaningful connections between brands and people.
              </p>
              <Link href="/about" className="btn btn-filled">Learn More</Link>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '1/1', borderRadius: '24px', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" 
                  alt="Team collaboration"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="glass-card" style={{ position: 'absolute', bottom: '-32px', left: '-32px', maxWidth: '250px' }}>
                <div className="stat-number" style={{ fontSize: '2.5rem' }}>98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container-custom">
          <div className="flex justify-between items-end" style={{ marginBottom: '48px' }}>
            <div>
              <span className="text-small" style={{ display: 'block', marginBottom: '16px' }}>PORTFOLIO</span>
              <h2 className="text-heading">Featured Work</h2>
            </div>
            <Link href="/portfolio" className="btn btn-outlined md:flex" style={{ display: 'none' }}>View All</Link>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <div key={i} className="image-card">
                <img src={project.image} alt={project.title} />
                <div className="image-card-overlay">
                  <span className="tag" style={{ marginBottom: '12px' }}>{project.category}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <Link href="/portfolio" className="btn btn-outlined" style={{ marginTop: '32px', width: '100%', display: 'block', textAlign: 'center' }}>View All Projects</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <span className="text-small" style={{ display: 'block', marginBottom: '16px' }}>TESTIMONIALS</span>
            <h2 className="text-heading">What Our Clients Say</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <p className="text-gray-300" style={{ marginBottom: '24px', position: 'relative', zIndex: 10 }}>{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #6C63FF, #FF6584)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
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
          <div className="cta-card">
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h2 className="text-heading" style={{ marginBottom: '24px' }}>Ready to Start Your Project?</h2>
              <p className="text-body" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
                Let&apos;s collaborate and create something extraordinary together. Your brand deserves to stand out.
              </p>
              <Link href="/contact" className="btn btn-filled">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}