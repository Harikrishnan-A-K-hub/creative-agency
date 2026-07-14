import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  const db = getDb();
  const posts = db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC').all();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, cover_image, category, published } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: 'Title and slug required' }, { status: 400 });
    }

    const db = getDb();
    const id = uuidv4();
    
    db.prepare(`
      INSERT INTO blog_posts (id, title, slug, excerpt, content, cover_image, category, published)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, title, slug, excerpt, content, cover_image, category, published ? 1 : 0);

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Blog create error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, slug, excerpt, content, cover_image, category, published } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    const db = getDb();
    
    db.prepare(`
      UPDATE blog_posts SET title=?, slug=?, excerpt=?, content=?, cover_image=?, category=?, published=?, updated_at=CURRENT_TIMESTAMP
      WHERE id=?
    `).run(title, slug, excerpt, content, cover_image, category, published ? 1 : 0, id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Blog update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    const db = getDb();
    db.prepare('DELETE FROM blog_posts WHERE id = ?').run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Blog delete error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}