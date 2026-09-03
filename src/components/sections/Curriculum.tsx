import {
  FileText,
  FileSpreadsheet,
  Printer,
  Shield,
  Sparkles,
  Layers,
  FileCheck2,
  CheckCircle2,
} from 'lucide-react'
import cartazConsultorioImg from '@/assets/editedimage1788353047992-4f028.png'
import depoimento2 from '@/assets/12-2b647.png'
import depoimento3 from '@/assets/9-bfd98.png'
import { DocumentShowcase } from '@/components/sections/DocumentShowcase'

export function Curriculum() {
  const chaptersSummary = [
    { num: '0', title: 'Estrutura, capa, índice e orientações gerais' },
    { num: '1', title: 'Projeto arquitetônico e fluxos sanitários' },
    { num: '2', title: 'Gestão de RH e fichas funcionais de toda a equipe' },
    { num: '3', title: 'Plano anual de educação permanente e capacitações' },
    { num: '4', title: 'Contratos, licenças e serviços terceirizados' },
    { num: '5', title: 'Plano de monitoramento e controle da água' },
    { num: '6', title: 'Controle de pragas e vetores' },
    { num: '7', title: 'Manutenção preventiva e corretiva predial (PMOC)' },
    { num: '8', title: 'Gerenciamento de tecnologias em saúde (PGTS)' },
    { num: '9', title: 'Gerenciamento de resíduos (PGRSS)' },
    { num: '10', title: 'Protocolo de processamento e esterilização (CME)' },
    { num: '11', title: 'Limpeza de ambientes, superfícies e mobiliário' },
    { num: '12', title: 'Plano de Segurança do Paciente (PSP)' },
    { num: '13', title: 'Higiene das mãos, precauções de contato e isolamento' },
    { num: '14', title: 'Encaminhamento em caso de acidentes biológicos' },
    { num: '15', title: 'Urgências, emergências e suporte de vida' },
    { num: '16', title: 'Prevenção e controle de infecções (PP-IRAS)' },
    { num: '17', title: 'Normativas, formulários e anexos complementares' },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="manual-conteudo">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        {/* Header da Seção */}
        <div className="text-center mb-12 space-y-5">
          <h2 className="font-extrabold tracking-tight text-slate-900 text-3xl sm:text-4xl md:text-[2.5rem] leading-tight">
            Por dentro do Manual de Boas Práticas Sanitárias
          </h2>

          {/* Badges de conformidade e contadores de arquivos */}
          <div className="flex flex-col items-center justify-center gap-3 pt-1">
            {/* Linha 1: Badges de conformidade RDC 1002 e Consultório Seguro */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/90 border border-emerald-200 text-emerald-900 text-sm font-bold shadow-xs">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Documentos formulados conforme os capítulos da RDC 1002/2025</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200 text-blue-950 text-sm font-bold shadow-xs">
                <Shield className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Consultório seguro contra multas</span>
              </div>
            </div>

            {/* Linha 2: Contadores de arquivos do manual */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/90 text-blue-900 text-sm font-bold shadow-xs">
                <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                <span>73 Documentos em Word (.docx)</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/90 border border-emerald-200/90 text-emerald-900 text-sm font-bold shadow-xs">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>14 Planilhas em Excel (.xlsx)</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-sm font-bold shadow-xs">
                <Printer className="w-4 h-4 text-slate-600 shrink-0" />
                <span>8 Cartazes / Guias para Impressão</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vitrine Visual das 5 Prévia Reais (Substituindo o antigo bloco de 18 volumes e 95 arquivos prontos) */}
        <div className="mt-10">
          <DocumentShowcase />
        </div>

        {/* Layout de Duas Colunas: Lista dos 18 Capítulos à Esquerda + Mockup Real do Cartaz à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mt-12">
          {/* Coluna da Esquerda: Resumo dos Capítulos e Conteúdos (7 colunas no desktop) */}
          <div className="lg:col-span-7 space-y-6"></div>

          {/* Coluna da Direita: Mockup Real do Cartaz no Consultório (5 colunas no desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full relative group">
              {/* Glow decorativo suave atrás do quadro */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/15 via-emerald-500/10 to-sky-400/15 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Card / Moldura Elegante do Mockup Real */}
              <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_55px_-5px_rgba(0,0,0,0.14)] transition-all duration-300 overflow-hidden p-3.5 sm:p-4.5">
                {/* Header do Mockup */}
                <div className="flex items-center justify-between gap-2 px-2 pb-3 mb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Exemplo Real de Aplicação
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-200/70">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    Guia Impresso
                  </span>
                </div>

                {/* Imagem do Cartaz em Ambiente de Consultório */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-inner group/img">
                  <img
                    src={cartazConsultorioImg}
                    alt="Exemplo real do cartaz de conduta em acidentes ocupacionais afixado no consultório odontológico"
                    className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover/img:scale-[1.02]"
                    loading="lazy"
                  />
                  {/* Subtle glass gradient overlay at bottom for title */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent p-4 pt-8 text-white">
                    <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">
                      Capítulo 14 • Cartaz Educativo
                    </p>
                    <p className="text-sm font-bold text-white leading-tight mt-0.5">
                      Conduta em caso de Acidente Ocupacional no Consultório
                    </p>
                  </div>
                </div>

                {/* Legenda explicativa abaixo da imagem */}
                <div className="pt-3.5 px-2">
                  <p className="text-xs text-slate-600 leading-relaxed text-center">
                    <strong className="text-slate-800 font-semibold">
                      Material visual de alta resolução pronto para impressão
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Provas Sociais / Depoimentos Reais */}
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
      </div>
    </section>
  )
}
