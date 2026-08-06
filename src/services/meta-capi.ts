const BACKEND_URL = import.meta.env.VITE_POCKETBASE_URL
const TEST_EVENT_CODE = 'TEST92693'

export const sendPageViewCAPI = async (eventSourceUrl?: string) => {
  try {
    const url = eventSourceUrl || (typeof window !== 'undefined' ? window.location.href : '')
    const eventID = `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`

    const body: Record<string, unknown> = {
      eventName: 'PageView',
      eventID,
      eventSourceUrl: url,
      testEventCode: TEST_EVENT_CODE,
    }

    await fetch(`${BACKEND_URL}/backend/v1/meta/capi`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (error) {
    console.error('CAPI PageView failed:', error)
  }
}

export const sendEventCAPI = async (
  eventName: string,
  eventData?: Record<string, unknown>,
  eventSourceUrl?: string,
) => {
  try {
    const url = eventSourceUrl || (typeof window !== 'undefined' ? window.location.href : '')
    const eventID = `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`

    const body: Record<string, unknown> = {
      eventName,
      eventID,
      eventSourceUrl: url,
      testEventCode: TEST_EVENT_CODE,
      ...(eventData && { customData: eventData }),
    }

    await fetch(`${BACKEND_URL}/backend/v1/meta/capi`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (error) {
    console.error(`CAPI ${eventName} failed:`, error)
  }
}
