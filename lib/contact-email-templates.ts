type ContactPayload = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  boatType?: string
  waterlineLength?: string
  serviceArea: string
  details?: string
  contactMethod: string
}

const BRAND_COLOR = '#0079b5'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatServiceArea(value: string) {
  if (value === 'broward') return 'Broward County'
  if (value === 'palm-beach') return 'Palm Beach County'
  return value
}

function formatContactMethod(value: string) {
  if (value === 'phone') return 'Phone'
  if (value === 'email') return 'Email'
  if (value === 'text') return 'Text'
  return value
}

export function buildAdminNotificationEmail(data: ContactPayload) {
  const name = `${data.firstName} ${data.lastName}`.trim()
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(data.email)
  const safePhone = escapeHtml(data.phone || 'Not provided')
  const safeBoatType = escapeHtml(data.boatType || 'Not provided')
  const safeWaterline = escapeHtml(data.waterlineLength || 'Not provided')
  const safeArea = escapeHtml(formatServiceArea(data.serviceArea))
  const safeMethod = escapeHtml(formatContactMethod(data.contactMethod))
  const safeDetails = escapeHtml(data.details || 'No additional details provided.')
  const area = formatServiceArea(data.serviceArea)
  const method = formatContactMethod(data.contactMethod)
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })

  const html = `
  <div style="margin:0;padding:0;font-family:Arial,sans-serif;color:#0f2a3a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:700px;margin:0 auto;">
      <tr>
        <td style="padding:0 0 16px;text-align:center;">
          <img src="http://oceanarmour.com/images/ocean-armour-logo.png" alt="Ocean Armour" width="68" height="68" style="display:inline-block;width:68px;height:68px;object-fit:contain;" />
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:700px;margin:0 auto;background:${BRAND_COLOR};border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding:24px 24px 18px;">
          <p style="margin:0;color:#d5ebf7;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Ocean Armour</p>
          <h1 style="margin:4px 0 0;color:#ffffff;font-size:26px;line-height:1.25;font-weight:700;">New Contact Request</h1>
          <p style="margin:8px 0 0;color:#d5ebf7;font-size:13px;">Submitted on ${submittedAt} ET</p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <div style="padding:16px;border-radius:12px;background:#ffffff;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#4f6d80;width:42%;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#0f2a3a;">${safeName}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#4f6d80;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#0f2a3a;">${safeEmail}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#4f6d80;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#0f2a3a;">${safePhone}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#4f6d80;">Boat Type</td><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#0f2a3a;">${safeBoatType}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#4f6d80;">Waterline Length</td><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#0f2a3a;">${safeWaterline}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#4f6d80;">Service Area</td><td style="padding:10px 0;border-bottom:1px solid #e5edf2;color:#0f2a3a;">${safeArea}</td></tr>
              <tr><td style="padding:10px 0;color:#4f6d80;">Preferred Contact</td><td style="padding:10px 0;color:#0f2a3a;">${safeMethod}</td></tr>
            </table>

            <div style="margin-top:16px;padding:14px;border:1px solid #d6e6ef;border-radius:10px;background:#f7fbfe;">
              <p style="margin:0 0 8px;color:#22516b;font-size:13px;font-weight:700;">Questions or Details</p>
              <p style="margin:0;color:#0f2a3a;line-height:1.7;white-space:pre-wrap;">${safeDetails}</p>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>`

  const text = [
    'New Contact Request - Ocean Armour',
    `Name: ${name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || 'Not provided'}`,
    `Boat Type: ${data.boatType || 'Not provided'}`,
    `Waterline Length: ${data.waterlineLength || 'Not provided'}`,
    `Service Area: ${area}`,
    `Preferred Contact: ${method}`,
    '',
    'Questions or Details:',
    data.details || 'No additional details provided.',
  ].join('\n')

  return {
    subject: `New consultation request from ${name}`,
    html,
    text,
  }
}

export function buildVisitorConfirmationEmail(data: ContactPayload) {
  const firstName = data.firstName || 'there'
  const safeFirstName = escapeHtml(firstName)
  const safeArea = escapeHtml(formatServiceArea(data.serviceArea))
  const safeMethod = escapeHtml(formatContactMethod(data.contactMethod))
  const safeBoatType = escapeHtml(data.boatType || 'Not provided')
  const area = formatServiceArea(data.serviceArea)
  const html = `
  <div style="margin:0;padding:0;font-family:Arial,sans-serif;color:#0f2a3a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:700px;margin:0 auto;">
      <tr>
        <td style="padding:0 0 16px;text-align:center;">
          <img src="http://oceanarmour.com/images/ocean-armour-logo.png" alt="Ocean Armour" width="68" height="68" style="display:inline-block;width:68px;height:68px;object-fit:contain;" />
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:700px;margin:0 auto;background:${BRAND_COLOR};border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding:24px 24px 18px;">
          <p style="margin:0;color:#d5ebf7;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Ocean Armour</p>
          <h1 style="margin:4px 0 0;font-size:26px;line-height:1.25;color:#ffffff;">Thanks for reaching out, ${safeFirstName}.</h1>
          <p style="margin:8px 0 0;color:#d5ebf7;font-size:14px;">We received your consultation request and our team will follow up shortly.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <div style="padding:16px;border-radius:12px;background:#ffffff;">
            <p style="margin:0 0 12px;color:#0f2a3a;line-height:1.6;">Your request has been queued for our team serving Broward and Palm Beach counties. We usually respond during business hours (Mon-Fri, 9 AM - 5 PM).</p>

            <div style="padding:14px;border:1px solid #d6e6ef;border-radius:10px;background:#f7fbfe;">
              <p style="margin:0 0 8px;color:#22516b;font-size:13px;font-weight:700;">Request Snapshot</p>
              <p style="margin:0;color:#0f2a3a;line-height:1.7;">
                Service area: ${safeArea}<br />
                Preferred contact: ${safeMethod}<br />
                Boat type: ${safeBoatType}
              </p>
            </div>

            <p style="margin:16px 0 0;color:#4f6d80;line-height:1.6;">If you need immediate help, call us at <a href="tel:+15615690936" style="color:${BRAND_COLOR};text-decoration:none;">561-569-0936</a> or email us at <a href="mailto:oceanarmour@gmail.com" style="color:${BRAND_COLOR};text-decoration:none;">oceanarmour@gmail.com</a>.</p>
          </div>
        </td>
      </tr>
    </table>
  </div>`

  const text = [
    `Thanks for reaching out, ${firstName}.`,
    'We received your consultation request and will follow up shortly.',
    '',
    `Service area: ${area}`,
    `Preferred contact: ${formatContactMethod(data.contactMethod)}`,
    `Boat type: ${data.boatType || 'Not provided'}`,
    '',
    'Need immediate help? Call 561-569-0936 or email oceanarmour@gmail.com.',
  ].join('\n')

  return {
    subject: 'We received your consultation request | Ocean Armour',
    html,
    text,
  }
}
