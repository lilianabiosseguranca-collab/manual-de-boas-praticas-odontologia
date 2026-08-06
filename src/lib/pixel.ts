import { sendPageViewCAPI } from '@/services/meta-capi'

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

export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
  sendPageViewCAPI()
}

export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data)
  } else {
    console.log(`[Pixel Mock] Tracked: ${eventName}`, data)
  }
}
