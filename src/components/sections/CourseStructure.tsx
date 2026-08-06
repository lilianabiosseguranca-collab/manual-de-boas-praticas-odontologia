import { MonitorPlay, Calendar, Award, Video } from 'lucide-react'
import certificadoImg from '@/assets/exemplo-de-certificado-baeeb.png'

export function CourseStructure() {
  const features = [
    {
      icon: MonitorPlay,
      text: 'Aulas on-line e gravadas (plataforma da Hotmart)',
    },
    {
      icon: Calendar,
      text: 'Acesso por 1 ano',
    },
    {
      icon: Award,
      text: 'Certificado de 8 horas',
    },
    {
      icon: Video,
      text: 'Sessão de tira-dúvidas mensal via Zoom (ao vivo e on-online)',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Como funciona na prática:
            </h2>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#2b6cb0]/10 flex items-center justify-center text-[#2b6cb0] transition-colors duration-300 group-hover:bg-[#2b6cb0] group-hover:text-white shadow-sm">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-lg text-slate-800 font-medium leading-snug">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-tr from-[#2b6cb0]/5 to-[#2b6cb0]/20 rounded-[2.5rem] transform rotate-3 scale-105 opacity-70 transition-transform duration-700 hover:rotate-6"></div>
            <div className="relative rounded-2xl shadow-2xl shadow-[#2b6cb0]/30 overflow-hidden border border-[#2b6cb0]/40 bg-white group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={certificadoImg}
                alt="Exemplo de Certificado Treinamento Foguete"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
