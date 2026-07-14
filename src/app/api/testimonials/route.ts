import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  const db = getDb();
  const testimonials = db.prepare('SELECT * FROM testimonials ORDER BY created_at DESC').all();
  return NextResponse.json(testimonials);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, company, text, avatar } = body;

    if (!name || !text) {
      return NextResponse.json({ error: 'Name and text required' }, { status: 400 });
    }

    const db = getDb();
    const id = uuidv4();
    
    db.prepare(`
      INSERT INTO testimonials (id, name, role, company, text, avatar)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(id, name, role, company, text, avatar);

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Testimonial create error:', error);
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
    db.prepare('DELETE FROM testimonials WHERE id = ?').run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Testimonial delete error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}