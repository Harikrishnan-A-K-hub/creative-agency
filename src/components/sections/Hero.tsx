import React from 'react';
import Button from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  ctaText = 'Start a Project',
  ctaHref = '/contact'
}: HeroProps) {
  return (
    <section className="section flex items-center justify-center min-h-[80vh]">
      <div className="container-custom text-center">
        <h1 className="text-display mb-8">{title}</h1>
        {subtitle && (
          <p className="text-body text-[var(--n-600)] max-w-2xl mx-auto mb-12">
            {subtitle}
          </p>
        )}
        <Button as="a" href={ctaHref}>
          {ctaText}
        </Button>
      </div>
    </section>
  );
}