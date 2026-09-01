import React, { useState } from 'react'
import {
  BookOpen,
  Building2,
  Users,
  GraduationCap,
  FileCheck2,
  Droplets,
  Bug,
  Wrench,
  Cpu,
  Trash2,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Ambulance,
  ShieldAlert,
  FileSpreadsheet,
  FileText,
  ChevronLeft,
  ChevronRight,
  Check,
  Info,
  Shield,
  Layers,
} from 'lucide-react'

// Custom Dental Explorer / Double-ended Probe Icon SVG matching Lucide standard style (stroke-width 2, round linecaps)
// Based faithfully on the double-ended dental explorer photo (knurled textured handle, shepherd's hook tip & sharp contra-angle tip)
export const DentalInstrumentsIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = 'w-6 h-6',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Main central textured metal handle running diagonally */}
    <line x1="6.5" y1="17.5" x2="17.5" y2="6.5" />

    {/* Knurling / cross-hatch grip texture markings along the handle */}
    <line x1="8" y1="14" x2="10" y2="16" />
    <line x1="10" y1="12" x2="12" y2="14" />
    <line x1="12" y1="10" x2="14" y2="12" />
    <line x1="14" y1="8" x2="16" y2="10" />

    {/* Upper-Right Working End: Smooth curved Shepherd's hook / Sickle probe */}
    {/* Taper from handle -> shank neck -> curved hook arc -> fine pointed tip */}
    <path d="M17.5 6.5 C 19 5, 19.5 3.8, 18.5 2.5 C 17.5 1.5, 20.5 1.5, 22.5 3.5" />

    {/* Lower-Left Working End: Sharp Contra-angle / Right-angle explorer tip */}
    {/* Shank angled bend -> sharp acute-angle contra-bend -> terminal tip */}
    <path d="M6.5 17.5 L 4.5 19.5 L 4.5 22.5 L 1.5 22.5" />
  </svg>
)

// Alias for backwards compatibility if needed
export const AutoclaveIcon = DentalInstrumentsIcon

// Custom Soap Bubbles Icon SVG (Apenas bolhas de sabão translúcidas com brilho, reflexos de luz e microespuma, sem mãos)
// Design equilibrado e elegante no padrão 24x24 com círculos em harmonia com os outros ícones do Lucide
export const SoapBubblesIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = 'w-6 h-6',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* ===== 1. BOLHA PRINCIPAL (Grande - Centro-inferior / direita) cx=14, cy=14, r=6.5 ===== */}
    <circle cx="14" cy="14" r="6.5" />
    {/* Brilho / Arco de reflexo curvo superior esquerdo */}
    <path d="M10.8 10.5 C12.2 9.2, 14.5 9.0, 16.5 9.8" strokeWidth="1.5" strokeOpacity="0.9" />
    {/* Ponto de destaque secundário / brilho interno */}
    <circle cx="16.5" cy="11.8" r="0.6" fill="currentColor" stroke="none" />

    {/* ===== 2. SEGUNDA BOLHA PRINCIPAL (Média - Superior esquerda) cx=7.5, cy=8.5, r=4.5 ===== */}
    <circle cx="7.5" cy="8.5" r="4.5" />
    {/* Brilho / Reflexo curvado */}
    <path d="M5.2 6.5 C6.2 5.5, 7.8 5.3, 9.2 5.9" strokeWidth="1.3" strokeOpacity="0.9" />
    {/* Ponto de brilho */}
    <circle cx="9.2" cy="7.2" r="0.5" fill="currentColor" stroke="none" />

    {/* ===== 3. TERCEIRA BOLHA (Flutuando no alto à direita) cx=18, cy=4.5, r=2.5 ===== */}
    <circle cx="18" cy="4.5" r="2.5" strokeWidth="1.6" />
    <path d="M17 3.2 C17.6 2.8, 18.5 2.8, 19.2 3.3" strokeWidth="1.2" />

    {/* ===== 4. QUARTA BOLHA (Pequena inferior esquerda / flutuante) cx=4.5, cy=17.5, r=2.2 ===== */}
    <circle cx="4.5" cy="17.5" r="2.2" strokeWidth="1.6" />
    <path d="M3.5 16.3 C4.0 15.9, 4.8 15.9, 5.3 16.4" strokeWidth="1.1" />

    {/* ===== 5. MICROBOLHAS DE ESPUMA / BRILHO (Aeradas e leves) ===== */}
    {/* Microbolha intermediária entre a 1 e a 2 */}
    <circle cx="7" cy="14" r="1.2" strokeWidth="1.4" />
    {/* Microbolha no topo esquerdo */}
    <circle cx="12.5" cy="3.5" r="1.1" strokeWidth="1.3" />
    {/* Gotícula / brilho de espuma cintilante */}
    <circle cx="21" cy="9.5" r="0.75" fill="currentColor" fillOpacity="0.7" stroke="none" />
    <circle cx="2.5" cy="12" r="0.65" fill="currentColor" fillOpacity="0.6" stroke="none" />
  </svg>
)

// Alias for backwards compatibility if needed
export const HandWashIcon = SoapBubblesIcon

export interface ChapterDocumentItem {
  name: string
  fileName?: string
  format?: 'word' | 'excel' | string
}

export interface PhysicalFolderData {
  id: string
  num: string
  labelNumber: string
  tag: string
  title: string
  subtitle: string
  icon: React.ElementType
  colorTheme: {
    name: string
    // Physical spine gradient
    spineGradient: string
    spineHighlight: string
    spineShadow: string
    spineEdge: string
    // Label tag
    labelBg: string
    labelBorder: string
    labelTextColor: string
    // Accents
    accentGlow: string
    badgeColor: string
    metalRingBorder: string
  }
  summaryBullets: string[]
  wordFileName: string
  pagesCount: string
  yearTag: string
  documents?: ChapterDocumentItem[]
}

export const CHAPTERS_17 = [
  'Introdução: Introdução (capa, índice, orientações, etc)',
  'Capítulo 1: Projeto de arquitetura',
  'Capítulo 2: Gestão de recursos humanos',
  'Capítulo 3: Plano anual de educação permanente',
  'Capítulo 4: Contratos, licenças e qualificações de serviços terceirizados',
  'Capítulo 5: Plano de monitoramento e controle da água',
  'Capítulo 6: Controle de pragas e vetores',
  'Capítulo 7: Plano anual de manutenção preventiva e corretiva da edificação e instalações',
  'Capítulo 8: Plano de Gerenciamento de Tecnologias em Saúde (PGTS)',
  'Capítulo 9: Plano de Gerenciamento de Resíduos (PGRSS)',
  'Capítulo 10: Protocolo para processamento de dispositivos médicos incluindo informações de rastreabilidade',
  'Capítulo 11: Protocolo de limpeza de ambientes e superfícies',
  'Capítulo 12: Plano de Segurança do Paciente (PSP)',
  'Capítulo 13: Protocolo de higiene das mãos, precauções e isolamento',
  'Capítulo 14: Protocolo de encaminhamento do profissional em caso de acidentes com exposição a material biológico',
  'Capítulo 15: Protocolo de encaminhamento do paciente em caso de urgências e emergências',
  'Capítulo 16: Plano de prevenção e controle de infecções (PP-IRAS)',
  'Capítulo 17: Outros documentos e normativas aplicáveis',
]

export const PHYSICAL_CHAPTERS: PhysicalFolderData[] = [
  {
    id: 'intro',
    num: '0',
    labelNumber: '0',
    tag: 'Estrutura e Orientações',
    title: 'Introdução (capa, índice, orientações, etc)',
    subtitle:
      'Capa oficial, índice geral, sumário executivo e instruções para preenchimento e personalização',
    icon: BookOpen,
    colorTheme: {
      name: 'Azul Safira Intenso',
      spineGradient: 'from-[#0f3b7a] via-[#1d58ad] to-[#0a2754]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#60a5fa] border-r-[#071d40]',
      labelBg: 'bg-[#f0f6ff]',
      labelBorder: 'border-[#bfdbfe]',
      labelTextColor: 'text-blue-950',
      accentGlow: 'rgba(37, 99, 235, 0.4)',
      badgeColor: 'bg-blue-900/80 text-blue-200 border-blue-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    documents: [
      { name: 'Capa do Manual', fileName: 'Capa_do_Manual.docx' },
      { name: 'Assinatura da equipe', fileName: 'Assinatura_da_equipe.docx' },
      {
        name: 'Instruções de preenchimento do manual',
        fileName: 'Instrucoes_de_preenchimento_do_manual.docx',
      },
      { name: 'Apresentação do manual', fileName: 'Apresentacao_do_manual.docx' },
      { name: 'Índice do manual', fileName: 'Indice_do_manual.docx' },
    ],
    summaryBullets: [
      'Capa padronizada pronta para inserção da logomarca',
      'Termo oficial de assinatura e compromisso da equipe',
      'Instruções detalhadas passo a passo de preenchimento',
      'Apresentação institucional e estrutura do manual',
      'Índice geral com paginação e sumário executivo',
    ],
    wordFileName: '5 arquivos Word (.docx) inclusos nesta pasta',
    pagesCount: '10 páginas',
    yearTag: 'VOL. 0',
  },
  {
    id: 'cap-1',
    num: '1',
    labelNumber: '1',
    tag: 'Arquitetura',
    title: 'Projeto de arquitetura',
    subtitle: 'Layouts físicos, fluxos sanitários, dimensionamento e normas prediais odontológicas',
    icon: Building2,
    colorTheme: {
      name: 'Vermelho Executivo',
      spineGradient: 'from-[#a81c1c] via-[#c92a2a] to-[#7f1313]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#ff6b6b] border-r-[#5c0b0b]',
      labelBg: 'bg-[#faf6ee]',
      labelBorder: 'border-[#d0c8b6]',
      labelTextColor: 'text-red-950',
      accentGlow: 'rgba(220, 38, 38, 0.35)',
      badgeColor: 'bg-red-900/80 text-red-200 border-red-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    documents: [{ name: 'Projeto arquitetônico', fileName: 'Projeto_arquitetonico.docx' }],
    summaryBullets: [
      'Memorial descritivo de fluxos limpo/sujo',
      'Dimensionamento de salas e CME odontológica',
      'Instalações hidrossanitárias e de gases',
    ],
    wordFileName: 'Projeto_arquitetonico.docx',
    pagesCount: '18 páginas',
    yearTag: 'VOL. 01',
  },
  {
    id: 'cap-2',
    num: '2',
    labelNumber: '2',
    tag: 'Equipe e RH',
    title: 'Gestão de recursos humanos',
    subtitle: 'Qualificação profissional, descrição de cargos, treinamentos e registros da equipe',
    icon: Users,
    colorTheme: {
      name: 'Azul Marinho Real',
      spineGradient: 'from-[#143264] via-[#1e458a] to-[#0c1f3f]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#4dabf7] border-r-[#071326]',
      labelBg: 'bg-[#f8f9fa]',
      labelBorder: 'border-[#ced4da]',
      labelTextColor: 'text-blue-950',
      accentGlow: 'rgba(37, 99, 235, 0.35)',
      badgeColor: 'bg-blue-900/80 text-blue-200 border-blue-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    documents: [
      { name: 'Organograma da equipe', fileName: 'Organograma_da_equipe.docx' },
      {
        name: 'Instruções gestão de recursos humanos',
        fileName: 'Instrucoes_gestao_de_recursos_humanos.docx',
      },
      {
        name: 'Ficha funcional responsável técnico',
        fileName: 'Ficha_funcional_responsavel_tecnico.docx',
      },
      {
        name: 'Ficha funcional cirurgião-dentista colaborador',
        fileName: 'Ficha_funcional_cirurgiao_dentista_colaborador.docx',
      },
      {
        name: 'Ficha funcional serviços gerais (limpeza/higienização)',
        fileName: 'Ficha_funcional_servicos_gerais_limpeza_higienizacao.docx',
      },
      {
        name: 'Ficha funcional recepcionista',
        fileName: 'Ficha_funcional_recepcionista.docx',
      },
      { name: 'Ficha funcional ASB', fileName: 'Ficha_funcional_ASB.docx' },
      { name: 'Ficha funcional TSB', fileName: 'Ficha_funcional_TSB.docx' },
    ],
    summaryBullets: [
      'Organograma da equipe e instruções completas de RH',
      'Fichas funcionais de RT, dentistas e equipe de apoio',
      'Fichas funcionais de ASB, TSB e serviços gerais',
    ],
    wordFileName: '8 arquivos Word (.docx) inclusos nesta pasta',
    pagesCount: '14 páginas',
    yearTag: 'VOL. 02',
  },
  {
    id: 'cap-3',
    num: '3',
    labelNumber: '3',
    tag: 'Educação Permanente',
    title: 'Plano anual de educação permanente',
    subtitle: 'Cronograma anual de treinamentos, capacitação em biossegurança e certificações',
    icon: GraduationCap,
    colorTheme: {
      name: 'Verde Floresta AZ',
      spineGradient: 'from-[#1b4332] via-[#2d6a4f] to-[#081c15]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#52b788] border-r-[#05130e]',
      labelBg: 'bg-[#faf8f5]',
      labelBorder: 'border-[#d8d3c5]',
      labelTextColor: 'text-emerald-950',
      accentGlow: 'rgba(16, 185, 129, 0.35)',
      badgeColor: 'bg-emerald-900/80 text-emerald-200 border-emerald-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    documents: [
      {
        name: 'Plano anual de educação permanente',
        fileName: 'Plano_anual_de_educacao_permanente.docx',
        format: 'word',
      },
      {
        name: 'Instrumentos de registro, controle, avaliação e eficácia das capacitações',
        fileName: 'Instrumentos_de_registro_controle_avaliacao_e_eficacia_das_capacitacoes.docx',
        format: 'word',
      },
      {
        name: 'Cronograma anual de educação permanente',
        fileName: 'Cronograma_anual_de_educacao_permanente.xlsx',
        format: 'excel',
      },
    ],
    summaryBullets: [
      'Plano anual de educação permanente',
      'Instrumentos de registro, controle, avaliação e eficácia das capacitações',
      'Cronograma anual de educação permanente em planilha Excel',
    ],
    wordFileName: '3 arquivos inclusos nesta pasta',
    pagesCount: '12 páginas',
    yearTag: 'VOL. 03',
  },
  {
    id: 'cap-4',
    num: '4',
    labelNumber: '4',
    tag: 'Documentação',
    title: 'Contratos, licenças e qualificações de serviços terceirizados',
    subtitle: 'Alvarás, contratos de manutenção, laboratórios de prótese e laudos técnicos',
    icon: FileCheck2,
    colorTheme: {
      name: 'Roxo Imperial',
      spineGradient: 'from-[#491269] via-[#6d219c] to-[#2d0a42]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#be4bdb] border-r-[#1b0528]',
      labelBg: 'bg-[#faf5ff]',
      labelBorder: 'border-[#d6c7eb]',
      labelTextColor: 'text-purple-950',
      accentGlow: 'rgba(168, 85, 247, 0.35)',
      badgeColor: 'bg-purple-900/80 text-purple-200 border-purple-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    documents: [
      {
        name: 'Contratos, licenças e qualificações de serviços terceirizados',
        fileName: 'Contratos_licencas_e_qualificacoes_de_servicos_terceirizados.docx',
      },
    ],
    summaryBullets: [
      'Checklist de alvarás de fornecedores e laboratórios',
      'Contratos de prestação de serviços odontológicos',
      'Qualificação de empresas de esterilização e suporte',
    ],
    wordFileName: '1 arquivo Word (.docx) incluso nesta pasta',
    pagesCount: '16 páginas',
    yearTag: 'VOL. 04',
  },
  {
    id: 'cap-5',
    num: '5',
    labelNumber: '5',
    tag: 'Qualidade da Água',
    title: 'Plano de monitoramento e controle da água',
    subtitle: 'Higienização de caixas d’água, controle de potabilidade e análises periódicas',
    icon: Droplets,
    colorTheme: {
      name: 'Azul Turquesa Intenso',
      spineGradient: 'from-[#086375] via-[#0b8793] to-[#04323b]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#3bc9db] border-r-[#031d22]',
      labelBg: 'bg-[#f0fbfb]',
      labelBorder: 'border-[#bee3e8]',
      labelTextColor: 'text-cyan-950',
      accentGlow: 'rgba(6, 182, 212, 0.35)',
      badgeColor: 'bg-cyan-900/80 text-cyan-200 border-cyan-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    documents: [
      {
        name: 'Plano de monitoramento e controle da água',
        fileName: 'Plano_de_monitoramento_e_controle_da_agua.docx',
        format: 'word',
      },
      {
        name: 'Uso de água destilada para autoclave',
        fileName: 'Uso_de_agua_destilada_para_autoclave.docx',
        format: 'word',
      },
      {
        name: 'Registros da água em serviço odontológico',
        fileName: 'Registros_da_agua_em_servico_odontologico.xlsx',
        format: 'excel',
      },
    ],
    summaryBullets: [
      'Plano de monitoramento e controle da água',
      'Uso de água destilada para autoclave',
      'Registros da água em serviço odontológico',
    ],
    wordFileName: '3 arquivos inclusos nesta pasta',
    pagesCount: '11 páginas',
    yearTag: 'VOL. 05',
  },
  {
    id: 'cap-6',
    num: '6',
    labelNumber: '6',
    tag: 'Controle de Pragas',
    title: 'Controle de pragas e vetores',
    subtitle: 'Comprovantes de desinsetização/desratização, periodicidade e barreiras físicas',
    icon: Bug,
    colorTheme: {
      name: 'Mostarda / Âmbar Escuro',
      spineGradient: 'from-[#9a6700] via-[#c68900] to-[#593b00]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#ffd43b] border-r-[#382500]',
      labelBg: 'bg-[#fffbf0]',
      labelBorder: 'border-[#e8dcb8]',
      labelTextColor: 'text-amber-950',
      accentGlow: 'rgba(245, 158, 11, 0.35)',
      badgeColor: 'bg-amber-900/80 text-amber-200 border-amber-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    documents: [
      {
        name: 'Controle de pragas e vetores',
        fileName: 'Controle_de_pragas_e_vetores.docx',
        format: 'word',
      },
      {
        name: 'Checklist: Controle de pragas e vetores',
        fileName: 'Checklist_Controle_de_pragas_e_vetores.docx',
        format: 'word',
      },
    ],
    summaryBullets: ['Controle de pragas e vetores', 'Checklist: Controle de pragas e vetores'],
    wordFileName: '2 arquivos Word (.docx) inclusos nesta pasta',
    pagesCount: '10 páginas',
    yearTag: 'VOL. 06',
  },
  {
    id: 'cap-7',
    num: '7',
    labelNumber: '7',
    tag: 'Manutenção',
    title: 'Plano anual de manutenção preventiva e corretiva da edificação e instalações',
    subtitle: 'Instalações elétricas, hidráulicas, ar-condicionado (PMOC) e estrutura física',
    icon: Wrench,
    colorTheme: {
      name: 'Cinza Ardósia Industrial',
      spineGradient: 'from-[#343a40] via-[#495057] to-[#212529]',
      spineHighlight: 'from-white/25 via-white/5 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.6),inset_3px_0_8px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#adb5bd] border-r-[#141618]',
      labelBg: 'bg-[#f8f9fa]',
      labelBorder: 'border-[#ced4da]',
      labelTextColor: 'text-slate-950',
      accentGlow: 'rgba(100, 116, 139, 0.35)',
      badgeColor: 'bg-slate-800 text-slate-200 border-slate-600',
      metalRingBorder: 'border-slate-400 ring-slate-900',
    },
    documents: [
      {
        name: 'POP Plano anual de manutenção',
        fileName: 'POP_Plano_anual_de_manutencao.docx',
        format: 'word',
      },
      {
        name: 'Calendário anual de manutenção 2027',
        fileName: 'Calendario_anual_de_manutencao_2027.xlsx',
        format: 'excel',
      },
      {
        name: 'Registro de manutenção preventiva',
        fileName: 'Registro_de_manutencao_preventiva.xlsx',
        format: 'excel',
      },
      {
        name: 'Controle de revisão do plano anual de manutenção',
        fileName: 'Controle_de_revisao_do_plano_anual_de_manutencao.xlsx',
        format: 'excel',
      },
      {
        name: 'Registro de manutenção corretiva',
        fileName: 'Registro_de_manutencao_corretiva.xlsx',
        format: 'excel',
      },
      {
        name: 'Checklist para auditoria do plano de manutenção',
        fileName: 'Checklist_para_auditoria_do_plano_de_manutencao.xlsx',
        format: 'excel',
      },
      {
        name: 'Registro de inspeção e certificados dos prestadores de serviço',
        fileName: 'Registro_de_inspecao_e_certificados_dos_prestadores_de_servico.xlsx',
        format: 'excel',
      },
    ],
    summaryBullets: [
      'POP Plano anual de manutenção',
      'Calendário anual de manutenção 2027',
      'Registro de manutenção preventiva e corretiva',
      'Controle de revisão e checklist de auditoria',
      'Registro de inspeção e certificados de prestadores de serviço',
    ],
    wordFileName: '7 arquivos inclusos nesta pasta',
    pagesCount: '20 páginas',
    yearTag: 'VOL. 07',
  },
  {
    id: 'cap-8',
    num: '8',
    labelNumber: '8',
    tag: '(PGTS)',
    title: 'Plano de Gerenciamento de Tecnologias em Saúde (PGTS)',
    subtitle:
      'Inventário, calibração, manutenção de autoclaves, compressores e fotopolimerizadores',
    icon: Cpu,
    colorTheme: {
      name: 'Magenta / Pink Clássico',
      spineGradient: 'from-[#8a1352] via-[#b5176c] to-[#540930]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#f06595] border-r-[#33041c]',
      labelBg: 'bg-[#fff5f7]',
      labelBorder: 'border-[#f3c2cf]',
      labelTextColor: 'text-pink-950',
      accentGlow: 'rgba(236, 72, 153, 0.35)',
      badgeColor: 'bg-pink-900/80 text-pink-200 border-pink-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    documents: [
      {
        name: 'Plano de gerenciamento de tecnologias em saúde',
        fileName: 'Plano_de_gerenciamento_de_tecnologias_em_saude.docx',
        format: 'word',
      },
      {
        name: 'Registro de descarte de equipamentos',
        fileName: 'Registro_de_descarte_de_equipamentos.xlsx',
        format: 'excel',
      },
      {
        name: 'Registro de treinamento da equipe',
        fileName: 'Registro_de_treinamento_da_equipe.xlsx',
        format: 'excel',
      },
      {
        name: 'Registro de calibração e monitoramento',
        fileName: 'Registro_de_calibracao_e_monitoramento.xlsx',
        format: 'excel',
      },
      {
        name: 'Registro de manutenção preventiva e corretiva de equipamentos',
        fileName: 'Registro_de_manutencao_preventiva_e_corretiva_de_equipamentos.xlsx',
        format: 'excel',
      },
      {
        name: 'Cronograma de manutenção dos equipamentos',
        fileName: 'Cronograma_de_manutencao_dos_equipamentos.xlsx',
        format: 'excel',
      },
      {
        name: 'Inventário dos equipamentos',
        fileName: 'Inventario_dos_equipamentos.xlsx',
        format: 'excel',
      },
    ],
    summaryBullets: [
      'Plano de gerenciamento de tecnologias em saúde',
      'Registro de descarte e calibração de equipamentos',
      'Cronograma e registros de manutenção preventiva/corretiva',
    ],
    wordFileName: '7 arquivos inclusos nesta pasta',
    pagesCount: '22 páginas',
    yearTag: 'VOL. 08',
  },
  {
    id: 'cap-9',
    num: '9',
    labelNumber: '9',
    tag: 'Resíduos Odonto (PGRSS)',
    title: 'Plano de Gerenciamento de Resíduos (PGRSS)',
    subtitle:
      'Segregação, acondicionamento, perfurocortantes, resíduos químicos e coleta especializada',
    icon: Trash2,
    colorTheme: {
      name: 'Laranja Terracota',
      spineGradient: 'from-[#b33a00] via-[#d9480f] to-[#782400]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#ff922b] border-r-[#4e1700]',
      labelBg: 'bg-[#fff9f5]',
      labelBorder: 'border-[#fbd0b8]',
      labelTextColor: 'text-orange-950',
      accentGlow: 'rgba(249, 115, 22, 0.35)',
      badgeColor: 'bg-orange-900/80 text-orange-200 border-orange-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Classificação dos grupos A, B, D e E (amálgama e perfurocortante)',
      'POP de descarte seguro e abrigo temporário de resíduos',
      'Manifesto de transporte e destinação final de resíduos',
    ],
    wordFileName: 'Capitulo_09_PGRSS_Gerenciamento_Residuos.docx',
    pagesCount: '19 páginas',
    yearTag: 'VOL. 09',
  },
  {
    id: 'cap-10',
    num: '10',
    labelNumber: '10',
    tag: 'Central de Esterilização (CME)',
    title:
      'Protocolo para processamento de dispositivos médicos incluindo informações de rastreabilidade',
    subtitle:
      'Fluxo unidirecional de CME, esterilização, indicadores químicos/biológicos e rotulagem',
    icon: DentalInstrumentsIcon,
    colorTheme: {
      name: 'Azul Celeste Hospitalar',
      spineGradient: 'from-[#0077b6] via-[#0096c7] to-[#023e8a]',
      spineHighlight: 'from-white/40 via-white/15 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.3)]',
      spineEdge: 'border-l-[#48cae4] border-r-[#03045e]',
      labelBg: 'bg-[#f0f8ff]',
      labelBorder: 'border-[#b6ddfc]',
      labelTextColor: 'text-blue-950',
      accentGlow: 'rgba(0, 150, 199, 0.45)',
      badgeColor: 'bg-cyan-900/80 text-cyan-200 border-cyan-600',
      metalRingBorder: 'border-slate-200 ring-slate-800',
    },
    summaryBullets: [
      'Fluxograma completo do expurgo à guarda esterilizada',
      'Planilha de rastreabilidade e controle de ciclos biológicos',
      'Rotulagem com data, lote, responsável e validade',
    ],
    wordFileName: 'Capitulo_10_Processamento_Dispositivos_Medicos.docx',
    pagesCount: '28 páginas',
    yearTag: 'VOL. 10',
  },
  {
    id: 'cap-11',
    num: '11',
    labelNumber: '11',
    tag: 'Limpeza e Superfícies',
    title: 'Protocolo de limpeza de ambientes e superfícies',
    subtitle: 'Higienização de consultórios, desinfecção concorrente e terminal, POPs de limpeza',
    icon: Sparkles,
    colorTheme: {
      name: 'Verde Oliva Escuro',
      spineGradient: 'from-[#386641] via-[#4d8b59] to-[#203a25]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#8cb369] border-r-[#132317]',
      labelBg: 'bg-[#f8faf6]',
      labelBorder: 'border-[#cfe0c4]',
      labelTextColor: 'text-green-950',
      accentGlow: 'rgba(74, 222, 128, 0.35)',
      badgeColor: 'bg-emerald-900/80 text-emerald-200 border-emerald-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'POPs de limpeza entre pacientes (alta rotação e cadeira)',
      'Limpeza terminal diária e semanal do consultório',
      'Diluição padronizada e saneantes aprovados pela ANVISA',
    ],
    wordFileName: 'Capitulo_11_Limpeza_Ambientes_Superficies.docx',
    pagesCount: '15 páginas',
    yearTag: 'VOL. 11',
  },
  {
    id: 'cap-12',
    num: '12',
    labelNumber: '12',
    tag: 'Segurança do Paciente (PSP)',
    title: 'Plano de Segurança do Paciente (PSP)',
    subtitle:
      'Metas internacionais, identificação correta, prevenção de quedas e notificação de incidentes',
    icon: ShieldCheck,
    colorTheme: {
      name: 'Vinho Bordô Profundo',
      spineGradient: 'from-[#67001a] via-[#850022] to-[#450011]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#c92a2a] border-r-[#2b000a]',
      labelBg: 'bg-[#fdf8f8]',
      labelBorder: 'border-[#e8c8ce]',
      labelTextColor: 'text-rose-950',
      accentGlow: 'rgba(225, 29, 72, 0.35)',
      badgeColor: 'bg-rose-900/80 text-rose-200 border-rose-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Metas de identificação segura do paciente e dente correto',
      'Checklist de cirurgia odontológica segura',
      'Ficha de notificação interna e plano de ação de incidentes',
    ],
    wordFileName: 'Capitulo_12_Plano_Seguranca_Paciente_PSP.docx',
    pagesCount: '17 páginas',
    yearTag: 'VOL. 12',
  },
  {
    id: 'cap-13',
    num: '13',
    labelNumber: '13',
    tag: 'Higiene e EPIs',
    title: 'Protocolo de higiene das mãos, precauções e isolamento',
    subtitle:
      'Técnica correta de antissepsia, uso racional de EPIs e prevenção de transmissão cruzada',
    icon: SoapBubblesIcon,
    colorTheme: {
      name: 'Azul Cobalto Brilhante',
      spineGradient: 'from-[#1e3d59] via-[#2a557d] to-[#122638]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#64b5f6] border-r-[#0b1824]',
      labelBg: 'bg-[#f3f8fd]',
      labelBorder: 'border-[#c1dbf5]',
      labelTextColor: 'text-blue-950',
      accentGlow: 'rgba(30, 61, 89, 0.35)',
      badgeColor: 'bg-blue-900/80 text-blue-200 border-blue-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Passo a passo visual dos 5 momentos de higiene das mãos',
      'Paramentação e desparamentação segura de EPIs',
      'Precauções padrão, por contato e por gotículas/aerossóis',
    ],
    wordFileName: 'Capitulo_13_Higiene_Maos_EPIs.docx',
    pagesCount: '13 páginas',
    yearTag: 'VOL. 13',
  },
  {
    id: 'cap-14',
    num: '14',
    labelNumber: '14',
    tag: 'Acidentes Biológicos',
    title:
      'Protocolo de encaminhamento do profissional em caso de acidentes com exposição a material biológico',
    subtitle:
      'Conduta imediata pós-exposição, quimioprofilaxia, fluxo de atendimento, CAT e acompanhamento',
    icon: AlertTriangle,
    colorTheme: {
      name: 'Amarelo Segurança / Ocre',
      spineGradient: 'from-[#c25e00] via-[#e8710a] to-[#803e00]',
      spineHighlight: 'from-white/40 via-white/15 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.3)]',
      spineEdge: 'border-l-[#ffb366] border-r-[#522800]',
      labelBg: 'bg-[#fffaf0]',
      labelBorder: 'border-[#eddab4]',
      labelTextColor: 'text-amber-950',
      accentGlow: 'rgba(234, 88, 12, 0.35)',
      badgeColor: 'bg-orange-900/80 text-orange-200 border-orange-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Fluxograma pós-perfuração com agulha/instrumental',
      'Formulário de notificação de acidente ocupacional (CAT)',
      'Encaminhamento para PEP (Profilaxia Pós-Exposição)',
    ],
    wordFileName: 'Capitulo_14_Acidentes_Exposicao_Biologica.docx',
    pagesCount: '16 páginas',
    yearTag: 'VOL. 14',
  },
  {
    id: 'cap-15',
    num: '15',
    labelNumber: '15',
    tag: 'Urgências e Emergências',
    title: 'Protocolo de encaminhamento do paciente em caso de urgências e emergências',
    subtitle:
      'Suporte básico de vida odontológico, kit de emergência, fluxo SAMU e encaminhamento hospitalar',
    icon: Ambulance,
    colorTheme: {
      name: 'Vermelho Carmim de Emergência',
      spineGradient: 'from-[#9b111e] via-[#c1121f] to-[#660708]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#f87171] border-r-[#3b0204]',
      labelBg: 'bg-[#fff5f5]',
      labelBorder: 'border-[#fed7d7]',
      labelTextColor: 'text-red-950',
      accentGlow: 'rgba(220, 38, 38, 0.35)',
      badgeColor: 'bg-red-900/80 text-red-200 border-red-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Kit de emergência médica no consultório dentário',
      'Protocolos de PCR, síncope, anafilaxia e crises hipertensivas',
      'Ficha de transferência rápida para SAMU / Pronto Atendimento',
    ],
    wordFileName: 'Capitulo_15_Urgencias_Emergencias_Odonto.docx',
    pagesCount: '21 páginas',
    yearTag: 'VOL. 15',
  },
  {
    id: 'cap-16',
    num: '16',
    labelNumber: '16',
    tag: 'Prevenção de Infecções (PP-IRAS)',
    title: 'Plano de prevenção e controle de infecções (PP-IRAS)',
    subtitle:
      'Programa de controle de infecções relacionadas à assistência à saúde e auditorias internas',
    icon: ShieldAlert,
    colorTheme: {
      name: 'Azul Petróleo / Teal',
      spineGradient: 'from-[#0b525b] via-[#14746f] to-[#063035]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5),inset_3px_0_8px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#48bfe3] border-r-[#03191c]',
      labelBg: 'bg-[#f0f9f9]',
      labelBorder: 'border-[#bfe0e0]',
      labelTextColor: 'text-teal-950',
      accentGlow: 'rgba(20, 184, 166, 0.35)',
      badgeColor: 'bg-teal-900/80 text-teal-200 border-teal-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Diretrizes de prevenção de infecção cruzada odontológica',
      'Auditorias periódicas e checklists de conformidade',
      'Indicadores de vigilância epidemiológica na clínica',
    ],
    wordFileName: 'Capitulo_16_PP_IRAS_Controle_Infeccoes.docx',
    pagesCount: '24 páginas',
    yearTag: 'VOL. 16',
  },
  {
    id: 'cap-17',
    num: '17',
    labelNumber: '17',
    tag: 'Normativas e Formulários',
    title: 'Outros documentos e normativas aplicáveis',
    subtitle:
      'Formulários complementares, termos de consentimento, fichas de controle e normas locais',
    icon: FileSpreadsheet,
    colorTheme: {
      name: 'Preto Couro Clássico AZ',
      spineGradient: 'from-[#1a1c20] via-[#2d3139] to-[#0f1013]',
      spineHighlight: 'from-white/25 via-white/5 to-transparent',
      spineShadow:
        'shadow-[inset_-3px_0_8px_rgba(0,0,0,0.7),inset_3px_0_8px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#6c757d] border-r-[#050607]',
      labelBg: 'bg-[#f5f5f7]',
      labelBorder: 'border-[#ced4da]',
      labelTextColor: 'text-slate-950',
      accentGlow: 'rgba(71, 85, 105, 0.35)',
      badgeColor: 'bg-slate-800 text-slate-200 border-slate-600',
      metalRingBorder: 'border-slate-400 ring-slate-900',
    },
    summaryBullets: [
      'Modelos de Termo de Consentimento Livre e Esclarecido (TCLE)',
      'Fichas de anamnese e termos de responsabilidade do paciente',
      'Compilado de portarias estaduais e municipais de vigilância',
    ],
    wordFileName: 'Capitulo_17_Outros_Documentos_Normativas.docx',
    pagesCount: '30 páginas',
    yearTag: 'VOL. 17',
  },
]

export const DocumentExplosion: React.FC = () => {
  // Default to Chapter 10 (Esterilização / CME)
  const [selectedIndex, setSelectedIndex] = useState<number>(10)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const activeIdx = hoveredIndex !== null ? hoveredIndex : selectedIndex
  const activeChapter = PHYSICAL_CHAPTERS[activeIdx] || PHYSICAL_CHAPTERS[0]
  const ActiveIcon = activeChapter.icon

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : PHYSICAL_CHAPTERS.length - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < PHYSICAL_CHAPTERS.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="relative w-full mx-auto select-none">
      {/* ================= FLOATING BADGES & STATUS BAR AT TOP ================= */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-1">
        {/* Left: Floating Status Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Green pulsing indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Documentos formulados conforme os capítulos da RDC 1002/2025</span>
          </div>

          {/* RDC 1002 Seal */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold shadow-xs">
            <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Consultório seguro contra multas</span>
          </div>

          {/* +50 Docs Word Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold shadow-xs">
            <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>69 Documentos em Word (.docx) prontos para usar</span>
          </div>
        </div>

        {/* Right: Shelf Hint */}
        <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-full border border-slate-200/60">
          <Layers className="w-3.5 h-3.5 text-slate-400" />
          <span>Passe o mouse ou clique nas pastas para inspecionar</span>
        </div>
      </div>

      {/* ================= THE FLOATING 17 FOLDERS ON A SLIM WOODEN SHELF ================= */}
      <div className="relative pt-4 pb-0">
        {/* Ambient subtle warm glow beneath active folder */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700 opacity-40"
          style={{
            background: `radial-gradient(circle, ${activeChapter.colorTheme.accentGlow} 0%, rgba(217, 119, 6, 0.08) 40%, transparent 70%)`,
          }}
        />

        {/* 17 Floating Binders Row */}
        <div className="relative z-10 w-full overflow-x-auto pb-6 pt-6 px-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          <div className="flex items-end justify-between sm:justify-center gap-1 sm:gap-1.5 md:gap-2 min-w-[720px] lg:min-w-0 max-w-5xl mx-auto px-2">
            {PHYSICAL_CHAPTERS.map((chap, idx) => {
              const isSelected = activeIdx === idx
              const ChapIcon = chap.icon
              const theme = chap.colorTheme

              return (
                <button
                  key={chap.id}
                  type="button"
                  onClick={() => {
                    setSelectedIndex(idx)
                    setHoveredIndex(null)
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  title={
                    chap.labelNumber === '0'
                      ? chap.title
                      : `Capítulo ${chap.labelNumber}: ${chap.title}`
                  }
                  aria-label={
                    chap.labelNumber === '0'
                      ? chap.title
                      : `Capítulo ${chap.labelNumber}: ${chap.title}`
                  }
                  className={`group relative flex-1 flex flex-col justify-between rounded-t-md transition-all duration-300 cursor-pointer outline-none min-w-[32px] sm:min-w-[38px] md:min-w-[42px] max-w-[56px] ${
                    isSelected
                      ? '-translate-y-7 scale-105 z-30'
                      : 'hover:-translate-y-4 hover:scale-102 z-10'
                  }`}
                  style={{
                    height: isSelected ? '175px' : '155px',
                    transformOrigin: 'bottom center',
                  }}
                >
                  {/* Floating Hover Tooltip with Full Chapter Name */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 flex flex-col items-center">
                    <div className="bg-slate-900/95 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap border border-slate-700 backdrop-blur-xs">
                      <span className="text-amber-300 mr-1.5">
                        {chap.labelNumber === '0' ? 'Introdução:' : `Capítulo ${chap.labelNumber}:`}
                      </span>
                      <span>{chap.title}</span>
                    </div>
                    <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-900/95" />
                  </div>
                  {/* Floating Folder Spine Body */}{' '}
                  <div
                    className={`relative w-full h-full rounded-t-md bg-gradient-to-b ${theme.spineGradient} ${theme.spineShadow} border-t border-x border-white/25 flex flex-col justify-between p-1 transition-all overflow-hidden ${
                      isSelected
                        ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-white shadow-[0_20px_35px_rgba(0,0,0,0.35),0_0_15px_rgba(59,130,246,0.3)]'
                        : 'shadow-[0_10px_20px_rgba(0,0,0,0.22)] group-hover:shadow-[0_16px_28px_rgba(0,0,0,0.3)]'
                    }`}
                  >
                    {/* Realistic Plastic/Leather Grain Overlay */}
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                      style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0.5px, transparent 1px)`,
                        backgroundSize: '3px 3px',
                      }}
                    />

                    {/* Gloss / Light reflection on curved spine surface */}
                    <div
                      className={`absolute top-0 bottom-0 left-0.5 w-1.5 bg-gradient-to-r ${theme.spineHighlight} pointer-events-none`}
                    />
                    <div className="absolute top-0 bottom-0 right-0.5 w-1 bg-black/25 pointer-events-none" />

                    {/* Top Metal Edge Protector */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 border-b border-slate-600/40 opacity-90 pointer-events-none" />

                    {/* ================= SPINAL PAPER LABEL TICKET ================= */}
                    <div className="relative z-10 w-full mt-1">
                      <div
                        className={`w-full rounded-[2px] ${theme.labelBg} border ${theme.labelBorder} shadow-[0_1px_3px_rgba(0,0,0,0.25)] py-1.5 px-0.5 flex flex-col items-center justify-center text-center`}
                      >
                        {/* Paper label lines decoration */}
                        <div className="w-4 h-0.5 bg-slate-400/40 rounded-full mb-1" />

                        {/* Arabic Numeral ONLY (clean, no prefix, no leading zero) */}
                        <span className="text-[12px] sm:text-[13px] font-black text-slate-900 tracking-tight leading-none font-sans">
                          {chap.labelNumber}
                        </span>
                      </div>
                    </div>

                    {/* ================= MIDDLE: CHAPTER ICON ONLY (Hover tooltip shows full name) ================= */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto py-1">
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center text-white/95 shadow-xs transition-transform ${
                          isSelected
                            ? 'scale-110 bg-black/35 ring-1 ring-white/30'
                            : 'bg-black/25 group-hover:bg-black/35'
                        }`}
                      >
                        <ChapIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>
                    </div>

                    {/* ================= BOTTOM: METAL PULL HOLE (RING HOLE) ================= */}
                    <div className="relative z-10 flex flex-col items-center pb-2">
                      {/* Metal Grommet Ring */}
                      <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 p-[1.5px] shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.8)]">
                        <div className="w-full h-full rounded-full bg-gradient-to-b from-black via-slate-950 to-slate-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        </div>
                      </div>
                    </div>
                    {/* Active Folder Floating Arrow Indicator */}
                    {isSelected && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] ring-2 ring-white" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* ================= SLIM REALISTIC WOODEN SHELF BASE (BARRA FINA DE MADEIRA) ================= */}
        <div className="relative w-full max-w-5xl mx-auto -mt-6">
          {/* Top bevel of the wooden shelf */}
          <div className="h-2 w-full bg-gradient-to-r from-[#8a532d] via-[#a3683a] to-[#8a532d] rounded-t-sm shadow-inner border-t border-[#c68953]" />
          {/* Front face of the slim wooden shelf */}
          <div className="h-4 w-full bg-gradient-to-b from-[#6b3f20] via-[#543017] to-[#3b200e] rounded-b-md shadow-[0_8px_20px_rgba(0,0,0,0.25)] flex items-center justify-between px-4 text-[10px] font-bold text-amber-200/70 border-b border-[#2d180b]">
            <span className="tracking-wider uppercase text-[9px] text-[#e0b288] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 inline-block" />
              Estante Física do Manual de Boas Práticas (18 Pastas)
            </span>
            <span className="text-[9px] text-[#d59e6f] font-semibold hidden sm:inline-block">
              Clique em qualquer pasta para abrir os modelos
            </span>
          </div>
          {/* Shelf shadow on white floor */}
          <div className="w-[96%] h-3 bg-slate-900/15 blur-md mx-auto rounded-full mt-0.5" />
        </div>
      </div>

      {/* ================= ACTIVE FOLDER DETAILS / INSPECTION CARD (CLEAN WHITE/LIGHT THEME) ================= */}
      <div className="mt-8 relative rounded-2xl bg-white border border-slate-200/80 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,0,0,0.03)] p-5 sm:p-7 overflow-hidden">
        {/* Top subtle theme accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r"
          style={{
            backgroundImage: `linear-gradient(to right, ${activeChapter.colorTheme.accentGlow}, #3b82f6, ${activeChapter.colorTheme.accentGlow})`,
          }}
        />

        {/* Header of the opened folder */}
        <div className="flex items-start justify-between gap-3 sm:gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pr-2">
            {/* Folder Icon with matching Theme Color */}
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${activeChapter.colorTheme.spineGradient} flex items-center justify-center text-white shadow-md border border-white/30 shrink-0`}
            >
              <ActiveIcon className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-xs" />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs sm:text-sm font-black tracking-wider text-blue-700 uppercase">
                  {activeChapter.labelNumber === '0'
                    ? 'INTRODUÇÃO'
                    : `CAPÍTULO ${activeChapter.labelNumber}`}
                </span>
                <span className="text-slate-300 text-xs hidden sm:inline">•</span>

                <span className="text-[11px] sm:text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
                  {activeChapter.tag}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight mt-0.5">
                {activeChapter.title}
              </h3>
            </div>
          </div>

          {/* Navigation Between Chapters - Top Right Position */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 shrink-0 self-start">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Pasta anterior"
              title="Pasta anterior"
              className="w-8 h-8 rounded-md bg-white border border-slate-200/80 hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima pasta"
              title="Próxima pasta"
              className="w-8 h-8 rounded-md bg-white border border-slate-200/80 hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Subtitle description */}

        {/* ================= REAL PHYSICAL DOCUMENT SHEET INSIDE FOLDER (WORD .DOCX DETAIL) ================= */}
        <div className="mt-5 relative">
          {/* Top 3 standard seals - shown once per folder/chapter */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3.5">
            <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-300/80">
              <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-700" />
              Pronto para uso imediato
            </span>
            <span className="font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 text-xs">
              Basta inserir seus dados e logotipo
            </span>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-md">
              100% editáveis
            </span>
          </div>

          {activeChapter.documents && activeChapter.documents.length > 0 ? (
            /* Multi-document vertical list (Ex: Introdução, Capítulos 1, 2, 3...) */
            <div className="space-y-3">
              <div className="divide-y divide-slate-200/80 rounded-xl bg-gradient-to-b from-slate-50 via-white to-slate-50/60 text-slate-900 shadow-sm border border-slate-200/80 overflow-hidden">
                {activeChapter.documents.map((doc, dIdx) => {
                  const isExcel =
                    doc.format === 'excel' ||
                    (doc.fileName && doc.fileName.endsWith('.xlsx')) ||
                    (doc.fileName && doc.fileName.endsWith('.xls'))

                  return (
                    <div
                      key={dIdx}
                      className="flex items-center justify-between p-3.5 sm:p-4 gap-3 hover:bg-slate-50/80 transition-colors"
                    >
                      {/* Left side: Icon (Word or Excel) + Document Title */}
                      <div className="flex items-center gap-3 min-w-0">
                        {isExcel ? (
                          <div className="w-10 h-10 rounded-xl bg-[#107c41] text-white flex items-center justify-center font-black shadow-xs shrink-0 relative overflow-hidden group">
                            <span className="text-sm font-extrabold tracking-tight">X</span>
                            <div className="absolute top-0 left-0 right-0 h-1 bg-white/25" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-xl bg-[#185abd] text-white flex items-center justify-center font-black shadow-xs shrink-0 relative overflow-hidden group">
                            <span className="text-sm font-extrabold tracking-tight">W</span>
                            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <span className="text-sm sm:text-base font-bold text-slate-900 block truncate">
                            {doc.name}
                          </span>
                          <span className="text-[11px] sm:text-xs font-medium text-slate-500 block">
                            {isExcel
                              ? 'Planilha Microsoft Excel (.xlsx)'
                              : 'Documento Microsoft Word (.docx)'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Bottom footer with file count information */}
              <div className="flex items-center justify-between px-1 pt-1 text-slate-500">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  {activeChapter.documents.some(
                    (d) => d.format === 'excel' || d.fileName?.endsWith('.xlsx'),
                  )
                    ? `Arquivos inclusos nessa pasta (${activeChapter.documents.length})`
                    : `Arquivos em word (.docx) inclusos nessa pasta (${activeChapter.documents.length})`}
                </span>
              </div>
            </div>
          ) : (
            /* Single document layout (Capítulos 1 a 17) */
            <div className="relative z-10 rounded-xl bg-gradient-to-b from-slate-50 via-white to-slate-50/60 p-4 sm:p-5 text-slate-900 shadow-sm border border-slate-200/80">
              {/* Word File Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#185abd] text-white flex items-center justify-center text-xs font-black shadow-sm">
                  W
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black text-slate-900 block">
                    {activeChapter.wordFileName}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                    Arquivo Word (.docx) 100% editável e formatado
                  </span>
                </div>
              </div>

              {/* Document Topics Checklist */}
              <div className="mt-3.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-2">
                  Modelos e Conteúdos Inclusos nesta Pasta:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {activeChapter.summaryBullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-slate-200/70 shadow-xs"
                    >
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 stroke-[3]" />
                      <span className="text-xs font-semibold text-slate-800 leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer with file count information */}
              <div className="flex items-center justify-between px-1 pt-3 mt-3 border-t border-slate-200/80 text-slate-500">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  Arquivos em word (.docx) inclusos nessa pasta (1)
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {activeChapter.pagesCount}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DocumentExplosion
