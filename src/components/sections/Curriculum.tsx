import { Check } from 'lucide-react'
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            No Método Foguete você aprende:
          </h2>
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

        <div className="mt-20 max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              2. Checklist de esterilização
            </h3>

            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              Enxergue os gargalos no seu ambiente de trabalho e tenha facilidade na aplicação
            </p>
          </div>
        </div>

        {/* Checklists Visuals */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: 'Checklist de esterilização para consultório odontológico',
                image:
                  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&h=800&q=80',
                spine: 'border-l-[#1e3a8a]',
              },
              {
                title: 'Checklist de esterilização para salão de beleza',
                image:
                  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&h=800&q=80',
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
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-300/30 to-slate-200/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Book/Guide body */}
                <div
                  className={`relative flex flex-col bg-white rounded-r-2xl rounded-l-sm overflow-hidden border-y border-r border-slate-200 border-l-[14px] transition-all duration-700 shadow-[10px_10px_20px_rgba(0,0,0,0.12),-5px_5px_15px_rgba(0,0,0,0.04)] [transform:rotateY(-8deg)_rotateX(2deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)_translateY(-12px)] group-hover:shadow-[15px_25px_40px_rgba(0,0,0,0.2),-5px_10px_20px_rgba(0,0,0,0.08)] ${item.spine}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Spine effect for a "tangible" physical feel */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 via-black/5 to-transparent z-30 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute left-1 top-0 bottom-0 w-px bg-white/30 z-40 pointer-events-none"></div>
                  <div className="absolute inset-0 shadow-[inset_4px_0_12px_rgba(0,0,0,0.1)] z-30 pointer-events-none"></div>

                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    {/* Shadow overlay to integrate title properly */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent z-10 pointer-events-none"></div>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    />

                    <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      PDF Premium
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                      <div className="w-8 h-1.5 bg-white/60 rounded-full mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-white"></div>
                      <h4 className="text-lg md:text-xl font-bold text-white leading-tight drop-shadow-md">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Posicionamento e valorização */}
        <div className="mt-20 max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              3. Posicionamento e valorização
            </h3>

            <div className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              Saiba usar a segurança da esterilização bem feita a seu favor.
              <div>
                <br />
              </div>
              <div>
                Aprenda a comunicar isso de forma clara para seu chefe e/ou seu cliente para que
                eles se sintam mais seguros e percebam o valor do seu trabalho.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#f2f2f2] group flex flex-col justify-center">
              <img
                src="/visual-edits/17-defcab6d.png"
                alt="Confiança para dialogar com gestores"
                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#f2f2f2] group flex flex-col justify-center">
              <img
                src="/visual-edits/16-9b8939c2.png"
                alt="Recebe um aumento salarial"
                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#f2f2f2] group flex flex-col justify-center">
              <img
                src="/visual-edits/e-isso-que-acontece-quando-voce-estuda-e-aplica-o-que-aprendeu-comigo-8-ae2f941d.png"
                alt="Tem base e argumentos para realizar mudanças reais no trabalho"
                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
