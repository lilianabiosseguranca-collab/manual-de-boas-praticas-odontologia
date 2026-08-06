import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Stethoscope, Scissors, Sparkles } from 'lucide-react'

export function Modules() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="modules">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-[#2b6cb0]/10 text-[#2b6cb0] font-bold text-sm mb-4 uppercase tracking-wider">
            O que você vai aprender
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Conteúdo do Treinamento
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <CardHeader className="bg-slate-100/50 border-b border-slate-100 pb-6">
              <CardTitle className="text-2xl text-slate-900">1. O que é Risco Sanitário?</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-600 leading-relaxed">
                Entenda a fundo os conceitos de risco sanitário e como identificá-los em seu
                ambiente de trabalho.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <CardHeader className="bg-slate-100/50 border-b border-slate-100 pb-6">
              <CardTitle className="text-2xl text-slate-900">
                2. Checklist de esterilização
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-600 leading-relaxed">
                Guias práticos e visuais para garantir que nenhum passo seja esquecido durante o
                processo de esterilização.
              </p>
            </CardContent>
          </Card>

          {/* 3 Physical Books directly below the "2. Checklist" card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto pt-8 pb-8">
            {/* Book 1: Odontológico (Unchanged) */}
            <div className="flex flex-col items-center group pt-6 pl-6">
              <div className="relative w-40 md:w-48">
                <div className="absolute inset-y-0 left-0 w-[24px] bg-[#1a4b7c] transform -skew-y-[45deg] origin-left border-l border-black/20 z-0 shadow-inner rounded-l-sm"></div>
                <div className="relative z-10 transform translate-x-[24px] -translate-y-[24px] shadow-[10px_10px_20px_rgba(0,0,0,0.3)] rounded-r-md overflow-hidden bg-[#2b6cb0] border-l border-white/20 transition-transform duration-500 group-hover:-translate-y-[32px] group-hover:shadow-[15px_15px_25px_rgba(0,0,0,0.4)]">
                  <div className="aspect-[2/3] w-full flex flex-col relative">
                    <img
                      src="https://img.usecurling.com/p/400/600?q=dentist%20chair&color=blue&dpr=2&v=2"
                      alt="Consultório odontológico"
                      className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c4a]/90 via-[#0f2c4a]/40 to-transparent"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-4 px-4 h-full text-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                        <Stethoscope className="w-5 h-5 text-blue-100" />
                      </div>
                      <div className="mt-auto w-full border-t border-blue-400/30 pt-4 backdrop-blur-sm">
                        <span className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-1 block">
                          Checklist
                        </span>
                        <h3 className="text-white font-bold text-sm leading-tight">
                          Consultório
                          <br />
                          Odontológico
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[-16px] right-[-16px] w-full h-8 bg-black/20 blur-xl rounded-[100%] z-[-1] group-hover:bg-black/30 transition-all duration-500"></div>
              </div>
            </div>

            {/* Book 2: Piercing Studio (Updated) */}
            <div className="flex flex-col items-center group pt-6 pl-6">
              <div className="relative w-40 md:w-48">
                <div className="absolute inset-y-0 left-0 w-[24px] bg-zinc-900 transform -skew-y-[45deg] origin-left border-l border-black/30 z-0 shadow-inner rounded-l-sm"></div>
                <div className="relative z-10 transform translate-x-[24px] -translate-y-[24px] shadow-[10px_10px_20px_rgba(0,0,0,0.3)] rounded-r-md overflow-hidden bg-zinc-800 border-l border-white/10 transition-transform duration-500 group-hover:-translate-y-[32px] group-hover:shadow-[15px_15px_25px_rgba(0,0,0,0.4)]">
                  <div className="aspect-[2/3] w-full flex flex-col relative">
                    {/* New image: woman with artistic piercings matching professional niche */}
                    <img
                      src="https://img.usecurling.com/p/400/600?q=professional%20woman%20piercings&dpr=2"
                      alt="Estúdio de Piercing"
                      className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-900/40 to-transparent"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-4 px-4 h-full text-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20 shadow-lg">
                        <Sparkles className="w-5 h-5 text-zinc-200" />
                      </div>
                      <div className="mt-auto w-full border-t border-zinc-600/50 pt-4 backdrop-blur-sm">
                        <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-widest mb-1 block drop-shadow-md">
                          Checklist
                        </span>
                        <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md">
                          Estúdio de
                          <br />
                          Piercing
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[-16px] right-[-16px] w-full h-8 bg-black/20 blur-xl rounded-[100%] z-[-1] group-hover:bg-black/30 transition-all duration-500"></div>
              </div>
            </div>

            {/* Book 3: Salão de Beleza (Pink Theme Preserved) */}
            <div className="flex flex-col items-center group pt-6 pl-6">
              <div className="relative w-40 md:w-48">
                <div className="absolute inset-y-0 left-0 w-[24px] bg-[#9d174d] transform -skew-y-[45deg] origin-left border-l border-black/20 z-0 shadow-inner rounded-l-sm"></div>
                <div className="relative z-10 transform translate-x-[24px] -translate-y-[24px] shadow-[10px_10px_20px_rgba(0,0,0,0.3)] rounded-r-md overflow-hidden bg-[#db2777] border-l border-white/20 transition-transform duration-500 group-hover:-translate-y-[32px] group-hover:shadow-[15px_15px_25px_rgba(0,0,0,0.4)]">
                  <div className="aspect-[2/3] w-full flex flex-col relative">
                    <img
                      src="https://img.usecurling.com/p/400/600?q=woman%20beauty%20salon&color=pink&dpr=2&v=2"
                      alt="Salão de Beleza"
                      className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4a0f2c]/90 via-[#4a0f2c]/40 to-transparent"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-4 px-4 h-full text-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                        <Scissors className="w-5 h-5 text-pink-100" />
                      </div>
                      <div className="mt-auto w-full border-t border-pink-400/30 pt-4 backdrop-blur-sm">
                        <span className="text-pink-200 text-[10px] font-bold uppercase tracking-widest mb-1 block">
                          Checklist
                        </span>
                        <h3 className="text-white font-bold text-sm leading-tight">
                          Salão de
                          <br />
                          Beleza
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[-16px] right-[-16px] w-full h-8 bg-black/20 blur-xl rounded-[100%] z-[-1] group-hover:bg-black/30 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <CardHeader className="bg-slate-100/50 border-b border-slate-100 pb-6">
              <CardTitle className="text-2xl text-slate-900">3. Classificação de Artigos</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-600 leading-relaxed">
                Aprenda como classificar corretamente os artigos e definir o método de processamento
                adequado.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
