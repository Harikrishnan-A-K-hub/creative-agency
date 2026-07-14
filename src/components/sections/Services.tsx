import React from 'react';

interface Service {
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
  title?: string;
}

export default function Services({ services, title = 'Our Services' }: ServicesProps) {
  return (
    <section className="section bg-[var(--n-100)]">
      <div className="container-custom">
        <h2 className="text-heading text-center mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border-hairline">
              <h3 className="text-subheading mb-4">{service.title}</h3>
              <p className="text-body text-[var(--n-600)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}