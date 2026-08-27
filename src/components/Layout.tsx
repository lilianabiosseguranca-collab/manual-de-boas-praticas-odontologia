import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { initPixel, trackPageView, trackEvent } from '@/lib/pixel'
import { cn } from '@/lib/utils'
import { setupTransparentFavicon } from '@/lib/favicon'
import logoImg from '@/assets/design-sem-nome-11-26c3d.png'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Initialize Meta Pixel
    initPixel()

    // Initialize dynamic transparent favicon from logo image
    setupTransparentFavicon(logoImg)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    trackPageView()
  }, [location.pathname])

  const scrollToPricing = () => {
    trackEvent('Lead', { source: 'header_cta' })
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Sticky Header */}
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled ? 'glass-header py-3 md:py-4 shadow-sm' : 'bg-transparent py-4 md:py-6',
        )}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Manual de Boas Práticas"
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain shrink-0 [mix-blend-mode:multiply]"
            />
            <span className="font-serif font-bold text-base sm:text-lg md:text-xl tracking-tight text-slate-900 leading-tight">
              Manual de Boas Práticas - Documentos para odontologia
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Minimalist Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <div className="font-serif font-bold text-2xl opacity-90">
            Liliana Donatelli<span className="text-primary">.</span>
          </div>

          <div className="flex justify-center gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
          </div>
          <p className="text-background/40 text-xs mt-8">
            &copy; {new Date().getFullYear()} Lilian Donatelli. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
