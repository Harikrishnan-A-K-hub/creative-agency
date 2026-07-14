import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

const services = [
  {
    title: 'Web Design',
    description: 'Custom websites that balance aesthetics with functionality, built for performance and conversion.',
  },
  {
    title: 'Branding',
    description: 'Visual identities that capture the essence of your brand and communicate it with clarity.',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns that connect your brand with the right audience at the right time.',
  },
  {
    title: 'Video & Motion',
    description: 'Compelling visual narratives that bring your brand story to life through motion.',
  },
  {
    title: 'Graphic Design',
    description: 'Print and digital materials that maintain visual consistency across all touchpoints.',
  },
];

const portfolioItems = [
  {
    title: 'Brand Refresh for TechCorp',
    slug: 'techcorp-brand-refresh',
    image: '',
    services: ['Branding', 'Web Design'],
  },
  {
    title: 'E-commerce Platform Design',
    slug: 'ecommerce-platform',
    image: '',
    services: ['Web Design', 'Graphic Design'],
  },
  {
    title: 'Marketing Campaign',
    slug: 'marketing-campaign',
    image: '',
    services: ['Digital Marketing', 'Video & Motion'],
  },
  {
    title: 'Corporate Identity System',
    slug: 'corporate-identity',
    image: '',
    services: ['Branding', 'Graphic Design'],
  },
];

const testimonials = [
  {
    quote: 'Their attention to detail and understanding of our brand was exceptional. The final product exceeded our expectations.',
    clientName: 'Sarah Johnson',
    clientTitle: 'CMO',
    company: 'TechCorp',
  },
  {
    quote: 'Working with them felt like a true partnership. They brought creative solutions we hadn\'t considered.',
    clientName: 'Michael Chen',
    clientTitle: 'Founder',
    company: 'StartupXYZ',
  },
  {
    quote: 'The rebrand transformed how our customers perceive us. Sales increased 40% within three months.',
    clientName: 'Emily Rodriguez',
    clientTitle: 'Director of Marketing',
    company: 'RetailCo',
  },
];

export default function Home() {
  return (
    <>
      <Hero 
        title="We craft digital experiences that resonate"
        subtitle="A boutique creative agency specializing in web design, branding, and visual storytelling for discerning brands."
      />
      
      <Services services={services} />
      
      <Portfolio items={portfolioItems} />
      
      <Testimonials testimonials={testimonials} />
      
      <Contact />
    </>
  );
}