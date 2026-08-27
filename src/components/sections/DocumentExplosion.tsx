import React, { useState } from 'react'
import {
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
  Sparkles,
  ShieldCheck,
  HandMetal,
  AlertTriangle,
  Ambulance,
  ShieldAlert,
  FileSpreadsheet,
  FileText,
  Folder,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
  Check,
  Layers,
  Sparkle,
  Bookmark,
  ExternalLink,
} from 'lucide-react'

export interface ChapterInfo {
  id: string
  num: string
  roman: string
  tag: string
  title: string
  subtitle: string
  icon: React.ElementType
  color: {
    folderGradient: string
    folderBorder: string
    spineBg: string
    tabBg: string
    tabText: string
    iconBg: string
    accentText: string
    glow: string
    badgeBg: string
    badgeText: string
  }
  summaryBullets: string[]
  wordFileName: string
}

export const CHAPTERS_17: ChapterInfo[] = [
  {
    id: 'cap-1',
    num: '01',
    roman: 'CAPÍTULO I',
    tag: 'Arquitetura Sanitária',
    title: 'Projeto básico de arquitetura',
    subtitle: 'Layouts físicos, fluxos sanitários, dimensionamento e normas prediais odontológicas',
    icon: Building2,
    color: {
      folderGradient: 'from-blue-600 via-blue-700 to-indigo-900',
      folderBorder: 'border-blue-400/50',
      spineBg: 'bg-blue-800',
      tabBg: 'bg-blue-600',
      tabText: 'text-blue-100',
      iconBg: 'from-blue-500 to-cyan-600',
      accentText: 'text-blue-700',
      glow: 'rgba(37, 99, 235, 0.4)',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      badgeText: 'text-blue-700',
    },
    summaryBullets: [
      'Memorial descritivo de fluxos limpo/sujo',
      'Dimensionamento de salas e CME odontológica',
      'Instalações hidrossanitárias e de gases',
    ],
    wordFileName: 'Capitulo_I_Projeto_Basico_Arquitetura.docx',
  },
  {
    id: 'cap-2',
    num: '02',
    roman: 'CAPÍTULO II',
    tag: 'Equipe e RH',
    title: 'Gestão de recursos humanos',
    subtitle: 'Qualificação profissional, descrição de cargos, treinamentos e registros da equipe',
    icon: Users,
    color: {
      folderGradient: 'from-emerald-600 via-emerald-700 to-teal-900',
      folderBorder: 'border-emerald-400/50',
      spineBg: 'bg-emerald-800',
      tabBg: 'bg-emerald-600',
      tabText: 'text-emerald-100',
      iconBg: 'from-emerald-500 to-teal-600',
      accentText: 'text-emerald-700',
      glow: 'rgba(16, 185, 129, 0.4)',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      badgeText: 'text-emerald-700',
    },
    summaryBullets: [
      'Fichas de qualificação e registro CRO',
      'Termos de responsabilidade técnica e ASB/TSB',
      'Manual de integração e conduta da equipe',
    ],
    wordFileName: 'Capitulo_II_Gestao_Recursos_Humanos.docx',
  },
  {
    id: 'cap-3',
    num: '03',
    roman: 'CAPÍTULO III',
    tag: 'Educação Continuada',
    title: 'Plano anual de educação permanente',
    subtitle: 'Cronograma anual de treinamentos, capacitação em biossegurança e certificações',
    icon: GraduationCap,
    color: {
      folderGradient: 'from-indigo-600 via-indigo-700 to-violet-900',
      folderBorder: 'border-indigo-400/50',
      spineBg: 'bg-indigo-800',
      tabBg: 'bg-indigo-600',
      tabText: 'text-indigo-100',
      iconBg: 'from-indigo-500 to-purple-600',
      accentText: 'text-indigo-700',
      glow: 'rgba(99, 102, 241, 0.4)',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      badgeText: 'text-indigo-700',
    },
    summaryBullets: [
      'Matriz anual de treinamentos obrigatórios',
      'Listas de presença e avaliações de eficácia',
      'Certificados de capacitação periódica',
    ],
    wordFileName: 'Capitulo_III_Plano_Educacao_Permanente.docx',
  },
  {
    id: 'cap-4',
    num: '04',
    roman: 'CAPÍTULO IV',
    tag: 'Serviços Terceirizados',
    title: 'Contratos, licenças e qualificações de serviços terceirizados',
    subtitle: 'Alvarás, contratos de manutenção, laboratórios de prótese e laudos técnicos',
    icon: FileCheck2,
    color: {
      folderGradient: 'from-teal-600 via-teal-700 to-cyan-900',
      folderBorder: 'border-teal-400/50',
      spineBg: 'bg-teal-800',
      tabBg: 'bg-teal-600',
      tabText: 'text-teal-100',
      iconBg: 'from-teal-500 to-emerald-600',
      accentText: 'text-teal-700',
      glow: 'rgba(20, 184, 166, 0.4)',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
      badgeText: 'text-teal-700',
    },
    summaryBullets: [
      'Checklist de alvarás de fornecedores e laboratórios',
      'Contratos de prestação de serviços odontológicos',
      'Qualificação de empresas de esterilização e suporte',
    ],
    wordFileName: 'Capitulo_IV_Contratos_Licencas_Terceirizados.docx',
  },
  {
    id: 'cap-5',
    num: '05',
    roman: 'CAPÍTULO V',
    tag: 'Qualidade da Água',
    title: 'Plano de monitoramento e controle da água',
    subtitle: 'Higienização de caixas d’água, controle de potabilidade e análises periódicas',
    icon: Droplets,
    color: {
      folderGradient: 'from-cyan-600 via-cyan-700 to-blue-900',
      folderBorder: 'border-cyan-400/50',
      spineBg: 'bg-cyan-800',
      tabBg: 'bg-cyan-600',
      tabText: 'text-cyan-100',
      iconBg: 'from-cyan-500 to-blue-600',
      accentText: 'text-cyan-700',
      glow: 'rgba(6, 182, 212, 0.4)',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      badgeText: 'text-cyan-700',
    },
    summaryBullets: [
      'Protocolo de desinfecção de linhas de água dos equipos',
      'Laudos de potabilidade físico-química e microbiológica',
      'Cronograma semestral de limpeza de reservatórios',
    ],
    wordFileName: 'Capitulo_V_Plano_Controle_Agua.docx',
  },
  {
    id: 'cap-6',
    num: '06',
    roman: 'CAPÍTULO VI',
    tag: 'Controle de Pragas',
    title: 'Controle de vetores e pragas urbanas',
    subtitle: 'Comprovantes de desinsetização/desratização, periodicidade e barreiras físicas',
    icon: Bug,
    color: {
      folderGradient: 'from-amber-600 via-amber-700 to-orange-900',
      folderBorder: 'border-amber-400/50',
      spineBg: 'bg-amber-800',
      tabBg: 'bg-amber-600',
      tabText: 'text-amber-100',
      iconBg: 'from-amber-500 to-yellow-600',
      accentText: 'text-amber-700',
      glow: 'rgba(245, 158, 11, 0.4)',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      badgeText: 'text-amber-700',
    },
    summaryBullets: [
      'Controle integrado de pragas com certificadora',
      'Mapeamento de armadilhas e barreiras físicas',
      'Registro de aplicações e fichas toxicológicas',
    ],
    wordFileName: 'Capitulo_VI_Controle_Vetores_Pragas.docx',
  },
  {
    id: 'cap-7',
    num: '07',
    roman: 'CAPÍTULO VII',
    tag: 'Manutenção Predial',
    title: 'Plano anual de manutenção preventiva e corretiva da edificação e instalações',
    subtitle: 'Instalações elétricas, hidráulicas, ar-condicionado (PMOC) e estrutura física',
    icon: Wrench,
    color: {
      folderGradient: 'from-sky-600 via-sky-700 to-slate-900',
      folderBorder: 'border-sky-400/50',
      spineBg: 'bg-sky-800',
      tabBg: 'bg-sky-600',
      tabText: 'text-sky-100',
      iconBg: 'from-sky-500 to-cyan-600',
      accentText: 'text-sky-700',
      glow: 'rgba(14, 165, 233, 0.4)',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
      badgeText: 'text-sky-700',
    },
    summaryBullets: [
      'PMOC completo para climatização odontológica',
      'Inspeção preventiva de compressores e bombas de vácuo',
      'Relatórios e cronograma de manutenção estrutural',
    ],
    wordFileName: 'Capitulo_VII_Manutencao_Predial_PMOC.docx',
  },
  {
    id: 'cap-8',
    num: '08',
    roman: 'CAPÍTULO VIII',
    tag: 'Tecnologias em Saúde (PGTS)',
    title: 'Plano de Gerenciamento de Tecnologias em Saúde (PGTS)',
    subtitle:
      'Inventário, calibração, manutenção de autoclaves, compressores e fotopolimerizadores',
    icon: Cpu,
    color: {
      folderGradient: 'from-violet-600 via-violet-700 to-purple-900',
      folderBorder: 'border-violet-400/50',
      spineBg: 'bg-violet-800',
      tabBg: 'bg-violet-600',
      tabText: 'text-violet-100',
      iconBg: 'from-violet-500 to-indigo-600',
      accentText: 'text-violet-700',
      glow: 'rgba(139, 92, 246, 0.4)',
      badgeBg: 'bg-violet-50 text-violet-700 border-violet-200',
      badgeText: 'text-violet-700',
    },
    summaryBullets: [
      'Inventário completo de equipamentos com tag de registro',
      'Calibração anual e testes de fotopolimerizador e raio-X',
      'Histórico de manutenção de autoclaves e periféricos',
    ],
    wordFileName: 'Capitulo_VIII_PGTS_Tecnologias_Saude.docx',
  },
  {
    id: 'cap-9',
    num: '09',
    roman: 'CAPÍTULO IX',
    tag: 'Resíduos Odonto (PGRSS)',
    title: 'Plano de Gerenciamento de Resíduos (PGRSS)',
    subtitle:
      'Segregação, acondicionamento, perfurocortantes, resíduos químicos e coleta especializada',
    icon: Trash2,
    color: {
      folderGradient: 'from-rose-600 via-rose-700 to-pink-900',
      folderBorder: 'border-rose-400/50',
      spineBg: 'bg-rose-800',
      tabBg: 'bg-rose-600',
      tabText: 'text-rose-100',
      iconBg: 'from-rose-500 to-red-600',
      accentText: 'text-rose-700',
      glow: 'rgba(244, 63, 94, 0.4)',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
      badgeText: 'text-rose-700',
    },
    summaryBullets: [
      'Classificação dos grupos A, B, D e E (amálgama e perfurocortante)',
      'POP de descarte seguro e abrigo temporário de resíduos',
      'Manifesto de transporte e destinação final de resíduos',
    ],
    wordFileName: 'Capitulo_IX_PGRSS_Gerenciamento_Residuos.docx',
  },
  {
    id: 'cap-10',
    num: '10',
    roman: 'CAPÍTULO X',
    tag: 'Central de Esterilização (CME)',
    title:
      'Protocolo para processamento de dispositivos médicos incluindo informações de rastreabilidade',
    subtitle:
      'Fluxo unidirecional de CME, esterilização, indicadores químicos/biológicos e rotulagem',
    icon: Stethoscope,
    color: {
      folderGradient: 'from-cyan-600 via-teal-700 to-blue-950',
      folderBorder: 'border-cyan-350',
      spineBg: 'bg-cyan-800',
      tabBg: 'bg-cyan-600',
      tabText: 'text-cyan-50',
      iconBg: 'from-teal-500 to-cyan-600',
      accentText: 'text-teal-700',
      glow: 'rgba(6, 182, 212, 0.5)',
      badgeBg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      badgeText: 'text-cyan-800',
    },
    summaryBullets: [
      'Fluxograma completo do expurgo à guarda esterilizada',
      'Planilha de rastreabilidade e controle de ciclos biológicos',
      'Rotulagem com data, lote, responsável e validade',
    ],
    wordFileName: 'Capitulo_X_Processamento_Dispositivos_Medicos.docx',
  },
  {
    id: 'cap-11',
    num: '11',
    roman: 'CAPÍTULO XI',
    tag: 'Limpeza e Superfícies',
    title: 'Protocolo de limpeza de ambientes e superfícies',
    subtitle: 'Higienização de consultórios, desinfecção concorrente e terminal, POPs de limpeza',
    icon: Sparkle,
    color: {
      folderGradient: 'from-teal-600 via-emerald-700 to-slate-900',
      folderBorder: 'border-teal-400/50',
      spineBg: 'bg-teal-800',
      tabBg: 'bg-teal-600',
      tabText: 'text-teal-100',
      iconBg: 'from-teal-500 to-emerald-600',
      accentText: 'text-teal-700',
      glow: 'rgba(20, 184, 166, 0.4)',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
      badgeText: 'text-teal-700',
    },
    summaryBullets: [
      'POPs de limpeza entre pacientes (desinfecção de alta rotação e cadeira)',
      'Limpeza terminal diária e semanal do consultório',
      'Diluição padronizada e ficha de saneantes aprovados pela ANVISA',
    ],
    wordFileName: 'Capitulo_XI_Limpeza_Ambientes_Superficies.docx',
  },
  {
    id: 'cap-12',
    num: '12',
    roman: 'CAPÍTULO XII',
    tag: 'Segurança do Paciente (PSP)',
    title: 'Plano de Segurança do Paciente (PSP)',
    subtitle:
      'Metas internacionais, identificação correta, prevenção de quedas e notificação de incidentes',
    icon: ShieldCheck,
    color: {
      folderGradient: 'from-emerald-600 via-teal-700 to-slate-900',
      folderBorder: 'border-emerald-400/50',
      spineBg: 'bg-emerald-800',
      tabBg: 'bg-emerald-600',
      tabText: 'text-emerald-100',
      iconBg: 'from-emerald-500 to-teal-600',
      accentText: 'text-emerald-700',
      glow: 'rgba(16, 185, 129, 0.4)',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      badgeText: 'text-emerald-700',
    },
    summaryBullets: [
      'Metas de identificação segura do paciente e dente correto',
      'Checklist de cirurgia odontológica segura',
      'Ficha de notificação interna e plano de ação de incidentes',
    ],
    wordFileName: 'Capitulo_XII_Plano_Seguranca_Paciente_PSP.docx',
  },
  {
    id: 'cap-13',
    num: '13',
    roman: 'CAPÍTULO XIII',
    tag: 'Higiene e EPIs',
    title: 'Protocolo de higiene das mãos, precauções e isolamento',
    subtitle:
      'Técnica correta de antissepsia, uso racional de EPIs e prevenção de transmissão cruzada',
    icon: HandMetal,
    color: {
      folderGradient: 'from-blue-600 via-sky-700 to-slate-900',
      folderBorder: 'border-blue-400/50',
      spineBg: 'bg-blue-800',
      tabBg: 'bg-blue-600',
      tabText: 'text-blue-100',
      iconBg: 'from-blue-500 to-indigo-600',
      accentText: 'text-blue-700',
      glow: 'rgba(59, 130, 246, 0.4)',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      badgeText: 'text-blue-700',
    },
    summaryBullets: [
      'Passo a passo visual dos 5 momentos de higiene das mãos',
      'Paramentação e desparamentação segura de EPIs',
      'Precauções padrão, por contato e por gotículas/aerossóis',
    ],
    wordFileName: 'Capitulo_XIII_Higiene_Maos_EPIs.docx',
  },
  {
    id: 'cap-14',
    num: '14',
    roman: 'CAPÍTULO XIV',
    tag: 'Acidentes Biológicos',
    title:
      'Protocolo de encaminhamento do profissional em caso de acidentes com exposição a material biológico',
    subtitle:
      'Conduta imediata pós-exposição, quimioprofilaxia, fluxo de atendimento, CAT e acompanhamento',
    icon: AlertTriangle,
    color: {
      folderGradient: 'from-orange-600 via-amber-700 to-red-900',
      folderBorder: 'border-orange-400/50',
      spineBg: 'bg-orange-800',
      tabBg: 'bg-orange-600',
      tabText: 'text-orange-100',
      iconBg: 'from-orange-500 to-amber-600',
      accentText: 'text-orange-700',
      glow: 'rgba(249, 115, 22, 0.4)',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      badgeText: 'text-orange-700',
    },
    summaryBullets: [
      'Fluxograma de socorro rápido pós-perfuração com agulha/instrumental',
      'Formulário de notificação de acidente ocupacional (CAT)',
      'Encaminhamento à unidade de referência para PEP (Profilaxia Pós-Exposição)',
    ],
    wordFileName: 'Capitulo_XIV_Acidentes_Exposicao_Biologica.docx',
  },
  {
    id: 'cap-15',
    num: '15',
    roman: 'CAPÍTULO XV',
    tag: 'Urgências e Emergências',
    title: 'Protocolo de encaminhamento do paciente em caso de urgências e emergências',
    subtitle:
      'Suporte básico de vida odontológico, kit de emergência, fluxo SAMU e encaminhamento hospitalar',
    icon: Ambulance,
    color: {
      folderGradient: 'from-red-600 via-rose-700 to-slate-900',
      folderBorder: 'border-red-400/50',
      spineBg: 'bg-red-800',
      tabBg: 'bg-red-600',
      tabText: 'text-red-100',
      iconBg: 'from-red-500 to-rose-600',
      accentText: 'text-red-700',
      glow: 'rgba(239, 68, 68, 0.4)',
      badgeBg: 'bg-red-50 text-red-700 border-red-200',
      badgeText: 'text-red-700',
    },
    summaryBullets: [
      'Kit de emergência médica no consultório dentário',
      'Protocolos de PCR, síncope, anafilaxia e crises hipertensivas',
      'Ficha de transferência rápida para SAMU / Pronto Atendimento',
    ],
    wordFileName: 'Capitulo_XV_Urgencias_Emergencias_Odonto.docx',
  },
  {
    id: 'cap-16',
    num: '16',
    roman: 'CAPÍTULO XVI',
    tag: 'Prevenção de Infecções (PP-IRAS)',
    title: 'Plano de prevenção e controle de infecções (PP-IRAS)',
    subtitle:
      'Programa de controle de infecções relacionadas à assistência à saúde e auditorias internas',
    icon: ShieldAlert,
    color: {
      folderGradient: 'from-purple-600 via-indigo-700 to-slate-900',
      folderBorder: 'border-purple-400/50',
      spineBg: 'bg-purple-800',
      tabBg: 'bg-purple-600',
      tabText: 'text-purple-100',
      iconBg: 'from-purple-500 to-indigo-600',
      accentText: 'text-purple-700',
      glow: 'rgba(168, 85, 247, 0.4)',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      badgeText: 'text-purple-700',
    },
    summaryBullets: [
      'Diretrizes de prevenção de infecção cruzada odontológica',
      'Auditorias periódicas e checklists de conformidade',
      'Indicadores de vigilância epidemiológica na clínica',
    ],
    wordFileName: 'Capitulo_XVI_PP_IRAS_Controle_Infeccoes.docx',
  },
  {
    id: 'cap-17',
    num: '17',
    roman: 'CAPÍTULO XVII',
    tag: 'Normativas e Formulários',
    title: 'Outros documentos e normativas aplicáveis',
    subtitle:
      'Formulários complementares, termos de consentimento, fichas de controle e normas locais',
    icon: FileSpreadsheet,
    color: {
      folderGradient: 'from-slate-700 via-slate-800 to-slate-950',
      folderBorder: 'border-slate-400/50',
      spineBg: 'bg-slate-800',
      tabBg: 'bg-slate-700',
      tabText: 'text-slate-100',
      iconBg: 'from-slate-600 to-slate-800',
      accentText: 'text-slate-700',
      glow: 'rgba(100, 116, 139, 0.4)',
      badgeBg: 'bg-slate-100 text-slate-700 border-slate-300',
      badgeText: 'text-slate-700',
    },
    summaryBullets: [
      'Modelos de Termo de Consentimento Livre e Esclarecido (TCLE)',
      'Fichas de anamnese e termos de responsabilidade do paciente',
      'Compilado de portarias estaduais e municipais de vigilância sanitária',
    ],
    wordFileName: 'Capitulo_XVII_Outros_Documentos_Normativas.docx',
  },
]

export const DocumentExplosion: React.FC = () => {
  // Default to Chapter X (Esterilização / CME) as highlighted by the user's uploaded reference
  const [selectedIndex, setSelectedIndex] = useState<number>(9)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'grid' | 'shelf'>('shelf')

  const activeIdx = hoveredIndex !== null ? hoveredIndex : selectedIndex
  const activeChapter = CHAPTERS_17[activeIdx] || CHAPTERS_17[0]
  const ActiveIcon = activeChapter.icon

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : CHAPTERS_17.length - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < CHAPTERS_17.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="relative w-full max-w-[680px] mx-auto select-none py-2 px-1 sm:px-2">
      {/* Dynamic Ambient Glow Behind Archive */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] h-[340px] sm:h-[540px] rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700 opacity-60"
        style={{
          background: `radial-gradient(circle, ${activeChapter.color.glow} 0%, rgba(14, 165, 233, 0.15) 50%, transparent 75%)`,
        }}
      />

      {/* Main Physical Cabinet / Archive Enclosure (Luxury Executive Binder Aesthetic) */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.6),0_10px_20px_-5px_rgba(0,0,0,0.4)] overflow-hidden">
        {/* Top Metallic Finish Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 shadow-sm" />

        {/* ================= HEADER: STATUS & BRANDING ================= */}
        <div className="relative z-10 px-4 sm:px-6 pt-4 pb-3.5 bg-gradient-to-b from-slate-850 to-slate-900/95 border-b border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
            {/* Top Left: Professional Dental Archive Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-600/80 text-[11px] sm:text-xs font-bold text-slate-200 shadow-inner">
              <FolderOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Acervo Profissional do Dentista</span>
            </div>

            {/* Top Right Required Badges */}
            <div className="flex items-center gap-2">
              {/* Pulsing Green Live Dot */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Ativo & Atualizado</span>
              </div>

              {/* RDC 1002 Gold Seal */}
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-amber-400/50 text-amber-300 text-[11px] font-extrabold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>RDC 1002</span>
              </div>

              {/* Word Badge */}
              <div className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[11px] font-bold">
                <FileText className="w-3 h-3 text-blue-400 shrink-0" />
                <span>Word (.docx)</span>
              </div>
            </div>
          </div>

          {/* Master Archive Title */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                17 Pastas Físicas de Documentação Sanitária
              </span>
              <span className="text-[10px] font-medium text-slate-400 hidden sm:inline-block">
                Modelos Pré-prontos • 100% Editáveis
              </span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight leading-snug">
              Manual de Boas Práticas Odontológicas — 17 Capítulos
            </h3>
          </div>
        </div>

        {/* ================= 17 PHYSICAL FOLDERS SHELF / RACK ================= */}
        <div className="p-3.5 sm:p-5 space-y-4">
          {/* Tangible Shelf / Switcher Container */}
          <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-3 sm:p-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]">
            {/* Shelf Header */}
            <div className="flex items-center justify-between gap-2 mb-2.5 px-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
                  Prateleira de Pastas Físicas (Capítulos I ao XVII)
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-400">
                Selecione uma pasta para abrir
              </span>
            </div>

            {/* 17 Physical Folders Standing on Shelf */}
            <div className="relative pt-3 pb-2 px-1">
              {/* Back Wood/Slate Shelf Ledge Line */}
              <div className="absolute bottom-1.5 left-0 right-0 h-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-sm border-t border-slate-600/70 shadow-md pointer-events-none" />

              {/* Grid / Array of 17 Tangible Luxury Binders */}
              <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-9 gap-1 sm:gap-1.5 relative z-10">
                {CHAPTERS_17.map((chap, idx) => {
                  const isSelected = activeIdx === idx
                  const ChapIcon = chap.icon
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
                      title={`${chap.roman}: ${chap.title}`}
                      aria-label={`${chap.roman}: ${chap.title}`}
                      className={`group relative flex flex-col items-center justify-between p-1 sm:p-1.5 rounded-lg transition-all duration-200 cursor-pointer text-center outline-none ${
                        isSelected
                          ? 'bg-slate-800 border-2 border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.5),0_10px_15px_-3px_rgba(0,0,0,0.5)] -translate-y-2.5 z-30 scale-105'
                          : 'bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700 hover:border-slate-500 hover:-translate-y-1.5 hover:bg-slate-850 z-10'
                      }`}
                    >
                      {/* Top Physical Folder Label Tab / Abas Físicas */}
                      <div
                        className={`w-full h-2 sm:h-2.5 rounded-t-sm mb-1 transition-all flex items-center justify-center shadow-inner ${
                          isSelected ? chap.color.tabBg : 'bg-slate-700 group-hover:bg-slate-600'
                        }`}
                      >
                        {/* Tab Notch Detail */}
                        <div className="w-2 sm:w-3 h-0.5 bg-white/40 rounded-full" />
                      </div>

                      {/* Small Folder Paper Edge sticking out (Tangibility effect) */}
                      <div
                        className={`w-3/4 h-1 bg-white rounded-t-xs -mt-1.5 mb-1 shadow-sm transition-opacity ${
                          isSelected ? 'opacity-100' : 'opacity-40 group-hover:opacity-75'
                        }`}
                      />

                      {/* Folder Icon */}
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center transition-colors mb-0.5 ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : 'text-slate-400 group-hover:text-slate-200'
                        }`}
                      >
                        <ChapIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      {/* Folder Number */}
                      <span
                        className={`text-[9px] sm:text-[10px] font-black leading-none ${
                          isSelected ? 'text-cyan-300' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {chap.num}
                      </span>

                      {/* Roman Numeral Tag */}
                      <span
                        className={`text-[7px] sm:text-[7.5px] font-extrabold uppercase tracking-tighter mt-0.5 leading-tight ${
                          isSelected ? 'text-cyan-400' : 'text-slate-500'
                        }`}
                      >
                        {chap.roman.replace('CAPÍTULO ', '')}
                      </span>

                      {/* Active Indicator Top Glow Dot */}
                      {isSelected && (
                        <span className="absolute -top-1.5 right-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] ring-2 ring-slate-900" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ================= ACTIVE PHYSICAL FOLDER INSPECTION CARD ================= */}
          {/* Simulates an open luxury folder with white physical papers sliding out */}
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 via-slate-850 to-slate-900 border border-slate-700 p-3 sm:p-4 md:p-5 shadow-2xl overflow-hidden transition-all duration-300">
            {/* Ambient Watermark Icon */}
            <ActiveIcon className="absolute -bottom-10 -right-8 w-48 h-48 text-slate-700/15 pointer-events-none transform -rotate-12 select-none" />

            {/* Folder Spine Left Accent Bar */}
            <div
              className={`absolute top-0 bottom-0 left-0 w-3 sm:w-3.5 bg-gradient-to-b ${activeChapter.color.folderGradient} border-r border-white/20 shadow-md`}
            />

            <div className="relative z-10 pl-2 sm:pl-3 space-y-3.5">
              {/* Top Row: User's Style Match (Stethoscope / Icon + CAPÍTULO X + DOCUMENTO OFICIAL + Central de Esterilização tag) */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2 border-b border-slate-750">
                <div className="flex items-center gap-3">
                  {/* Glowing Squircle Icon Container matching user screenshot */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${activeChapter.color.iconBg} flex items-center justify-center text-white shadow-lg border border-white/30 shrink-0 transform transition-transform group-hover:scale-105`}
                  >
                    <ActiveIcon className="w-6 h-6 drop-shadow" />
                  </div>

                  <div>
                    {/* Chapter Header matching reference */}
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] sm:text-xs font-black tracking-widest text-slate-300 uppercase">
                        {activeChapter.roman}
                      </span>
                      <span className="text-slate-600 text-xs">•</span>
                      <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider text-cyan-400 uppercase">
                        DOCUMENTO OFICIAL
                      </span>
                    </div>

                    <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                      <span>100% Conforme RDC 1002 (ANVISA)</span>
                    </div>
                  </div>
                </div>

                {/* Subtitle Pill / Tag matching the light cyan pill "Central de Esterilização" */}
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-cyan-100/90 text-cyan-900 border border-cyan-200 text-xs font-black tracking-tight shadow-sm">
                    {activeChapter.tag}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Pasta anterior"
                      className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Próxima pasta"
                      className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Full Title Display */}
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-black text-white leading-tight tracking-tight">
                  {activeChapter.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium leading-snug">
                  {activeChapter.subtitle}
                </p>
              </div>

              {/* ================= TANGIBLE WHITE PAPER SHEET (PAPEL REAL SAINDO DA PASTA) ================= */}
              {/* Stacked Paper Sheets Illusion */}
              <div className="relative pt-2">
                {/* Back Paper Layer 2 (Bottom shadow) */}
                <div className="absolute top-0 left-3 right-3 h-6 bg-slate-200 rounded-t-lg transform -rotate-1 opacity-70 shadow-sm pointer-events-none" />
                {/* Back Paper Layer 1 */}
                <div className="absolute top-1 left-2 right-2 h-6 bg-slate-100 rounded-t-lg transform rotate-1 opacity-85 shadow-sm pointer-events-none" />

                {/* Front Realistic White Document Paper Sheet */}
                <div className="relative z-10 rounded-xl bg-gradient-to-b from-white via-slate-50 to-slate-100 p-3.5 sm:p-4 text-slate-900 shadow-[0_15px_30px_rgba(0,0,0,0.35),0_1px_3px_rgba(0,0,0,0.1)] border border-slate-200">
                  {/* Top Paper Header: Word Badge + Format status */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-[10px] font-black shadow-sm">
                        W
                      </div>
                      <div className="leading-tight">
                        <span className="text-[11px] sm:text-xs font-black text-slate-900 block truncate max-w-[190px] sm:max-w-none">
                          {activeChapter.wordFileName}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          Documento em Word (.docx) • 100% Editável
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>Modelo Pré-pronto</span>
                    </div>
                  </div>

                  {/* Simulated Dental Document Text Lines with Real Bullet Topics */}
                  <div className="mt-2.5 space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-600 block">
                      Itens Inclusos e Validados no Documento:
                    </span>
                    <ul className="space-y-1">
                      {activeChapter.summaryBullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 leading-snug"
                        >
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5 stroke-[3]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Paper Ruling Lines (Efeito de Linhas de Documento Físico) */}
                  <div className="mt-2.5 pt-2 border-t border-slate-200/80 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 bg-slate-300 rounded-full w-1/3" />
                      <div className="h-1.5 bg-blue-400/40 rounded-full w-1/4" />
                      <div className="h-1.5 bg-slate-200 rounded-full w-1/3" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 bg-slate-200 rounded-full w-1/2" />
                      <div className="h-1.5 bg-emerald-400/30 rounded-full w-1/4" />
                      <div className="h-1.5 bg-slate-300 rounded-full w-1/5" />
                    </div>
                  </div>

                  {/* Paper Footer / Watermark Note */}
                  <div className="mt-2 pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Sparkle className="w-3 h-3 text-amber-500" />
                      <span>Formatação ABNT & Manual de Vigilância Sanitária</span>
                    </span>
                    <span className="font-bold text-slate-700">Preencha com seus dados</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action / Hint */}
              <div className="flex items-center justify-between text-[11px] pt-1">
                <span className="text-slate-400 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Pasta {activeChapter.num} de 17 prontas para download
                </span>
                <span className="text-cyan-300 font-bold flex items-center gap-1 hover:underline cursor-pointer">
                  <span>Ver todas as 17 pastas</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* ================= 17 CHAPTERS ACCORDION / QUICK INDEX ================= */}
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3 sm:p-3.5 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                <Folder className="w-3.5 h-3.5 text-cyan-400" />
                Sumário Oficial: Todas as 17 Pastas Inclusas
              </span>
              <span className="text-[10px] font-black text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                17 / 17 Liberados
              </span>
            </div>

            {/* Scrollable Mini Roster */}
            <div className="max-h-[140px] overflow-y-auto pr-1 space-y-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
              {CHAPTERS_17.map((chap, idx) => {
                const isSelected = activeIdx === idx
                const ChapIcon = chap.icon
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
                    className={`w-full flex items-center justify-between p-1.5 rounded-lg text-left text-[11px] transition-all ${
                      isSelected
                        ? 'bg-slate-800 text-white font-bold border border-cyan-400/60 shadow-sm'
                        : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <ChapIcon
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isSelected ? 'text-cyan-400' : 'text-slate-500'
                        }`}
                      />
                      <span className="font-black text-slate-400 shrink-0">{chap.roman}:</span>
                      <span className="truncate text-slate-200">{chap.title}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : 'bg-slate-850 text-slate-400'
                        }`}
                      >
                        Word
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ================= FOOTER HIGHLIGHTS ================= */}
        <div className="px-4 sm:px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <strong>17 Pastas Físicas</strong>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <strong>+50 Modelos em Word</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Formato 100% Editável (.docx)</span>
          </div>
        </div>
      </div>

      {/* Realistic Shadow Cast on Floor */}
      <div className="w-[86%] h-5 bg-slate-950/40 blur-xl mx-auto rounded-full -mt-2 -z-10" />
    </div>
  )
}

export default DocumentExplosion
