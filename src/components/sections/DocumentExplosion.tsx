import React, { useState } from 'react'
import {
  FileText,
  ShieldCheck,
  Folder,
  Sparkles,
  Award,
  Layers,
  Building2,
  Users2,
  Bug,
  Trash2,
  Stethoscope,
  ChevronRight,
} from 'lucide-react'

interface DocumentItem {
  id: string
  chapter: string
  title: string
  tag: string
  icon: React.ElementType
  badgeColor: string
  accentGradient: string
  rotation: number
  hoverRotation: number
  xOffset: number
  yOffset: number
  scale?: number
  zIndex: number
  highlight?: boolean
}

const flyingDocuments: DocumentItem[] = [
  {
    id: 'doc-1',
    chapter: 'Capítulo I',
    title: 'Projeto básico de arquitetura',
    tag: 'RDC 1002/2005',
    icon: Building2,
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    accentGradient: 'from-blue-600 via-indigo-600 to-blue-700',
    rotation: -14,
    hoverRotation: -18,
    xOffset: -38,
    yOffset: -36,
    scale: 0.95,
    zIndex: 25,
  },
  {
    id: 'doc-2',
    chapter: 'Capítulo II',
    title: 'Gestão de Recursos Humanos',
    tag: 'Protocolo Odonto',
    icon: Users2,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    accentGradient: 'from-emerald-600 via-teal-600 to-emerald-700',
    rotation: 12,
    hoverRotation: 16,
    xOffset: 36,
    yOffset: -38,
    scale: 0.96,
    zIndex: 26,
  },
  {
    id: 'doc-3',
    chapter: 'Capítulo VI',
    title: 'Controle de Vetores e Pragas Urbanas',
    tag: 'Vigilância Sanitária',
    icon: Bug,
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    accentGradient: 'from-amber-500 via-orange-600 to-amber-700',
    rotation: -8,
    hoverRotation: -12,
    xOffset: -42,
    yOffset: -4,
    scale: 0.94,
    zIndex: 27,
  },
  {
    id: 'doc-4',
    chapter: 'Capítulo IX',
    title: 'Plano de Gerenciamento de Resíduos',
    tag: 'PGRSS Obrigatório',
    icon: Trash2,
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
    accentGradient: 'from-purple-600 via-indigo-600 to-violet-700',
    rotation: 10,
    hoverRotation: 14,
    xOffset: 40,
    yOffset: -2,
    scale: 0.95,
    zIndex: 28,
  },
  {
    id: 'doc-5',
    chapter: 'Capítulo X',
    title: 'Protocolo para processamento de dispositivos médicos',
    tag: 'Central de Esterilização',
    icon: Stethoscope,
    badgeColor: 'bg-cyan-100 text-cyan-950 border-cyan-200',
    accentGradient: 'from-cyan-600 via-teal-600 to-blue-700',
    rotation: -2,
    hoverRotation: 0,
    xOffset: -2,
    yOffset: -46,
    scale: 1.03,
    zIndex: 35,
    highlight: true,
  },
]

export const DocumentExplosion = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeDoc, setActiveDoc] = useState<string | null>(null)

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto select-none py-6 px-2 sm:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setActiveDoc(null)
      }}
    >
      {/* Dynamic ambient backdrop lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] bg-gradient-to-tr from-blue-400/20 via-teal-300/25 to-emerald-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Main Composition Box */}
      <div className="relative min-h-[460px] sm:min-h-[520px] md:min-h-[550px] w-full flex items-center justify-center">
        {/* Background Decorative Particle Badges representing volume (+50 docs) */}
        <div
          className="absolute top-3 left-4 sm:left-6 transition-transform duration-700 pointer-events-none"
          style={{
            transform: isHovered
              ? 'translate(-12px, -16px) rotate(-18deg) scale(1.05)'
              : 'translate(0px, 0px) rotate(-12deg)',
          }}
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200/90 shadow-lg backdrop-blur-md text-[11px] font-bold text-slate-700">
            <Layers
              className="w-3.5 h-3.5 text-blue-600 animate-spin"
              style={{ animationDuration: '8s' }}
            />
            <span>+50 Modelos Editáveis</span>
          </div>
        </div>

        <div
          className="absolute top-5 right-4 sm:right-6 transition-transform duration-700 pointer-events-none"
          style={{
            transform: isHovered
              ? 'translate(14px, -14px) rotate(16deg) scale(1.05)'
              : 'translate(0px, 0px) rotate(10deg)',
          }}
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-500/20 text-[11px] font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
            <span>100% Conforme Anvisa</span>
          </div>
        </div>

        {/* Multi-layered Backing Papers showing massive volume inside folder */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] sm:w-[70%] h-48 pointer-events-none z-10">
          {/* Depth paper stack 1 */}
          <div
            className="absolute inset-x-4 top-0 h-36 bg-gradient-to-b from-slate-100 to-slate-200 rounded-2xl border border-slate-300 shadow-md transition-all duration-700"
            style={{
              transform: isHovered
                ? 'translateY(-34px) rotate(-8deg) scale(0.92)'
                : 'translateY(-18px) rotate(-4deg) scale(0.95)',
            }}
          >
            <div className="p-3 flex items-center justify-between opacity-50">
              <div className="h-2 w-24 bg-slate-300 rounded-full" />
              <div className="h-2 w-10 bg-slate-300 rounded-full" />
            </div>
          </div>

          {/* Depth paper stack 2 */}
          <div
            className="absolute inset-x-6 top-0 h-36 bg-gradient-to-b from-slate-50 to-slate-200 rounded-2xl border border-slate-300 shadow-md transition-all duration-700"
            style={{
              transform: isHovered
                ? 'translateY(-26px) rotate(7deg) scale(0.94)'
                : 'translateY(-12px) rotate(3deg) scale(0.96)',
            }}
          >
            <div className="p-3 flex items-center justify-between opacity-50">
              <div className="h-2 w-20 bg-slate-300 rounded-full" />
              <div className="h-2 w-12 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* Flying Exploding Document Cards */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {flyingDocuments.map((doc) => {
            const Icon = doc.icon
            const isThisDocActive = activeDoc === doc.id
            const currentRotation = isHovered ? doc.hoverRotation : doc.rotation
            const currentX = isHovered ? doc.xOffset * 1.15 : doc.xOffset
            const currentY = isHovered ? doc.yOffset * 1.15 : doc.yOffset
            const currentScale = isThisDocActive
              ? 1.08
              : isHovered
                ? (doc.scale ?? 1) * 1.03
                : (doc.scale ?? 1)

            return (
              <div
                key={doc.id}
                onMouseEnter={() => setActiveDoc(doc.id)}
                onMouseLeave={() => setActiveDoc(null)}
                className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer transition-all duration-500 ease-out"
                style={{
                  transform: `translate(calc(-50% + ${currentX}%), calc(-50% + ${currentY}%)) rotate(${currentRotation}deg) scale(${currentScale})`,
                  zIndex: isThisDocActive ? 50 : doc.zIndex,
                  width: 'min(88%, 310px)',
                }}
              >
                {/* Tangible Physical Document Card */}
                <div
                  className={`relative rounded-2xl bg-white/95 backdrop-blur-md p-3.5 sm:p-4 border transition-all duration-300 ${
                    doc.highlight
                      ? 'border-cyan-400 shadow-[0_15px_35px_rgba(6,182,212,0.25),0_5px_15px_rgba(0,0,0,0.08)] ring-2 ring-cyan-400/50 ring-offset-2'
                      : isThisDocActive
                        ? 'border-blue-400 shadow-[0_20px_40px_rgba(30,58,138,0.2),0_8px_16px_rgba(0,0,0,0.1)]'
                        : 'border-slate-200/90 shadow-[0_10px_25px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.06)]'
                  } group hover:bg-white`}
                >
                  {/* Folded Paper Corner Effect */}
                  <div className="absolute top-0 right-0 w-5 h-5 overflow-hidden pointer-events-none rounded-tr-2xl">
                    <div className="absolute top-0 right-0 w-7 h-7 bg-slate-100 border-b border-l border-slate-300 -translate-y-1/2 translate-x-1/2 rotate-45 shadow-sm" />
                  </div>

                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      {/* PDF / Document Icon Badge */}
                      <div
                        className={`w-8 h-8 rounded-xl bg-gradient-to-br ${doc.accentGradient} flex items-center justify-center text-white shadow-md shadow-slate-900/10 shrink-0`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black tracking-wider uppercase text-slate-400 block leading-none">
                          {doc.chapter}
                        </span>
                        <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-tight">
                          Documento Oficial
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${doc.badgeColor}`}
                    >
                      {doc.tag}
                    </span>
                  </div>

                  {/* Document Title */}
                  <h4 className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-snug line-clamp-2 pr-2 mb-2 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h4>

                  {/* Tangible Document Preview Lines simulating structured content */}
                  <div className="space-y-1.5 pt-1.5 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 bg-slate-200 rounded-full w-4/5" />
                      <div className="h-1.5 bg-emerald-300 rounded-full w-1/5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 bg-slate-200 rounded-full w-3/5" />
                      <div className="h-1.5 bg-slate-200 rounded-full w-2/5" />
                    </div>
                  </div>

                  {/* Bottom Footer Details */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[10px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <FileText className="w-3 h-3 text-red-500" />
                      <span className="font-semibold text-slate-600">PDF + DOCX</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform">
                      <span>Pronto p/ Usar</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Master Physical Folder Container at Bottom / Center */}
        <div
          className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[86%] max-w-[440px] z-30 transition-transform duration-500"
          style={{
            transform: isHovered
              ? 'translate(-50%, 4px) scale(1.02)'
              : 'translate(-50%, 0px) scale(1)',
          }}
        >
          {/* Main 3D Folder Shell */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-5 shadow-[0_25px_50px_rgba(15,23,42,0.4),0_10px_20px_rgba(0,0,0,0.3)] border border-slate-700/80 overflow-hidden">
            {/* Top Glossy Highlight Reflection */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-24 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none" />

            {/* Folder Tab at Top Left */}
            <div className="absolute -top-3 left-6 px-4 py-1 rounded-t-lg bg-slate-800 border-t border-x border-slate-600 text-[10px] font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5 shadow-md">
              <Folder className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />
              <span>Dossiê Completo</span>
            </div>

            {/* Folder Body Header */}
            <div className="relative z-10 pt-2 pb-1">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] sm:text-[11px] font-bold text-cyan-300 shadow-inner">
                  <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
                  <span>Acervo Odontológico Profissional</span>
                </div>

                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10px] font-bold">
                  <Award className="w-3 h-3" />
                  <span>RDC 1002</span>
                </div>
              </div>

              {/* Main Folder Title Required */}
              <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
                Série de Documentos de Boas Práticas de Funcionamento
              </h3>

              <p className="text-[11px] sm:text-xs text-slate-300 font-medium mt-1 leading-relaxed flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>
                  Formatados, validados e organizados por capítulos para consultórios e clínicas
                </span>
              </p>
            </div>

            {/* Bottom Inner Drawer / Folder Edge Details */}
            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> +50 Arquivos
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Word & PDF
                </span>
              </div>
              <span className="text-cyan-400 font-bold tracking-wide">100% Editável</span>
            </div>
          </div>

          {/* Under-folder Soft Shadow */}
          <div className="w-[85%] h-6 bg-slate-900/30 blur-xl mx-auto rounded-full -mt-2 -z-10" />
        </div>
      </div>
    </div>
  )
}
