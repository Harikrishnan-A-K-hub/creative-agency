'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export default function Navigation({ items, className = '' }: NavigationProps) {
  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {items.map((item) => (
        <Link 
          key={item.href}
          href={item.href} 
          className="text-small font-medium hover:text-[var(--n-600)] transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}