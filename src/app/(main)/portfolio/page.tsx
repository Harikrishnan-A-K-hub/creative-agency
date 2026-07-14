'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Brand Refresh for TechCorp',
    slug: 'techcorp-brand-refresh',
    image: '',
    services: ['Branding', 'Web Design'],
    category: 'branding',
  },
  {
    title: 'E-commerce Platform Design',
    slug: 'ecommerce-platform',
    image: '',
    services: ['Web Design', 'Graphic Design'],
    category: 'web',
  },
  {
    title: 'Marketing Campaign',
    slug: 'marketing-campaign',
    image: '',
    services: ['Digital Marketing', 'Video & Motion'],
    category: 'marketing',
  },
  {
    title: 'Corporate Identity System',
    slug: 'corporate-identity',
    image: '',
    services: ['Branding', 'Graphic Design'],
    category: 'branding',
  },
  {
    title: 'Product Launch Video',
    slug: 'product-launch-video',
    image: '',
    services: ['Video & Motion'],
    category: 'video',
  },
  {
    title: 'Mobile App Design',
    slug: 'mobile-app-design',
    image: '',
    services: ['Web Design', 'Branding'],
    category: 'web',
  },
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Branding', value: 'branding' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Video', value: 'video' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Hero 
        title="Our Work"
        subtitle="A selection of projects that demonstrate our approach and capabilities."
      />

      <section className="section">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-2 text-small font-medium transition-colors ${
                  activeCategory === category.value
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-transparent text-[var(--n-600)] hover:text-[var(--accent)]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Link 
                key={index}
                href={`/portfolio/${item.slug}`}
                className="group"
              >
                <div className="aspect-[4/3] bg-[var(--n-200)] image-monochrome mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-[var(--n-500)] group-hover:scale-105 transition-transform duration-300">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      'Project Image'
                    )}
                  </div>
                </div>
                <h3 className="text-subheading mb-2">{item.title}</h3>
                <p className="text-small text-[var(--n-500)]">
                  {item.services.join(' · ')}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}