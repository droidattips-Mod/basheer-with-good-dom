import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, phone, equipmentType, duration, city, message } = await request.json()

    if (!name || !phone || !equipmentType || !duration || !city) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error: resendError } = await resend.emails.send({
      from: 'Al Nasr Cranes <onboarding@resend.dev>',
      to: 'alnasrcranes@gmail.com',
      subject: `طلب عرض سعر جديد — ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #f59e0b; padding-bottom: 12px;">
            🏗️ طلب عرض سعر جديد — النصر للرافعات
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="background: #f8fafc;">
              <td style="padding: 10px 14px; font-weight: bold; color: #64748b; width: 140px;">الاسم</td>
              <td style="padding: 10px 14px; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #64748b;">رقم الجوال</td>
              <td style="padding: 10px 14px; color: #1e293b;">${phone}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 10px 14px; font-weight: bold; color: #64748b;">نوع المعدة</td>
              <td style="padding: 10px 14px; color: #1e293b;">${equipmentType}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #64748b;">مدة الإيجار</td>
              <td style="padding: 10px 14px; color: #1e293b;">${duration}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 10px 14px; font-weight: bold; color: #64748b;">المدينة</td>
              <td style="padding: 10px 14px; color: #1e293b;">${city}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #64748b; vertical-align: top;">رسالة إضافية</td>
              <td style="padding: 10px 14px; color: #1e293b;">${message}</td>
            </tr>` : ''}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
            تم الاستلام عبر نموذج الموقع الإلكتروني — alnasrcranes.vercel.app
          </p>
        </div>
      `,
    })

    if (resendError) {
      console.error('Resend error:', resendError)
      return NextResponse.json({ error: resendError.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
