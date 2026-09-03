import React from 'react'
import { FileText, FileSpreadsheet, Sparkles, CheckCircle2 } from 'lucide-react'

// URLs das 5 fotos originais enviadas pelo usuário
export const ORIGINAL_DOC_PHOTOS = [
  {
    id: 'pop-71',
    title: 'POP 7.1 — Plano Anual de Manutenção',
    category: 'Word (.docx)',
    type: 'word' as const,
    url: 'https://dagtlwojkqyivnjgveda.supabase.co/storage/v1/object/public/message-attachments/75d80f4e-1ecd-46a4-be18-c1106166646a/captura-de-tela-2026-09-03-as-16.51.14-cfc2f.png',
    alt: 'Prévia original do documento Word POP 7.1 Plano Anual de Manutenção',
  },
  {
    id: 'pop-118',
    title: 'POP 11.8 — Limpeza de Áreas Comuns',
    category: 'Word (.docx)',
    type: 'word' as const,
    url: 'https://dagtlwojkqyivnjgveda.supabase.co/storage/v1/object/public/message-attachments/75d80f4e-1ecd-46a4-be18-c1106166646a/captura-de-tela-2026-09-03-as-16.51.32-dd335.png',
    alt: 'Prévia original do documento Word POP 11.8 Limpeza de Rotina',
  },
  {
    id: 'pop-143',
    title: 'POP 11.1 Limpeza imediata',
    category: 'Word (.docx)',
    type: 'word' as const,
    url: 'https://dagtlwojkqyivnjgveda.supabase.co/storage/v1/object/public/message-attachments/75d80f4e-1ecd-46a4-be18-c1106166646a/captura-de-tela-2026-09-03-as-16.52.12-115e0.png',
    alt: 'Prévia original do documento Word POP 14.3 Conduta em Derramamento Biológico',
  },
  {
    id: 'excel-cal',
    title: 'Calendário Anual 2027',
    category: 'Excel (.xlsx)',
    type: 'excel' as const,
    url: 'https://dagtlwojkqyivnjgveda.supabase.co/storage/v1/object/public/message-attachments/75d80f4e-1ecd-46a4-be18-c1106166646a/captura-de-tela-2026-09-03-as-16.50.56-d85fa.png',
    alt: 'Prévia original da planilha Excel Calendário Anual de Manutenção 2027',
  },
  {
    id: 'excel-check',
    title: 'Checklist de Auditoria',
    category: 'Excel (.xlsx)',
    type: 'excel' as const,
    url: 'https://dagtlwojkqyivnjgveda.supabase.co/storage/v1/object/public/message-attachments/75d80f4e-1ecd-46a4-be18-c1106166646a/captura-de-tela-2026-09-03-as-16.50.32-7ac47.png',
    alt: 'Prévia original da planilha Excel Checklist de Verificação para Auditoria',
  },
]

export function CompactDocumentShowcase() {
  const wordDocs = ORIGINAL_DOC_PHOTOS.filter((doc) => doc.type === 'word')
  const excelDocs = ORIGINAL_DOC_PHOTOS.filter((doc) => doc.type === 'excel')

  return (
    <div className="relative group w-full">
      {/* Glow decorativo suave de fundo */}
      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/10 via-sky-400/10 to-emerald-500/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card Container Compacto */}
      <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_22px_50px_-5px_rgba(0,0,0,0.12)] transition-all duration-300 p-4 sm:p-5">
        {/* Header Compacto */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Prévias dos Documentos Reais
            </span>
          </div>
        </div>

        {/* Microtexto de Apoio Destacado */}
        <div className="mb-3.5 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-50/80 to-emerald-50/80 border border-blue-100/70 flex items-center gap-2 text-slate-700">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <p className="text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
            Material 100% editável — você recebe os arquivos originais em Word e Excel
          </p>
        </div>

        {/* Grade de Miniaturas Atraentes */}
        <div className="space-y-3">
          {/* Linha 1: 3 POPs em Word */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px] font-bold uppercase tracking-wide text-blue-900">
                POPs em Word (.docx)
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
              {wordDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="group/item flex flex-col bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-blue-400 p-1.5 transition-all duration-300 shadow-2xs hover:shadow-md"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-white border border-slate-100 shadow-inner">
                    <img
                      src={doc.url}
                      alt={doc.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/item:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-1.5 px-0.5">
                    <p className="text-[10.5px] font-bold text-slate-800 leading-tight line-clamp-2">
                      {doc.title}
                    </p>
                    <span className="text-[9.5px] font-medium text-blue-600 block mt-0.5">
                      Word editável
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Linha 2: 2 Planilhas em Excel */}
          <div className="pt-1">
            <div className="flex items-center gap-1.5 mb-2">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-900">
                Planilhas em Excel (.xlsx)
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {excelDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="group/item flex flex-col bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-emerald-400 p-1.5 transition-all duration-300 shadow-2xs hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-white border border-slate-100 shadow-inner">
                    <img
                      src={doc.url}
                      alt={doc.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/item:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-1.5 px-0.5">
                    <p className="text-[10.5px] font-bold text-slate-800 leading-tight line-clamp-1">
                      {doc.title}
                    </p>
                    <span className="text-[9.5px] font-medium text-emerald-600 block mt-0.5">
                      Excel automatizado
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé Compacto */}
        <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Formatados conforme a RDC 1002/2025</span>
          <span className="font-semibold text-slate-700">Prontos para uso imediato</span>
        </div>
      </div>
    </div>
  )
}
