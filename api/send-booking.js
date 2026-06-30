// Vercel serverless function — sends booking emails via Resend.
// Runs server-side so the RESEND_API_KEY stays secret and there's no CORS
// issue (the browser posts here, same-origin).

const TO = 'pitchpartnersmgmt@gmail.com'
const FROM = 'Pitch Partners Bookings <bookings@pitchpartners.ca>'

const escapeHtml = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const { name, email, phone, program, message } = req.body || {}

  // Server-side validation (don't trust the client)
  if (!name?.trim() || !email?.trim() || !phone?.trim() || !program?.trim()) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: email,
        subject: `New Booking Request - ${name}`,
        html: `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Program:</strong> ${escapeHtml(program)}</p>
          <p><strong>Message:</strong> ${escapeHtml(message) || '(No message)'}</p>
        `,
      }),
    })

    if (!resp.ok) {
      const detail = await resp.text().catch(() => '')
      console.error('Resend error:', resp.status, detail)
      return res.status(502).json({ error: 'Failed to send the booking email.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('send-booking error:', err)
    return res.status(500).json({ error: 'Unexpected error sending email.' })
  }
}
