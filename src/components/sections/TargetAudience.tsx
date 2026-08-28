import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const ToothIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M15.5 3c-1.5 0-2.7 1-3.5 1.5-.8-.5-2-1.5-3.5-1.5-2.2 0-4 1.8-4 4 0 2.8 1.5 5.5 1.5 8 0 1.5 1 2.5 2.5 2.5 1.2 0 2-.8 2.5-2 .2-.5.5-1.5 1-1.5s.8 1 1 1.5c.5 1.2 1.3 2 2.5 2 1.5 0 2.5-1 2.5-2.5 0-2.5 1.5-5.2 1.5-8 0-2.2-1.8-4-4-4z" />
  </svg>
)

export const TargetAudience = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Para quem são estes documentos?
          </h2>
        </div>

        <Card className="w-full bg-white border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              {/* Header / Left Side (Desktop) */}
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-6 lg:w-80 shrink-0 pb-6 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-100 lg:pr-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <ToothIcon className="w-7 h-7 md:w-8 md:h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                    Profissionais da Odontologia
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 hidden lg:block">
                    Direcionado para quem atua no setor e busca conformidade total
                  </p>
                </div>
              </div>

              {/* Items List / Right Side (Empilhados verticalmente) */}
              <div className="flex-1 w-full">
                <ul className="flex flex-col gap-4 text-slate-700">
                  <li className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-0.5 shrink-0" />
                    <span className="text-base leading-relaxed">
                      Cirurgião-dentista que quer segurança na hora de apresentar os documentos para
                      a vigilância sanitária
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-0.5 shrink-0" />
                    <span className="text-base leading-relaxed">
                      ASB/TSB que quer ter todos os processos organizados
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-0.5 shrink-0" />
                    <span className="text-base leading-relaxed">
                      Gestor de clínicas odontológicas que precisa de tudo organizado e pronto o
                      mais rápido possível
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
