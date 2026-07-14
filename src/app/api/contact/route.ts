import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in database
    // 3. Send to CRM
    // For now, we'll just log and return success
    console.log('Contact form submission:', {
      name,
      email,
      company,
      service,
      budget,
      message,
    });

    return NextResponse.json(
      { message: 'Thank you for your inquiry. We will get back to you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}