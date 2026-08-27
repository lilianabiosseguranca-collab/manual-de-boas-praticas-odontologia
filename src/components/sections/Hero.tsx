import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import aulaEsterilizacao from '@/assets/captura-de-tela-2026-06-17-as-18.24.41-eeebe.png'
import piercingImg from '@/assets/piercing-a32aa.jpg'
import rdcSealImg from '@/assets/captura-de-tela-2026-06-18-as-11.27.11-ac738.png'

export const Hero = () => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const pdfs = [
    {
      title: 'Checklist de esterilização para estúdio de piercing',
      image: piercingImg,
      spine: 'border-l-[#0f172a]',
      rotate: -12,
      translateX: 0,
      translateY: 0,
    },
    {
      title: 'Checklist de esterilização para salão de beleza',
      image:
        'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&h=800&q=80',
      spine: 'border-l-[#831843]',
      rotate: -4,
      translateX: 25,
      translateY: -5,
    },
    {
      title: 'Checklist de esterilização para consultório odontológico',
      image:
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&h=800&q=80',
      spine: 'border-l-[#1e3a8a]',
      rotate: 4,
      translateX: 50,
      translateY: -10,
    },
  ]

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[100vh] flex items-center bg-slate-50 overflow-hidden">
      {/* Light Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50 z-0" />
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-blue-200/30 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-green-200/20 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="container relative z-20 px-4 md:px-6 mx-auto pt-24 pb-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-3xl space-y-6 md:space-y-10 order-1 lg:order-1 pt-4 md:pt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight drop-shadow-sm">
              A maneira mais eficiente de você ficar atualizado com os documentos exigidos pela nova
              legislação de odontologia
            </h1>

            <div className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-2xl space-y-4">
              <p>
                Guia completo com tudo o que você precisa ficar atualizado com +50 documentos
                pré-prontos
              </p>
            </div>

            <div className="pt-2 md:pt-6">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto text-[1.05rem] md:text-xl px-6 py-6 md:px-8 md:py-8 h-auto bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-xl transition-transform hover:-translate-y-1 whitespace-normal text-center leading-snug"
              >
                <a href="#pricing" onClick={handleCtaClick}>
                  Quero ter segurança na esterilização
                  <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 shrink-0" />
                </a>
              </Button>
            </div>
          </div>

          {/* Digital Asset Montage */}
          <div className="relative w-full h-full flex items-center justify-center min-h-[380px] sm:min-h-[500px] lg:min-h-[550px] order-2 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[550px] aspect-square mx-auto perspective-[1200px]">
              {/* MacBook Mockup */}
              <div className="absolute top-[5%] left-[10%] w-[80%] z-10 transform hover:scale-105 transition-transform duration-700">
                <div className="relative mx-[4%] rounded-t-xl md:rounded-t-2xl border-[4px] md:border-[6px] border-slate-800 bg-slate-900 shadow-2xl aspect-[16/10] z-10">
                  <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                  <div className="relative h-full w-full overflow-hidden bg-black rounded-sm">
                    <img
                      src={aulaEsterilizacao}
                      alt="Aula Método Foguete"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="relative h-2 md:h-4 w-full rounded-b-xl md:rounded-b-2xl rounded-t-sm bg-gradient-to-b from-slate-200 to-slate-400 shadow-2xl z-20 border border-slate-300/50">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/5 h-0.5 md:h-1.5 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-md"></div>
                </div>
              </div>

              {/* iPad Mockup */}
              <div className="absolute bottom-[2%] right-[2%] w-[48%] md:w-[52%] z-20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 rotate-3">
                <div className="relative rounded-[0.8rem] md:rounded-[1.2rem] bg-slate-900 p-1.5 md:p-2.5 shadow-2xl border border-slate-700/50">
                  <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-800/80"></div>
                  <div className="relative rounded-[0.5rem] md:rounded-[0.8rem] overflow-hidden aspect-[16/10] bg-white shadow-inner flex items-center justify-center p-2 md:p-4">
                    <img
                      src={rdcSealImg}
                      alt="Selo Atualizado RDC 1002-2005"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* PDF Checklists */}
              <div className="absolute bottom-[5%] left-[5%] w-[40%] h-[55%] z-30">
                {pdfs.map((pdf, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 w-full transition-all duration-500 hover:-translate-y-4 hover:scale-105"
                    style={{
                      transform: `rotate(${pdf.rotate}deg) translateX(${pdf.translateX}%) translateY(${pdf.translateY}%)`,
                      zIndex: 30 + i,
                      transformOrigin: 'bottom left',
                    }}
                  >
                    <div
                      className={`relative flex flex-col bg-white rounded-r-lg rounded-l-sm overflow-hidden border-y border-r border-slate-200 border-l-[4px] md:border-l-[8px] shadow-[4px_4px_15px_rgba(0,0,0,0.12)] ${pdf.spine}`}
                    >
                      {/* Spine shadow effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-gradient-to-r from-black/40 via-black/5 to-transparent z-30 mix-blend-overlay pointer-events-none"></div>
                      <div className="relative aspect-[3/4] w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent z-10 pointer-events-none"></div>
                        <img src={pdf.image} className="w-full h-full object-cover" alt="" />
                        <div className="absolute top-1 md:top-2 right-1 md:right-2 z-20 bg-white/95 text-slate-800 text-[0.35rem] md:text-[0.55rem] font-bold px-1.5 md:px-2 py-0.5 rounded-full shadow-sm">
                          PDF Premium
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-3 z-20">
                          <div className="w-2.5 md:w-4 h-0.5 md:h-1 bg-white/60 rounded-full mb-1 md:mb-1.5"></div>
                          <div className="text-[0.4rem] md:text-[0.65rem] font-bold text-white leading-tight drop-shadow-md">
                            {pdf.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
