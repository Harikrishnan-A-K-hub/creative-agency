'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(15, 15, 26, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      padding: scrolled ? '16px 0' : '24px 0',
    }}>
      <div className="container-custom">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
            <span className="gradient-text">Nexus</span>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Link href="/about" style={{ fontSize: '14px', fontWeight: '500', color: '#A8B2D1' }}>About</Link>
            <Link href="/services" style={{ fontSize: '14px', fontWeight: '500', color: '#A8B2D1' }}>Services</Link>
            <Link href="/portfolio" style={{ fontSize: '14px', fontWeight: '500', color: '#A8B2D1' }}>Work</Link>
            <Link href="/blog" style={{ fontSize: '14px', fontWeight: '500', color: '#A8B2D1' }}>Journal</Link>
            <Link href="/contact" className="btn btn-filled" style={{ padding: '10px 24px', fontSize: '12px' }}>Let&apos;s Talk</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}