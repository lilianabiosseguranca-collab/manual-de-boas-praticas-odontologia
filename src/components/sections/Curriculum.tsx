import { Check, FileText, FileSpreadsheet, Printer, Shield } from 'lucide-react'
import depoimento2 from '@/assets/12-2b647.png'
import depoimento3 from '@/assets/9-bfd98.png'
import depoimento4 from '@/assets/14-98a44.png'
import piercingImg from '@/assets/piercing-a32aa.jpg'
import depoimentoPosicionamento1 from '@/assets/captura-de-tela-2026-04-15-as-22.59.01-ff8b2.png'
import aulaEsterilizacao from '@/assets/captura-de-tela-2026-06-17-as-18.24.41-eeebe.png'
import depoimentoPosicionamento2 from '@/assets/aumento-salarial_skip-fefaa.png'
import depoimentoPosicionamento3 from '@/assets/captura-de-tela-2026-04-15-as-23.03.01-b12c5.png'

export function Curriculum() {
  const steps = [
    'Equipamento de Proteção Individual (EPI)',
    'Pré-limpeza e transporte',
    'Área da esterilização',
    'Limpeza',
    'Inspeção visual',
    'Embalagem',
    'Esterilização',
    'Monitoramento químico, físico e biológico',
    'Armazenamento',
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-5">
          <h2 className="font-extrabold tracking-tight text-slate-900 text-[2.29rem]">
            Por dentro do Manual de Boas Práticas Sanitárias
          </h2>

          {/* Badges de conformidade e contadores de arquivos */}
          <div className="flex flex-col items-center justify-center gap-3 pt-1">
            {/* Linha 1: Badges de conformidade RDC 1002 e Consultório Seguro */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/90 border border-emerald-200 text-emerald-900 text-sm font-bold shadow-xs">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Documentos formulados conforme os capítulos da RDC 1002/2025</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200 text-blue-950 text-sm font-bold shadow-xs">
                <Shield className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Consultório seguro contra multas</span>
              </div>
            </div>

            {/* Linha 2: Contadores de arquivos do manual */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/90 text-blue-900 text-sm font-bold shadow-xs">
                <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                <span>73 Documentos em Word (.docx)</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/90 border border-emerald-200/90 text-emerald-900 text-sm font-bold shadow-xs">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>14 Planilhas em Excel (.xlsx)</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-sm font-bold shadow-xs">
                <Printer className="w-4 h-4 text-slate-600 shrink-0" />
                <span>8 Cartazes / Guias para Impressão</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                1. Passo a passo completo da esterilização
              </h3>

              <p className="text-lg md:text-xl text-slate-600 mb-8 pb-4 border-b border-slate-100 font-medium leading-relaxed">
                Saiba exatamente o jeito certo de fazer e quais erros evitar
              </p>

              <ul className="space-y-5">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-0.5 mr-4 bg-green-100 text-green-600 p-1.5 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <span className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium transition-colors duration-300 group-hover:text-slate-900">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full flex justify-center mt-12 lg:mt-0 lg:ml-6 z-10">
            <div className="relative w-full max-w-[600px] lg:max-w-[650px] lg:scale-110 mx-auto perspective-[1000px] transition-transform duration-500 hover:scale-[1.12]">
              {/* MacBook Screen */}
              <div className="relative mx-[4%] rounded-t-2xl border-[8px] md:border-[10px] border-slate-800 bg-slate-900 shadow-2xl aspect-[16/10] z-10">
                {/* Webcam dot */}
                <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>

                {/* Screen content */}
                <div className="relative h-full w-full overflow-hidden bg-black rounded-sm">
                  <img
                    src={aulaEsterilizacao}
                    alt="Aula Método Foguete - Área da Esterilização"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* MacBook Base */}
              <div className="relative h-3 md:h-4 w-full rounded-b-2xl rounded-t-sm bg-gradient-to-b from-slate-200 to-slate-400 shadow-2xl z-20 border border-slate-300/50">
                {/* Thumb indent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/5 h-1 md:h-1.5 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-md"></div>
              </div>

              {/* Bottom shadow reflection */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/20 blur-xl rounded-full z-0"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center tracking-tight">
            Resultados reais de quem já aplicou:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-white group">
              <img
                src={depoimento2}
                alt="Depoimento de aluna sobre o Método Foguete"
                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-white group">
              <img
                src={depoimento3}
                alt="Depoimento de aluna sobre o Método Foguete"
                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-white group">
              <img
                src="/visual-edits/10-9e783a53.png"
                alt="Depoimento de aluna sobre o Método Foguete"
                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Checklists Visuals */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: 'Checklist de esterilização para consultório odontológico',
                image: 'https://img.usecurling.com/p/600/800?q=abstract',
                spine: 'border-l-[#1e3a8a]',
              },
              {
                title: 'Checklist de esterilização para salão de beleza',
                image: 'https://img.usecurling.com/p/600/800?q=abstract',
                spine: 'border-l-[#831843]',
              },
              {
                title: 'Checklist de esterilização para estúdio de piercing',
                image: piercingImg,
                spine: 'border-l-[#0f172a]',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group cursor-default"
                style={{ perspective: '1000px' }}
              >
                {/* Glow behind the item to make it pop on hover */}

                {/* Book/Guide body */}
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Posicionamento e valorização */}

        <div className="mt-12 max-w-5xl mx-auto"></div>
      </div>
    </section>
  )
}
