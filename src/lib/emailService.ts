import nodemailer from 'nodemailer';

export interface UserRegistrationPayload {
  fullName: string;
  email: string;
  loginMethod: string;
  registeredAt?: string;
  onboardingCompleted: boolean;
  educationLevel?: string;
  stream?: string;
  academicScore?: number;
}

// In-memory deduplication cache: stores keys of notifications already sent
// Format: `${email.toLowerCase()}_${onboardingCompleted ? 'done' : 'started'}`
const sentNotificationCache = new Set<string>();

/**
 * Validates and sanitizes payload to guarantee sensitive data is NEVER included
 */
function sanitizePayload(data: any): UserRegistrationPayload {
  // Ensure no password, token, secret, or session credentials can ever pass through
  const { password, token, accessToken, refreshToken, secret, authSecret, ...safeData } = data;
  return {
    fullName: String(safeData.fullName || 'New Student').trim().slice(0, 100),
    email: String(safeData.email || 'student@onestopadvisor.com').trim().toLowerCase().slice(0, 100),
    loginMethod: String(safeData.loginMethod || 'Guest Login').trim().slice(0, 50),
    registeredAt: safeData.registeredAt || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'medium' }),
    onboardingCompleted: Boolean(safeData.onboardingCompleted),
    educationLevel: safeData.educationLevel ? String(safeData.educationLevel).slice(0, 50) : undefined,
    stream: safeData.stream ? String(safeData.stream).slice(0, 50) : undefined,
    academicScore: typeof safeData.academicScore === 'number' ? safeData.academicScore : undefined
  };
}

/**
 * Generates responsive HTML email notification for the administrator
 */
function generateAdminEmailHTML(payload: UserRegistrationPayload): string {
  const statusBadgeColor = payload.onboardingCompleted ? '#10b981' : '#6366f1';
  const statusText = payload.onboardingCompleted ? 'Completed Onboarding & Profile Setup' : 'Account Created (Onboarding In Progress)';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New User Registration Alert</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.9; }
    .badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-top: 8px; }
    .content { padding: 32px 24px; }
    .alert-banner { background: #eef2ff; border-left: 4px solid #4f46e5; padding: 12px 16px; border-radius: 8px; margin-bottom: 24px; font-size: 14px; font-weight: 500; color: #312e81; }
    .details-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px; }
    .details-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; }
    .details-table td.label { width: 38%; font-weight: 600; color: #64748b; background-color: #f8fafc; }
    .details-table td.value { font-weight: 500; color: #0f172a; }
    .status-pill { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 700; color: #ffffff; background-color: ${statusBadgeColor}; }
    .security-notice { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 14px; border-radius: 10px; font-size: 12px; color: #166534; line-height: 1.5; margin-bottom: 24px; }
    .footer { background: #f8fafc; padding: 20px 24px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">Smart India Hackathon SIH 25094</div>
      <h1>One-Stop Career & Education Advisor</h1>
      <p>Administrator Registration Notification System</p>
    </div>

    <div class="content">
      <div class="alert-banner">
        🔔 <strong>New Student Registration Alert:</strong> A new user has entered the platform.
      </div>

      <table class="details-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${payload.fullName}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${payload.email}" style="color: #4f46e5; text-decoration: none;">${payload.email}</a></td>
        </tr>
        <tr>
          <td class="label">Login Method</td>
          <td class="value">${payload.loginMethod}</td>
        </tr>
        <tr>
          <td class="label">Registration Date/Time</td>
          <td class="value">${payload.registeredAt}</td>
        </tr>
        <tr>
          <td class="label">Onboarding Status</td>
          <td class="value"><span class="status-pill">${statusText}</span></td>
        </tr>
        ${payload.educationLevel ? `
        <tr>
          <td class="label">Education Level</td>
          <td class="value">${payload.educationLevel}</td>
        </tr>` : ''}
        ${payload.stream ? `
        <tr>
          <td class="label">Academic Stream</td>
          <td class="value">${payload.stream}</td>
        </tr>` : ''}
        ${payload.academicScore !== undefined ? `
        <tr>
          <td class="label">Academic Score</td>
          <td class="value">${payload.academicScore}%</td>
        </tr>` : ''}
      </table>

      <div class="security-notice">
        <strong>🔒 Security & Privacy Compliance:</strong><br>
        In accordance with security best practices, passwords, tokens, or sensitive credential parameters are never transmitted, logged, or included in administrative notifications.
      </div>
    </div>

    <div class="footer">
      <p>This is an automated operational alert generated by <strong>One-Stop</strong> (Problem Statement ID: SIH 25094).</p>
      <p>© 2025-2026 One-Stop – Personalized Career & Education Advisor.</p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Dispatches an admin email notification for new user registrations
 */
export async function sendAdminRegistrationNotification(rawData: any): Promise<{
  success: boolean;
  message: string;
  isDuplicate?: boolean;
  messageId?: string;
  previewUrl?: string | false;
}> {
  try {
    const payload = sanitizePayload(rawData);

    // Deduplication check: Key combining email and onboarding stage
    const deduplicationKey = `${payload.email}_${payload.onboardingCompleted ? 'completed' : 'initiated'}`;
    if (sentNotificationCache.has(deduplicationKey)) {
      console.log(`[AdminEmail] Duplicate registration notification suppressed for key: ${deduplicationKey}`);
      return {
        success: true,
        message: 'Notification already dispatched for this session/stage (duplicate suppressed).',
        isDuplicate: true
      };
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@onestopadvisor.com';
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || '';
    const smtpPass = process.env.SMTP_PASS || '';
    const smtpFrom = process.env.SMTP_FROM || 'One-Stop Career Advisor <notifications@onestopadvisor.com>';

    const subject = `[One-Stop Alert] New User Registration: ${payload.fullName} (${payload.loginMethod})`;
    const html = generateAdminEmailHTML(payload);
    const text = `New User Registration on One-Stop Advisor:\n\nName: ${payload.fullName}\nEmail: ${payload.email}\nLogin Method: ${payload.loginMethod}\nTime: ${payload.registeredAt}\nOnboarding: ${payload.onboardingCompleted ? 'Completed' : 'Started'}\n\nSecurity Notice: No passwords or sensitive tokens are transmitted.`;

    // If SMTP credentials are provided in environment variables:
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      const info = await transporter.sendMail({
        from: smtpFrom,
        to: adminEmail,
        subject,
        text,
        html
      });

      // Record in deduplication cache
      sentNotificationCache.add(deduplicationKey);
      console.log(`[AdminEmail] SMTP email sent successfully to ${adminEmail}. MessageID: ${info.messageId}`);

      return {
        success: true,
        message: `Admin notification successfully sent via SMTP to ${adminEmail}`,
        messageId: info.messageId
      };
    }

    // If SMTP credentials are not configured yet (local testing / hackathon demonstration):
    // Use an Ethereal / Test Transporter or simulated transport with complete logging
    console.log('====================================================');
    console.log('🔔 [ADMIN EMAIL NOTIFICATION - LOCAL DISPATCH]');
    console.log(`To: ${adminEmail}`);
    console.log(`Subject: ${subject}`);
    console.log(`User: ${payload.fullName} <${payload.email}>`);
    console.log(`Login Method: ${payload.loginMethod}`);
    console.log(`Registered At: ${payload.registeredAt}`);
    console.log(`Onboarding Status: ${payload.onboardingCompleted ? 'Completed' : 'In Progress'}`);
    console.log('🔒 Security: Password and credentials strictly omitted.');
    console.log('====================================================');

    // Record in deduplication cache
    sentNotificationCache.add(deduplicationKey);

    return {
      success: true,
      message: `Admin notification simulated and logged for ${adminEmail} (Configure SMTP_USER & SMTP_PASS in .env to deliver live emails).`,
      messageId: `simulated-${Date.now()}`
    };
  } catch (error: any) {
    console.error('[AdminEmail Error] Failed to send admin email notification:', error);
    return {
      success: false,
      message: `Failed to dispatch email notification: ${error.message || 'Unknown error'}`
    };
  }
}
