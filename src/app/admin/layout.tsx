'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0F1A' }}>
        <p style={{ color: 'white' }}>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const menuItems = [
    { label: 'Dashboard', href: '/admin', icon: '📊' },
    { label: 'Portfolio', href: '/admin/portfolio', icon: '💼' },
    { label: 'Blog Posts', href: '/admin/blog', icon: '📝' },
    { label: 'Testimonials', href: '/admin/testimonials', icon: '💬' },
    { label: 'View Site', href: '/', icon: '🌐' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0F0F1A' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '250px', 
        background: '#1A1A2E', 
        borderRight: '1px solid rgba(255,255,255,0.1)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ marginBottom: '32px' }}>
          <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white' }}>MW</span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6C63FF' }}></span>
          </Link>
          <p style={{ color: '#8892B0', fontSize: '12px', marginTop: '8px' }}>Admin Panel</p>
        </div>

        <nav style={{ flex: 1 }}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '4px',
                color: pathname === item.href ? 'white' : '#8892B0',
                background: pathname === item.href ? 'rgba(108, 99, 255, 0.2)' : 'transparent',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
          <p style={{ color: '#8892B0', fontSize: '12px', marginBottom: '8px' }}>{user.email}</p>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '10px',
              background: 'rgba(255, 101, 132, 0.2)',
              border: 'none',
              borderRadius: '8px',
              color: '#FF6584',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px', overflow: 'auto' }}>
        {children}
      </main>
    </div>
  );
}