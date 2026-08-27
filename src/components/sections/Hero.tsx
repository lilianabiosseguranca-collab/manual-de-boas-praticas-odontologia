import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { DocumentExplosion } from '@/components/sections/DocumentExplosion'

export const Hero = () => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[100vh] flex items-center bg-slate-50 overflow-hidden">
      {/* Light Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200/50 z-0" />
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-blue-200/30 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-emerald-200/20 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="container relative z-20 px-4 md:px-6 mx-auto pt-24 pb-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-3xl space-y-6 md:space-y-10 order-1 lg:order-1 pt-4 md:pt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight drop-shadow-sm">
              A maneira mais eficiente de você ficar atualizado com os documentos exigidos pela nova
              legislação de odontologia
            </h1>

            <div className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-2xl space-y-4">
              <p>
                Guia completo com tudo o que você precisa ficar atualizado com +50 documentos
                pré-prontos
              </p>
            </div>

            <div className="pt-2 md:pt-6">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto text-[1.05rem] md:text-xl px-6 py-6 md:px-8 md:py-8 h-auto bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-xl transition-transform hover:-translate-y-1 whitespace-normal text-center leading-snug"
              >
                <a href="#pricing" onClick={handleCtaClick}>
                  Quero uma atualização rápida e eficiente
                  <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 shrink-0" />
                </a>
              </Button>
            </div>
          </div>

          {/* Digital Asset Montage: 3D Exploding Documents & Folder Composition */}
          <div className="relative w-full h-full flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] order-2 lg:order-2">
            <DocumentExplosion />
          </div>
        </div>
      </div>
    </section>
  )
}
