import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--n-900)] text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-4">[Agency Name]</h3>
            <p className="text-[var(--n-400)] text-sm max-w-md">
              A boutique creative agency specializing in web design, branding, and visual storytelling for discerning brands.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-small font-medium mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[var(--n-400)] text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--n-400)] text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[var(--n-400)] text-sm hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--n-400)] text-sm hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-small font-medium mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@agency.com" className="text-[var(--n-400)] text-sm hover:text-white transition-colors">
                  hello@agency.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-[var(--n-400)] text-sm hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-[var(--n-400)] text-sm">
                123 Design Street<br />
                Creative District<br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--n-800)] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--n-500)] text-xs">
            © {new Date().getFullYear()} [Agency Name]. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[var(--n-500)] text-xs hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--n-500)] text-xs hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}