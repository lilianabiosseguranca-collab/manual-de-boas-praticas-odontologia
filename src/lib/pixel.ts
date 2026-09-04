import { sendPageViewCAPI, sendEventCAPI, generateEventId } from '@/services/meta-capi'

declare global {
  interface Window {
    fbq: any
    _fbq: any
  }
}

export const PIXEL_ID = '1115990062814370'

export const initPixel = () => {
  // Initialization is handled in index.html head
}

export const trackPageView = (customEventId?: string) => {
  const eventID = customEventId || generateEventId()

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView', {}, { eventID })
  }
  sendPageViewCAPI(undefined, eventID)
  return eventID
}

export const trackEvent = (
  eventName: string,
  data?: Record<string, any>,
  customEventId?: string,
) => {
  const eventID = customEventId || generateEventId()

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data || {}, { eventID })
  } else {
    console.log(`[Pixel Mock] Tracked: ${eventName}`, data, { eventID })
  }
  sendEventCAPI(eventName, data, undefined, eventID)
  return eventID
}
