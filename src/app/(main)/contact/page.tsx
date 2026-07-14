'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';

const services = [
  'Web Design',
  'Branding',
  'Digital Marketing',
  'Video & Motion',
  'Graphic Design',
];

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  'Over $100,000',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Hero 
        title="Get in Touch"
        subtitle="Tell us about your project and we'll get back to you within 24 hours."
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-small font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-small font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-small font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="service" className="block text-small font-medium mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-small font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-small font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[var(--n-200)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-filled w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <div className="sticky top-32">
                <h2 className="text-heading mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-small font-medium uppercase tracking-wider mb-2">
                      Email
                    </h3>
                    <a 
                      href="mailto:hello@agency.com" 
                      className="text-body text-[var(--n-600)] hover:text-[var(--accent)] transition-colors"
                    >
                      hello@agency.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-small font-medium uppercase tracking-wider mb-2">
                      Phone
                    </h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-body text-[var(--n-600)] hover:text-[var(--accent)] transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>

                  <div>
                    <h3 className="text-small font-medium uppercase tracking-wider mb-2">
                      Address
                    </h3>
                    <p className="text-body text-[var(--n-600)]">
                      123 Design Street<br />
                      Creative District<br />
                      New York, NY 10001
                    </p>
                  </div>

                  <div>
                    <h3 className="text-small font-medium uppercase tracking-wider mb-2">
                      Hours
                    </h3>
                    <p className="text-body text-[var(--n-600)]">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}