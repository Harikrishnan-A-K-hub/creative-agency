import Database from 'better-sqlite3';
import path from 'path';
import bcrypt from 'bcryptjs';

const DB_PATH = path.join(process.cwd(), 'data.db');

let db: Database.Database;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    initializeDb(db);
  }
  return db;
}

function initializeDb(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS portfolio (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT,
      category TEXT,
      image_url TEXT,
      client TEXT,
      year TEXT,
      challenge TEXT,
      solution TEXT,
      results TEXT,
      services TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS blog_posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      excerpt TEXT,
      content TEXT,
      cover_image TEXT,
      category TEXT,
      published BOOLEAN DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS testimonials (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT,
      company TEXT,
      text TEXT NOT NULL,
      avatar TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );
  `);

  // Create default admin user if none exists
  const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
  if (userCount.count === 0) {
    const hashedPassword = bcrypt.hashSync('admin123', 10);
    db.prepare('INSERT INTO users (id, email, name, password, role) VALUES (?, ?, ?, ?, ?)').run(
      'admin-1',
      'admin@mw.agency',
      'Admin',
      hashedPassword,
      'admin'
    );
  }

  // Add default portfolio items if empty
  const portfolioCount = db.prepare('SELECT COUNT(*) as count FROM portfolio').get() as { count: number };
  if (portfolioCount.count === 0) {
    const insertPortfolio = db.prepare(`
      INSERT INTO portfolio (id, title, slug, description, category, image_url, client, year, services)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    insertPortfolio.run('1', 'Nexus Dashboard', 'nexus-dashboard', 'A comprehensive dashboard design for data visualization.', 'UI/UX Design', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', 'Nexus Corp', '2024', '["UI/UX Design", "Web Development"]');
    insertPortfolio.run('2', 'Aurora Brand Identity', 'aurora-brand', 'Complete brand identity system for a tech startup.', 'Branding', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop', 'Aurora Tech', '2024', '["Branding", "Logo Design"]');
    insertPortfolio.run('3', 'Pulse Analytics Platform', 'pulse-analytics', 'Analytics platform with real-time data visualization.', 'Web Development', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', 'Pulse Inc', '2024', '["Web Development", "UI/UX Design"]');
    insertPortfolio.run('4', 'Vertex Mobile App', 'vertex-mobile', 'Mobile app design for a fitness tracking platform.', 'App Design', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop', 'Vertex Fitness', '2024', '["App Design", "UI/UX Design"]');
  }

  // Add default blog posts if empty
  const blogCount = db.prepare('SELECT COUNT(*) as count FROM blog_posts').get() as { count: number };
  if (blogCount.count === 0) {
    const insertBlog = db.prepare(`
      INSERT INTO blog_posts (id, title, slug, excerpt, content, category, published)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    
    insertBlog.run('1', 'The Art of Restraint in Design', 'art-of-restraint', 'Why less is more in creating impactful digital experiences.', '<p>In a world saturated with visual noise, restraint has become a radical design choice.</p><h2>The Power of White Space</h2><p>White space isn\'t empty space—it\'s breathing room.</p>', 'Design', 1);
    insertBlog.run('2', 'Building Brands That Last', 'building-brands-that-last', 'Principles for creating timeless brand identities.', '<p>Trends come and go, but great brands endure.</p><h2>Start with Why</h2><p>The most enduring brands are built on a clear purpose.</p>', 'Branding', 1);
  }

  // Add default testimonials if empty
  const testimonialCount = db.prepare('SELECT COUNT(*) as count FROM testimonials').get() as { count: number };
  if (testimonialCount.count === 0) {
    const insertTestimonial = db.prepare(`
      INSERT INTO testimonials (id, name, role, company, text)
      VALUES (?, ?, ?, ?, ?)
    `);
    
    insertTestimonial.run('1', 'Sarah Chen', 'CEO', 'TechFlow', 'They transformed our digital presence completely. The results exceeded all expectations.');
    insertTestimonial.run('2', 'Marcus Webb', 'Founder', 'Artisan', 'Incredible attention to detail and creative vision. Our brand has never looked better.');
    insertTestimonial.run('3', 'Elena Rodriguez', 'Marketing Director', 'Velocity', 'Professional, innovative, and results-driven. A true partnership in every sense.');
  }
}