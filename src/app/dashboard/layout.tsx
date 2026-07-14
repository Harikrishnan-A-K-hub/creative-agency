import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--n-100)]">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-[var(--n-200)]">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard" className="text-lg font-medium">
              [Agency] Dashboard
            </Link>
            <nav className="flex items-center space-x-6">
              <Link 
                href="/dashboard" 
                className="text-small text-[var(--n-600)] hover:text-[var(--accent)] transition-colors"
              >
                Overview
              </Link>
              <Link 
                href="/dashboard/portfolio" 
                className="text-small text-[var(--n-600)] hover:text-[var(--accent)] transition-colors"
              >
                Portfolio
              </Link>
              <Link 
                href="/dashboard/blog" 
                className="text-small text-[var(--n-600)] hover:text-[var(--accent)] transition-colors"
              >
                Blog
              </Link>
              <Link 
                href="/" 
                className="text-small text-[var(--n-600)] hover:text-[var(--accent)] transition-colors"
              >
                View Site
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container-custom py-8">
        {children}
      </main>
    </div>
  );
}