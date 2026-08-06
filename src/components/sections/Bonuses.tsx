import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Gift, ShieldCheck } from 'lucide-react'
import lilianaAula from '@/assets/liliana-aula-extra-34cde.png'
import patriciaAula from '@/assets/captura-de-tela-2026-06-17-as-22.50.28-d6795.png'

export function Bonuses() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-[#2b6cb0]/10 text-[#2b6cb0] font-bold text-sm mb-4 uppercase tracking-wider">
            Presente Exclusivo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Bônus Especiais
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Além de todo o conteúdo do treinamento, você também recebe acesso imediato a esses
            materiais exclusivos para acelerar seus resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Bonus 1 */}
          <Card className="relative border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden group bg-white flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2b6cb0]" />
            <CardHeader className="pt-10 pb-6 px-8 md:px-10 flex-none">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-[#2b6cb0]/10 text-[#2b6cb0] group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-[#2b6cb0] font-bold text-sm tracking-wider uppercase mb-2">
                    Bônus 1
                  </h3>
                  <CardTitle className="text-2xl leading-tight text-slate-900 mb-3">
                    Saiba como economizar tempo e dinheiro ao se atualizar com a nova legislação de
                    odontologia
                  </CardTitle>
                  <p className="text-slate-600 text-lg leading-relaxed font-light">
                    Liliana Donatelli mostra como você ganha tempo e evita gastos desnecessários
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-8 md:px-10 pb-10 flex-1 flex flex-col justify-end">
              <div className="mt-6 relative mx-auto w-full max-w-[28rem] group-hover:-translate-y-1 transition-transform duration-500">
                {/* Realistic iPad Mockup */}
                <div className="relative rounded-[1.5rem] bg-slate-900 p-2.5 sm:p-3 shadow-2xl border border-slate-700/50">
                  {/* Camera dot */}
                  <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800/80"></div>
                  {/* Screen */}
                  <div className="relative rounded-[0.75rem] sm:rounded-[1rem] overflow-hidden aspect-[16/10] bg-black shadow-inner">
                    <img
                      src={lilianaAula}
                      alt="Aula Liliana"
                      className="w-full h-full object-cover scale-[1.01]"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bonus 2 */}
          <Card className="relative border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden group bg-white flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2b6cb0]" />
            <CardHeader className="pt-10 pb-6 px-8 md:px-10 flex-none">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-[#2b6cb0]/10 text-[#2b6cb0] group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-[#2b6cb0] font-bold text-sm tracking-wider uppercase mb-2">
                    Bônus 2
                  </h3>
                  <CardTitle className="text-2xl leading-tight text-slate-900 mb-3">
                    Tenha tranquilidade em uma vista da Vigilância Sanitária
                  </CardTitle>
                  <p className="text-slate-600 text-lg leading-relaxed font-light">
                    A assessora da Superintendência da Vigilância Sanitária de MG, Patrícia Silva,
                    mostra os erros mais frequentes&nbsp;
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-8 md:px-10 pb-10 flex-1 flex flex-col justify-end">
              <div className="mt-6 relative mx-auto w-full max-w-[28rem] group-hover:-translate-y-1 transition-transform duration-500">
                {/* Realistic iPad Mockup */}
                <div className="relative rounded-[1.5rem] bg-slate-900 p-2.5 sm:p-3 shadow-2xl border border-slate-700/50">
                  {/* Camera dot */}
                  <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800/80"></div>
                  {/* Screen */}
                  <div className="relative rounded-[0.75rem] sm:rounded-[1rem] overflow-hidden aspect-[16/10] bg-black shadow-inner">
                    <img
                      src={patriciaAula}
                      alt="Aula Patrícia Silva"
                      className="w-full h-full object-cover scale-[1.01]"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
