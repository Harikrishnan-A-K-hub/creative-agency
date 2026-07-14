import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';
import Link from 'next/link';

// This would normally come from a CMS or database
const getPortfolioItem = (slug: string) => {
  const items: Record<string, any> = {
    'techcorp-brand-refresh': {
      title: 'Brand Refresh for TechCorp',
      description: 'A complete brand overhaul for a leading technology company, modernizing their visual identity while maintaining brand recognition.',
      services: ['Branding', 'Web Design'],
      year: '2024',
      client: 'TechCorp',
      challenge: 'TechCorp needed to modernize their brand to appeal to a younger demographic while maintaining trust with existing enterprise clients.',
      solution: 'We developed a refined visual system that balances innovation with reliability, using a monochrome palette with strategic color accents.',
      results: [
        '40% increase in brand recognition',
        '25% growth in younger demographic',
        'Consistent brand experience across all touchpoints',
      ],
    },
    'ecommerce-platform': {
      title: 'E-commerce Platform Design',
      description: 'A custom e-commerce experience designed to maximize conversions while reflecting the brand\'s premium positioning.',
      services: ['Web Design', 'Graphic Design'],
      year: '2024',
      client: 'RetailCo',
      challenge: 'The existing platform had high cart abandonment rates and didn\'t reflect the brand\'s premium positioning.',
      solution: 'We redesigned the entire purchase flow with a focus on clarity, trust signals, and seamless checkout experience.',
      results: [
        '35% reduction in cart abandonment',
        '28% increase in average order value',
        '95% customer satisfaction score',
      ],
    },
  };
  
  return items[slug] || items['techcorp-brand-refresh'];
};

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);

  return (
    <>
      <Hero 
        title={item.title}
        subtitle={item.description}
      />

      {/* Project Details */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="aspect-[16/9] bg-[var(--n-200)] mb-12">
                <div className="w-full h-full flex items-center justify-center text-[var(--n-500)]">
                  Hero Project Image
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h2 className="text-subheading mb-4">The Challenge</h2>
                  <p className="text-body text-[var(--n-600)]">
                    {item.challenge}
                  </p>
                </div>

                <div>
                  <h2 className="text-subheading mb-4">Our Solution</h2>
                  <p className="text-body text-[var(--n-600)]">
                    {item.solution}
                  </p>
                </div>

                <div>
                  <h2 className="text-subheading mb-4">Results</h2>
                  <ul className="space-y-3">
                    {item.results.map((result: string, index: number) => (
                      <li 
                        key={index} 
                        className="text-body text-[var(--n-600)] flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mr-3"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:pl-8">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="text-small font-medium uppercase tracking-wider mb-2">
                    Client
                  </h3>
                  <p className="text-body text-[var(--n-600)]">{item.client}</p>
                </div>

                <div>
                  <h3 className="text-small font-medium uppercase tracking-wider mb-2">
                    Year
                  </h3>
                  <p className="text-body text-[var(--n-600)]">{item.year}</p>
                </div>

                <div>
                  <h3 className="text-small font-medium uppercase tracking-wider mb-2">
                    Services
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((service: string, index: number) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-small border border-[var(--n-200)]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link 
                    href="/portfolio" 
                    className="text-small font-medium text-[var(--n-600)] hover:text-[var(--accent)] transition-colors"
                  >
                    ← Back to Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact 
        title="Like what you see?"
        subtitle="Let's discuss how we can help bring your vision to life."
      />
    </>
  );
}