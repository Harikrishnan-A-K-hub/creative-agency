import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';

const teamMembers = [
  {
    name: 'Alexandra Chen',
    role: 'Creative Director',
    bio: 'With 15 years of experience in brand strategy and visual design, Alexandra leads our creative vision.',
  },
  {
    name: 'Marcus Williams',
    role: 'Design Lead',
    bio: 'Marcus brings a meticulous eye for detail and a passion for user-centered design to every project.',
  },
  {
    name: 'Sophia Rodriguez',
    role: 'Strategist',
    bio: 'Sophia combines data-driven insights with creative thinking to build brands that resonate.',
  },
];

const values = [
  {
    title: 'Craft',
    description: 'Every pixel, every word, every interaction is considered. We believe in the power of meticulous execution.',
  },
  {
    title: 'Precision',
    description: 'We measure twice, cut once. Our process is rigorous because our standards are high.',
  },
  {
    title: 'Partnership',
    description: 'We succeed when our clients succeed. Every project is a collaboration, not a transaction.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero 
        title="About Us"
        subtitle="A boutique creative agency with a singular focus: crafting digital experiences that resonate."
      />

      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading mb-8">Our Story</h2>
            <p className="text-body text-[var(--n-600)] mb-6">
              Founded in 2015, we started with a simple belief: design should serve a purpose. 
              Every visual choice, every interaction, every piece of content should move the needle 
              for our clients.
            </p>
            <p className="text-body text-[var(--n-600)] mb-6">
              Over the years, we've worked with startups finding their voice, established brands 
              refreshing their identity, and everything in between. What remains constant is our 
              commitment to craft and our belief that restraint is a design principle, not a limitation.
            </p>
            <p className="text-body text-[var(--n-600)]">
              We're a team of designers, strategists, and developers who share a common obsession: 
              making things that work beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-[var(--n-100)]">
        <div className="container-custom">
          <h2 className="text-heading text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8">
                <h3 className="text-subheading mb-4">{value.title}</h3>
                <p className="text-body text-[var(--n-600)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-heading text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-[var(--n-200)] rounded-full mx-auto mb-6"></div>
                <h3 className="text-subheading mb-2">{member.name}</h3>
                <p className="text-small text-[var(--n-500)] mb-4 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-body text-[var(--n-600)]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}