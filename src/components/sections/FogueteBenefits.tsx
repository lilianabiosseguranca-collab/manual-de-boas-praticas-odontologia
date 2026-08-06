import { cn } from '@/lib/utils'
import img1 from '@/assets/3-61350.png'
import img2 from '@/assets/2-cfb88.png'
import img3 from '@/assets/3-a00ce.png'
import img4 from '@/assets/4-ed7cb.png'

const rows = [
  {
    text: (
      <>
        recebe <strong className="text-blue-600 font-bold">elogios da vigilância sanitária</strong>
      </>
    ),
    image: img1,
    imageAlt: 'Elogios da vigilância sanitária',
    textLeft: true,
  },
  {
    text: (
      <>
        recebe um <strong className="text-blue-600 font-bold">aumento salarial</strong>
      </>
    ),
    image: img2,
    imageAlt: 'Aumento salarial',
    textLeft: false,
  },
  {
    text: (
      <>
        é <strong className="text-blue-600 font-bold">aprovado de primeira</strong> na visita da
        vigilância sanitária
      </>
    ),
    image: img3,
    imageAlt: 'Aprovado de primeira na visita da vigilância',
    textLeft: true,
  },
  {
    text: (
      <>
        tem <strong className="text-blue-600 font-bold">segurança</strong> no seu próprio trabalho
      </>
    ),
    image: img4,
    imageAlt: 'Segurança no trabalho',
    textLeft: false,
  },
]

export function FogueteBenefits() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
          Com o Método Foguete você:
        </h2>
        <div className="flex flex-col gap-16 md:gap-24">
          {rows.map((row, index) => (
            <div key={index} className="flex flex-col items-center gap-8 md:gap-12 md:flex-row">
              <div
                className={cn(
                  'w-full md:w-1/2 flex justify-center text-center md:text-left order-1',
                  !row.textLeft && 'md:order-2',
                )}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl text-slate-800 leading-tight">
                  {row.text}
                </p>
              </div>
              <div className={cn('w-full md:w-1/2 order-2', !row.textLeft && 'md:order-1')}>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 bg-white transform transition-transform hover:-translate-y-1 duration-300">
                  <img src={row.image} alt={row.imageAlt} className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
