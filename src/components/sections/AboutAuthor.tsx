import { Award, Landmark, Medal } from 'lucide-react'
import imgAward from '@/assets/captura-de-tela-2026-04-15-as-23.03.01-b12c5.png'
import imgCertificate from '@/assets/captura-de-tela-2026-04-15-as-22.59.01-ff8b2.png'
import imgAnvisa from '@/assets/captura-de-tela-2026-04-15-as-22.59.07-2cf39.png'
import mainImg from '@/assets/e-isso-que-acontece-quando-voce-estuda-e-aplica-o-que-aprendeu-comigo...5-15647.png'

export function AboutAuthor() {
  return (
    <section id="sobre-autora" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Quem é Liliana Donatelli
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-12" />
        </div>

        {/* Top Section: Main Image + Bio */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform -translate-x-4 translate-y-4 transition-transform group-hover:-translate-x-6 group-hover:translate-y-6 duration-500" />
            <img
              src={mainImg}
              alt="Liliana Donatelli Palestrando"
              className="relative rounded-3xl shadow-[0_20px_50px_rgba(59,130,246,0.15)] border-4 border-white w-full object-cover aspect-[4/3] lg:aspect-auto lg:h-[450px]"
            />
          </div>
          <div className="bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-blue-50 shadow-[0_10px_40px_rgba(59,130,246,0.1)] space-y-6 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -z-10" />
            <p className="text-lg text-slate-700 leading-relaxed">
              Em seus{' '}
              <strong className="text-blue-700 font-bold">mais de 25 anos de carreira</strong>, ela
              já ministrou centenas de treinamentos, palestras e aulas on-line e presenciais para
              milhares de profissionais da saúde, compartilhando seu conhecimento e experiência.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Agora, ela reuniu toda a sua expertise e criou o{' '}
              <strong className="text-blue-700 font-bold">Método Foguete</strong> para ajudar
              profissionais a terem segurança e estarem atualizados tanto com as melhores práticas
              de esterilização e serem profissionais valorizados.
            </p>
          </div>
        </div>

        {/* Authority Proofs Section */}
        <div className="space-y-24">
          {/* Block 1: Certification */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-50 shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#000000] text-[2rem]">Certificação internacional</h3>
              </div>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                Liliana Donatelli é a{' '}
                <strong className="text-blue-700 font-normal">única no Brasil</strong> com a{' '}
                <strong className="font-bold text-blue-700">certificação internacional</strong> em
                Controle de Infecção em Odontologia pela ADS (previamente OSAP) e Dale Foundation.
              </p>
            </div>
            <div className="relative group p-2 bg-white rounded-3xl shadow-[0_20px_50px_rgba(59,130,246,0.15)] border border-blue-50">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5 duration-500 -z-10" />
              <img
                src={imgCertificate}
                alt="Certificação Internacional"
                className="relative rounded-2xl w-full object-cover"
              />
            </div>
          </div>

          {/* Block 2: Awards */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative group p-2 bg-white rounded-3xl shadow-[0_20px_50px_rgba(59,130,246,0.15)] border border-blue-50">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform -translate-x-3 translate-y-3 transition-transform group-hover:-translate-x-5 group-hover:translate-y-5 duration-500 -z-10" />
              <img
                src={imgAward}
                alt="Prêmio Internacional"
                className="relative rounded-2xl w-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-50 shrink-0">
                  <Medal className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#000000] text-[2rem]">Prêmios Internacionais</h3>
              </div>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                Já ganhou <strong className="text-blue-700 font-bold">três prêmios</strong> por
                serviços prestados para a ADS e, este ano, tornou-se a{' '}
                <strong className="text-blue-700 font-bold">primeira brasileira</strong> a fazer
                parte dos membros <strong className="text-blue-700 font-bold">diretores</strong> da
                instituição.
              </p>
            </div>
          </div>

          {/* Block 3: Anvisa */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-50 shrink-0">
                  <Landmark className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#000000] text-[2rem]">Autoridade nacional</h3>
              </div>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                Foi{' '}
                <strong className="text-blue-700 font-bold">
                  convidada para a câmara técnica da Anvisa
                </strong>{' '}
                para apoio na implementação da nova legislação de odontologia.
              </p>
            </div>
            <div className="relative group p-2 bg-white rounded-3xl shadow-[0_20px_50px_rgba(59,130,246,0.15)] border border-blue-50">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5 duration-500 -z-10" />
              <img
                src={imgAnvisa}
                alt="Câmara Técnica Anvisa"
                className="relative rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
