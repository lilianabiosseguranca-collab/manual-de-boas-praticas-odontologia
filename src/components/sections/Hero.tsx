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
    <section className="relative w-full bg-white overflow-hidden pt-36 pb-16 md:pt-20 md:pb-24">
      {/* Light subtle background nuances */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-blue-100/30 via-emerald-100/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 leading-[1.15] drop-shadow-xs">
            A maneira mais eficiente de ficar atualizado com os documentos exigidos pela nova
            legislação de odontologia
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            Guia completo: 95 documentos pré-prontos seguindo os capítulos da RDC 1002/2025
          </p>

          <div className="pt-2 sm:pt-4 flex justify-center">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg md:text-xl px-7 py-5 sm:px-9 sm:py-6 md:py-7 h-auto bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 whitespace-normal text-center leading-snug cursor-pointer"
            >
              <a href="#pricing" onClick={handleCtaClick} className="inline-flex items-center">
                Quero uma atualização rápida e eficiente
                <ArrowRight className="ml-2.5 w-5 h-5 md:w-6 md:h-6 shrink-0" />
              </a>
            </Button>
          </div>
        </div>

        {/* Full-width Horizontal Floating Folders Shelf & Inspection View */}
        <div className="mt-10 sm:mt-12 md:mt-16 w-full">
          <DocumentExplosion />
        </div>
      </div>
    </section>
  )
}
