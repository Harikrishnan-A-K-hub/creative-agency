'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--n-50)]/90 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium tracking-tight">
            [Agency Name]
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-small font-medium hover:text-[var(--n-600)] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-small font-medium hover:text-[var(--n-600)] transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-small font-medium hover:text-[var(--n-600)] transition-colors">
              Work
            </Link>
            <Link href="/blog" className="text-small font-medium hover:text-[var(--n-600)] transition-colors">
              Journal
            </Link>
            <Link href="/contact" className="btn btn-outlined text-xs">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-[var(--accent)] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[var(--accent)]"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-8 border-t border-[var(--n-200)]">
            <div className="flex flex-col space-y-6">
              <Link 
                href="/about" 
                className="text-body font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-body font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/portfolio" 
                className="text-body font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link 
                href="/blog" 
                className="text-body font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Journal
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-outlined w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}