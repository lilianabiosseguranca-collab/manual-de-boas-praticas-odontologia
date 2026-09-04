const BACKEND_URL = import.meta.env.VITE_POCKETBASE_URL

export const generateEventId = () => {
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

export const sendPageViewCAPI = async (eventSourceUrl?: string, eventID?: string) => {
  try {
    const url = eventSourceUrl || (typeof window !== 'undefined' ? window.location.href : '')
    const resolvedEventId = eventID || generateEventId()

    const body: Record<string, unknown> = {
      eventName: 'PageView',
      eventID: resolvedEventId,
      eventSourceUrl: url,
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
  eventID?: string,
) => {
  try {
    const url = eventSourceUrl || (typeof window !== 'undefined' ? window.location.href : '')
    const resolvedEventId = eventID || generateEventId()

    const body: Record<string, unknown> = {
      eventName,
      eventID: resolvedEventId,
      eventSourceUrl: url,
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
