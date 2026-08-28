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
  return
  null
}
