export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import payload from 'payload'
import payloadConfig from '../../../../../payload.config'

let isPayloadInitialized = false

async function initPayload() {
  if (!isPayloadInitialized) {
    await payload.init({
      config: payloadConfig,
    })
    isPayloadInitialized = true
  }
}

export async function POST(req: Request) {
  try {
    await initPayload()

    const data = await req.json()
    await payload.create({
      collection: 'contact-submissions',
      data,
    })
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      subject: `New Contact Submission from ${data.fullName}`,
      text: `You have a new contact form submission:

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Message:
${data.message}

Please check your admin panel for more details.`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error in /api/contact:', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
