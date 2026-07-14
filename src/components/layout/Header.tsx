'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (logoClicks >= 5) {
      router.push('/admin/login');
      setLogoClicks(0);
    }
    
    // Reset clicks after 3 seconds of inactivity
    const timer = setTimeout(() => {
      setLogoClicks(0);
    }, 3000);

    return () => clearTimeout(timer);
  }, [logoClicks, router]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLogoClicks(prev => prev + 1);
    
    // Only navigate to home if not reaching 5 clicks
    if (logoClicks < 4) {
      // Don't navigate, just count
    } else {
      // 5th click - will navigate via useEffect
    }
  };

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
      padding: scrolled ? '12px 0' : '20px 0',
    }}>
      <div className="container-custom">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* MW Logo - Click 5 times for admin */}
          <a 
            href="/"
            onClick={handleLogoClick}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            title={logoClicks > 0 && logoClicks < 5 ? `${5 - logoClicks} more clicks...` : ''}
          >
            <span style={{ 
              fontSize: '2rem', 
              fontWeight: '800', 
              color: 'white',
              letterSpacing: '-0.02em',
              transition: 'color 0.2s',
            }}>MW</span>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: logoClicks > 0 ? '#FF6584' : 'var(--primary)',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}></span>
          </a>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/portfolio" className="nav-link">Work</Link>
            <Link href="/blog" className="nav-link">Journal</Link>
            <Link href="/contact" className="btn btn-filled" style={{ padding: '10px 24px', fontSize: '12px' }}>Let&apos;s Talk</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <div style={{ 
              width: '24px', 
              height: '2px', 
              background: 'white', 
              marginBottom: '6px',
              transition: 'all 0.3s',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}></div>
            <div style={{ 
              width: '24px', 
              height: '2px', 
              background: 'white', 
              marginBottom: '6px',
              opacity: isMenuOpen ? 0 : 1,
              transition: 'all 0.3s',
            }}></div>
            <div style={{ 
              width: '24px', 
              height: '2px', 
              background: 'white',
              transition: 'all 0.3s',
              transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>Work</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Journal</Link>
            <Link href="/contact" className="btn btn-filled" style={{ marginTop: '16px', textAlign: 'center' }} onClick={() => setIsMenuOpen(false)}>
              Let&apos;s Talk
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}