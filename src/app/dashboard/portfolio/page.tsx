import Link from 'next/link';

const portfolioItems = [
  {
    id: '1',
    title: 'Brand Refresh for TechCorp',
    status: 'Published',
    date: '2024-01-15',
    services: ['Branding', 'Web Design'],
  },
  {
    id: '2',
    title: 'E-commerce Platform Design',
    status: 'Published',
    date: '2024-01-10',
    services: ['Web Design', 'Graphic Design'],
  },
  {
    id: '3',
    title: 'Marketing Campaign',
    status: 'Draft',
    date: '2024-01-05',
    services: ['Digital Marketing', 'Video & Motion'],
  },
];

export default function DashboardPortfolioPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-heading">Portfolio</h1>
          <p className="text-body text-[var(--n-600)] mt-2">
            Manage your portfolio items
          </p>
        </div>
        <Link 
          href="/dashboard/portfolio/new"
          className="btn btn-filled"
        >
          Add New
        </Link>
      </div>

      {/* Portfolio Table */}
      <div className="bg-white border border-[var(--n-200)]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--n-200)]">
              <th className="text-left p-4 text-small font-medium text-[var(--n-500)] uppercase tracking-wider">
                Title
              </th>
              <th className="text-left p-4 text-small font-medium text-[var(--n-500)] uppercase tracking-wider">
                Status
              </th>
              <th className="text-left p-4 text-small font-medium text-[var(--n-500)] uppercase tracking-wider">
                Date
              </th>
              <th className="text-left p-4 text-small font-medium text-[var(--n-500)] uppercase tracking-wider">
                Services
              </th>
              <th className="text-right p-4 text-small font-medium text-[var(--n-500)] uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {portfolioItems.map((item) => (
              <tr key={item.id} className="border-b border-[var(--n-200)] last:border-0">
                <td className="p-4">
                  <Link 
                    href={`/dashboard/portfolio/${item.id}`}
                    className="text-body font-medium hover:text-[var(--accent)] transition-colors"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="p-4">
                  <span className={`text-small px-2 py-1 ${
                    item.status === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-small text-[var(--n-500)]">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {item.services.map((service, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-[var(--n-100)] text-[var(--n-600)]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <Link 
                    href={`/dashboard/portfolio/${item.id}`}
                    className="text-small text-[var(--n-500)] hover:text-[var(--accent)] transition-colors"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}