import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const highlights = [
  {
    icon: '⏰',
    title: 'Economia de tempo + alívio mental',
    points: ['Você para de procurar informação solta e tentar entender tudo sozinha'],
  },
  {
    icon: '🔋',
    title: 'Menos esforço',
    points: ['Você segue um processo claro, sem sobrecarga mental'],
  },
  {
    icon: '💰',
    title: 'Economia de dinheiro',
    points: ['Evita erros que geram retrabalho'],
  },
  {
    icon: '🔒',
    title: 'Clareza e segurança real',
    points: ['Tem um caminho guiado com começo, meio e fim'],
  },
]

export const OfferHighlights = () => {
  return (
    <section className="pt-20 pb-10 bg-slate-50 border-t border-slate-200">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          O que você ganha com o Método Foguete:
        </h2>
        <div className="flex flex-col gap-4 md:gap-6 max-w-3xl mx-auto">
          {highlights.map((item, i) => (
            <Card
              key={i}
              className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col sm:flex-row sm:items-stretch w-full"
            >
              <CardHeader className="sm:w-5/12 border-b sm:border-b-0 sm:border-r border-slate-100 bg-slate-50/50 flex flex-col justify-center pb-6 sm:pb-6">
                <CardTitle className="flex items-center gap-3 text-xl md:text-xl text-slate-900">
                  <span className="text-3xl shrink-0" role="img" aria-label="icon">
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 sm:pt-6 sm:w-7/12 flex flex-col justify-center">
                <ul className="space-y-4">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-[17px] leading-relaxed font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
