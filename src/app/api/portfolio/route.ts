import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  const db = getDb();
  const items = db.prepare('SELECT * FROM portfolio ORDER BY created_at DESC').all();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, description, category, image_url, client, year, challenge, solution, results, services } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: 'Title and slug required' }, { status: 400 });
    }

    const db = getDb();
    const id = uuidv4();
    
    db.prepare(`
      INSERT INTO portfolio (id, title, slug, description, category, image_url, client, year, challenge, solution, results, services)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, title, slug, description, category, image_url, client, year, challenge, solution, results, services);

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Portfolio create error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, slug, description, category, image_url, client, year, challenge, solution, results, services } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    const db = getDb();
    
    db.prepare(`
      UPDATE portfolio SET title=?, slug=?, description=?, category=?, image_url=?, client=?, year=?, challenge=?, solution=?, results=?, services=?, updated_at=CURRENT_TIMESTAMP
      WHERE id=?
    `).run(title, slug, description, category, image_url, client, year, challenge, solution, results, services, id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Portfolio update error:', error);
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
    db.prepare('DELETE FROM portfolio WHERE id = ?').run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Portfolio delete error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}