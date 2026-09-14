import { NextResponse } from 'next/server';
import { sendAdminRegistrationNotification } from '@/lib/emailService';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || (!body.fullName && !body.email)) {
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Missing required registration parameters (fullName or email required).' 
        }, 
        { status: 400 }
      );
    }

    const result = await sendAdminRegistrationNotification(body);

    return NextResponse.json({
      status: result.success ? 'success' : 'error',
      message: result.message,
      isDuplicate: result.isDuplicate || false,
      messageId: result.messageId || null,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    console.error('API /api/notifications/registration error:', err);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Internal server error while processing admin notification.',
        details: err?.message 
      }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: 'One-Stop Admin Email Notification Service',
    status: 'operational',
    adminEmailTarget: process.env.ADMIN_EMAIL || 'admin@onestopadvisor.com',
    smtpConfigured: Boolean(process.env.SMTP_USER && process.env.SMTP_PASS),
    securityPolicy: {
      passwordTransmission: 'Never transmitted / Omitted by design',
      tokenTransmission: 'Never transmitted / Omitted by design',
      deduplicationEnabled: true
    },
    sihStatementId: 'SIH 25094'
  });
}
