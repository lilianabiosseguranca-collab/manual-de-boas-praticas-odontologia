import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import { trackPageView } from './lib/pixel'
import { sendPageViewCAPI } from './services/meta-capi'
import { AuthProvider } from './hooks/use-auth'

const RouteTracker = () => {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      sendPageViewCAPI()
      return
    }
    trackPageView()
  }, [location.pathname])

  return null
}

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <BrowserRouter>
      <RouteTracker />
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
