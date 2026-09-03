import React from 'react'
import {
  ShieldCheck,
  FileText,
  FileSpreadsheet,
  Layers,
  Sparkles,
  Lock,
  Unlock,
  CheckCircle2,
  Crosshair,
  Cpu,
  Terminal,
  Activity,
  Award,
  Zap,
} from 'lucide-react'

export const LegislationMissionHUD: React.FC = () => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
      {/* Grade de fundo HUD tática estilo Sci-Fi / Game interface */}
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Iluminação ambiente volumétrica (Glow âmbar + esmeralda + azul) */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================= */}
      {/* TOP HUD BAR: Metadados da Missão, Status Online & Scanner */}
      {/* ========================================================= */}
      <div className="relative z-10 px-4 sm:px-6 py-3.5 border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono font-bold tracking-wider uppercase text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            PATCH ATIVO • RDC 1002/2025
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-slate-500" />
            MODO: AUDITORIA SANITÁRIA
          </span>
        </div>

        {/* Status da Missão */}
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">STATUS:</span>
            <span className="text-emerald-400 font-bold">100% REGULARIZADO</span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-slate-500 border-l border-slate-800 pl-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>LATÊNCIA ZERO</span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CORPO DO HUD: Boss HP + Inventário 3D + Selo de Blindagem */}
      {/* ========================================================= */}
      <div className="relative z-10 p-5 sm:p-7 md:p-8 space-y-7">
        {/* BARRA DE BOSS HP: "Boss Inspeção Sanitária" derrotado / neutralizado */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-inner">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
                BOSS DA FASE
              </span>
              <span className="text-sm font-bold text-slate-200">
                Auditoria Vigilância Sanitária
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-400">AMEAÇA DE MULTA:</span>
              <span className="font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                0% • NEUTRALIZADA
              </span>
            </div>
          </div>

          {/* Barra de progresso com glow gamer */}
          <div className="relative h-3 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-all duration-500"
              style={{ width: '100%' }}
            />
            {/* Linhas de marcação HUD na barra */}
            <div className="absolute inset-0 flex justify-between px-2 pointer-events-none opacity-40">
              <span className="w-px h-full bg-slate-900" />
              <span className="w-px h-full bg-slate-900" />
              <span className="w-px h-full bg-slate-900" />
              <span className="w-px h-full bg-slate-900" />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Crosshair className="w-3 h-3 text-emerald-400" />
              Checklist RDC nº 1002/2025: 18 Capítulos Auditados
            </span>
            <span className="text-emerald-400 font-bold">100% BLINDADO CONTRA INTERDIÇÃO</span>
          </div>
        </div>

        {/* COMPOSIÇÃO VISUAL CENTRAL: GRID DE ITENS DO INVENTÁRIO + SELO CENTRAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* LADO ESQUERDO: Documentos Estratégicos Desbloqueados (Slots 1 a 3) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
              <span className="uppercase tracking-wider flex items-center gap-1 text-slate-300 font-bold">
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                Slots de Manuais & POPs
              </span>
              <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                <Unlock className="w-3 h-3" />
                DESBLOQUEADOS
              </span>
            </div>

            {/* Card Slot 1: Manual Principal */}
            <div className="group relative p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white truncate">
                      Manual de Boas Práticas
                    </span>
                    <span className="text-[10px] font-mono text-blue-400 font-bold bg-blue-500/10 px-1.5 py-0.2 rounded">
                      DOCX
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">
                    18 Capítulos estruturados RDC 1002
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>

            {/* Card Slot 2: POPs Operacionais */}
            <div className="group relative p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white truncate">
                      POPs de Biossegurança & CME
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded">
                      73 DOCS
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">
                    Esterilização, fluxo cruzado e EPIs
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>

            {/* Card Slot 3: Planilhas e Rastreabilidade */}
            <div className="group relative p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-teal-500/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-400 group-hover:scale-105 transition-transform">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white truncate">
                      Controle de Autoclave & Água
                    </span>
                    <span className="text-[10px] font-mono text-teal-400 font-bold bg-teal-500/10 px-1.5 py-0.2 rounded">
                      14 XLSX
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">
                    Ciclos, testes biológicos e PMOC
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>

          {/* CENTRO: Selo Gráfico Holográfico RDC 1002/2025 (SVG puro de alta fidelidade) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-2 relative">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              {/* Círculo com rotação sutil / HUD Rings SVG */}
              <svg
                viewBox="0 0 240 240"
                className="w-full h-full filter drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]"
              >
                <defs>
                  <linearGradient id="hudGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="hudGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <radialGradient id="hudCenterGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                    <stop offset="70%" stopColor="#0f172a" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
                  </radialGradient>
                </defs>

                {/* Anel Externo Tracejado (Radar HUD) */}
                <circle
                  cx="120"
                  cy="120"
                  r="110"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />

                {/* Arcos Orbitais com Acentos Tecnológicos */}
                <circle
                  cx="120"
                  cy="120"
                  r="102"
                  fill="none"
                  stroke="url(#hudGreenGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="50 15 30 15 80 20"
                  className="animate-spin"
                  style={{ animationDuration: '40s' }}
                />
                <circle
                  cx="120"
                  cy="120"
                  r="92"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="1.2"
                  strokeDasharray="20 40 60 20"
                  opacity="0.6"
                />

                {/* Mira Angular (4 cantos de mira tática) */}
                <path
                  d="M 120 12 L 120 24 M 120 216 L 120 228 M 12 120 L 24 120 M 216 120 L 228 120"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 40 40 L 50 40 M 40 40 L 40 50"
                  stroke="#34d399"
                  strokeWidth="1.8"
                  fill="none"
                />
                <path
                  d="M 200 40 L 190 40 M 200 40 L 200 50"
                  stroke="#34d399"
                  strokeWidth="1.8"
                  fill="none"
                />
                <path
                  d="M 40 200 L 50 200 M 40 200 L 40 190"
                  stroke="#34d399"
                  strokeWidth="1.8"
                  fill="none"
                />
                <path
                  d="M 200 200 L 190 200 M 200 200 L 200 190"
                  stroke="#34d399"
                  strokeWidth="1.8"
                  fill="none"
                />

                {/* Núcleo Central */}
                <circle
                  cx="120"
                  cy="120"
                  r="76"
                  fill="url(#hudCenterGlow)"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <circle
                  cx="120"
                  cy="120"
                  r="68"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity="0.6"
                />

                {/* Escudo Heróico Central */}
                <path
                  d="M 120 62 L 155 76 C 155 110 142 142 120 158 C 98 142 85 110 85 76 Z"
                  fill="#064e3b"
                  fillOpacity="0.8"
                  stroke="url(#hudGreenGrad)"
                  strokeWidth="2.5"
                />

                {/* Checkmark dentro do Escudo */}
                <path
                  d="M 105 110 L 115 120 L 137 98"
                  fill="none"
                  stroke="#ecfdf5"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Estrelas de Conquista / Nível Máximo */}
                <polygon
                  points="120,44 123,51 130,51 124,55 126,62 120,58 114,62 116,55 110,51 117,51"
                  fill="#fbbf24"
                />
                <polygon
                  points="102,50 104,55 109,55 105,58 107,63 102,60 97,63 99,58 95,55 100,55"
                  fill="#fbbf24"
                  opacity="0.8"
                />
                <polygon
                  points="138,50 140,55 145,55 141,58 143,63 138,60 133,63 135,58 131,55 136,55"
                  fill="#fbbf24"
                  opacity="0.8"
                />
              </svg>

              {/* Badges Flutuantes em torno do Selo */}
              <div className="absolute -top-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black font-mono text-[10px] px-2.5 py-0.5 rounded-full shadow-lg border border-amber-300 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-slate-950" />
                BUILD DEFINITIVA
              </div>

              <div className="absolute -bottom-2 bg-slate-900 text-emerald-400 font-mono font-bold text-[11px] px-3 py-1 rounded-full border border-emerald-500/50 shadow-lg flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                RDC 1002/2025 OK
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="text-[11px] font-mono text-slate-400 block">
                Selo de Conformidade Anvisa
              </span>
              <span className="text-xs font-bold text-slate-200">
                Pronto para Apresentação Imediata
              </span>
            </div>
          </div>

          {/* LADO DIREITO: Programas Obrigatórios Expandidos (Slots 4 a 6) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
              <span className="uppercase tracking-wider flex items-center gap-1 text-slate-300 font-bold">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Requisitos Críticos Anvisa
              </span>
              <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                <CheckCircle2 className="w-3 h-3" />
                AUDITADOS
              </span>
            </div>

            {/* Card Slot 4: PSP & Gestão de Risco */}
            <div className="group relative p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white truncate">
                      Plano de Seg. do Paciente (PSP)
                    </span>
                    <span className="text-[10px] font-mono text-indigo-400 font-bold bg-indigo-500/10 px-1.5 py-0.2 rounded">
                      NOVO
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">
                    Gerenciamento de eventos adversos
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>

            {/* Card Slot 5: PMOC & PGRSS */}
            <div className="group relative p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-105 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white truncate">
                      PMOC Ar + PGRSS Resíduos
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 font-bold bg-amber-500/10 px-1.5 py-0.2 rounded">
                      LEI FED.
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">
                    Manutenção climática e descarte
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>

            {/* Card Slot 6: Fichas da Equipe ASB/TSB */}
            <div className="group relative p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white truncate">
                      Dossiê Funcional da Equipe
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded">
                      ASB/TSB
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">Treinamentos, vacinas e ASO</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FOOTER BAR DO HUD: Indicadores Rápidos de Conquistas     */}
        {/* ========================================================= */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              73 Arquivos Word (DOCX)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              14 Planilhas Excel (XLSX)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />8 Guias & Cartazes
            </span>
          </div>

          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>TOTAL: 95 ITENS PRONTOS PARA O FISCAL</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LegislationMissionHUD
