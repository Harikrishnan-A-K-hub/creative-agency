import Link from 'next/link';

const blogPosts = [
  {
    id: '1',
    title: 'The Art of Restraint in Design',
    status: 'Published',
    date: '2024-01-15',
    category: 'Design',
  },
  {
    id: '2',
    title: 'Building Brands That Last',
    status: 'Published',
    date: '2024-01-10',
    category: 'Branding',
  },
  {
    id: '3',
    title: 'The Future of Web Design',
    status: 'Draft',
    date: '2024-01-05',
    category: 'Web Design',
  },
];

export default function DashboardBlogPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-heading">Blog</h1>
          <p className="text-body text-[var(--n-600)] mt-2">
            Manage your blog posts
          </p>
        </div>
        <Link 
          href="/dashboard/blog/new"
          className="btn btn-filled"
        >
          Add New
        </Link>
      </div>

      {/* Blog Table */}
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
                Category
              </th>
              <th className="text-right p-4 text-small font-medium text-[var(--n-500)] uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post) => (
              <tr key={post.id} className="border-b border-[var(--n-200)] last:border-0">
                <td className="p-4">
                  <Link 
                    href={`/dashboard/blog/${post.id}`}
                    className="text-body font-medium hover:text-[var(--accent)] transition-colors"
                  >
                    {post.title}
                  </Link>
                </td>
                <td className="p-4">
                  <span className={`text-small px-2 py-1 ${
                    post.status === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.status}
                  </span>
                </td>
                <td className="p-4 text-small text-[var(--n-500)]">
                  {new Date(post.date).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <span className="text-small px-2 py-1 bg-[var(--n-100)] text-[var(--n-600)]">
                    {post.category}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Link 
                    href={`/dashboard/blog/${post.id}`}
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