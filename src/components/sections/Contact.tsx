import React from 'react';
import Button from '../ui/Button';

interface ContactProps {
  title?: string;
  subtitle?: string;
}

export default function Contact({ 
  title = 'Ready to start?', 
  subtitle = "Let's discuss your project and how we can help bring your vision to life." 
}: ContactProps) {
  return (
    <section className="section">
      <div className="container-custom text-center">
        <h2 className="text-heading mb-8">{title}</h2>
        <p className="text-body text-[var(--n-600)] max-w-xl mx-auto mb-12">
          {subtitle}
        </p>
        <Button as="a" href="/contact" variant="outlined">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}