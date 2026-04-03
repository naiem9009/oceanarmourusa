import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

import { buildAdminNotificationEmail, buildVisitorConfirmationEmail } from '@/lib/contact-email-templates'

export const runtime = 'nodejs'

const contactSchema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z.string().trim().max(50).optional(),
  boatType: z.string().trim().max(120).optional(),
  waterlineLength: z.string().trim().max(120).optional(),
  serviceArea: z.enum(['broward', 'palm-beach']),
  details: z.string().trim().max(4000).optional(),
  contactMethod: z.enum(['phone', 'email', 'text']),
  website: z.string().trim().optional(),
})

function getSmtpConfig() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || '587')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const secure = process.env.SMTP_SECURE === 'true' || port === 465

  if (!host || !user || !pass || Number.isNaN(port)) {
    return null
  }

  return { host, port, secure, user, pass }
}

export async function POST(request: Request) {
  try {
    const json = await request.json().catch(() => null)
    const parsed = contactSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Please complete all required fields correctly.' }, { status: 400 })
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    const smtp = getSmtpConfig()
    if (!smtp) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
    }

    const adminEmail = process.env.CONTACT_ADMIN_EMAIL || 'oceanarmour@gmail.com'
    const fromName = process.env.CONTACT_FROM_NAME || 'Ocean Armour'

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    })

    const payload = {
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      boatType: parsed.data.boatType,
      waterlineLength: parsed.data.waterlineLength,
      serviceArea: parsed.data.serviceArea,
      details: parsed.data.details,
      contactMethod: parsed.data.contactMethod,
    }

    const adminTemplate = buildAdminNotificationEmail(payload)
    const visitorTemplate = buildVisitorConfirmationEmail(payload)

    await Promise.all([
      transporter.sendMail({
        from: `${fromName} <${smtp.user}>`,
        to: adminEmail,
        replyTo: payload.email,
        subject: adminTemplate.subject,
        html: adminTemplate.html,
        text: adminTemplate.text,
      }),
      transporter.sendMail({
        from: `${fromName} <${smtp.user}>`,
        to: payload.email,
        replyTo: adminEmail,
        subject: visitorTemplate.subject,
        html: visitorTemplate.html,
        text: visitorTemplate.text,
      }),
    ])

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Unable to send email right now. Please try again.' }, { status: 500 })
  }
}
