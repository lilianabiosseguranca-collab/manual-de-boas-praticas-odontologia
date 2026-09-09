import { Check, ShieldCheck, FileText, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { trackEvent } from '@/lib/pixel'

export const Pricing = () => {
  const handleCheckout = () => {
    trackEvent('InitiateCheckout', { value: 59.9, currency: 'BRL', content_name: 'LBA' })
    window.open('https://pay.hotmart.com/D97925218P?checkoutMode=10&bid=1788356054231', '_blank')
  }

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative flex justify-center scroll-mt-24">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
        <Reveal direction="up">
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-balance text-slate-900">
              O seu&nbsp;<span className="italic text-[#38a169]">investimento&nbsp;</span>
              <span>será de:</span>
            </h2>
          </div>
        </Reveal>

        <Reveal direction="up" delay={200} className="w-full max-w-2xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(56,161,105,0.15)] border border-green-50 relative overflow-hidden flex flex-col items-center text-center mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#38a169]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="mt-8 mb-8 w-full flex flex-col items-center relative z-10">
              <p className="text-slate-500 line-through text-lg mb-2 font-medium">
                <br />
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-3">
                <span className="text-2xl font-bold text-slate-700">7x de</span>
                <span className="text-6xl md:text-7xl font-serif font-bold tracking-tight text-[#38a169] drop-shadow-[0_0_15px_rgba(56,161,105,0.2)]">
                  R$ 9,79
                </span>
              </div>
              <p className="text-base text-slate-500 font-medium">ou R$ 59,90 à vista</p>
            </div>

            <div className="w-full max-w-md mx-auto mb-10 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-green-50 shadow-[0_0_20px_rgba(56,161,105,0.05)] relative z-10">
              <ul className="space-y-4 text-left">
                {[
                  'Acesso imediato a todos os arquivos',
                  'Suporte via Zoom (ao vivo)',
                  'Bônus incluso',
                  '1 ano de acesso',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-[#38a169]/10 p-1.5 rounded-full shadow-[0_0_10px_rgba(56,161,105,0.2)]">
                      <Check className="w-4 h-4 text-[#38a169] flex-shrink-0" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-medium text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={handleCheckout}
              className="w-full md:w-[400px] h-auto py-5 px-6 text-base sm:text-lg md:text-xl font-bold rounded-full shadow-[0_8px_30px_rgba(56,161,105,0.4)] hover:shadow-[0_8px_30px_rgba(56,161,105,0.6)] hover:-translate-y-1 transition-all duration-300 hover:bg-[#2f855a] text-white bg-[#38a169] relative z-10 whitespace-normal text-center leading-snug"
            >
              Quero uma atualização eficiente
            </Button>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 border-t border-slate-100 w-full pt-8 relative z-10">
              <div className="flex gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src="https://img.usecurling.com/i?q=visa&shape=lineal-color"
                  alt="Visa"
                  className="h-7"
                />
                <img
                  src="https://img.usecurling.com/i?q=mastercard&shape=lineal-color"
                  alt="Mastercard"
                  className="h-7"
                />
                <img
                  src="https://img.usecurling.com/i?q=pix&shape=lineal-color"
                  alt="Pix"
                  className="h-7"
                />
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Compra 100% Segura. Garantia incondicional de 7 dias.</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card Âncora de Granularidade: Mais barato que um café */}
        <Reveal direction="up" delay={250} className="w-full max-w-2xl mt-8">
          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/90 border border-emerald-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-slate-900">
                  <span className="text-emerald-800">95 documentos</span> por{' '}
                  <span className="text-emerald-800">R$ 59,90</span> — menos de{' '}
                  <span className="text-emerald-800 underline decoration-emerald-400 decoration-2 underline-offset-2">
                    R$ 1,00 por documento
                  </span>
                  .
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm text-slate-600 mt-0.5">
                  <Coffee className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Cada POP sai mais barato que um café.</span>
                </div>
              </div>
            </div>

            <div className="shrink-0"></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
