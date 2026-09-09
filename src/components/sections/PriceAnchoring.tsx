import { Clock, Stethoscope, TrendingDown, AlertTriangle, Ban, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/Reveal'

export function PriceAnchoring() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-slate-100/70 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        {/* Título Principal com Ícone Lucide Clock integrado */}
        <Reveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm mb-4 border border-slate-200/80 shadow-xs">
              <Clock className="w-4 h-4 text-slate-600" />
              <span>Análise de Custo Real</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/70 shrink-0 shadow-xs">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
              <span>Quanto custa produzir tudo isso sozinho?</span>
            </h2>
          </div>
        </Reveal>

        {/* Dois Blocos / Cards: Âncora de Tempo vs Âncora de Risco */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-10">
          {/* Card 1: Âncora de Tempo */}
          <Reveal direction="up" delay={100} className="h-full">
            <Card className="h-full border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] transition-all duration-300 rounded-3xl bg-white overflow-hidden flex flex-col">
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-sky-500" />
              <CardContent className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        Custo de Oportunidade
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Tempo de Consultório Perdido
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {/* Item 1: 50 horas */}
                    <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100/90">
                      <div className="w-8 h-8 rounded-lg bg-blue-100/60 flex items-center justify-center shrink-0 text-blue-700 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="text-sm sm:text-base text-slate-700 leading-snug">
                        <span className="font-bold text-slate-900">50 horas</span> no mínimo para
                        você mesmo produzir a base do material
                      </div>
                    </li>

                    {/* Item 2: R$ 100 por consulta */}
                    <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100/90">
                      <div className="w-8 h-8 rounded-lg bg-sky-100/60 flex items-center justify-center shrink-0 text-sky-700 mt-0.5">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <div className="text-sm sm:text-base text-slate-700 leading-snug">
                        <span className="font-bold text-slate-900">R$ 100 por consulta</span> (seu
                        ticket médio)
                      </div>
                    </li>

                    {/* Item 3: = R$ 5.000 que você deixa de ganhar */}
                    <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/60">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 text-amber-700 mt-0.5">
                        <TrendingDown className="w-4 h-4" />
                      </div>
                      <div className="text-sm sm:text-base text-slate-800 leading-snug">
                        <span className="font-bold text-red-600 sm:text-lg block mb-0.5">
                          = R$ 5.000 que você deixa de ganhar
                        </span>
                        <span>escrevendo POPs em vez de atender</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* Card 2: Âncora de Risco */}
          <Reveal direction="up" delay={200} className="h-full">
            <Card className="h-full border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] transition-all duration-300 rounded-3xl bg-white overflow-hidden flex flex-col">
              <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 to-amber-500" />
              <CardContent className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                        Risco Sanitário & Legal
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Custo da Não Conformidade
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {/* Item 1: Multa */}
                    <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100/90">
                      <div className="w-8 h-8 rounded-lg bg-amber-100/70 flex items-center justify-center shrink-0 text-amber-700 mt-0.5">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div className="text-sm sm:text-base text-slate-700 leading-snug">
                        <span className="font-bold text-slate-900">Multa:</span> milhares de reais,
                        aplicada na hora da fiscalização
                      </div>
                    </li>

                    {/* Item 2: Interdição */}
                    <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/60">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center shrink-0 text-rose-700 mt-0.5">
                        <Ban className="w-4 h-4" />
                      </div>
                      <div className="text-sm sm:text-base text-slate-800 leading-snug">
                        <span className="font-bold text-rose-700">Interdição:</span> consultório
                        fechado por dias ou semanas — perda de faturamento e de reputação
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Fechamento / Transição para o Preço */}
        <Reveal direction="up" delay={300}></Reveal>
      </div>
    </section>
  )
}
