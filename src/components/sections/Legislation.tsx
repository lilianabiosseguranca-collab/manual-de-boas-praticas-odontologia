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
              <h3 className="text-2xl font-bold text-slate-800 leading-snug">Sem o Manual&nbsp;</h3>
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
              <h3 className="text-2xl font-bold text-slate-800 leading-snug">Com o Manual</h3>
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
      </div>
    </section>
  )
}
