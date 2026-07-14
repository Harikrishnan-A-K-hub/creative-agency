import React from 'react';

interface Testimonial {
  quote: string;
  clientName: string;
  clientTitle: string;
  company: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

export default function Testimonials({ testimonials, title = 'Client Voices' }: TestimonialsProps) {
  return (
    <section className="section bg-[var(--n-100)]">
      <div className="container-custom">
        <h2 className="text-heading text-center mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 border-hairline">
              <blockquote className="text-body italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-small text-[var(--n-600)] not-italic block">
                — {testimonial.clientName}, {testimonial.clientTitle}
                <br />
                {testimonial.company}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}