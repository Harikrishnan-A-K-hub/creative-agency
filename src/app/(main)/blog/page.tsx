import Hero from '@/components/sections/Hero';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Art of Restraint in Design',
    slug: 'art-of-restraint',
    excerpt: 'Why less is more in creating impactful digital experiences.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Design',
  },
  {
    title: 'Building Brands That Last',
    slug: 'building-brands-that-last',
    excerpt: 'Principles for creating timeless brand identities.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Branding',
  },
  {
    title: 'The Future of Web Design',
    slug: 'future-of-web-design',
    excerpt: 'Trends and technologies shaping the next decade.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Web Design',
  },
  {
    title: 'Typography as a Design System',
    slug: 'typography-as-design-system',
    excerpt: 'How type choices communicate brand personality.',
    date: '2023-12-28',
    readTime: '4 min read',
    category: 'Design',
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero 
        title="Journal"
        subtitle="Thoughts on design, branding, and the craft of visual communication."
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[16/9] bg-[var(--n-200)] mb-6 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-[var(--n-500)] group-hover:scale-105 transition-transform duration-300">
                      Cover Image
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-small text-[var(--n-500)] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-small text-[var(--n-400)]">·</span>
                    <time className="text-small text-[var(--n-500)]">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="text-small text-[var(--n-400)]">·</span>
                    <span className="text-small text-[var(--n-500)]">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-subheading mb-4 group-hover:text-[var(--n-600)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-body text-[var(--n-600)]">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}