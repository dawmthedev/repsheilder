import { NextResponse } from 'next/server'
import { notifyLead } from '@/lib/leadNotifications'

export async function GET() {
  const testPayload = {
    // Required lead fields
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '5551234567',
    companyName: 'Test Business LLC',
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
    utm_source: 'test_source',
    utm_medium: 'test_medium',
    utm_campaign: 'test_campaign',
    utm_term: 'test_term',
    utm_content: 'test_content',
    gclid: 'test_gclid',
    wbraid: 'test_wbraid',
    gbraid: 'test_gbraid',
    fbclid: 'test_fbclid',
    msclkid: 'test_msclkid',
  }

  const context = {
    referer: 'https://example.com/test',
    platform: '',
  }

  try {
    console.log('[TEST_LEAD_NOTIFY] Triggering test lead notification...')
    const result = await notifyLead(testPayload, { raw: testPayload, context })
    console.log('[TEST_LEAD_NOTIFY] Success:', { uuid: result.uuid, ok: result.ok })

    return NextResponse.json({
      success: true,
      uuid: result.uuid,
      ok: result.ok,
      message: 'Test lead notification sent. Check server logs and your SMS/webhook endpoints.',
    })
  } catch (err) {
    console.error('[TEST_LEAD_NOTIFY] Failed:', err)
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Unknown error',
        message: 'Test lead notification failed. Check server logs.',
      },
      { status: 500 }
    )
  }
}
