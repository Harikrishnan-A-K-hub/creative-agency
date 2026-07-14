import React from 'react';
import Link from 'next/link';

interface PortfolioItem {
  title: string;
  slug: string;
  image: string;
  services: string[];
}

interface PortfolioProps {
  items: PortfolioItem[];
  title?: string;
  showViewAll?: boolean;
}

export default function Portfolio({ 
  items, 
  title = 'Selected Work',
  showViewAll = true 
}: PortfolioProps) {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-heading">{title}</h2>
          {showViewAll && (
            <Link 
              href="/portfolio" 
              className="text-small font-medium text-[var(--n-600)] hover:text-[var(--accent)] transition-colors"
            >
              View All Work →
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
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
  );
}