/**
 * Utility to remove white/off-white background from an image using HTML5 Canvas.
 * Returns a transparent PNG data URL and caches it.
 */
let cachedTransparentUrl: string | null = null
let pendingPromise: Promise<string> | null = null

/**
 * Removes white and very light background pixels from an image source,
 * converting them into full transparency (alpha = 0) with a smooth edge transition.
 */
export function removeWhiteBackground(imageSrc: string): Promise<string> {
  if (typeof window === 'undefined') {
    return Promise.resolve(imageSrc)
  }

  if (cachedTransparentUrl) {
    return Promise.resolve(cachedTransparentUrl)
  }

  if (pendingPromise) {
    return pendingPromise
  }

  pendingPromise = new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const width = img.naturalWidth || img.width
        const height = img.naturalHeight || img.height
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')
        if (!ctx) {
          resolve(imageSrc)
          return
        }

        ctx.drawImage(img, 0, 0)

        const imageData = ctx.getImageData(0, 0, width, height)
        const data = imageData.data

        // Aggressive background removal:
        // Any pixel where R, G, and B are all > 200 is treated as background / off-white.
        // We also apply smooth anti-aliasing near edges (between 185 and 215) so the icon doesn't have jagged fringes.
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]

          const minChannel = Math.min(r, g, b)

          if (minChannel >= 205) {
            // Full background / off-white removal
            data[i + 3] = 0
          } else if (minChannel > 180) {
            // Smooth edge transition / anti-aliasing for border pixels
            // minChannel 180 -> factor = 1 (fully opaque)
            // minChannel 205 -> factor = 0 (fully transparent)
            const factor = (205 - minChannel) / 25
            data[i + 3] = Math.round(data[i + 3] * Math.max(0, Math.min(1, factor)))
          }
        }

        ctx.putImageData(imageData, 0, 0)
        const transparentDataUrl = canvas.toDataURL('image/png')
        cachedTransparentUrl = transparentDataUrl
        resolve(transparentDataUrl)
      } catch (err) {
        console.warn('Failed to remove white background from image:', err)
        resolve(imageSrc)
      }
    }

    img.onerror = () => {
      console.warn('Failed to load image for background removal:', imageSrc)
      resolve(imageSrc)
    }

    img.src = imageSrc
  })

  return pendingPromise
}

/**
 * Updates the document favicon with a transparent version of the image.
 */
export async function setupTransparentFavicon(imageSrc: string): Promise<string> {
  const transparentUrl = await removeWhiteBackground(imageSrc)

  if (typeof document !== 'undefined') {
    let link = document.querySelector<HTMLLinkElement>("link[rel*='icon']")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    link.type = 'image/png'
    link.href = transparentUrl
  }

  return transparentUrl
}
