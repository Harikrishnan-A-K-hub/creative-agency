'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ portfolio: 0, blog: 0, testimonials: 0 });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [portfolioRes, blogRes, testimonialsRes] = await Promise.all([
        fetch('/api/portfolio'),
        fetch('/api/blog'),
        fetch('/api/testimonials'),
      ]);

      const [portfolio, blog, testimonials] = await Promise.all([
        portfolioRes.json(),
        blogRes.json(),
        testimonialsRes.json(),
      ]);

      setStats({
        portfolio: portfolio.length,
        blog: blog.length,
        testimonials: testimonials.length,
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const cards = [
    { title: 'Portfolio Items', value: stats.portfolio, href: '/admin/portfolio', icon: '💼', color: '#6C63FF' },
    { title: 'Blog Posts', value: stats.blog, href: '/admin/blog', icon: '📝', color: '#FF6584' },
    { title: 'Testimonials', value: stats.testimonials, href: '/admin/testimonials', icon: '💬', color: '#00D4AA' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '32px' }}>
        Dashboard
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            style={{
              display: 'block',
              padding: '24px',
              background: '#1A1A2E',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '24px' }}>{card.icon}</span>
              <span style={{ 
                padding: '4px 12px', 
                background: `${card.color}20`, 
                color: card.color,
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
              }}>
                {card.value}
              </span>
            </div>
            <h3 style={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>{card.title}</h3>
            <p style={{ color: '#8892B0', fontSize: '12px', marginTop: '4px' }}>Manage {card.title.toLowerCase()}</p>
          </Link>
        ))}
      </div>

      <div style={{ background: '#1A1A2E', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', padding: '24px' }}>
        <h2 style={{ color: 'white', fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/admin/portfolio" style={{ 
            padding: '10px 20px', 
            background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)', 
            borderRadius: '8px', 
            color: 'white', 
            fontSize: '14px',
            textDecoration: 'none',
          }}>
            Add Portfolio Item
          </Link>
          <Link href="/admin/blog" style={{ 
            padding: '10px 20px', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '8px', 
            color: 'white', 
            fontSize: '14px',
            textDecoration: 'none',
          }}>
            Create Blog Post
          </Link>
          <Link href="/" style={{ 
            padding: '10px 20px', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '8px', 
            color: 'white', 
            fontSize: '14px',
            textDecoration: 'none',
          }}>
            View Live Site
          </Link>
        </div>
      </div>
    </div>
  );
}