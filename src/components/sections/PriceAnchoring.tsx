import {
  Clock,
  Stethoscope,
  Briefcase,
  AlertTriangle,
  Ban,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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
          para visitar sua clínica, elaborar todo o manual e padronizar os 95 documentos.
        </>
      ),
      tag: 'A partir de R$ 15.000',
    },
    {
      icon: AlertTriangle,
      category: 'Risco Fiscal',
      title: 'Multa aplicada na hora da fiscalização',
      description:
        'que pode chegar a dezenas de milhares de reais pela ausência de conformidade sanitária imediata.',
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

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
              <span>Quanto custa produzir tudo isso sozinho?</span>
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

        {/* Card Escuro de Fechamento: Risco / Custo Alto Riscado → R$ 59,90 Hoje */}
        <Reveal direction="up" delay={250}>
          <div className="relative rounded-3xl bg-slate-950 text-white p-7 sm:p-9 md:p-10 border border-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.35)] overflow-hidden">
            {/* Ambient emerald glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-emerald-600/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>A alternativa inteligente para seu consultório</span>
                </div>

                {/* Âncora Riscada com Consultoria e Risco */}
                <div className="pt-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    Se você fosse resolver por conta própria ou terceirizar:
                  </span>
                  <p className="text-slate-400 line-through text-base sm:text-lg font-medium decoration-rose-500/80 decoration-2">
                    R$ 15.000 de consultoria + R$ 5.000 de consultas perdidas + risco de autuação
                  </p>
                </div>

                {/* Oferta com contraste de valor */}
                <div className="pt-2">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    <span>Hoje:</span>
                    <span className="text-emerald-400 underline decoration-emerald-500/50 underline-offset-4">
                      R$ 59,90
                    </span>
                    <span className="text-lg sm:text-xl font-normal text-slate-300">
                      — e você continua atendendo.
                    </span>
                  </p>
                  <p className="text-sm text-slate-400 mt-2 flex items-center justify-center lg:justify-start gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>95 documentos prontos em Word + atualizações conforme RDC 63.</span>
                  </p>
                </div>
              </div>

              {/* Botão de Ação direcionando para a seção de oferta */}
              <div className="shrink-0 w-full sm:w-auto">
                <Button
                  onClick={handleScrollToPricing}
                  size="lg"
                  className="w-full sm:w-auto h-auto py-4 px-8 text-base sm:text-lg font-bold rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_10px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5"
                >
                  <span>Ver Condições Especiais</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-xs text-slate-400 text-center mt-2.5">
                  Acesso imediato e vitalício aos arquivos
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
