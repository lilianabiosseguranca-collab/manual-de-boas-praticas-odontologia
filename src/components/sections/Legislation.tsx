import {
  AlertCircle,
  XCircle,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  Unlock,
  ArrowDown,
} from 'lucide-react'
import legislacaoImg from '@/assets/como-se-adaptar-a-nova-legislacao-federal-3-aff2e.png'
import depoimento1 from '@/assets/1-3fa7e.png'
import depoimento2 from '@/assets/2-ce44d.png'
import depoimento3 from '@/assets/3-9c6c7.png'

export const Legislation = () => {
  return (
    <section className="overflow-hidden py-24 md:py-32 border-y border-slate-100 bg-[#ffffff]">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-24">
        {/* Visual Opening */}
        <div className="text-center animate-fade-in-up">
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#000000] bg-[#ffffff]">
              A&nbsp; nova legislação da Anvisa mudou o jogo
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              O Manual de Rotinas e Procedimentos agora é só uma parte dos documentos que você
              precisa ter para mostrar em uma inspeção sanitária
            </p>
          </div>
          <img
            src={legislacaoImg}
            alt="Nova Legislação Federal"
            className="w-full max-w-4xl mx-auto rounded-[2.5rem] shadow-2xl object-cover border border-slate-200"
          />
        </div>

        {/* Disclaimer & Comparison Section */}
        <div className="space-y-10">
          {/* Repositioned Disclaimer BEFORE Columns */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-xl shadow-sm max-w-4xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <AlertCircle className="w-10 h-10 text-blue-600 shrink-0 mt-1" />
              <p className="text-xl md:text-2xl font-semibold text-blue-900 m-0 leading-snug">
                <span>
                  O Manual de Rotinas e Procedimentos agora é só uma parte dos documentos que você
                  precisa ter para mostrar em uma inspeção sanitária
                </span>
              </p>
            </div>
          </div>

          {/* Comparison Boxes */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
            {/* Column 1: The Problem */}
            <div className="space-y-6 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-rose-100 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-800 leading-snug">
                Sem contexto, tudo vira:
              </h3>
              <ul className="space-y-4 mt-4 flex-1">
                {['confuso', 'difícil de executar', 'e muitas vezes ignorado no dia a dia'].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-slate-700 bg-rose-50/50 p-4 rounded-2xl border border-rose-100"
                    >
                      <div className="bg-white shadow-sm p-2 rounded-full shrink-0">
                        <XCircle className="w-6 h-6 text-rose-500" />
                      </div>
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Column 2: The Solution */}
            <div className="space-y-6 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-emerald-100 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-800 leading-snug">
                Você só consegue aplicar na prática quando você entende:
              </h3>
              <ul className="space-y-4 mt-4 flex-1">
                {['o que fazer', 'como fazer', 'por que fazer'].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-slate-700 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100"
                  >
                    <div className="bg-white shadow-sm p-2 rounded-full shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Flow Section: Pitch -> Testimonials -> Benefits */}
        <div className="space-y-12 md:space-y-16">
          {/* Treinamento Foguete Pitch */}
          <div className="relative isolate max-w-4xl mx-auto">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-indigo-600 to-[#0097b2] rounded-[2.5rem] blur-xl opacity-20 animate-pulse" />
            <div className="bg-indigo-600 rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/800/400?q=stars&color=blue')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl text-indigo-50 leading-relaxed font-light">
                  <strong className="text-white font-extrabold block mb-6 text-3xl md:text-4xl drop-shadow-sm">
                    É por isso que o Método Foguete é um guia prático de esterilização - com
                    contexto, aplicação real e clareza em cada etapa.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* Visual Connector 1 */}
          <div className="flex justify-center">
            <div className="bg-indigo-50 p-4 rounded-full border border-indigo-100 shadow-sm animate-bounce">
              <ArrowDown className="w-8 h-8 text-indigo-600" />
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <img
                src="/visual-edits/6-9cc2cc72.png"
                alt="Depoimento 1"
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              />
              <img
                src="/visual-edits/7-7677a5dc.png"
                alt="Depoimento 2"
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              />
              <img
                src="/visual-edits/e-isso-que-acontece-quando-voce-estuda-e-aplica-o-que-aprendeu-comigo-6-f74068ef.png"
                alt="Depoimento 3"
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              />
            </div>
          </div>

          {/* Visual Connector 2 */}
          <div className="flex justify-center">
            <div className="bg-[#0097b2]/10 p-4 rounded-full border border-[#0097b2]/20 shadow-sm animate-bounce">
              <ArrowDown className="w-8 h-8 text-[#0097b2]" />
            </div>
          </div>

          {/* Final Transformation Block */}
          <div className="text-center">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {/* Benefit 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8" />
                </div>
                <p className="text-xl text-slate-800 font-semibold leading-snug">
                  Você trabalha com mais tranquilidade
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#0097b2]/10 rounded-2xl flex items-center justify-center mb-6 text-[#0097b2] group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <p className="text-xl text-slate-800 font-semibold leading-snug">
                  Se sente segura diante de uma fiscalização
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <Unlock className="w-8 h-8" />
                </div>
                <p className="text-xl text-slate-800 font-semibold leading-snug">
                  E para de depender de validação dos outros o tempo todo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
