import { NextRequest, NextResponse } from 'next/server'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!

interface GeoData {
  status: string
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  isp: string
  org: string
  as: string
  query: string
}

async function getGeoData(ip: string): Promise<GeoData | null> {
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=66846719`)
    if (!res.ok) return null
    const data = await res.json()
    if (data.status === 'fail') return null
    return data as GeoData
  } catch {
    return null
  }
}

function getFlag(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join('')
}

async function sendTelegramLocation(lat: number, lon: number) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendLocation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      latitude: lat,
      longitude: lon,
    }),
  })
}

async function sendTelegramMessage(text: string) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const page = body.page || '/'

    // Extract IP from headers
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwarded?.split(',')[0]?.trim() || realIp || 'unknown'

    const userAgent = request.headers.get('user-agent') || 'Unknown'

    // Skip bots and crawlers
    const botPatterns = /bot|crawl|spider|slurp|mediapartners|preview/i
    if (botPatterns.test(userAgent)) {
      return NextResponse.json({ ok: true, skipped: 'bot' })
    }

    // Skip local/private IPs in dev
    const isLocal =
      ip === 'unknown' ||
      ip === '127.0.0.1' ||
      ip === '::1' ||
      ip.startsWith('192.168.') ||
      ip.startsWith('10.')

    if (isLocal) {
      const message =
        `🖥 <b>New Visitor</b> (localhost)\n\n` +
        `📄 <b>Page:</b> <code>${page}</code>\n` +
        `🌐 <b>IP:</b> <code>${ip}</code>\n` +
        `📱 <b>UA:</b> <code>${userAgent.slice(0, 100)}</code>\n\n` +
        `<i>🏠 Local development visit</i>`

      await sendTelegramMessage(message)
      return NextResponse.json({ ok: true })
    }

    // Get geolocation
    const geo = await getGeoData(ip)

    if (!geo) {
      const message =
        `👤 <b>New Visitor</b>\n\n` +
        `📄 <b>Page:</b> <code>${page}</code>\n` +
        `🌐 <b>IP:</b> <code>${ip}</code>\n` +
        `📱 <b>UA:</b> <code>${userAgent.slice(0, 100)}</code>\n\n` +
        `<i>⚠️ Could not resolve location</i>`

      await sendTelegramMessage(message)
      return NextResponse.json({ ok: true })
    }

    const flag = getFlag(geo.countryCode)

    // Send the location pin first
    await sendTelegramLocation(geo.lat, geo.lon)

    // Send the beautiful detail message
    const message =
      `👤 <b>New Visitor on ali110.dev</b>\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `📄 <b>Page:</b> <code>${page}</code>\n\n` +
      `${flag} <b>Location:</b>\n` +
      `    📍 ${geo.city}, ${geo.regionName}\n` +
      `    🗺 ${geo.country} (${geo.countryCode})\n` +
      `    🧭 <code>${geo.lat}, ${geo.lon}</code>\n\n` +
      `🌐 <b>Network:</b>\n` +
      `    💻 IP: <code>${ip}</code>\n` +
      `    🏢 ISP: ${geo.isp}\n` +
      `    🏛 Org: ${geo.org}\n\n` +
      `🕐 <b>Timezone:</b> ${geo.timezone}\n` +
      `📮 <b>Zip:</b> ${geo.zip || 'N/A'}\n\n` +
      `📱 <b>User Agent:</b>\n<code>${userAgent.slice(0, 200)}</code>\n` +
      `━━━━━━━━━━━━━━━━━━━━━`

    await sendTelegramMessage(message)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Track API error:', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
