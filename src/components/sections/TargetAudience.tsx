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

const SurgicalMaskIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={className}
    {...props}
  >
    <rect x="4" y="6" width="16" height="12" rx="2" />
    <path d="M4 9a3 3 0 0 0 0 6" />
    <path d="M20 9a3 3 0 0 1 0 6" />
    <path d="M4 10h16" />
    <path d="M4 14h16" />
  </svg>
)

const NailPolishIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M7 10h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10z" />
    <path d="M9 2h6v8H9z" />
    <path d="M12 2v8" />
  </svg>
)

const PiercingIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 11v-2a6 6 0 0 0-12 0v2" />
    <circle cx="6" cy="14" r="3" />
    <circle cx="18" cy="14" r="3" />
  </svg>
)

export const TargetAudience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Para quem é este curso?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white border-slate-200 shadow-md">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <ToothIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Cirurgião-Dentista</h3>
              <ul className="space-y-5 text-slate-700 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 mt-0.5 shrink-0" />
                  <span>
                    Quer ter a segurança de que a esterilização está sendo feita corretamente.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 mt-0.5 shrink-0" />
                  <span>
                    Quer ter a paz de espírito quando for passar por uma fiscalização ou auditoria.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 mt-0.5 shrink-0" />
                  <span>Quer ter certeza de que está oferecendo o melhor para o seu paciente.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-md">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#0097b2]/10 rounded-2xl flex items-center justify-center mb-6">
                <SurgicalMaskIcon className="w-8 h-8 text-[#0097b2]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">ASB e TSB</h3>
              <ul className="space-y-5 text-slate-700 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0097b2] mt-0.5 shrink-0" />
                  <span>
                    Quer segurança para entender exatamente o que fazer e o porquê fazer em cada
                    etapa do processo.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0097b2] mt-0.5 shrink-0" />
                  <span>Quer ser um profissional valorizado e reconhecido.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0097b2] mt-0.5 shrink-0" />
                  <span>Quer se posicionar com mais confiança dentro do consultório.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-md">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <NailPolishIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Podóloga e Nail Designer</h3>
              <ul className="space-y-5 text-slate-700 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 mt-0.5 shrink-0" />
                  <span>Quer ter a segurança de dominar o processo de esterilização</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 mt-0.5 shrink-0" />
                  <span>Quer atrair mais clientes pela segurança que você oferece</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 mt-0.5 shrink-0" />
                  <span>Quer a certeza de estar oferecendo o melhor pro cliente</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-md">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
                <PiercingIcon className="w-8 h-8 text-zinc-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Piercer</h3>
              <ul className="space-y-5 text-slate-700 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-zinc-500 mt-0.5 shrink-0" />
                  <span>
                    Quer ter a certeza de que os processos de esterilização estão sendo feitos
                    corretamente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-zinc-500 mt-0.5 shrink-0" />
                  <span>Quer ter tranquilidade em uma visita da vigilância sanitária</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-zinc-500 mt-0.5 shrink-0" />
                  <span>
                    Quer oferecer o melhor pro cliente e atrair mais pessoas pela segurança que você
                    oferece
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
