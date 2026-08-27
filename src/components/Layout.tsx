import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { initPixel, trackPageView, trackEvent } from '@/lib/pixel'
import { cn } from '@/lib/utils'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Initialize Meta Pixel
    initPixel()

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
          isScrolled ? 'glass-header py-4 shadow-sm' : 'bg-transparent py-6',
        )}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <div className="font-serif font-bold text-xl tracking-tight">
            Manual de Boas Práticas - Documentos para odontologia
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
