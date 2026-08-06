import { Check, Gift, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/pixel'

const CHECKOUT_URL = 'https://pay.hotmart.com/X96845284X?checkoutMode=10'

const bonuses = [
  'Acesso imediato a todos os módulos (curso on-line e gravado), Suporte via Zoom (ao vivo)',
  'Aula sobre os erros mais comuns na Vigilância Sanitária',
  'Sessão tira-dúvidas mensal via Zoom',
]

const testimonials = [
  'https://drive.google.com/uc?export=view&id=1w5_yez1pty311L5ErHrEzuJKg4EFxRTA',
  'https://drive.google.com/uc?export=view&id=1kRpY9MWnD3fuNhW8Qzc2iorndMvFIeZA',
  'https://drive.google.com/uc?export=view&id=1ucBoJkQZnoL_gPOzPxW7TVZDPVF0uXzG',
]

export const Offer = () => {
  const handleCheckout = () => {
    trackEvent('InitiateCheckout', { source: 'offer_cta' })
    window.open(CHECKOUT_URL, '_blank')
  }

  return (
    <section id="oferta" className="pb-20 pt-10 bg-slate-50 scroll-mt-24">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-stretch">
          {/* Bonuses */}
          <div className="h-full flex flex-col">
            <Card className="bg-blue-50 border-blue-200 shadow-sm flex-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Gift className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-900">O que você vai receber</h3>
                </div>
                <ul className="space-y-5">
                  {bonuses.map((bonus, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 rounded-full p-1 shrink-0">
                        <Check className="w-4 h-4 text-blue-700" />
                      </div>
                      <span className="text-slate-700 font-medium leading-relaxed">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Card */}
          <div>
            <Card className="bg-white border-2 border-green-500 shadow-2xl relative overflow-hidden h-full">
              <CardContent className="p-8 text-center flex flex-col justify-center h-[calc(100%-48px)]">
                <div className="mb-8 space-y-4">
                  <p className="text-slate-500 text-lg uppercase tracking-wide font-medium">
                    O seu investimento será
                  </p>{' '}
                  <div className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tighter">
                    <span className="text-2xl font-normal text-slate-500 mr-2">12x de R$</span>
                    30,72
                  </div>
                  <p className="text-slate-500 mt-2 text-lg">ou R$ 297 à vista</p>
                </div>

                <Button
                  onClick={handleCheckout}
                  size="lg"
                  className="w-full h-auto py-6 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-bold bg-green-600 hover:bg-green-700 text-white shadow-xl hover:shadow-2xl transition-all mb-6 whitespace-normal text-center leading-snug"
                >
                  QUERO TER SEGURANÇA NA ESTERILIZAÇÃO
                  <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                </Button>

                <p className="text-sm text-slate-500 font-medium">
                  Compra 100% segura via Hotmart. Acesso imediato ao treinamento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Proof for Offer Section */}
      </div>
    </section>
  )
}
