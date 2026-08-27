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
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Check,
  Info,
  Library,
} from 'lucide-react'

export interface PhysicalFolderData {
  id: string
  num: string
  roman: string
  tag: string
  title: string
  subtitle: string
  icon: React.ElementType
  colorTheme: {
    name: string
    // Physical spine gradient (simulating plastic/cardboard texture)
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
}

export const CHAPTERS_17 = [
  'Capítulo I: Projeto básico de arquitetura',
  'Capítulo II: Gestão de recursos humanos',
  'Capítulo III: Plano anual de educação permanente',
  'Capítulo IV: Contratos, licenças e qualificações de serviços terceirizados',
  'Capítulo V: Plano de monitoramento e controle da água',
  'Capítulo VI: Controle de vetores e pragas urbanas',
  'Capítulo VII: Plano anual de manutenção preventiva e corretiva da edificação e instalações',
  'Capítulo VIII: Plano de Gerenciamento de Tecnologias em Saúde (PGTS)',
  'Capítulo IX: Plano de Gerenciamento de Resíduos (PGRSS)',
  'Capítulo X: Protocolo para processamento de dispositivos médicos incluindo informações de rastreabilidade',
  'Capítulo XI: Protocolo de limpeza de ambientes e superfícies',
  'Capítulo XII: Plano de Segurança do Paciente (PSP)',
  'Capítulo XIII: Protocolo de higiene das mãos, precauções e isolamento',
  'Capítulo XIV: Protocolo de encaminhamento do profissional em caso de acidentes com exposição a material biológico',
  'Capítulo XV: Protocolo de encaminhamento do paciente em caso de urgências e emergências',
  'Capítulo XVI: Plano de prevenção e controle de infecções (PP-IRAS)',
  'Capítulo XVII: Outros documentos e normativas aplicáveis',
]

export const PHYSICAL_CHAPTERS: PhysicalFolderData[] = [
  {
    id: 'cap-1',
    num: '01',
    roman: 'CAPÍTULO I',
    tag: 'Arquitetura Sanitária',
    title: 'Projeto básico de arquitetura',
    subtitle: 'Layouts físicos, fluxos sanitários, dimensionamento e normas prediais odontológicas',
    icon: Building2,
    colorTheme: {
      name: 'Vermelho Executivo',
      spineGradient: 'from-[#a81c1c] via-[#c92a2a] to-[#7f1313]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#ff6b6b] border-r-[#5c0b0b]',
      labelBg: 'bg-[#faf6ee]',
      labelBorder: 'border-[#d0c8b6]',
      labelTextColor: 'text-red-950',
      accentGlow: 'rgba(220, 38, 38, 0.4)',
      badgeColor: 'bg-red-900/80 text-red-200 border-red-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Memorial descritivo de fluxos limpo/sujo',
      'Dimensionamento de salas e CME odontológica',
      'Instalações hidrossanitárias e de gases',
    ],
    wordFileName: 'Capitulo_I_Projeto_Basico_Arquitetura.docx',
    pagesCount: '18 páginas',
    yearTag: 'VOL. 01',
  },
  {
    id: 'cap-2',
    num: '02',
    roman: 'CAPÍTULO II',
    tag: 'Equipe e RH',
    title: 'Gestão de recursos humanos',
    subtitle: 'Qualificação profissional, descrição de cargos, treinamentos e registros da equipe',
    icon: Users,
    colorTheme: {
      name: 'Azul Marinho Real',
      spineGradient: 'from-[#143264] via-[#1e458a] to-[#0c1f3f]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#4dabf7] border-r-[#071326]',
      labelBg: 'bg-[#f8f9fa]',
      labelBorder: 'border-[#ced4da]',
      labelTextColor: 'text-blue-950',
      accentGlow: 'rgba(37, 99, 235, 0.4)',
      badgeColor: 'bg-blue-900/80 text-blue-200 border-blue-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Fichas de qualificação e registro CRO',
      'Termos de responsabilidade técnica e ASB/TSB',
      'Manual de integração e conduta da equipe',
    ],
    wordFileName: 'Capitulo_II_Gestao_Recursos_Humanos.docx',
    pagesCount: '14 páginas',
    yearTag: 'VOL. 02',
  },
  {
    id: 'cap-3',
    num: '03',
    roman: 'CAPÍTULO III',
    tag: 'Educação Permanente',
    title: 'Plano anual de educação permanente',
    subtitle: 'Cronograma anual de treinamentos, capacitação em biossegurança e certificações',
    icon: GraduationCap,
    colorTheme: {
      name: 'Verde Floresta AZ',
      spineGradient: 'from-[#1b4332] via-[#2d6a4f] to-[#081c15]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#52b788] border-r-[#05130e]',
      labelBg: 'bg-[#faf8f5]',
      labelBorder: 'border-[#d8d3c5]',
      labelTextColor: 'text-emerald-950',
      accentGlow: 'rgba(16, 185, 129, 0.4)',
      badgeColor: 'bg-emerald-900/80 text-emerald-200 border-emerald-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Matriz anual de treinamentos obrigatórios',
      'Listas de presença e avaliações de eficácia',
      'Certificados de capacitação periódica',
    ],
    wordFileName: 'Capitulo_III_Plano_Educacao_Permanente.docx',
    pagesCount: '12 páginas',
    yearTag: 'VOL. 03',
  },
  {
    id: 'cap-4',
    num: '04',
    roman: 'CAPÍTULO IV',
    tag: 'Serviços Terceirizados',
    title: 'Contratos, licenças e qualificações de serviços terceirizados',
    subtitle: 'Alvarás, contratos de manutenção, laboratórios de prótese e laudos técnicos',
    icon: FileCheck2,
    colorTheme: {
      name: 'Roxo Imperial',
      spineGradient: 'from-[#491269] via-[#6d219c] to-[#2d0a42]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#be4bdb] border-r-[#1b0528]',
      labelBg: 'bg-[#faf5ff]',
      labelBorder: 'border-[#d6c7eb]',
      labelTextColor: 'text-purple-950',
      accentGlow: 'rgba(168, 85, 247, 0.4)',
      badgeColor: 'bg-purple-900/80 text-purple-200 border-purple-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Checklist de alvarás de fornecedores e laboratórios',
      'Contratos de prestação de serviços odontológicos',
      'Qualificação de empresas de esterilização e suporte',
    ],
    wordFileName: 'Capitulo_IV_Contratos_Licencas_Terceirizados.docx',
    pagesCount: '16 páginas',
    yearTag: 'VOL. 04',
  },
  {
    id: 'cap-5',
    num: '05',
    roman: 'CAPÍTULO V',
    tag: 'Qualidade da Água',
    title: 'Plano de monitoramento e controle da água',
    subtitle: 'Higienização de caixas d’água, controle de potabilidade e análises periódicas',
    icon: Droplets,
    colorTheme: {
      name: 'Azul Turquesa Intenso',
      spineGradient: 'from-[#086375] via-[#0b8793] to-[#04323b]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#3bc9db] border-r-[#031d22]',
      labelBg: 'bg-[#f0fbfb]',
      labelBorder: 'border-[#bee3e8]',
      labelTextColor: 'text-cyan-950',
      accentGlow: 'rgba(6, 182, 212, 0.4)',
      badgeColor: 'bg-cyan-900/80 text-cyan-200 border-cyan-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Protocolo de desinfecção de linhas de água dos equipos',
      'Laudos de potabilidade físico-química e microbiológica',
      'Cronograma semestral de limpeza de reservatórios',
    ],
    wordFileName: 'Capitulo_V_Plano_Controle_Agua.docx',
    pagesCount: '11 páginas',
    yearTag: 'VOL. 05',
  },
  {
    id: 'cap-6',
    num: '06',
    roman: 'CAPÍTULO VI',
    tag: 'Controle de Pragas',
    title: 'Controle de vetores e pragas urbanas',
    subtitle: 'Comprovantes de desinsetização/desratização, periodicidade e barreiras físicas',
    icon: Bug,
    colorTheme: {
      name: 'Mostarda / Âmbar Escuro',
      spineGradient: 'from-[#9a6700] via-[#c68900] to-[#593b00]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#ffd43b] border-r-[#382500]',
      labelBg: 'bg-[#fffbf0]',
      labelBorder: 'border-[#e8dcb8]',
      labelTextColor: 'text-amber-950',
      accentGlow: 'rgba(245, 158, 11, 0.4)',
      badgeColor: 'bg-amber-900/80 text-amber-200 border-amber-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Controle integrado de pragas com certificadora',
      'Mapeamento de armadilhas e barreiras físicas',
      'Registro de aplicações e fichas toxicológicas',
    ],
    wordFileName: 'Capitulo_VI_Controle_Vetores_Pragas.docx',
    pagesCount: '10 páginas',
    yearTag: 'VOL. 06',
  },
  {
    id: 'cap-7',
    num: '07',
    roman: 'CAPÍTULO VII',
    tag: 'Manutenção Predial',
    title: 'Plano anual de manutenção preventiva e corretiva da edificação e instalações',
    subtitle: 'Instalações elétricas, hidráulicas, ar-condicionado (PMOC) e estrutura física',
    icon: Wrench,
    colorTheme: {
      name: 'Cinza Ardósia Industrial',
      spineGradient: 'from-[#343a40] via-[#495057] to-[#212529]',
      spineHighlight: 'from-white/25 via-white/5 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.7),inset_4px_0_10px_rgba(255,255,255,0.15)]',
      spineEdge: 'border-l-[#adb5bd] border-r-[#141618]',
      labelBg: 'bg-[#f8f9fa]',
      labelBorder: 'border-[#ced4da]',
      labelTextColor: 'text-slate-950',
      accentGlow: 'rgba(100, 116, 139, 0.4)',
      badgeColor: 'bg-slate-800 text-slate-200 border-slate-600',
      metalRingBorder: 'border-slate-400 ring-slate-900',
    },
    summaryBullets: [
      'PMOC completo para climatização odontológica',
      'Inspeção preventiva de compressores e bombas de vácuo',
      'Relatórios e cronograma de manutenção estrutural',
    ],
    wordFileName: 'Capitulo_VII_Manutencao_Predial_PMOC.docx',
    pagesCount: '20 páginas',
    yearTag: 'VOL. 07',
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
    colorTheme: {
      name: 'Magenta / Pink Clássico',
      spineGradient: 'from-[#8a1352] via-[#b5176c] to-[#540930]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#f06595] border-r-[#33041c]',
      labelBg: 'bg-[#fff5f7]',
      labelBorder: 'border-[#f3c2cf]',
      labelTextColor: 'text-pink-950',
      accentGlow: 'rgba(236, 72, 153, 0.4)',
      badgeColor: 'bg-pink-900/80 text-pink-200 border-pink-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Inventário completo de equipamentos com tag de registro',
      'Calibração anual e testes de fotopolimerizador e raio-X',
      'Histórico de manutenção de autoclaves e periféricos',
    ],
    wordFileName: 'Capitulo_VIII_PGTS_Tecnologias_Saude.docx',
    pagesCount: '22 páginas',
    yearTag: 'VOL. 08',
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
    colorTheme: {
      name: 'Laranja Terracota',
      spineGradient: 'from-[#b33a00] via-[#d9480f] to-[#782400]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#ff922b] border-r-[#4e1700]',
      labelBg: 'bg-[#fff9f5]',
      labelBorder: 'border-[#fbd0b8]',
      labelTextColor: 'text-orange-950',
      accentGlow: 'rgba(249, 115, 22, 0.4)',
      badgeColor: 'bg-orange-900/80 text-orange-200 border-orange-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Classificação dos grupos A, B, D e E (amálgama e perfurocortante)',
      'POP de descarte seguro e abrigo temporário de resíduos',
      'Manifesto de transporte e destinação final de resíduos',
    ],
    wordFileName: 'Capitulo_IX_PGRSS_Gerenciamento_Residuos.docx',
    pagesCount: '19 páginas',
    yearTag: 'VOL. 09',
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
    colorTheme: {
      name: 'Azul Celeste Hospitalar',
      spineGradient: 'from-[#0077b6] via-[#0096c7] to-[#023e8a]',
      spineHighlight: 'from-white/40 via-white/15 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#48cae4] border-r-[#03045e]',
      labelBg: 'bg-[#f0f8ff]',
      labelBorder: 'border-[#b6ddfc]',
      labelTextColor: 'text-blue-950',
      accentGlow: 'rgba(0, 150, 199, 0.5)',
      badgeColor: 'bg-cyan-900/80 text-cyan-200 border-cyan-600',
      metalRingBorder: 'border-slate-200 ring-slate-800',
    },
    summaryBullets: [
      'Fluxograma completo do expurgo à guarda esterilizada',
      'Planilha de rastreabilidade e controle de ciclos biológicos',
      'Rotulagem com data, lote, responsável e validade',
    ],
    wordFileName: 'Capitulo_X_Processamento_Dispositivos_Medicos.docx',
    pagesCount: '28 páginas',
    yearTag: 'VOL. 10',
  },
  {
    id: 'cap-11',
    num: '11',
    roman: 'CAPÍTULO XI',
    tag: 'Limpeza e Superfícies',
    title: 'Protocolo de limpeza de ambientes e superfícies',
    subtitle: 'Higienização de consultórios, desinfecção concorrente e terminal, POPs de limpeza',
    icon: Sparkles,
    colorTheme: {
      name: 'Verde Oliva Escuro',
      spineGradient: 'from-[#386641] via-[#4d8b59] to-[#203a25]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#8cb369] border-r-[#132317]',
      labelBg: 'bg-[#f8faf6]',
      labelBorder: 'border-[#cfe0c4]',
      labelTextColor: 'text-green-950',
      accentGlow: 'rgba(74, 222, 128, 0.4)',
      badgeColor: 'bg-emerald-900/80 text-emerald-200 border-emerald-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'POPs de limpeza entre pacientes (alta rotação e cadeira)',
      'Limpeza terminal diária e semanal do consultório',
      'Diluição padronizada e saneantes aprovados pela ANVISA',
    ],
    wordFileName: 'Capitulo_XI_Limpeza_Ambientes_Superficies.docx',
    pagesCount: '15 páginas',
    yearTag: 'VOL. 11',
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
    colorTheme: {
      name: 'Vinho Bordô Profundo',
      spineGradient: 'from-[#67001a] via-[#850022] to-[#450011]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#c92a2a] border-r-[#2b000a]',
      labelBg: 'bg-[#fdf8f8]',
      labelBorder: 'border-[#e8c8ce]',
      labelTextColor: 'text-rose-950',
      accentGlow: 'rgba(225, 29, 72, 0.4)',
      badgeColor: 'bg-rose-900/80 text-rose-200 border-rose-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Metas de identificação segura do paciente e dente correto',
      'Checklist de cirurgia odontológica segura',
      'Ficha de notificação interna e plano de ação de incidentes',
    ],
    wordFileName: 'Capitulo_XII_Plano_Seguranca_Paciente_PSP.docx',
    pagesCount: '17 páginas',
    yearTag: 'VOL. 12',
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
    colorTheme: {
      name: 'Azul Cobalto Brilhante',
      spineGradient: 'from-[#1e3d59] via-[#2a557d] to-[#122638]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#64b5f6] border-r-[#0b1824]',
      labelBg: 'bg-[#f3f8fd]',
      labelBorder: 'border-[#c1dbf5]',
      labelTextColor: 'text-blue-950',
      accentGlow: 'rgba(30, 61, 89, 0.4)',
      badgeColor: 'bg-blue-900/80 text-blue-200 border-blue-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Passo a passo visual dos 5 momentos de higiene das mãos',
      'Paramentação e desparamentação segura de EPIs',
      'Precauções padrão, por contato e por gotículas/aerossóis',
    ],
    wordFileName: 'Capitulo_XIII_Higiene_Maos_EPIs.docx',
    pagesCount: '13 páginas',
    yearTag: 'VOL. 13',
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
    colorTheme: {
      name: 'Amarelo Segurança / Ocre',
      spineGradient: 'from-[#c25e00] via-[#e8710a] to-[#803e00]',
      spineHighlight: 'from-white/40 via-white/15 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.25)]',
      spineEdge: 'border-l-[#ffb366] border-r-[#522800]',
      labelBg: 'bg-[#fffaf0]',
      labelBorder: 'border-[#eddab4]',
      labelTextColor: 'text-amber-950',
      accentGlow: 'rgba(234, 88, 12, 0.4)',
      badgeColor: 'bg-orange-900/80 text-orange-200 border-orange-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Fluxograma pós-perfuração com agulha/instrumental',
      'Formulário de notificação de acidente ocupacional (CAT)',
      'Encaminhamento para PEP (Profilaxia Pós-Exposição)',
    ],
    wordFileName: 'Capitulo_XIV_Acidentes_Exposicao_Biologica.docx',
    pagesCount: '16 páginas',
    yearTag: 'VOL. 14',
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
    colorTheme: {
      name: 'Vermelho Carmim de Emergência',
      spineGradient: 'from-[#9b111e] via-[#c1121f] to-[#660708]',
      spineHighlight: 'from-white/35 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#f87171] border-r-[#3b0204]',
      labelBg: 'bg-[#fff5f5]',
      labelBorder: 'border-[#fed7d7]',
      labelTextColor: 'text-red-950',
      accentGlow: 'rgba(220, 38, 38, 0.4)',
      badgeColor: 'bg-red-900/80 text-red-200 border-red-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Kit de emergência médica no consultório dentário',
      'Protocolos de PCR, síncope, anafilaxia e crises hipertensivas',
      'Ficha de transferência rápida para SAMU / Pronto Atendimento',
    ],
    wordFileName: 'Capitulo_XV_Urgencias_Emergencias_Odonto.docx',
    pagesCount: '21 páginas',
    yearTag: 'VOL. 15',
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
    colorTheme: {
      name: 'Azul Petróleo / Teal',
      spineGradient: 'from-[#0b525b] via-[#14746f] to-[#063035]',
      spineHighlight: 'from-white/30 via-white/10 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.6),inset_4px_0_10px_rgba(255,255,255,0.2)]',
      spineEdge: 'border-l-[#48bfe3] border-r-[#03191c]',
      labelBg: 'bg-[#f0f9f9]',
      labelBorder: 'border-[#bfe0e0]',
      labelTextColor: 'text-teal-950',
      accentGlow: 'rgba(20, 184, 166, 0.4)',
      badgeColor: 'bg-teal-900/80 text-teal-200 border-teal-700',
      metalRingBorder: 'border-slate-300 ring-slate-800',
    },
    summaryBullets: [
      'Diretrizes de prevenção de infecção cruzada odontológica',
      'Auditorias periódicas e checklists de conformidade',
      'Indicadores de vigilância epidemiológica na clínica',
    ],
    wordFileName: 'Capitulo_XVI_PP_IRAS_Controle_Infeccoes.docx',
    pagesCount: '24 páginas',
    yearTag: 'VOL. 16',
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
    colorTheme: {
      name: 'Preto Couro Clássico AZ',
      spineGradient: 'from-[#1a1c20] via-[#2d3139] to-[#0f1013]',
      spineHighlight: 'from-white/25 via-white/5 to-transparent',
      spineShadow:
        'shadow-[inset_-4px_0_10px_rgba(0,0,0,0.8),inset_4px_0_10px_rgba(255,255,255,0.15)]',
      spineEdge: 'border-l-[#6c757d] border-r-[#050607]',
      labelBg: 'bg-[#f5f5f7]',
      labelBorder: 'border-[#ced4da]',
      labelTextColor: 'text-slate-950',
      accentGlow: 'rgba(71, 85, 105, 0.4)',
      badgeColor: 'bg-slate-800 text-slate-200 border-slate-600',
      metalRingBorder: 'border-slate-400 ring-slate-900',
    },
    summaryBullets: [
      'Modelos de Termo de Consentimento Livre e Esclarecido (TCLE)',
      'Fichas de anamnese e termos de responsabilidade do paciente',
      'Compilado de portarias estaduais e municipais de vigilância',
    ],
    wordFileName: 'Capitulo_XVII_Outros_Documentos_Normativas.docx',
    pagesCount: '30 páginas',
    yearTag: 'VOL. 17',
  },
]

export const DocumentExplosion: React.FC = () => {
  // Default to Chapter X (Esterilização / CME)
  const [selectedIndex, setSelectedIndex] = useState<number>(9)
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
    <div className="relative w-full max-w-[720px] mx-auto select-none py-2 px-1 sm:px-2">
      {/* Ambient Warm Glow behind the Wood Shelf / Archive */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[560px] h-[340px] sm:h-[560px] rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700 opacity-50"
        style={{
          background: `radial-gradient(circle, ${activeChapter.colorTheme.accentGlow} 0%, rgba(217, 119, 6, 0.1) 40%, transparent 70%)`,
        }}
      />

      {/* Main Realistic Physical Cabinet Container */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#1e1510] border-4 border-[#3d2719] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7),0_15px_30px_-5px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Realistic Dark Wood Veneer Texture & Ledge */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1b12] via-[#1f140d] to-[#140c08] pointer-events-none" />

        {/* Subtle Wood Grain Lines */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px), repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.4) 3px, rgba(0,0,0,0.4) 6px)`,
          }}
        />

        {/* ================= CABINET HEADER: REALISTIC ARCHIVE PLAQUE ================= */}
        <div className="relative z-10 px-4 sm:px-6 pt-4 pb-3.5 bg-gradient-to-b from-[#382315] to-[#24160d] border-b-2 border-[#4d311d] shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2">
            {/* Brass Metal Label Plate on Wood */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gradient-to-b from-[#dfb15b] via-[#c99738] to-[#966b1d] border border-[#f5d78e] text-slate-950 shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)]">
              <Library className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider">
                Acervo Físico • 17 Pastas AZ
              </span>
            </div>

            {/* Status Pills */}
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 text-[11px] font-bold shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Conforme RDC 1002</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-slate-200 text-[11px] font-bold">
                <FileText className="w-3 h-3 text-blue-400 shrink-0" />
                <span>+50 Docs em Word</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-[#faede1] tracking-tight drop-shadow-sm flex items-center gap-2">
              <span>Manual de Boas Práticas Odontológicas</span>
            </h3>
            <span className="text-[11px] font-medium text-[#d5bba8] hidden md:inline-block">
              Passe o mouse para puxar a pasta
            </span>
          </div>
        </div>

        {/* ================= THE PHYSICAL BOOKSHELF (ESTANTE DE PASTAS REAIS) ================= */}
        <div className="relative p-3 sm:p-5">
          {/* Wooden Shelf Chamber with Top & Side Shadows */}
          <div className="relative rounded-2xl bg-[#0f0a07] border-2 border-[#3d2719] pt-4 pb-3 px-2 sm:px-3.5 shadow-[inset_0_12px_24px_rgba(0,0,0,0.8),inset_0_-8px_16px_rgba(0,0,0,0.6)]">
            {/* Shelf Backboard Texture */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#180f0a] via-[#100a06] to-[#0a0604] pointer-events-none opacity-90" />

            {/* Helper Shelf Tag */}
            <div className="relative z-20 flex items-center justify-between pb-3 px-1 border-b border-[#2d1c12]">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#e6cfbf]">
                <Bookmark className="w-3.5 h-3.5 text-[#dfb15b]" />
                <span className="uppercase tracking-wider">
                  Estante de Documentos (Pastas 01 a 17)
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#b89f8c]">
                Clique para selecionar
              </span>
            </div>

            {/* FOLDERS ROW ON SHELF (17 COLORFUL AZ BINDER SPINES) */}
            <div className="relative pt-4 pb-2">
              {/* Wooden Shelf Base / Prateleira de Madeira com Profundidade 3D */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-[#6e4326] via-[#4d2d18] to-[#2d180b] rounded-b border-t border-[#8f5b35] shadow-[0_4px_12px_rgba(0,0,0,0.7)] pointer-events-none z-20" />
              <div className="absolute bottom-3 left-0 right-0 h-1 bg-black/40 blur-xs pointer-events-none z-20" />

              {/* Grid / Array of 17 Realistic Binder Spines (Flex shelf on desktop, responsive grid on mobile) */}
              <div className="flex flex-wrap sm:grid sm:grid-cols-9 md:flex md:flex-nowrap items-end justify-center gap-1 sm:gap-1 md:gap-1 relative z-30 pb-2">
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
                      title={`${chap.roman}: ${chap.title}`}
                      aria-label={`${chap.roman}: ${chap.title}`}
                      className={`group relative flex flex-col justify-between rounded-t-md transition-all duration-200 cursor-pointer outline-none flex-1 min-w-[28px] max-w-[42px] sm:max-w-none ${
                        isSelected
                          ? '-translate-y-3.5 scale-105 z-40'
                          : 'hover:-translate-y-2 hover:scale-102 z-10'
                      }`}
                      style={{
                        height: isSelected ? '140px' : '126px',
                        transformOrigin: 'bottom center',
                      }}
                    >
                      {/* Realistic Physical Binder Body (Lombada com Textura e Profundidade 3D) */}
                      <div
                        className={`relative w-full h-full rounded-t-md bg-gradient-to-b ${theme.spineGradient} ${theme.spineShadow} border-y border-white/20 flex flex-col justify-between p-1 transition-all overflow-hidden ${
                          isSelected
                            ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-slate-950 shadow-[0_15px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.2)]'
                            : 'shadow-[0_8px_15px_rgba(0,0,0,0.6)]'
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

                        {/* Gloss / Light reflection on binder spine curved surface */}
                        <div
                          className={`absolute top-0 bottom-0 left-0.5 w-1.5 bg-gradient-to-r ${theme.spineHighlight} pointer-events-none`}
                        />
                        <div className="absolute top-0 bottom-0 right-0.5 w-1 bg-black/30 pointer-events-none" />

                        {/* Top Metal Edge Protector (Canto Metálico do Fichário) */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border-b border-slate-600/50 opacity-90 pointer-events-none" />

                        {/* ================= SPINAL PAPER LABEL TICKET (ETIQUETA DE PAPEL REAL) ================= */}
                        <div className="relative z-10 w-full mt-1">
                          <div
                            className={`w-full rounded-[2px] ${theme.labelBg} border ${theme.labelBorder} shadow-[0_1px_3px_rgba(0,0,0,0.3)] py-1 px-0.5 flex flex-col items-center justify-center text-center`}
                          >
                            {/* Paper label lines decoration */}
                            <div className="w-4 h-0.5 bg-slate-400/40 rounded-full mb-0.5" />

                            {/* Chapter Number on Physical Tag */}
                            <span className="text-[10px] sm:text-[11px] font-black text-slate-900 leading-none tracking-tight">
                              {chap.num}
                            </span>

                            {/* Roman Numeral */}
                            <span className="text-[7px] sm:text-[8px] font-extrabold text-slate-700 tracking-tighter leading-none mt-0.5">
                              {chap.roman.replace('CAPÍTULO ', '')}
                            </span>
                          </div>
                        </div>

                        {/* ================= MIDDLE: CHAPTER ICON / EMBLEM ================= */}
                        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-1">
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center text-white/90 shadow-sm transition-transform ${
                              isSelected
                                ? 'scale-110 bg-black/30'
                                : 'bg-black/20 group-hover:bg-black/30'
                            }`}
                          >
                            <ChapIcon className="w-3.5 h-3.5" />
                          </div>

                          {/* Mini Vertical Spine Title (Shortened) */}
                          <span className="text-[7.5px] font-extrabold text-white/90 tracking-tighter uppercase line-clamp-1 max-w-[28px] truncate mt-0.5 leading-none">
                            {chap.tag.split(' ')[0]}
                          </span>
                        </div>

                        {/* ================= BOTTOM: REALISTIC METAL PULL HOLE (FURO DE METAL / RING HOLE DA LOMBADA) ================= */}
                        <div className="relative z-10 flex flex-col items-center pb-1">
                          {/* Metal Grommet Ring (Anel de metal do fichário para puxar com o dedo) */}
                          <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 p-[1.5px] shadow-[0_2px_4px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.8)]">
                            {/* Black Inner Hole (Furo vazado para o interior) */}
                            <div className="w-full h-full rounded-full bg-gradient-to-b from-black via-slate-950 to-slate-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] flex items-center justify-center">
                              {/* Inner shadow & light rim */}
                              <div className="w-1.5 h-1.5 rounded-full bg-black" />
                            </div>
                          </div>

                          {/* Volume Tag at bottom edge */}
                          <span className="text-[6.5px] font-black text-white/70 tracking-tighter mt-1 leading-none">
                            {chap.yearTag}
                          </span>
                        </div>

                        {/* Selected Indicator Light on Top */}
                        {isSelected && (
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15] ring-2 ring-[#0f0a07]" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ================= ACTIVE PHYSICAL FOLDER INSPECTION & OPEN VIEW ================= */}
          {/* Simula a pasta física puxada da estante e aberta na bancada */}
          <div className="mt-4 relative rounded-2xl bg-gradient-to-b from-[#251710] via-[#1d120c] to-[#160d09] border-2 border-[#4a2e1d] p-3.5 sm:p-5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Background Texture on Desk */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Chapter Left Folder Spine Edge Visual (Visual da lombada da pasta selecionada) */}
            <div
              className={`absolute top-0 bottom-0 left-0 w-3.5 sm:w-4 bg-gradient-to-b ${activeChapter.colorTheme.spineGradient} border-r-2 border-[#160d09] shadow-lg`}
            />

            <div className="relative z-10 pl-2 sm:pl-3 space-y-3.5">
              {/* Top Row: Physical Folder Header info */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2.5 border-b border-[#3d2719]">
                <div className="flex items-center gap-3">
                  {/* Folder Icon with Theme Color */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${activeChapter.colorTheme.spineGradient} flex items-center justify-center text-white shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-white/30 shrink-0`}
                  >
                    <ActiveIcon className="w-6 h-6 drop-shadow" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-black tracking-wider text-[#dfb15b] uppercase">
                        {activeChapter.roman}
                      </span>
                      <span className="text-[#8c6b54] text-xs">•</span>
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#e6cfbf] uppercase">
                        PASTA FÍSICA #{activeChapter.num}
                      </span>
                    </div>

                    <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                      <span>{activeChapter.tag} • RDC 1002</span>
                    </div>
                  </div>
                </div>

                {/* Right Side Navigation & Tags */}
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-md bg-[#2d1b11] text-[#f5d78e] border border-[#52331f] text-xs font-black tracking-tight shadow-sm">
                    {activeChapter.pagesCount}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Pasta anterior"
                      className="w-7 h-7 rounded-lg bg-[#24160d] border border-[#4d311d] hover:border-[#dfb15b] flex items-center justify-center text-[#e6cfbf] hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Próxima pasta"
                      className="w-7 h-7 rounded-lg bg-[#24160d] border border-[#4d311d] hover:border-[#dfb15b] flex items-center justify-center text-[#e6cfbf] hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Title and Subtitle */}
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-black text-[#faf3eb] leading-snug tracking-tight">
                  {activeChapter.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#d5bba8] mt-1 font-medium leading-snug">
                  {activeChapter.subtitle}
                </p>
              </div>

              {/* ================= REAL PHYSICAL DOCUMENT SHEET INSIDE FOLDER ================= */}
              <div className="relative pt-1.5">
                {/* Stacked Sheet Shadow Effect */}
                <div className="absolute top-0 left-2 right-2 h-4 bg-[#e8dfcf] rounded-t-lg transform -rotate-0.5 opacity-60 shadow-sm pointer-events-none" />

                {/* Realistic Physical White Paper Sheet */}
                <div className="relative z-10 rounded-xl bg-gradient-to-b from-[#fcfbf9] via-[#f7f5f0] to-[#eeeae0] p-3.5 sm:p-4 text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.1)] border border-[#ded7c8]">
                  {/* Paper Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-300 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#185abd] text-white flex items-center justify-center text-[11px] font-black shadow-sm">
                        W
                      </div>
                      <div className="leading-tight">
                        <span className="text-[11px] sm:text-xs font-black text-slate-900 block truncate max-w-[200px] sm:max-w-none">
                          {activeChapter.wordFileName}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-600">
                          Arquivo Word (.docx) editável • Imprima ou salve em PDF
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-900 text-[10px] font-black px-2 py-0.5 rounded shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>100% Editável</span>
                    </div>
                  </div>

                  {/* Document Topics Checklist */}
                  <div className="mt-2.5 space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 block">
                      Conteúdo e Modelos da Pasta Física:
                    </span>
                    <ul className="space-y-1">
                      {activeChapter.summaryBullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-800 leading-snug"
                        >
                          <Check className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5 stroke-[3]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Physical Document Texture Ruling Lines */}
                  <div className="mt-2.5 pt-2 border-t border-slate-300/80 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-1 bg-slate-300 rounded-full w-2/5" />
                      <div className="h-1 bg-slate-200 rounded-full w-1/4" />
                      <div className="h-1 bg-slate-300 rounded-full w-1/3" />
                    </div>
                  </div>

                  {/* Paper Footer */}
                  <div className="mt-2 pt-1.5 border-t border-slate-300/60 flex items-center justify-between text-[10px] text-slate-600 font-medium">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Info className="w-3 h-3 text-[#c99738]" />
                      <span>Formatação pronta para fiscalização sanitária</span>
                    </span>
                    <span className="font-bold text-slate-900">Personalize com a sua logo</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Status */}
              <div className="flex items-center justify-between text-[11px] pt-1 text-[#d5bba8]">
                <span className="font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#dfb15b]" />
                  Pasta {activeChapter.num} de 17 selecionada
                </span>
                <span className="text-[#f5d78e] font-bold flex items-center gap-1">
                  <span>Todas as 17 pastas inclusas</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* ================= FULL ARCHIVE SUMMARY ACCORDION ================= */}
          <div className="mt-3.5 rounded-xl bg-[#140c08] border border-[#382315] p-3 sm:p-3.5 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#e6cfbf] flex items-center gap-1.5">
                <Library className="w-3.5 h-3.5 text-[#dfb15b]" />
                Índice Geral do Acervo (17 Capítulos Completos)
              </span>
              <span className="text-[10px] font-black text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-600/40">
                17 Pastas Prontas
              </span>
            </div>

            {/* Scrollable Mini List */}
            <div className="max-h-[140px] overflow-y-auto pr-1 space-y-1 scrollbar-thin scrollbar-thumb-[#4d311d] scrollbar-track-[#1a100a]">
              {PHYSICAL_CHAPTERS.map((chap, idx) => {
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
                        ? 'bg-[#382315] text-[#f5d78e] font-bold border border-[#dfb15b]/60 shadow-sm'
                        : 'text-[#b89f8c] hover:bg-[#24160d] hover:text-[#faede1] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                        style={{
                          background: `linear-gradient(135deg, ${chap.colorTheme.accentGlow}, #c99738)`,
                        }}
                      />
                      <ChapIcon className="w-3.5 h-3.5 shrink-0 text-[#dfb15b]" />
                      <span className="font-black text-[#d5bba8] shrink-0">{chap.roman}:</span>
                      <span className="truncate">{chap.title}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#1f140d] text-[#e6cfbf] border border-[#3d2719]">
                        {chap.tag}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ================= FOOTER HIGHLIGHTS ================= */}
        <div className="px-4 sm:px-6 py-3 bg-[#140c08] border-t-2 border-[#382315] flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs font-semibold text-[#d5bba8]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#faede1]">
              <span className="w-2 h-2 rounded-full bg-[#dfb15b]" />
              <strong>17 Pastas com Lombadas Reais</strong>
            </span>
            <span className="text-[#593d2b]">•</span>
            <span className="flex items-center gap-1.5 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <strong>+50 Arquivos em Word (.docx)</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#f5d78e] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#dfb15b]" />
            <span>Estruturado para Consultórios Odontológicos</span>
          </div>
        </div>
      </div>

      {/* Realistic Shadow Cast on Floor */}
      <div className="w-[88%] h-6 bg-black/60 blur-xl mx-auto rounded-full -mt-3 -z-10" />
    </div>
  )
}

export default DocumentExplosion
