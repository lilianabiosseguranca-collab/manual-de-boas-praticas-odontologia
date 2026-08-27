import React, { useState } from 'react'
import {
  Folder,
  Sparkles,
  Award,
  Building2,
  Users,
  GraduationCap,
  FileCheck2,
  Droplets,
  Bug,
  Wrench,
  Cpu,
  Trash2,
  Stethoscope,
  Sparkle,
  ShieldCheck,
  HandMetal,
  AlertTriangle,
  Ambulance,
  ShieldAlert,
  FileSpreadsheet,
  FileEdit,
  CheckCircle2,
  ChevronRight,
  FolderOpen,
  Layers,
  ChevronLeft,
} from 'lucide-react'

export interface ChapterItem {
  id: string
  num: string
  roman: string
  title: string
  subtitle?: string
  icon: React.ElementType
  color: {
    tabBg: string
    tabBorder: string
    spineBg: string
    spineBorder: string
    accentColor: string
    badgeBg: string
    badgeText: string
    glowColor: string
  }
}

export const CHAPTERS_DATA: ChapterItem[] = [
  {
    id: 'cap-1',
    num: '01',
    roman: 'Capítulo I',
    title: 'Projeto básico de arquitetura',
    subtitle: 'Layouts físicos, fluxos sanitários, dimensionamento e normas prediais',
    icon: Building2,
    color: {
      tabBg: 'bg-blue-600',
      tabBorder: 'border-blue-400',
      spineBg: 'from-blue-700 via-blue-800 to-slate-900',
      spineBorder: 'border-blue-500/40',
      accentColor: 'text-blue-400',
      badgeBg: 'bg-blue-500/15 border-blue-500/30',
      badgeText: 'text-blue-300',
      glowColor: 'rgba(59, 130, 246, 0.35)',
    },
  },
  {
    id: 'cap-2',
    num: '02',
    roman: 'Capítulo II',
    title: 'Gestão de recursos humanos',
    subtitle: 'Qualificação profissional, descrição de cargos, treinamentos e registros da equipe',
    icon: Users,
    color: {
      tabBg: 'bg-emerald-600',
      tabBorder: 'border-emerald-400',
      spineBg: 'from-emerald-700 via-emerald-800 to-slate-900',
      spineBorder: 'border-emerald-500/40',
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 border-emerald-500/30',
      badgeText: 'text-emerald-300',
      glowColor: 'rgba(16, 185, 129, 0.35)',
    },
  },
  {
    id: 'cap-3',
    num: '03',
    roman: 'Capítulo III',
    title: 'Plano anual de educação permanente',
    subtitle: 'Cronograma anual de treinamentos, capacitação em biossegurança e certificações',
    icon: GraduationCap,
    color: {
      tabBg: 'bg-indigo-600',
      tabBorder: 'border-indigo-400',
      spineBg: 'from-indigo-700 via-indigo-800 to-slate-900',
      spineBorder: 'border-indigo-500/40',
      accentColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/15 border-indigo-500/30',
      badgeText: 'text-indigo-300',
      glowColor: 'rgba(99, 102, 241, 0.35)',
    },
  },
  {
    id: 'cap-4',
    num: '04',
    roman: 'Capítulo IV',
    title: 'Contratos, licenças e qualificações de serviços terceirizados',
    subtitle: 'Alvarás, contratos de manutenção, laboratórios de prótese e laudos técnicos',
    icon: FileCheck2,
    color: {
      tabBg: 'bg-teal-600',
      tabBorder: 'border-teal-400',
      spineBg: 'from-teal-700 via-teal-800 to-slate-900',
      spineBorder: 'border-teal-500/40',
      accentColor: 'text-teal-400',
      badgeBg: 'bg-teal-500/15 border-teal-500/30',
      badgeText: 'text-teal-300',
      glowColor: 'rgba(20, 184, 166, 0.35)',
    },
  },
  {
    id: 'cap-5',
    num: '05',
    roman: 'Capítulo V',
    title: 'Plano de monitoramento e controle da água',
    subtitle: 'Higienização de caixas d’água, controle de potabilidade e análises periódicas',
    icon: Droplets,
    color: {
      tabBg: 'bg-cyan-600',
      tabBorder: 'border-cyan-400',
      spineBg: 'from-cyan-700 via-cyan-800 to-slate-900',
      spineBorder: 'border-cyan-500/40',
      accentColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/15 border-cyan-500/30',
      badgeText: 'text-cyan-300',
      glowColor: 'rgba(6, 182, 212, 0.35)',
    },
  },
  {
    id: 'cap-6',
    num: '06',
    roman: 'Capítulo VI',
    title: 'Controle de vetores e pragas urbanas',
    subtitle: 'Comprovantes de desinsetização/desratização, periodicidade e barreiras físicas',
    icon: Bug,
    color: {
      tabBg: 'bg-amber-600',
      tabBorder: 'border-amber-400',
      spineBg: 'from-amber-700 via-amber-800 to-slate-900',
      spineBorder: 'border-amber-500/40',
      accentColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/15 border-amber-500/30',
      badgeText: 'text-amber-300',
      glowColor: 'rgba(245, 158, 11, 0.35)',
    },
  },
  {
    id: 'cap-7',
    num: '07',
    roman: 'Capítulo VII',
    title: 'Plano anual de manutenção preventiva e corretiva da edificação e instalações',
    subtitle: 'Instalações elétricas, hidráulicas, ar-condicionado (PMOC) e estrutura física',
    icon: Wrench,
    color: {
      tabBg: 'bg-sky-600',
      tabBorder: 'border-sky-400',
      spineBg: 'from-sky-700 via-sky-800 to-slate-900',
      spineBorder: 'border-sky-500/40',
      accentColor: 'text-sky-400',
      badgeBg: 'bg-sky-500/15 border-sky-500/30',
      badgeText: 'text-sky-300',
      glowColor: 'rgba(14, 165, 233, 0.35)',
    },
  },
  {
    id: 'cap-8',
    num: '08',
    roman: 'Capítulo VIII',
    title: 'Plano de Gerenciamento de Tecnologias em Saúde (PGTS)',
    subtitle:
      'Inventário, calibração, manutenção de autoclaves, compressores e fotopolimerizadores',
    icon: Cpu,
    color: {
      tabBg: 'bg-violet-600',
      tabBorder: 'border-violet-400',
      spineBg: 'from-violet-700 via-violet-800 to-slate-900',
      spineBorder: 'border-violet-500/40',
      accentColor: 'text-violet-400',
      badgeBg: 'bg-violet-500/15 border-violet-500/30',
      badgeText: 'text-violet-300',
      glowColor: 'rgba(139, 92, 246, 0.35)',
    },
  },
  {
    id: 'cap-9',
    num: '09',
    roman: 'Capítulo IX',
    title: 'Plano de Gerenciamento de Resíduos (PGRSS)',
    subtitle:
      'Segregação, acondicionamento, perfurocortantes, resíduos químicos e coleta especializada',
    icon: Trash2,
    color: {
      tabBg: 'bg-rose-600',
      tabBorder: 'border-rose-400',
      spineBg: 'from-rose-700 via-rose-800 to-slate-900',
      spineBorder: 'border-rose-500/40',
      accentColor: 'text-rose-400',
      badgeBg: 'bg-rose-500/15 border-rose-500/30',
      badgeText: 'text-rose-300',
      glowColor: 'rgba(244, 63, 94, 0.35)',
    },
  },
  {
    id: 'cap-10',
    num: '10',
    roman: 'Capítulo X',
    title:
      'Protocolo para processamento de dispositivos médicos incluindo informações de rastreabilidade',
    subtitle:
      'Fluxo unidirecional de CME, esterilização, indicadores químicos/biológicos e rotulagem',
    icon: Stethoscope,
    color: {
      tabBg: 'bg-cyan-500',
      tabBorder: 'border-cyan-300',
      spineBg: 'from-cyan-600 via-teal-700 to-slate-900',
      spineBorder: 'border-cyan-400/50',
      accentColor: 'text-cyan-300',
      badgeBg: 'bg-cyan-400/20 border-cyan-400/40',
      badgeText: 'text-cyan-200',
      glowColor: 'rgba(6, 182, 212, 0.5)',
    },
  },
  {
    id: 'cap-11',
    num: '11',
    roman: 'Capítulo XI',
    title: 'Protocolo de limpeza de ambientes e superfícies',
    subtitle: 'Higienização de consultórios, desinfecção concorrente e terminal, POPs de limpeza',
    icon: Sparkle,
    color: {
      tabBg: 'bg-teal-500',
      tabBorder: 'border-teal-300',
      spineBg: 'from-teal-600 via-emerald-700 to-slate-900',
      spineBorder: 'border-teal-400/40',
      accentColor: 'text-teal-300',
      badgeBg: 'bg-teal-500/15 border-teal-500/30',
      badgeText: 'text-teal-300',
      glowColor: 'rgba(20, 184, 166, 0.35)',
    },
  },
  {
    id: 'cap-12',
    num: '12',
    roman: 'Capítulo XII',
    title: 'Plano de Segurança do Paciente (PSP)',
    subtitle:
      'Metas internacionais, identificação correta, prevenção de quedas e notificação de incidentes',
    icon: ShieldCheck,
    color: {
      tabBg: 'bg-emerald-500',
      tabBorder: 'border-emerald-300',
      spineBg: 'from-emerald-600 via-teal-800 to-slate-900',
      spineBorder: 'border-emerald-400/40',
      accentColor: 'text-emerald-300',
      badgeBg: 'bg-emerald-500/15 border-emerald-500/30',
      badgeText: 'text-emerald-300',
      glowColor: 'rgba(16, 185, 129, 0.4)',
    },
  },
  {
    id: 'cap-13',
    num: '13',
    roman: 'Capítulo XIII',
    title: 'Protocolo de higiene das mãos, precauções e isolamento',
    subtitle:
      'Técnica correta de antissepsia, uso racional de EPIs e prevenção de transmissão cruzada',
    icon: HandMetal,
    color: {
      tabBg: 'bg-blue-500',
      tabBorder: 'border-blue-300',
      spineBg: 'from-blue-600 via-indigo-700 to-slate-900',
      spineBorder: 'border-blue-400/40',
      accentColor: 'text-blue-300',
      badgeBg: 'bg-blue-500/15 border-blue-500/30',
      badgeText: 'text-blue-300',
      glowColor: 'rgba(59, 130, 246, 0.35)',
    },
  },
  {
    id: 'cap-14',
    num: '14',
    roman: 'Capítulo XIV',
    title:
      'Protocolo de encaminhamento do profissional em caso de acidentes com exposição a material biológico',
    subtitle:
      'Conduta imediata pós-exposição, quimioprofilaxia, fluxo de atendimento, CAT e acompanhamento',
    icon: AlertTriangle,
    color: {
      tabBg: 'bg-orange-600',
      tabBorder: 'border-orange-400',
      spineBg: 'from-orange-700 via-amber-800 to-slate-900',
      spineBorder: 'border-orange-500/40',
      accentColor: 'text-orange-400',
      badgeBg: 'bg-orange-500/15 border-orange-500/30',
      badgeText: 'text-orange-300',
      glowColor: 'rgba(249, 115, 22, 0.35)',
    },
  },
  {
    id: 'cap-15',
    num: '15',
    roman: 'Capítulo XV',
    title: 'Protocolo de encaminhamento do paciente em caso de urgências e emergências',
    subtitle:
      'Suporte básico de vida odontológico, kit de emergência, fluxo SAMU e encaminhamento hospitalar',
    icon: Ambulance,
    color: {
      tabBg: 'bg-red-600',
      tabBorder: 'border-red-400',
      spineBg: 'from-red-700 via-rose-800 to-slate-900',
      spineBorder: 'border-red-500/40',
      accentColor: 'text-red-400',
      badgeBg: 'bg-red-500/15 border-red-500/30',
      badgeText: 'text-red-300',
      glowColor: 'rgba(239, 68, 68, 0.35)',
    },
  },
  {
    id: 'cap-16',
    num: '16',
    roman: 'Capítulo XVI',
    title: 'Plano de prevenção e controle de infecções (PP-IRAS)',
    subtitle:
      'Programa de controle de infecções relacionadas à assistência à saúde e auditorias internas',
    icon: ShieldAlert,
    color: {
      tabBg: 'bg-purple-600',
      tabBorder: 'border-purple-400',
      spineBg: 'from-purple-700 via-indigo-900 to-slate-900',
      spineBorder: 'border-purple-500/40',
      accentColor: 'text-purple-300',
      badgeBg: 'bg-purple-500/15 border-purple-500/30',
      badgeText: 'text-purple-300',
      glowColor: 'rgba(168, 85, 247, 0.35)',
    },
  },
  {
    id: 'cap-17',
    num: '17',
    roman: 'Capítulo XVII',
    title: 'Outros documentos e normativas aplicáveis',
    subtitle:
      'Formulários complementares, termos de consentimento, fichas de controle e normas locais',
    icon: FileSpreadsheet,
    color: {
      tabBg: 'bg-slate-600',
      tabBorder: 'border-slate-400',
      spineBg: 'from-slate-700 via-slate-800 to-slate-950',
      spineBorder: 'border-slate-500/40',
      accentColor: 'text-slate-300',
      badgeBg: 'bg-slate-500/15 border-slate-500/30',
      badgeText: 'text-slate-200',
      glowColor: 'rgba(148, 163, 184, 0.35)',
    },
  },
]

export const DocumentExplosion = () => {
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0)
  const [hoveredChapterIndex, setHoveredChapterIndex] = useState<number | null>(null)

  const activeIndex = hoveredChapterIndex !== null ? hoveredChapterIndex : selectedChapterIndex
  const activeChapter = CHAPTERS_DATA[activeIndex] || CHAPTERS_DATA[0]
  const ActiveIcon = activeChapter.icon

  const handlePrev = () => {
    setSelectedChapterIndex((prev) => (prev > 0 ? prev - 1 : CHAPTERS_DATA.length - 1))
  }

  const handleNext = () => {
    setSelectedChapterIndex((prev) => (prev < CHAPTERS_DATA.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="relative w-full max-w-[640px] mx-auto select-none py-2 px-1 sm:px-2">
      {/* Ambient Backdrop Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-emerald-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-teal-500/15 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Main Physical Archive Box (Tangible binder binder portfolio) */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 shadow-[0_25px_60px_rgba(15,23,42,0.45),0_10px_25px_rgba(0,0,0,0.35)] overflow-hidden">
        {/* Top Glossy Highlight Reflection */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />

        {/* Master Folder Top Bar / Title Section */}
        <div className="relative z-10 px-4 sm:px-6 pt-4 pb-3 border-b border-slate-800/80">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-[11px] sm:text-xs font-bold text-cyan-300 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse shrink-0" />
              <span>Acervo Odontológico Profissional</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[11px] font-bold shadow-sm">
                <Award className="w-3.5 h-3.5 shrink-0" />
                <span>RDC 1002</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>17 Pastas Físicas</span>
              </div>
            </div>
          </div>

          {/* Master Title */}
          <div className="space-y-1">
            {/* Top Folder Tab Label - fully visible & unbroken */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-600/70 text-[10px] font-bold uppercase tracking-wider text-cyan-300 shadow-sm mb-0.5">
              <FolderOpen className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />
              <span>Dossiê Completo</span>
            </div>

            <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
              Série de Documentos de Boas Práticas de Funcionamento
            </h3>

            <p className="text-[11px] sm:text-xs text-slate-300 font-medium leading-relaxed flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>
                Formatados, validados e organizados por capítulos para consultórios e clínicas
              </span>
            </p>
          </div>
        </div>

        {/* 17 Physical Folders / Binder Showcase Section */}
        <div className="p-3.5 sm:p-5 space-y-4">
          {/* Visual Physical Archive Rack (Tabs Carousel / Rack of 17 Folders) */}
          <div className="relative rounded-2xl bg-slate-950/80 p-3 sm:p-4 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between gap-2 mb-2.5 px-1">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                  Classificador Físico dos 17 Capítulos
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-400">
                Passe o mouse ou clique para inspecionar
              </span>
            </div>

            {/* 17 Physical Folder Tabs Array */}
            <div className="grid grid-cols-6 sm:grid-cols-9 gap-1 sm:gap-1.5 pt-1">
              {CHAPTERS_DATA.map((chapter, idx) => {
                const isSelected = activeIndex === idx
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => setSelectedChapterIndex(idx)}
                    onMouseEnter={() => setHoveredChapterIndex(idx)}
                    onMouseLeave={() => setHoveredChapterIndex(null)}
                    aria-label={`${chapter.roman}: ${chapter.title}`}
                    className={`group relative flex flex-col items-center justify-center p-1 sm:p-1.5 rounded-lg border transition-all duration-300 cursor-pointer text-center ${
                      isSelected
                        ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105 -translate-y-1 z-20 ring-1 ring-cyan-400/60'
                        : 'bg-slate-900/90 border-slate-700/80 hover:border-slate-500 hover:bg-slate-800/80 hover:-translate-y-0.5 z-10'
                    }`}
                  >
                    {/* Top Folder Tab Colored Notch */}
                    <div
                      className={`w-full h-1 sm:h-1.5 rounded-t-sm mb-1 transition-all ${
                        isSelected ? chapter.color.tabBg : 'bg-slate-700 group-hover:bg-slate-500'
                      }`}
                    />

                    {/* Chapter Roman / Number Identifier */}
                    <span
                      className={`text-[9px] sm:text-[10px] font-extrabold transition-colors leading-none ${
                        isSelected ? 'text-cyan-300' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {chapter.num}
                    </span>

                    <span
                      className={`text-[7px] sm:text-[8px] font-bold uppercase tracking-tighter mt-0.5 leading-none transition-colors ${
                        isSelected
                          ? chapter.color.accentColor
                          : 'text-slate-500 group-hover:text-slate-400'
                      }`}
                    >
                      {chapter.roman.replace('Capítulo ', 'CAP ')}
                    </span>

                    {/* Active Glow Dot */}
                    {isSelected && (
                      <span className="absolute -top-1 right-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Physical Folder Detail Box (Realistic Binder / Clasp Display) */}
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/95 via-slate-850 to-slate-900 border border-cyan-500/40 p-4 sm:p-5 shadow-xl transition-all duration-300 overflow-hidden group">
            {/* Folder Spine Left Accent Bar */}
            <div
              className={`absolute top-0 bottom-0 left-0 w-2.5 sm:w-3 bg-gradient-to-b ${activeChapter.color.spineBg} border-r ${activeChapter.color.spineBorder}`}
            />

            {/* Folder Background Watermark Icon */}
            <ActiveIcon className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 text-slate-700/10 pointer-events-none transform -rotate-12" />

            <div className="relative z-10 pl-2 sm:pl-3 space-y-3">
              {/* Header row inside active folder */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${activeChapter.color.spineBg} flex items-center justify-center text-white shadow-lg border ${activeChapter.color.spineBorder} shrink-0`}
                  >
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-cyan-300">
                        Pasta Física {activeChapter.num}
                      </span>
                      <span className="text-slate-500 text-xs">•</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {activeChapter.roman}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      100% Conforme RDC 1002
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Pasta anterior"
                    className="w-7 h-7 rounded-lg bg-slate-900/90 border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Próxima pasta"
                    className="w-7 h-7 rounded-lg bg-slate-900/90 border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div
                    className={`px-2.5 py-1 rounded-full border text-[10px] sm:text-[11px] font-bold ${activeChapter.color.badgeBg} ${activeChapter.color.badgeText}`}
                  >
                    Modelos Pré-prontos
                  </div>
                </div>
              </div>

              {/* Full Chapter Title */}
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-extrabold text-white leading-snug">
                  {activeChapter.title}
                </h4>
                {activeChapter.subtitle && (
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium leading-relaxed">
                    {activeChapter.subtitle}
                  </p>
                )}
              </div>

              {/* Realistic Document Paper Mockup Inside Folder */}
              <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-700/60 shadow-inner space-y-2">
                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 border-b border-slate-800 pb-1.5">
                  <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                    <FileEdit className="w-3.5 h-3.5 text-cyan-400" />
                    Arquivo Digital 100% Editável em Word (.docx)
                  </span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    Preencha seus dados
                  </span>
                </div>

                {/* Simulated Document Layout Structure */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex items-center gap-2">
                    <div className="h-2 bg-slate-700 rounded-full w-2/5" />
                    <div className="h-2 bg-cyan-500/40 rounded-full w-1/5" />
                    <div className="h-2 bg-slate-700 rounded-full w-2/5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-800 rounded-full w-4/5" />
                    <div className="h-1.5 bg-emerald-500/40 rounded-full w-1/5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-800 rounded-full w-3/5" />
                    <div className="h-1.5 bg-slate-800 rounded-full w-2/5" />
                  </div>
                </div>
              </div>

              {/* Action row at bottom of folder */}
              <div className="flex items-center justify-between pt-1 text-[11px]">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Conteúdo estruturado por artigos e POPs</span>
                </div>
                <div className="flex items-center gap-1 text-cyan-300 font-bold group-hover:translate-x-1 transition-transform">
                  <span>Modelos Pré-prontos (Preencha seus dados)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick List of All 17 Chapters (Scrollable Index) */}
          <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Folder className="w-3.5 h-3.5 text-cyan-400" />
                Índice Completo do Acervo (17 Capítulos Oficiais)
              </span>
              <span className="text-[10px] font-bold text-cyan-400">
                17 / 17 Capítulos Inclusos
              </span>
            </div>

            <div className="max-h-[140px] sm:max-h-[150px] overflow-y-auto pr-1 space-y-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
              {CHAPTERS_DATA.map((item, idx) => {
                const ItemIcon = item.icon
                const isSelected = activeIndex === idx
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedChapterIndex(idx)}
                    onMouseEnter={() => setHoveredChapterIndex(idx)}
                    onMouseLeave={() => setHoveredChapterIndex(null)}
                    className={`flex items-center justify-between p-1.5 rounded-lg text-[11px] cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-slate-800 text-white font-bold border border-cyan-500/40'
                        : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <ItemIcon
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isSelected ? item.color.accentColor : 'text-slate-500'
                        }`}
                      />
                      <span className="font-semibold text-slate-400 shrink-0">{item.roman}:</span>
                      <span className="truncate">{item.title}</span>
                    </div>
                    <span
                      className={`text-[9px] font-bold shrink-0 px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      Word (.docx)
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Master Folder Bottom Footer Details */}
        <div className="px-4 sm:px-6 py-3 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <strong>17 Capítulos</strong> Completos
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <strong>+50 Arquivos</strong> Editáveis
            </span>
          </div>
          <div className="flex items-center gap-2 text-cyan-300 font-bold">
            <FileEdit className="w-3.5 h-3.5 text-cyan-400" />
            <span>100% Editáveis em Word (.docx)</span>
          </div>
        </div>
      </div>

      {/* Under-folder Soft Glow Shadow */}
      <div className="w-[88%] h-6 bg-cyan-500/20 blur-xl mx-auto rounded-full -mt-3 -z-10" />
    </div>
  )
}
export default DocumentExplosion
