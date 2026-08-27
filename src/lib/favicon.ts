/**
 * Utility to process the logo image, remove its white background using HTML5 Canvas,
 * and dynamically set the favicon with the transparent PNG data URL.
 */
export function setupTransparentFavicon(imageSrc: string) {
  if (typeof window === 'undefined') return

  const img = new Image()
  img.crossOrigin = 'anonymous'

  img.onload = () => {
    try {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth || img.width
      canvas.height = img.naturalHeight || img.height

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Remove pure white or near-white pixels (make transparent with smooth alpha roll-off)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        // Check if pixel is near-white (threshold ~ 235)
        const minVal = Math.min(r, g, b)
        if (minVal > 220) {
          // If all channels are very light, make transparent
          if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0
          } else {
            // Anti-aliasing edge blend for near-white pixels
            const brightness = (r + g + b) / 3
            const factor = Math.max(0, (255 - brightness) / 35)
            data[i + 3] = Math.round(data[i + 3] * factor)
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)
      const transparentDataUrl = canvas.toDataURL('image/png')

      // Update or create favicon link tag
      let link = document.querySelector<HTMLLinkElement>("link[rel*='icon']")
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }
      link.type = 'image/png'
      link.href = transparentDataUrl
    } catch (e) {
      console.warn('Failed to generate transparent favicon:', e)
    }
  }

  img.src = imageSrc
}
