import React, { useState } from 'react'
import {
  AlertCircle,
  XCircle,
  CheckCircle2,
  ShieldAlert,
  Flame,
  Award,
  Gamepad2,
  ScrollText,
  FileCheck2,
  Target,
  Sparkles,
  ChevronRight,
  Swords,
  Layers,
  Zap,
} from 'lucide-react'
import legislacaoImg from '@/assets/como-se-adaptar-a-nova-legislacao-federal-3-aff2e.png'
import { LegislationMissionHUD } from './LegislationMissionHUD'

export const Legislation = () => {
  const [activeTab, setActiveTab] = useState<'rules' | 'status'>('rules')

  // Estatísticas gamificadas da RDC 1002/2025
  const questStats = [
    {
      label: 'Meta da Fase',
      value: '18 Capítulos',
      sub: 'Conforme RDC 1002/2025',
      icon: Target,
      accent: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      label: 'Itens no Inventário',
      value: '95 Documentos',
      sub: '73 DOCX + 14 XLSX + 8 Guias',
      icon: Layers,
      accent: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      label: 'Boss da Fase',
      value: 'Inspeção Sanitária',
      sub: 'Aprovação sem notificações',
      icon: Swords,
      accent: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      label: 'Status do Player',
      value: 'Nível Máximo',
      sub: '100% Blindado contra multas',
      icon: Award,
      accent: 'text-blue-600 bg-blue-50 border-blue-100',
    },
  ]

  // Boss / Desafios da Fase de Inspeção
  const questSteps = [
    {
      phase: 'FASE 01',
      title: 'Auditoria de Arquitetura & Fluxos',
      capitulos: 'Cap. 1 a 4',
      badge: 'Missão Crítica',
      desc: 'Projeto físico, fluxos cruzados e documentação comprobatória da equipe.',
    },
    {
      phase: 'FASE 02',
      title: 'Controle Ambiental & Predial',
      capitulos: 'Cap. 5 a 9',
      badge: 'Missão Técnica',
      desc: 'Qualidade da água, PMOC de ar-condicionado, PGTS e PGRSS rigorosos.',
    },
    {
      phase: 'FASE 03',
      title: 'Esterilização CME & Segurança',
      capitulos: 'Cap. 10 a 17',
      badge: 'Boss Final',
      desc: 'Rastreabilidade de autoclave, PSP, acidentes biológicos e IRAS.',
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white border-y border-slate-100">
      {/* Background sutil em malha técnica / gaming grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#1e293b 1px, transparent 1px), radial-gradient(#1e293b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto space-y-14 md:space-y-18">
        {/* ========================================================= */}
        {/* CABEÇALHO GAMIFICADO COM PATCH ANVISA RDC 1002/2025      */}
        {/* ========================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge duplo: Gamificação + Legislação */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-slate-900">
            A nova legislação da Anvisa mudou o jogo
          </h2>
        </div>

        {/* ========================================================= */}
        {/* HUD / DASHBOARD DO JOGADOR (STATS DE MISSÃO)              */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {questStats.map((st, idx) => {
            const Icon = st.icon
            return
            null
          })}
        </div>

        {/* ========================================================= */}
        {/* DISCLAIMER OBRIGATÓRIO (TEXTO EXATO EM DESTAQUE MÁXIMO)  */}
        {/* "O Manual de Rotinas e Procedimentos agora é só uma parte dos documentos que você precisa ter para mostrar em uma inspeção sanitária" */}
        {/* ========================================================= */}
        <div className="max-w-5xl mx-auto w-full">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-blue-500/30 text-white">
            {/* Efeito luminoso de fundo */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              {/* Badge visual do Disclaimer */}
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20 font-black text-2xl">
                  <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-slate-950 stroke-[2.2]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-mono font-bold tracking-wider uppercase">
                  Aviso Crítico
                </span>
              </div>

              {/* Texto com o disclaimer exato */}
              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Regra Sanitária em Vigor (RDC 1002/2025)
                </div>

                <p className="text-xl sm:text-2xl md:text-[1.75rem] font-extrabold leading-snug tracking-tight text-white drop-shadow-xs">
                  “O Manual de Rotinas e Procedimentos agora é só uma parte dos documentos que você
                  precisa ter para mostrar em uma inspeção sanitária”
                </p>

                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-3xl pt-1">
                  A Anvisa expandiu os requisitos: além da rotina básica, o fiscal agora audita
                  planos de segurança do paciente (PSP), controle de água, rastreabilidade de
                  autoclave, PMOC e fichas funcionais completas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TABELA DE BATALHA: SEM O MANUAL VS. COM O MANUAL          */}
        {/* Metáfora gamificada: "Modo Difícil / Game Over" vs "Modo Pró / Boss Vencido" */}
        {/* ========================================================= */}
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Como você quer enfrentar a visita da fiscalização?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Coluna 1: Modo Difícil / Sem o Manual */}
            <div className="relative bg-white p-7 sm:p-9 rounded-3xl shadow-sm border-2 border-rose-200/80 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              {/* Badge de cabeçalho gamificado */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-mono font-bold">
                    <Flame className="w-3.5 h-3.5 text-rose-600" />
                    MODO DIFÍCIL • RISCO ALTO
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">HP: 20%</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span>Sem o Manual</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    O caminho improvisado que trava na primeira pergunta do fiscal.
                  </p>
                </div>

                {/* Lista de penalidades / debuffs */}
                <ul className="space-y-3 pt-3">
                  {[
                    {
                      title: 'Confuso',
                      desc: 'Informações espalhadas, normas desatualizadas e dúvida constante do que apresentar.',
                    },
                    {
                      title: 'Difícil de executar',
                      desc: 'Equipe desorientada sem saber exatamente quais procedimentos seguir no dia a dia.',
                    },
                    {
                      title: 'Muitas vezes ignorado no dia a dia',
                      desc: 'Documentos guardados na gaveta que não refletem a prática real e geram autuações.',
                    },
                    {
                      title: 'Risco de multas e interdição',
                      desc: 'Notificações sanitárias formais, perda de tempo em recursos e estresse evitável.',
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100 text-slate-700"
                    >
                      <div className="bg-white shadow-xs p-1.5 rounded-full shrink-0 mt-0.5">
                        <XCircle className="w-5 h-5 text-rose-500" />
                      </div>
                      <div className="text-sm">
                        <strong className="block text-rose-950 font-bold">{item.title}</strong>
                        <span className="text-slate-600 text-xs leading-relaxed">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status footer da coluna 1 */}
              <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between text-xs font-mono text-rose-700">
                <span className="font-semibold">RESULTADO:</span>
                <span className="font-bold">INSPEÇÃO REPROVADA / RETRABALHO</span>
              </div>
            </div>

            {/* Coluna 2: Modo Pro / Com o Manual */}
            <div className="relative bg-gradient-to-b from-white to-emerald-50/30 p-7 sm:p-9 rounded-3xl shadow-md border-2 border-emerald-400 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              {/* Selo flutuante de recomendação */}
              <div className="absolute -top-3.5 right-6 bg-emerald-600 text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                Recomendada
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold">
                    <Award className="w-3.5 h-3.5 text-emerald-700" />
                    MODO PRO • 100% BLINDADO
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold">HP: 100%</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span>Com o Manual</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    O roteiro oficial estruturado item a item segundo a RDC 1002/2025.
                  </p>
                </div>

                {/* Lista de buffs / vantagens */}
                <ul className="space-y-3 pt-3">
                  {[
                    {
                      title: 'O que fazer',
                      desc: 'Listagem completa dos documentos exigidos por cada capítulo da Anvisa sem omitir nada.',
                    },
                    {
                      title: 'Como fazer',
                      desc: 'Modelos pré-prontos editáveis no Word e Excel, com campos pré-formatados para o seu consultório.',
                    },
                    {
                      title: 'Por que fazer',
                      desc: 'Fundamentação técnica que dá autoridade imediata na frente do auditor da vigilância sanitária.',
                    },
                    {
                      title: 'Aprovação de primeira',
                      desc: 'Segurança psicológica para o cirurgião-dentista e toda a equipe odontológica (ASB/TSB).',
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-slate-700"
                    >
                      <div className="bg-white shadow-xs p-1.5 rounded-full shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="text-sm">
                        <strong className="block text-emerald-950 font-bold">{item.title}</strong>
                        <span className="text-slate-600 text-xs leading-relaxed">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status footer da coluna 2 */}
              <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs font-mono text-emerald-800">
                <span className="font-semibold">RESULTADO:</span>
                <span className="font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  APROVADO COM ELOGIOS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CHECKPOINTS DA MISSÃO / PROGRESSO DOS CAPÍTULOS          */}
        {/* Metáfora: Fases da inspeção sanitária                     */}
        {/* ========================================================= */}
      </div>
    </section>
  )
}
