import { Card, CardContent } from '@/components/ui/card'
import { Gift, Clock, Sparkles, CheckCircle2 } from 'lucide-react'
import lilianaAula from '@/assets/liliana-aula-extra-34cde.png'

export function Bonuses() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background soft decorative accents */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#2b6cb0]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-[500px] h-[300px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#2b6cb0]/10 text-[#2b6cb0] font-bold text-xs sm:text-sm mb-4 uppercase tracking-wider border border-[#2b6cb0]/15 shadow-sm">
            <Gift className="w-4 h-4 text-[#2b6cb0]" />
            <span>Presente Exclusivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Bônus Especial Incluso
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Além de todo o treinamento completo, você garante acesso imediato a uma aula prática
            exclusiva para acelerar ainda mais os seus resultados.
          </p>
        </div>

        {/* Horizontal Full-width Card */}
        <Card className="relative border border-slate-200/80 shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-300 overflow-hidden group bg-white rounded-3xl">
          {/* Top colored accent line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#2b6cb0] via-sky-500 to-[#2b6cb0]" />

          <CardContent className="p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Details & Value (7 cols on desktop) */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#2b6cb0] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    Bônus
                  </span>

                  <span className="inline-flex items-center gap-1 text-slate-500 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    Acesso Imediato
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
                    Aulão: Manual de Rotinas e Procedimentos x Série de Documentos de Boas Práticas
                    de Funcionamento
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    Nesta aula você vai entender a diferença entre os dois e terá clareza para
                    atualizar o que realmente precisa.
                  </p>
                </div>

                {/* Highlights pill list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-[#2b6cb0]/10 flex items-center justify-center shrink-0 text-[#2b6cb0]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      Clareza no que precisa ser atualizado
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-[#2b6cb0]/10 flex items-center justify-center shrink-0 text-[#2b6cb0]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      Evite multas e dor de cabeça com a vigilância sanitária
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: iPad Mockup Screen (5 cols on desktop) */}
              <div className="lg:col-span-5 flex justify-center items-center w-full">
                <div className="relative w-full max-w-[440px] group-hover:-translate-y-1.5 transition-transform duration-500">
                  {/* Soft subtle glow behind iPad */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#2b6cb0]/20 to-sky-400/10 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Realistic iPad Mockup */}
                  <div className="relative rounded-[1.75rem] bg-slate-900 p-3 sm:p-3.5 shadow-2xl border border-slate-700/60">
                    {/* Camera dot */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800/90" />
                    {/* Screen frame */}
                    <div className="relative rounded-[1rem] sm:rounded-[1.25rem] overflow-hidden aspect-[16/10] bg-black shadow-inner">
                      <img
                        src={lilianaAula}
                        alt="Aulão Bônus Liliana Donatelli - Manual de Rotinas e Boas Práticas"
                        className="w-full h-full object-cover scale-[1.02] transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
