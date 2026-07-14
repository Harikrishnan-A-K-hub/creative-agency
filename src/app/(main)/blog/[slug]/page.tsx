import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';
import Link from 'next/link';

// This would normally come from a CMS or database
const blogPosts = {
  'art-of-restraint': {
    title: 'The Art of Restraint in Design',
    excerpt: 'Why less is more in creating impactful digital experiences.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Design',
    content: `
      <p>In a world saturated with visual noise, restraint has become a radical design choice. The most memorable brands are often those that say less, not more.</p>
      
      <h2>The Power of White Space</h2>
      <p>White space isn't empty space—it's breathing room. It gives your content room to speak and your users room to think. When we remove the unnecessary, what remains becomes more powerful.</p>
      
      <h2>Typography as Voice</h2>
      <p>A well-chosen typeface can carry an entire brand. Before reaching for illustrations or photography, consider what your typography is saying. The shape of letters communicates as much as the words they form.</p>
      
      <h2>Color with Purpose</h2>
      <p>When everything is emphasized, nothing is. A limited palette forces you to be intentional about where color appears and what it means. One accent color, used sparingly, creates more impact than a rainbow.</p>
      
      <h2>The Discipline of Editing</h2>
      <p>Design is editing. Every element that stays must earn its place. Ask yourself: does this serve the user? Does this advance the narrative? If not, remove it. The result will be stronger for it.</p>
    `,
  },
  'building-brands-that-last': {
    title: 'Building Brands That Last',
    excerpt: 'Principles for creating timeless brand identities.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Branding',
    content: `
      <p>Trends come and go, but great brands endure. What separates the brands that last from those that fade? It comes down to a few fundamental principles.</p>
      
      <h2>Start with Why</h2>
      <p>The most enduring brands are built on a clear purpose. Before designing a logo or choosing colors, articulate why your brand exists beyond making money. This purpose becomes your North Star.</p>
      
      <h2>Consistency Over Novelty</h2>
      <p>Consistency builds recognition. Every touchpoint—your website, your packaging, your emails—should feel like it comes from the same source. This doesn't mean being boring; it means being recognizable.</p>
      
      <h2>Flexibility Within Framework</h2>
      <p>Great brand systems are both consistent and flexible. Define your non-negotiables (logo, primary colors, typography) while allowing room for contextual expression.</p>
      
      <h2>Authenticity Above All</h2>
      <p>People can spot inauthenticity from miles away. Build a brand that reflects who you actually are, not who you think you should be. Authenticity is magnetic.</p>
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts] || blogPosts['art-of-restraint'];

  return (
    <>
      <article>
        {/* Header */}
        <section className="section pt-32">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
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
              
              <h1 className="text-display mb-8">{post.title}</h1>
              <p className="text-subheading text-[var(--n-600)]">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] bg-[var(--n-200)]">
                <div className="w-full h-full flex items-center justify-center text-[var(--n-500)]">
                  Cover Image
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Link 
                href="/blog" 
                className="text-small font-medium text-[var(--n-600)] hover:text-[var(--accent)] transition-colors"
              >
                ← Back to Journal
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Contact 
        title="Have a project in mind?"
        subtitle="Let's discuss how we can help bring your vision to life."
      />
    </>
  );
}