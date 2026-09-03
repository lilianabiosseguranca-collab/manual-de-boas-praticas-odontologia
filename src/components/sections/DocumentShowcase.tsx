import { useState } from 'react'
import { FileText, FileSpreadsheet, CheckCircle2, Sparkles, Maximize2, X } from 'lucide-react'

// As 5 fotos originais dos documentos enviadas pelo usuário
import pop71Img from '@/assets/captura-de-tela-2026-09-01-as-21.04.36-26c52.png'
import pop118Img from '@/assets/captura-de-tela-2026-09-01-as-21.13.36-859b8.png'
import pop143Img from '@/assets/captura-de-tela-2026-09-01-as-21.17.26-ef1d2.png'
import excelCalendarioImg from '@/assets/captura-de-tela-2026-09-01-as-21.33.38-6442b.png'
import excelChecklistImg from '@/assets/captura-de-tela-2026-09-01-as-21.35.35-6c7ca.png'

export interface CompactDocumentPreview {
  id: string
  title: string
  subtitle: string
  type: 'word' | 'excel'
  badge: string
  imgSrc: string
  alt: string
}

export const ORIGINAL_DOCUMENTS: CompactDocumentPreview[] = [
  {
    id: 'pop-71',
    title: 'POP 7.1 – Manutenção Preventiva e Corretiva',
    subtitle: 'Edificações e instalações prediais',
    type: 'word',
    badge: 'Word (.docx)',
    imgSrc: pop71Img,
    alt: 'Trecho original do POP 7.1 Plano Anual de Manutenção em Word',
  },
  {
    id: 'pop-118',
    title: 'POP 11.8 – Limpeza de Rotina Áreas Comuns',
    subtitle: 'Higienização e controle de infecção',
    type: 'word',
    badge: 'Word (.docx)',
    imgSrc: pop118Img,
    alt: 'Trecho original do POP 11.8 Limpeza de Rotina em Word',
  },
  {
    id: 'pop-143',
    title: 'POP 14.3 – Derramamento Biológico',
    subtitle: 'Conduta e kit de emergência biológica',
    type: 'word',
    badge: 'Word (.docx)',
    imgSrc: pop143Img,
    alt: 'Trecho original do POP 14.3 Conduta em Derramamento em Word',
  },
  {
    id: 'excel-cal',
    title: 'Calendário Anual de Manutenção 2027',
    subtitle: 'Cronograma mensal e semestral por sistema',
    type: 'excel',
    badge: 'Excel (.xlsx)',
    imgSrc: excelCalendarioImg,
    alt: 'Planilha original Calendário Anual de Manutenção 2027 em Excel',
  },
  {
    id: 'excel-check',
    title: 'Checklist de Auditoria POP-012',
    subtitle: 'Itens de inspeção com criticidade e responsáveis',
    type: 'excel',
    badge: 'Excel (.xlsx)',
    imgSrc: excelChecklistImg,
    alt: 'Planilha original Checklist de Auditoria para vigilância em Excel',
  },
]

export function DocumentShowcase() {
  const [selectedDoc, setSelectedDoc] = useState<CompactDocumentPreview | null>(null)

  return (
    <div className="w-full flex flex-col h-full bg-white rounded-3xl border border-slate-200/90 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 p-4 sm:p-5">
      {/* Cabeçalho Compacto da Vitrine */}
      <div className="flex items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider">
            Prévias dos Arquivos Originais
          </h3>
        </div>
        <span className="inline-flex items-center gap-1 text-[10.5px] font-bold bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200/70 shrink-0">
          <Sparkles className="w-3 h-3 text-amber-600" />5 Amostras
        </span>
      </div>

      {/* Microtexto de Tangibilidade & Desejo */}
      <div className="mb-3.5 p-2.5 rounded-xl bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-emerald-50/70 border border-blue-100/70 flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        </div>
        <p className="text-[11px] font-medium text-slate-700 leading-snug">
          <strong className="font-bold text-slate-900">Material 100% editável</strong> em Word e
          Excel — layout profissional formatado pronto para a sua clínica.
        </p>
      </div>

      {/* Grade Compacta das 5 Fotos Originais (Visualização Atrativa tipo Mosaico) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 flex-1">
        {ORIGINAL_DOCUMENTS.map((doc, idx) => {
          const isWord = doc.type === 'word'
          const isWide = idx === 4 // O último ocupa 2 colunas no mobile ou completa a grade

          return (
            <div
              key={doc.id}
              onClick={() => setSelectedDoc(doc)}
              className={`group/card relative rounded-xl border border-slate-200/80 hover:border-blue-400 bg-slate-50/60 hover:bg-white overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md flex flex-col ${
                isWide ? 'col-span-2 sm:col-span-1' : 'col-span-1'
              }`}
              title="Clique para ver foto original"
            >
              {/* Badge superior do arquivo */}
              <div className="px-2 py-1 bg-white/95 border-b border-slate-100 flex items-center justify-between gap-1">
                <span
                  className={`inline-flex items-center gap-1 text-[9.5px] font-bold px-1.5 py-0.5 rounded ${
                    isWord ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                  }`}
                >
                  {isWord ? (
                    <FileText className="w-2.5 h-2.5" />
                  ) : (
                    <FileSpreadsheet className="w-2.5 h-2.5" />
                  )}
                  {doc.badge}
                </span>

                <Maximize2 className="w-3 h-3 text-slate-400 group-hover/card:text-blue-600 transition-colors" />
              </div>

              {/* Moldura da Foto Original com corte compacto e zoom sutil ao hover */}
              <div className="relative w-full h-24 sm:h-28 bg-slate-100 overflow-hidden flex items-center justify-center">
                <img
                  src={doc.imgSrc}
                  alt={doc.alt}
                  className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover/card:scale-105"
                  loading="lazy"
                />

                {/* Efeito sutil de gradiente na borda inferior para separar do texto */}
                <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Legenda compacta com título do documento */}
              <div className="p-2 bg-white flex-1 flex flex-col justify-between">
                <p className="text-[11px] font-bold text-slate-800 line-clamp-1 leading-tight group-hover/card:text-blue-700 transition-colors">
                  {doc.title}
                </p>
                <p className="text-[9.5px] text-slate-500 line-clamp-1 mt-0.5">{doc.subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Rodapé explicativo compacto */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[10.5px] text-slate-500">
        <span>Fotos reais dos modelos inclusos</span>
        <span className="font-semibold text-slate-700">73 Word • 14 Planilhas</span>
      </div>

      {/* Modal simples e leve de visualização ao clicar */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded ${
                    selectedDoc.type === 'word'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {selectedDoc.badge}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {selectedDoc.title}
                </p>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors shrink-0"
                title="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-3 sm:p-4 overflow-y-auto bg-slate-900/5 flex items-center justify-center flex-1">
              <img
                src={selectedDoc.imgSrc}
                alt={selectedDoc.alt}
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-2.5 px-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="text-[11px] text-slate-500">{selectedDoc.subtitle}</span>
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
