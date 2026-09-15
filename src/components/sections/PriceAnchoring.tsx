import { Clock, Stethoscope, Briefcase, AlertTriangle, Ban } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/Reveal'

export function PriceAnchoring() {
  const steps = [
    {
      icon: Clock,
      category: 'Tempo de Produção',
      title: '50 horas, no mínimo',
      description:
        'de dedicação exclusiva para você mesmo redigir e estruturar a base de toda a documentação.',
      tag: '50h dedicadas',
    },
    {
      icon: Stethoscope,
      category: 'Custo de Oportunidade',
      title: 'R$ 100 por consulta (ticket médio)',
      description: (
        <>
          resulta em{' '}
          <strong className="text-slate-900 font-semibold">
            R$ 5.000 que você deixa de faturar
          </strong>{' '}
          escrevendo POPs na cadeira do escritório em vez de atender pacientes.
        </>
      ),
      tag: 'Perda de faturamento',
    },
    {
      icon: Briefcase,
      category: 'Opção de Terceirização',
      title: 'Contratar um consultor especializado',
      description: (
        <>
          custaria <strong className="text-slate-900 font-semibold">a partir de R$ 15.000</strong>{' '}
          para visitar sua clínica, elaborar todo o manual e padronizar os 96 documentos.
        </>
      ),
      tag: 'A partir de R$ 15.000',
    },
    {
      icon: AlertTriangle,
      category: 'Risco Fiscal',
      title: 'Multa aplicada na hora da fiscalização',
      description:
        'que pode chegar a milhares de reais pela ausência de conformidade sanitária imediata.',
      tag: 'Penalidade legal',
    },
    {
      icon: Ban,
      category: 'Risco Operacional',
      title: 'Interdição cautelar do consultório',
      description:
        'portas fechadas por dias ou semanas — interrupção total da sua receita e abalo irreversível da reputação.',
      tag: 'Suspensão de alvará',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-slate-100/70 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        {/* Título Principal */}
        <Reveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm mb-4 border border-slate-200/80 shadow-xs">
              <Clock className="w-4 h-4 text-slate-600" />
              <span>Análise de Custo Real</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 text-slate-700 border border-slate-200/80 shrink-0 shadow-xs">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
              <span>Quanto custaria produzir tudo isso?</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              O custo real não é apenas o tempo gasto redigindo: é o faturamento que você perde na
              cadeira e os riscos jurídicos de um modelo incompleto.
            </p>
          </div>
        </Reveal>

        {/* Único Bloco Organizado com Argumentação Sequencial */}
        <Reveal direction="up" delay={150}>
          <Card className="border border-slate-200/90 shadow-[0_10px_40px_rgb(0,0,0,0.04)] rounded-3xl bg-white overflow-hidden mb-10">
            {/* Top subtle border bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-slate-400 via-slate-600 to-emerald-600" />

            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={index}
                      className="p-5 sm:p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 hover:bg-slate-50/60 transition-colors duration-200"
                    >
                      <div className="flex items-start gap-4 sm:gap-5 flex-1">
                        {/* Ícone Padronizado e Harmonioso em Slate */}
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 text-slate-700 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                          <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                        </div>

                        {/* Conteúdo textual */}
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                              {step.category}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Tag Lateral Informativa */}
                      <div className="pl-15 sm:pl-0 shrink-0 self-start sm:self-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          {step.tag}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
