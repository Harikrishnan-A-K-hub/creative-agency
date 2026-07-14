import Link from 'next/link';

const stats = [
  { label: 'Portfolio Items', value: '12', change: '+2 this month' },
  { label: 'Blog Posts', value: '8', change: '+1 this month' },
  { label: 'Testimonials', value: '15', change: '+3 this month' },
  { label: 'Contact Inquiries', value: '24', change: '+6 this month' },
];

const recentActivity = [
  { action: 'Published blog post', title: 'The Art of Restraint in Design', time: '2 hours ago' },
  { action: 'Added portfolio item', title: 'TechCorp Brand Refresh', time: '1 day ago' },
  { action: 'Updated testimonial', title: 'Sarah Johnson, TechCorp', time: '2 days ago' },
  { action: 'New contact inquiry', title: 'From: john@example.com', time: '3 days ago' },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-heading">Dashboard</h1>
        <p className="text-body text-[var(--n-600)] mt-2">
          Welcome back. Here's an overview of your site.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 border border-[var(--n-200)]">
            <p className="text-small text-[var(--n-500)] uppercase tracking-wider mb-2">
              {stat.label}
            </p>
            <p className="text-3xl font-light mb-1">{stat.value}</p>
            <p className="text-small text-[var(--n-500)]">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-[var(--n-200)]">
        <div className="p-6 border-b border-[var(--n-200)]">
          <h2 className="text-subheading">Recent Activity</h2>
        </div>
        <div className="divide-y divide-[var(--n-200)]">
          {recentActivity.map((activity, index) => (
            <div key={index} className="p-6 flex items-center justify-between">
              <div>
                <p className="text-body font-medium">{activity.action}</p>
                <p className="text-small text-[var(--n-500)]">{activity.title}</p>
              </div>
              <p className="text-small text-[var(--n-400)]">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          href="/dashboard/portfolio/new"
          className="bg-white p-6 border border-[var(--n-200)] hover:border-[var(--accent)] transition-colors"
        >
          <h3 className="text-subheading mb-2">Add Portfolio Item</h3>
          <p className="text-small text-[var(--n-500)]">
            Showcase your latest work
          </p>
        </Link>
        <Link 
          href="/dashboard/blog/new"
          className="bg-white p-6 border border-[var(--n-200)] hover:border-[var(--accent)] transition-colors"
        >
          <h3 className="text-subheading mb-2">Write Blog Post</h3>
          <p className="text-small text-[var(--n-500)]">
            Share your thoughts and expertise
          </p>
        </Link>
        <Link 
          href="/dashboard/settings"
          className="bg-white p-6 border border-[var(--n-200)] hover:border-[var(--accent)] transition-colors"
        >
          <h3 className="text-subheading mb-2">Site Settings</h3>
          <p className="text-small text-[var(--n-500)]">
            Manage your site configuration
          </p>
        </Link>
      </div>
    </div>
  );
}