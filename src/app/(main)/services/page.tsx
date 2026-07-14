import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';

const services = [
  {
    title: 'Web Design',
    description: 'Custom websites that balance aesthetics with functionality, built for performance and conversion.',
    features: [
      'Responsive design for all devices',
      'SEO-optimized architecture',
      'Performance-first development',
      'Content management systems',
      'E-commerce solutions',
    ],
  },
  {
    title: 'Branding',
    description: 'Visual identities that capture the essence of your brand and communicate it with clarity.',
    features: [
      'Brand strategy and positioning',
      'Logo design and visual identity',
      'Brand guidelines and systems',
      'Brand messaging and voice',
      'Brand audits and refreshes',
    ],
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns that connect your brand with the right audience at the right time.',
    features: [
      'Social media strategy',
      'Content marketing',
      'Email campaigns',
      'Paid advertising',
      'Analytics and reporting',
    ],
  },
  {
    title: 'Video & Motion',
    description: 'Compelling visual narratives that bring your brand story to life through motion.',
    features: [
      'Brand videos',
      'Product demonstrations',
      'Social media content',
      'Animation and motion graphics',
      'Live event coverage',
    ],
  },
  {
    title: 'Graphic Design',
    description: 'Print and digital materials that maintain visual consistency across all touchpoints.',
    features: [
      'Print design',
      'Packaging design',
      'Environmental graphics',
      'Digital assets',
      'Presentation design',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero 
        title="Our Services"
        subtitle="Comprehensive creative solutions tailored to your brand's unique needs."
      />

      {/* Services Detail */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-heading mb-6">{service.title}</h2>
                  <p className="text-body text-[var(--n-600)] mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-body text-[var(--n-600)] flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] bg-[var(--n-200)] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-full h-full flex items-center justify-center text-[var(--n-500)]">
                    Service Image
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact 
        title="Let's discuss your project"
        subtitle="Tell us about your goals and we'll create a tailored approach to help you achieve them."
      />
    </>
  );
}