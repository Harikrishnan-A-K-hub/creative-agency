import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          <div>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '700', display: 'inline-block', marginBottom: '16px' }}>
              <span className="gradient-text">Nexus</span>
            </Link>
            <p className="text-gray-400" style={{ maxWidth: '300px' }}>
              A boutique creative agency specializing in brand identity, web design, and digital strategy for ambitious brands.
            </p>
            <div className="social-links">
              {['T', 'L', 'D'].map((letter) => (
                <a key={letter} href="#" className="social-link">{letter}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '24px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['About', 'Services', 'Work', 'Journal', 'Contact'].map((item) => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400" style={{ fontSize: '14px' }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '24px' }}>Get in Touch</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="mailto:hello@nexus.agency" className="text-gray-400" style={{ fontSize: '14px' }}>hello@nexus.agency</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="tel:+1234567890" className="text-gray-400" style={{ fontSize: '14px' }}>+1 (234) 567-890</a>
              </li>
              <li className="text-gray-400" style={{ fontSize: '14px' }}>
                123 Creative Avenue<br />San Francisco, CA 94102
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-gray-500" style={{ fontSize: '14px' }}>© 2026 Nexus Creative Agency. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
            <a href="#" className="text-gray-500">Privacy</a>
            <a href="#" className="text-gray-500">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}