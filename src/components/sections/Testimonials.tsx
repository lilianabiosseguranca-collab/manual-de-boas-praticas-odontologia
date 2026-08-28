import img1 from '@/assets/e-isso-que-acontece-quando-voce-estuda-e-aplica-o-que-aprendeu-comigo...9-cdee9.png'
import img2 from '@/assets/2-7cbe0.png'
import img3 from '@/assets/3-fe487.png'
import img4 from '@/assets/e-isso-que-acontece-quando-voce-estuda-e-aplica-o-que-aprendeu-comigo...7-7b3e1.png'

const items = [
  {
    image: img1,
    alt: 'Depoimento de aluna que recebeu elogios da vigilância sanitária',
    text: (
      <>
        recebe{' '}
        <strong className="text-blue-600 font-extrabold">elogios da vigilância sanitária</strong>
      </>
    ),
    imageRight: true,
  },
  {
    image: img2,
    alt: 'Depoimento de aluna que recebeu aumento salarial',
    text: (
      <>
        recebe um <strong className="text-blue-600 font-extrabold">aumento salarial</strong>
      </>
    ),
    imageRight: false,
  },
  {
    image: img3,
    alt: 'Depoimento de aprovação de primeira na vigilância sanitária',
    text: (
      <>
        <strong className="text-blue-600 font-extrabold">é aprovado de primeira</strong> na visita
        da vigilância sanitária
      </>
    ),
    imageRight: true,
  },
  {
    image: img4,
    alt: 'Depoimento sobre ter segurança no próprio trabalho',
    text: (
      <>
        tem <strong className="text-blue-600 font-extrabold">segurança</strong> e{' '}
        <strong className="text-blue-600 font-extrabold">autonomia</strong> no seu próprio trabalho
      </>
    ),
    imageRight: false,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-16 tracking-tight">
          Por dentro do Manual de Boas Práticas Sanitárias
        </h2>

        <div className="flex flex-col gap-16 md:gap-20">
          {items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-4xl mx-auto w-full"
            >
              <div
                className={`relative group max-w-sm mx-auto w-full order-2 ${
                  item.imageRight ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="relative w-full rounded-2xl shadow-lg border border-slate-200 object-contain bg-white"
                />
              </div>
              <div
                className={`flex flex-col justify-center order-1 ${
                  item.imageRight ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight text-center md:text-left">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
