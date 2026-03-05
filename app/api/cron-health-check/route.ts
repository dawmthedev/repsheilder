import { NextResponse } from 'next/server'
import { notifyLead } from '@/lib/leadNotifications'

export async function GET() {
  // Verify this is a cron request (optional security measure)
  const authHeader = process.env.CRON_SECRET
  const requestAuth = process.env.CRON_SECRET // In production, you'd pass this in headers

  if (authHeader && requestAuth !== authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const testPayload = {
    // Required lead fields
    firstName: 'Cron',
    lastName: 'Test',
    email: 'cron-test@example.com',
    phone: '5551234567',
    companyName: 'Cron Test Business LLC',
    businessListingLink: 'https://example.com',
    reviewType: 'text',
    reviewsToRemove: '3',
    postedTimeframe: '3-12m',
    city: 'Test City',
    Country: 'USA',

    // Funnel and tracking
    funnel: 'general',
    platform: '',
    source: 'general',

    // UTM and click IDs (test values)
    utm_source: 'cron_test',
    utm_medium: 'system_check',
    utm_campaign: 'daily_health_check',
    utm_term: 'test_term',
    utm_content: 'test_content',
    gclid: 'cron_gclid',
    wbraid: 'cron_wbraid',
    gbraid: 'cron_gbraid',
    fbclid: 'cron_fbclid',
    msclkid: 'cron_msclkid',
  }

  const context = {
    referer: 'https://example.com/cron-health-check',
    platform: '',
  }

  try {
    console.log('[CRON_LEAD_NOTIFY] Daily health check at 9 PM PST...')
    const result = await notifyLead(testPayload, { raw: testPayload, context })
    console.log('[CRON_LEAD_NOTIFY] Health check success:', { uuid: result.uuid, ok: result.ok })

    return NextResponse.json({
      success: true,
      uuid: result.uuid,
      ok: result.ok,
      timestamp: new Date().toISOString(),
      message: 'Daily health check completed. Check logs for webhook/SMS status.',
    })
  } catch (err) {
    console.error('[CRON_LEAD_NOTIFY] Health check failed:', err)
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Unknown error',
        timestamp: new Date().toISOString(),
        message: 'Daily health check failed. Check logs.',
      },
      { status: 500 }
    )
  }
}
