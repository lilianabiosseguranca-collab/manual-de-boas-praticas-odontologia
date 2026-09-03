import React, { useState } from 'react'
import {
  FileText,
  FileSpreadsheet,
  Maximize2,
  X,
  Sparkles,
  CheckCircle2,
  Download,
  Eye,
  Calendar,
  AlertTriangle,
  ClipboardCheck,
  ShieldCheck,
  Building2,
  Droplets,
  Layers,
} from 'lucide-react'

// --- 1. POP 7.1 Component (Word Preview) ---
export function PopMaintenancePreview() {
  return (
    <div className="w-full bg-white text-slate-800 text-[11px] font-sans shadow-sm border border-slate-200 rounded-sm select-none">
      {/* Word Header Table */}
      <table className="w-full border-collapse border border-slate-400 text-[10px]">
        <tbody>
          <tr>
            <td
              rowSpan={3}
              className="w-1/4 border border-slate-400 p-2 text-center bg-slate-50 font-bold text-slate-700"
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">
                  Logomarca do Serviço
                </span>
                <span className="text-xs font-black text-blue-900">[NOME DA CLÍNICA]</span>
              </div>
            </td>
            <td
              colSpan={2}
              className="border border-slate-400 p-2 text-center font-bold text-slate-900 bg-slate-100/70 text-[11px]"
            >
              PROCEDIMENTO OPERACIONAL PADRÃO (POP)
              <div className="text-[10px] text-blue-800 font-semibold mt-0.5">
                POP 7.1 – Plano Anual de Manutenção Preventiva e Corretiva da Edificação e
                Instalações
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-400 px-2 py-1 text-[9.5px]">
              <span className="font-semibold text-slate-600">Código:</span>{' '}
              <span className="font-mono font-bold text-blue-900">[SIGLA DO SERVIÇO]-POP7.1</span>
            </td>
            <td className="border border-slate-400 px-2 py-1 text-[9.5px]">
              <span className="font-semibold text-slate-600">Versão:</span>{' '}
              <span className="font-semibold">01/2027</span>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-400 px-2 py-1 text-[9.5px]">
              <span className="font-semibold text-slate-600">Elaboração:</span> Responsável Técnico
            </td>
            <td className="border border-slate-400 px-2 py-1 text-[9.5px]">
              <span className="font-semibold text-slate-600">Vigência:</span> RDC 1002/2025
            </td>
          </tr>
        </tbody>
      </table>

      {/* POP Body content */}
      <div className="p-4 space-y-3 font-serif text-[11px] leading-relaxed text-slate-800">
        <div>
          <h4 className="font-sans font-bold text-blue-950 text-xs border-b border-blue-100 pb-1 flex items-center gap-1.5">
            <span className="text-blue-600 font-mono">1.</span> OBJETIVO
          </h4>
          <p className="mt-1 text-justify text-slate-700 text-[10.5px]">
            Estabelecer as diretrizes e rotinas para a manutenção preventiva e corretiva da
            infraestrutura predial, instalações elétricas, hidráulicas, climatização e sanitárias do
            serviço odontológico, garantindo a segurança dos pacientes e colaboradores conforme os
            parâmetros da Resolução RDC nº 1002/2025 da ANVISA.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-blue-950 text-xs border-b border-blue-100 pb-1 flex items-center gap-1.5">
            <span className="text-blue-600 font-mono">2.</span> CAMPO DE APLICAÇÃO
          </h4>
          <p className="mt-1 text-justify text-slate-700 text-[10.5px]">
            Aplica-se a todas as áreas físicas do consultório/clínica odontológica, abrangendo
            consultórios de atendimento clínico, sala de esterilização (CME), recepção, sanitários,
            compressores, bombas de vácuo e áreas técnicas.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-blue-950 text-xs border-b border-blue-100 pb-1 flex items-center gap-1.5">
            <span className="text-blue-600 font-mono">3.</span> RESPONSABILIDADES
          </h4>
          <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-700 text-[10.5px]">
            <li>
              <strong className="text-slate-900">Responsável Técnico (RT):</strong> Aprovar o
              cronograma anual e validar laudos técnicos.
            </li>
            <li>
              <strong className="text-slate-900">Equipe de Apoio / ASB:</strong> Inspeções visuais
              diárias e reporte imediato de inconformidades.
            </li>
            <li>
              <strong className="text-slate-900">Prestadores Habilitados:</strong> Execução das
              manutenções elétricas, PMOC e caixas d'água.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// --- 2. POP 11.8 Component (Word Preview) ---
export function PopCleaningPreview() {
  return (
    <div className="w-full bg-white text-slate-800 text-[11px] font-sans shadow-sm border border-slate-200 rounded-sm select-none">
      {/* Word Header Table */}
      <table className="w-full border-collapse border border-slate-400 text-[10px]">
        <tbody>
          <tr>
            <td
              rowSpan={3}
              className="w-1/4 border border-slate-400 p-2 text-center bg-slate-50 font-bold text-slate-700"
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">
                  Logomarca do Serviço
                </span>
                <span className="text-xs font-black text-blue-900">[NOME DA CLÍNICA]</span>
              </div>
            </td>
            <td
              colSpan={2}
              className="border border-slate-400 p-2 text-center font-bold text-slate-900 bg-slate-100/70 text-[11px]"
            >
              PROCEDIMENTO OPERACIONAL PADRÃO (POP)
              <div className="text-[10px] text-blue-800 font-semibold mt-0.5">
                POP 11.8 – Limpeza de Rotina - Áreas Comuns
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-400 px-2 py-1 text-[9.5px]">
              <span className="font-semibold text-slate-600">Código:</span>{' '}
              <span className="font-mono font-bold text-blue-900">[SIGLA DO SERVIÇO]-POP11.8</span>
            </td>
            <td className="border border-slate-400 px-2 py-1 text-[9.5px]">
              <span className="font-semibold text-slate-600">Versão:</span>{' '}
              <span className="font-semibold">01/2027</span>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-400 px-2 py-1 text-[9.5px]">
              <span className="font-semibold text-slate-600">Área:</span> Higienização e Controle
              Sanitário
            </td>
            <td className="border border-slate-400 px-2 py-1 text-[9.5px]">
              <span className="font-semibold text-slate-600">Conformidade:</span> RDC 1002/2025
            </td>
          </tr>
        </tbody>
      </table>

      {/* POP Body content */}
      <div className="p-4 space-y-3 font-serif text-[11px] leading-relaxed text-slate-800">
        <div>
          <h4 className="font-sans font-bold text-blue-950 text-xs border-b border-blue-100 pb-1 flex items-center gap-1.5">
            <span className="text-blue-600 font-mono">1.</span> FINALIDADE
          </h4>
          <p className="mt-1 text-justify text-slate-700 text-[10.5px]">
            Padronizar as técnicas e frequências de limpeza concorrente e terminal nas áreas não
            críticas e comuns da clínica (recepção, sala de espera, corredores e sanitários de
            clientes), prevenindo a disseminação de sujidades e mantendo ambiente asséptico.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-bold text-blue-950 text-xs border-b border-blue-100 pb-1 flex items-center gap-1.5">
            <span className="text-blue-600 font-mono">2.</span> EQUIPAMENTOS DE PROTEÇÃO INDIVIDUAL
            (EPI)
          </h4>
          <div className="mt-1.5 grid grid-cols-2 gap-2 text-[10px] font-sans">
            <div className="p-1.5 bg-blue-50/60 rounded border border-blue-100 text-blue-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Luvas de borracha resistentes</span>
            </div>
            <div className="p-1.5 bg-blue-50/60 rounded border border-blue-100 text-blue-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Avental impermeável / Calçado fechado</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-sans font-bold text-blue-950 text-xs border-b border-blue-100 pb-1 flex items-center gap-1.5">
            <span className="text-blue-600 font-mono">3.</span> SEQUÊNCIA DO PROCEDIMENTO
          </h4>
          <p className="mt-1 text-justify text-slate-700 text-[10.5px]">
            Iniciar sempre da área mais limpa para a mais suja, e de cima para baixo. Utilizar
            sistema de dois baldes com detergente neutro regulamentado pela Anvisa e panos de
            microfibra com diferenciação por cores.
          </p>
        </div>
      </div>
    </div>
  )
}

// --- 3. Biological Spill POP Component (Word Final Sections Preview) ---
export function PopSpillPreview() {
  return (
    <div className="w-full bg-white text-slate-800 text-[11px] font-sans shadow-sm border border-slate-200 rounded-sm select-none">
      {/* Mini top indicator */}
      <div className="px-3 py-1.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between text-[9.5px] text-slate-500 font-mono">
        <span>POP 14.3 – Conduta em Derramamento de Material Biológico</span>
        <span className="text-blue-700 font-semibold">Página 3 de 3</span>
      </div>

      <div className="p-4 space-y-3 font-serif text-[11px] leading-relaxed text-slate-800">
        {/* Section 10 */}
        <div>
          <h4 className="font-sans font-bold text-blue-950 text-xs border-b border-blue-100 pb-0.5 flex items-center gap-1.5">
            <span className="text-blue-600 font-mono">10.</span> MATERIAIS NECESSÁRIOS
          </h4>
          <p className="mt-1 text-[10.5px] text-slate-700">
            Kit de derramamento biológico contendo: luvas de borracha grossa, avental descartável,
            máscara PFF2, óculos de proteção, papel toalha absorvente, pinça/pá para recolhimento de
            perfurocortantes, solução de hipoclorito de sódio a 1% e saco branco leitoso para
            resíduos infectantes (Grupo A).
          </p>
        </div>

        {/* Section 11 */}
        <div>
          <h4 className="font-sans font-bold text-blue-950 text-xs border-b border-blue-100 pb-0.5 flex items-center gap-1.5">
            <span className="text-blue-600 font-mono">11.</span> COMO PROCEDER PASSO A PASSO
          </h4>
          <ol className="mt-1 list-decimal list-inside space-y-1 text-slate-700 text-[10.5px]">
            <li>Isolar imediatamente a área do incidente e paramentar-se com os EPIs;</li>
            <li>Conter o derramamento cobrindo o líquido biológico com papel toalha absorvente;</li>
            <li>
              Despejar cuidadosamente solução desinfetante sobre o papel, aguardando 20 minutos de
              tempo de contato;
            </li>
            <li>Recolher o material com auxílio de pá ou pinça e descartar no saco Grupo A.</li>
          </ol>
        </div>

        {/* Section 12 */}
        <div className="bg-amber-50/80 border border-amber-200/90 rounded-md p-2 font-sans">
          <h4 className="font-bold text-amber-900 text-[10.5px] flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>12. PONTOS CRÍTICOS DE ATENÇÃO</span>
          </h4>
          <p className="mt-0.5 text-[9.5px] text-amber-900/90 leading-tight">
            Nunca recolher fragmentos de vidro ou agulhas diretamente com as mãos, mesmo enluvadas.
            Não utilizar álcool 70% sobre grandes volumes de sangue devido à evaporação rápida e
            fixação de matéria orgânica.
          </p>
        </div>

        {/* Sections 13 and 14 */}
        <div className="pt-1 border-t border-slate-200 grid grid-cols-2 gap-2 text-[10px] font-sans">
          <div>
            <span className="font-bold text-slate-900 block">13. FIM DESTE PROCESSO</span>
            <span className="text-slate-600 text-[9.5px]">
              Área descontaminada e registros preenchidos.
            </span>
          </div>
          <div>
            <span className="font-bold text-slate-900 block">14. ANEXOS</span>
            <span className="text-slate-600 text-[9.5px]">
              Anexo A – Ficha de Notificação de Incidentes.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- 4. Excel Maintenance Calendar Preview ---
export function ExcelMaintenanceCalendarPreview() {
  const rows = [
    {
      data: '04/01/2027',
      dia: 'Segunda-feira',
      mes: 'Janeiro',
      sist: 'Elétrica, Hidráulica, Climatização, Iluminação',
      desc: 'Verificação mensal: disjuntores/tomadas/quadros; vazamentos/torneiras/sifões; limpeza filtros; luminárias/lâmpadas',
      period: 'Mensal',
      resp: 'Equipe interna + Profissional habilitado',
      status: 'pendente',
    },
    {
      data: '01/02/2027',
      dia: 'Segunda-feira',
      mes: 'Fevereiro',
      sist: 'Elétrica, Hidráulica, Climatização, Iluminação',
      desc: 'Verificação mensal (mesmos itens)',
      period: 'Mensal',
      resp: 'Equipe interna + Profissional habilitado',
      status: 'pendente',
    },
    {
      data: '01/03/2027',
      dia: 'Segunda-feira',
      mes: 'Março',
      sist: 'Elétrica, Hidráulica, Climatização, Iluminação',
      desc: 'Verificação mensal (mesmos itens)',
      period: 'Mensal',
      resp: 'Equipe interna + Profissional habilitado',
      status: 'pendente',
    },
    {
      data: '05/04/2027',
      dia: 'Segunda-feira',
      mes: 'Abril',
      sist: 'Elétrica, Hidráulica, Climatização, Iluminação',
      desc: 'Verificação mensal (mesmos itens)',
      period: 'Mensal',
      resp: 'Equipe interna + Profissional habilitado',
      status: 'pendente',
    },
    {
      data: '03/05/2027',
      dia: 'Segunda-feira',
      mes: 'Maio',
      sist: 'Elétrica, Hidráulica, Climatização, Iluminação',
      desc: 'Verificação mensal (mesmos itens)',
      period: 'Mensal',
      resp: 'Equipe interna + Profissional habilitado',
      status: 'pendente',
    },
    {
      data: '02/06/2027',
      dia: 'Quarta-feira',
      mes: 'Junho',
      sist: 'Instalações Elétricas',
      desc: 'Inspeção com verificação de aquecimento, folgas e aterramento',
      period: 'Semestral',
      resp: 'Profissional habilitado',
      status: 'pendente',
    },
    {
      data: '07/06/2027',
      dia: 'Segunda-feira',
      mes: 'Junho',
      sist: 'Elétrica, Hidráulica, Climatização, Iluminação',
      desc: 'Verificação mensal (mesmos itens)',
      period: 'Mensal',
      resp: 'Equipe interna + Profissional habilitado',
      status: 'pendente',
    },
    {
      data: '09/06/2027',
      dia: 'Quarta-feira',
      mes: 'Junho',
      sist: 'Instalações Hidráulicas e Sanitárias',
      desc: "Limpeza das caixas d'água e verificação das tubulações",
      period: 'Semestral',
      resp: 'Empresa especializada',
      status: 'pendente',
    },
    {
      data: '16/06/2027',
      dia: 'Quarta-feira',
      mes: 'Junho',
      sist: 'Instalações Hidráulicas e Sanitárias',
      desc: 'Verificação do sistema de esgoto e ralos',
      period: 'Semestral',
      resp: 'Equipe interna / Prestador',
      status: 'pendente',
    },
    {
      data: '23/06/2027',
      dia: 'Quarta-feira',
      mes: 'Junho',
      sist: 'Climatização (ar-condicionado)',
      desc: 'Manutenção preventiva com limpeza e verificação do sistema',
      period: 'Semestral',
      resp: 'Empresa especializada',
      status: 'pendente',
    },
    {
      data: '05/07/2027',
      dia: 'Segunda-feira',
      mes: 'Julho',
      sist: 'Elétrica, Hidráulica, Climatização, Iluminação',
      desc: 'Verificação mensal (mesmos itens)',
      period: 'Mensal',
      resp: 'Equipe interna + Profissional habilitado',
      status: 'pendente',
    },
    {
      data: '07/07/2027',
      dia: 'Quarta-feira',
      mes: 'Julho',
      sist: 'Iluminação',
      desc: 'Verificação da iluminação de emergência',
      period: 'Semestral',
      resp: 'Equipe interna / Prestador',
      status: 'pendente',
    },
  ]

  return (
    <div className="w-full bg-[#107c41] rounded-md shadow-sm border border-emerald-700/60 overflow-hidden font-sans text-[11px] select-none">
      {/* Excel Title Bar */}
      <div className="bg-[#1d447a] text-white py-2 px-3 text-center border-b border-blue-900">
        <h4 className="font-extrabold text-xs sm:text-sm tracking-wide uppercase">
          CALENDÁRIO ANUAL DE MANUTENÇÃO 2027 — EDIFICAÇÃO E INSTALAÇÕES
        </h4>
        <p className="text-[10px] text-blue-100 font-medium italic mt-0.5">
          Serviço Odontológico | Base: Anexo B do POP-012 | Conformidade: RDC nº 1002/2025
        </p>
      </div>

      {/* Spreadsheet grid */}
      <div className="overflow-x-auto bg-white">
        <table className="w-full border-collapse text-[10px] text-left">
          <thead>
            <tr className="bg-[#245899] text-white font-bold border-b border-blue-950">
              <th className="py-1.5 px-2.5 border-r border-blue-800 text-center whitespace-nowrap">
                Data
              </th>
              <th className="py-1.5 px-2.5 border-r border-blue-800 whitespace-nowrap">
                Dia da semana
              </th>
              <th className="py-1.5 px-2 border-r border-blue-800 text-center">Mês</th>
              <th className="py-1.5 px-3 border-r border-blue-800">Sistema</th>
              <th className="py-1.5 px-3 border-r border-blue-800 min-w-[220px]">
                Atividade / Item de manutenção
              </th>
              <th className="py-1.5 px-2.5 border-r border-blue-800 text-center whitespace-nowrap">
                Periodicidade
              </th>
              <th className="py-1.5 px-3 border-r border-blue-800">Responsável</th>
              <th className="py-1.5 px-2.5 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => {
              const isSemestral = r.period === 'Semestral'
              return (
                <tr
                  key={idx}
                  className={`border-b border-slate-200 transition-colors ${
                    idx % 2 === 0 ? 'bg-[#fcfcfc]' : 'bg-[#f4f7fa]'
                  } hover:bg-amber-50/50`}
                >
                  <td className="py-1.5 px-2.5 border-r border-slate-200 text-center font-mono font-medium text-slate-800 whitespace-nowrap">
                    {r.data}
                  </td>
                  <td className="py-1.5 px-2.5 border-r border-slate-200 text-slate-700 whitespace-nowrap">
                    {r.dia}
                  </td>
                  <td className="py-1.5 px-2 border-r border-slate-200 text-center font-medium text-slate-800">
                    {r.mes}
                  </td>
                  <td className="py-1.5 px-3 border-r border-slate-200 font-semibold text-slate-800">
                    {r.sist}
                  </td>
                  <td className="py-1.5 px-3 border-r border-slate-200 text-slate-600 text-[9.5px]">
                    {r.desc}
                  </td>
                  <td className="py-1.5 px-2.5 border-r border-slate-200 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold ${
                        isSemestral ? 'bg-[#c6efce] text-[#006100]' : 'bg-[#ffeb9c] text-[#9c6500]'
                      }`}
                    >
                      {r.period}
                    </span>
                  </td>
                  <td className="py-1.5 px-3 border-r border-slate-200 text-slate-800 font-medium">
                    {r.resp}
                  </td>
                  <td className="py-1.5 px-2.5 text-center text-[9.5px] text-slate-500 font-mono">
                    {r.status}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Excel Sheet Tabs bar at bottom */}
      <div className="bg-[#e6e6e6] px-2 py-1 flex items-center gap-1 border-t border-slate-300 text-[10px] font-medium text-slate-700">
        <div className="bg-white px-3 py-0.5 rounded-t font-bold text-emerald-800 shadow-xs border-t-2 border-emerald-600">
          Calendário Anual 2027
        </div>
        <div className="px-2 py-0.5 hover:bg-slate-200 rounded cursor-pointer text-slate-600">
          Regras do Calendário
        </div>
      </div>
    </div>
  )
}

// --- 5. Excel Audit Checklist Preview ---
export function ExcelAuditChecklistPreview() {
  const items = [
    {
      n: '1',
      req: 'Existência do Plano Anual de Manutenção Preventiva e Corretiva da Edificação e Instalações',
      como: 'Verificar se o POP-012 está elaborado, aprovado e vigente',
      evid: 'POP-012 assinado e com vigência',
      resp: 'RT',
      crit: 'Alta',
    },
    {
      n: '2',
      req: 'Cobertura de todos os sistemas da edificação',
      como: 'Verificar se o plano abrange elétrica, hidráulica, sanitária, climatização, iluminação, estrutura e combate a incêndio',
      evid: 'Plano com cronograma por sistema',
      resp: 'RT',
      crit: 'Alta',
    },
    {
      n: '3',
      req: 'Cronograma anual de manutenção preventiva (Anexo A)',
      como: 'Verificar se existe cronograma com periodicidades e responsáveis',
      evid: 'Anexo A preenchido',
      resp: 'RT',
      crit: 'Alta',
    },
    {
      n: '4',
      req: 'Registro de manutenção preventiva (Anexo B)',
      como: 'Verificar se os checklists por sistema estão preenchidos com data, execução e conformidade',
      evid: 'Anexo B preenchido',
      resp: 'Equipe / RT',
      crit: 'Alta',
    },
    {
      n: '5',
      req: 'Registro de manutenção corretiva (Anexo C)',
      como: 'Verificar se as falhas identificadas foram registradas e corrigidas',
      evid: 'Anexo C preenchido',
      resp: 'Equipe / RT',
      crit: 'Alta',
    },
    {
      n: '6',
      req: 'Registro de inspeção e certificados dos prestadores (Anexo D)',
      como: 'Verificar se os certificados/relatórios dos prestadores estão arquivados',
      evid: 'Anexo D + certificados',
      resp: 'RT',
      crit: 'Alta',
    },
    {
      n: '7',
      req: 'Controle de revisão do plano (Anexo E)',
      como: 'Verificar se o plano foi revisado anualmente e se as revisões estão registradas',
      evid: 'Anexo E preenchido',
      resp: 'RT',
      crit: 'Média',
    },
    {
      n: '8',
      req: 'Manutenção das instalações elétricas',
      como: 'Verificar se a verificação mensal, inspeção semestral e manutenção anual foram executadas por profissional habilitado',
      evid: 'Registros + certificado (NR-10)',
      resp: 'Profissional habilitado',
      crit: 'Alta',
    },
    {
      n: '9',
      req: 'Manutenção das instalações hidráulicas e sanitárias',
      como: 'Verificar se a verificação mensal, limpeza semestral das caixas d’água e verificação do esgoto foram executadas',
      evid: 'Registros + certificado de limpeza',
      resp: 'Empresa especializada',
      crit: 'Alta',
    },
    {
      n: '10',
      req: 'Manutenção da climatização (ar-condicionado)',
      como: 'Verificar se a limpeza mensal dos filtros e a manutenção semestral foram executadas',
      evid: 'Registros + certificado',
      resp: 'Empresa especializada',
      crit: 'Média',
    },
    {
      n: '11',
      req: 'Manutenção da iluminação',
      como: 'Verificar se a verificação mensal das luminárias e semestral da iluminação de emergência foram executadas',
      evid: 'Registros',
      resp: 'Equipe',
      crit: 'Média',
    },
    {
      n: '12',
      req: 'Manutenção da estrutura da edificação',
      como: 'Verificar se a inspeção semestral de pisos, paredes, forros, cobertura e esquadrias foi executada',
      evid: 'Registros de inspeção',
      resp: 'Equipe / Prestador',
      crit: 'Média',
    },
    {
      n: '13',
      req: 'Manutenção do sistema de combate a incêndio',
      como: 'Verificar se a verificação, manutenção e recarga dos extintores foram realizadas na periodicidade legal',
      evid: 'Certificado de recarga',
      resp: 'Empresa / Bombeiros',
      crit: 'Alta',
    },
    {
      n: '14',
      req: 'Guarda e organização dos registros',
      como: 'Verificar se os registros estão arquivados em pasta física ou digital, organizados por sistema e data',
      evid: 'Pasta de registros',
      resp: 'RT',
      crit: 'Alta',
    },
    {
      n: '15',
      req: 'Disponibilidade dos registros para a vigilância sanitária',
      como: 'Verificar se os registros estão disponíveis para apresentação em auditorias e inspeções',
      evid: 'Registros acessíveis',
      resp: 'RT',
      crit: 'Alta',
    },
  ]

  return (
    <div className="w-full bg-[#107c41] rounded-md shadow-sm border border-emerald-700/60 overflow-hidden font-sans text-[11px] select-none">
      {/* Excel Title Bar */}
      <div className="bg-[#1d447a] text-white py-2 px-3 text-center border-b border-blue-900">
        <h4 className="font-extrabold text-xs sm:text-sm tracking-wide uppercase">
          CHECKLIST DE VERIFICAÇÃO PARA AUDITORIA DA CONFORMIDADE DO PLANO DE MANUTENÇÃO (POP-012)
        </h4>
        <p className="text-[10px] text-blue-100 font-medium italic mt-0.5">
          Referência: RDC nº 1002/2025 – Boas Práticas para Serviços Odontológicos | POP-012 – Plano
          Anual de Manutenção
        </p>
      </div>

      {/* Spreadsheet grid */}
      <div className="overflow-x-auto bg-white max-h-[380px] scrollbar-thin">
        <table className="w-full border-collapse text-[10px] text-left">
          <thead className="sticky top-0 z-10">
            <tr className="bg-[#245899] text-white font-bold border-b border-blue-950">
              <th className="py-1.5 px-2 border-r border-blue-800 text-center whitespace-nowrap">
                Nº
              </th>
              <th className="py-1.5 px-3 border-r border-blue-800 min-w-[200px]">
                Item / Requisito auditado
              </th>
              <th className="py-1.5 px-3 border-r border-blue-800 min-w-[210px]">Como verificar</th>
              <th className="py-1.5 px-3 border-r border-blue-800 min-w-[170px]">
                Evidência / Registro
              </th>
              <th className="py-1.5 px-2.5 border-r border-blue-800 text-center whitespace-nowrap">
                Responsável
              </th>
              <th className="py-1.5 px-2.5 border-r border-blue-800 text-center whitespace-nowrap">
                Criticidade
              </th>
              <th className="py-1.5 px-2.5 text-center min-w-[110px]">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr
                key={it.n}
                className={`border-b border-slate-200 transition-colors ${
                  parseInt(it.n) % 2 === 0 ? 'bg-[#fcfcfc]' : 'bg-[#f4f7fa]'
                } hover:bg-amber-50/50`}
              >
                <td className="py-1.5 px-2 border-r border-slate-200 text-center font-bold text-slate-800">
                  {it.n}
                </td>
                <td className="py-1.5 px-3 border-r border-slate-200 font-semibold text-slate-900">
                  {it.req}
                </td>
                <td className="py-1.5 px-3 border-r border-slate-200 text-slate-700 text-[9.5px]">
                  {it.como}
                </td>
                <td className="py-1.5 px-3 border-r border-slate-200 text-slate-600 text-[9.5px]">
                  {it.evid}
                </td>
                <td className="py-1.5 px-2.5 border-r border-slate-200 text-center font-medium text-slate-800">
                  {it.resp}
                </td>
                <td className="py-1.5 px-2.5 border-r border-slate-200 text-center">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold ${
                      it.crit === 'Alta'
                        ? 'bg-[#ffc7ce] text-[#9c0006]'
                        : 'bg-[#ffeb9c] text-[#9c6500]'
                    }`}
                  >
                    {it.crit}
                  </span>
                </td>
                <td className="py-1.5 px-2.5 text-center text-[9px] text-slate-400 italic">
                  Conforme / N/A
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Excel Sheet Tabs bar */}
      <div className="bg-[#e6e6e6] px-2 py-1 flex items-center gap-1 border-t border-slate-300 text-[10px] font-medium text-slate-700">
        <div className="bg-white px-3 py-0.5 rounded-t font-bold text-emerald-800 shadow-xs border-t-2 border-emerald-600">
          Checklist de Auditoria
        </div>
        <div className="px-2 py-0.5 hover:bg-slate-200 rounded cursor-pointer text-slate-600">
          Instruções de Auditoria
        </div>
      </div>
    </div>
  )
}

// --- MAIN SHOWCASE COMPONENT ---
export interface DocumentShowcaseItem {
  id: string
  title: string
  subtitle: string
  type: 'word' | 'excel'
  badge: string
  component: React.ReactNode
}

export function DocumentShowcase() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'word' | 'excel'>('all')

  const items: DocumentShowcaseItem[] = [
    {
      id: 'pop-71',
      title: 'POP 7.1 – Manutenção Preventiva e Corretiva',
      subtitle: 'Controle de documentos com codificação, vigência e responsabilidades',
      type: 'word',
      badge: 'POP em Word (.docx)',
      component: <PopMaintenancePreview />,
    },
    {
      id: 'pop-118',
      title: 'POP 11.8 – Limpeza de Rotina em Áreas Comuns',
      subtitle: 'Padronização de higienização, EPIs e passos conforme a RDC 1002',
      type: 'word',
      badge: 'POP em Word (.docx)',
      component: <PopCleaningPreview />,
    },
    {
      id: 'pop-spill',
      title: 'POP 14.3 – Conduta em Derramamento Biológico',
      subtitle: 'Passo a passo com pontos críticos, materiais do kit e anexos',
      type: 'word',
      badge: 'POP em Word (.docx)',
      component: <PopSpillPreview />,
    },
    {
      id: 'excel-cal',
      title: 'Calendário Anual de Manutenção 2027',
      subtitle: 'Planilha Anexo B do POP-012: cronograma mensal e semestral por sistema',
      type: 'excel',
      badge: 'Planilha Excel (.xlsx)',
      component: <ExcelMaintenanceCalendarPreview />,
    },
    {
      id: 'excel-check',
      title: 'Checklist de Verificação para Auditoria',
      subtitle: '15 itens de auditoria com criticidade Alta/Média e responsáveis',
      type: 'excel',
      badge: 'Planilha Excel (.xlsx)',
      component: <ExcelAuditChecklistPreview />,
    },
  ]

  const filteredItems = items.filter((item) => activeTab === 'all' || item.type === activeTab)

  const activeItem = items.find((it) => it.id === activeModal)

  return (
    <div className="w-full space-y-6">
      {/* Showcase Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20 shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                  Prévia Real dos Documentos
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full border border-amber-200/70">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Arquivos Reais
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Veja exatamente como são formatados os arquivos antes de comprar
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos (5)
            </button>
            <button
              onClick={() => setActiveTab('word')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'word'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Word (3)
            </button>
            <button
              onClick={() => setActiveTab('excel')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'excel'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              Excel (2)
            </button>
          </div>
        </div>

        {/* Microtexto de Apoio Destacado */}
        <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-emerald-50/80 border border-blue-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Material 100% editável — você recebe os arquivos originais em Word e Excel
              </p>
              <p className="text-[11px] text-slate-500">
                Basta preencher a sigla e o nome da sua clínica nos campos indicados
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-blue-200/60 shadow-2xs whitespace-nowrap self-start sm:self-auto">
            <Download className="w-3 h-3 text-blue-600" />
            Prontos para uso imediato
          </span>
        </div>

        {/* Grid de Cards das 5 Prévias */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredItems.map((item) => {
            const isWord = item.type === 'word'
            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden bg-white ${
                  isWord
                    ? 'border-slate-200/90 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5'
                    : 'border-slate-200/90 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/5 md:col-span-2'
                }`}
              >
                {/* Top header do card */}
                <div className="p-3.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-0.5 rounded-full ${
                        isWord ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {isWord ? (
                        <FileText className="w-3 h-3 text-blue-600" />
                      ) : (
                        <FileSpreadsheet className="w-3 h-3 text-emerald-600" />
                      )}
                      {item.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                      • Alta Resolução
                    </span>
                  </div>

                  {/* Botão de Ampliar */}
                  <button
                    onClick={() => setActiveModal(item.id)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-blue-700 bg-white hover:bg-blue-50/60 border border-slate-200 rounded-lg px-2 py-1 transition-colors shadow-2xs"
                    title="Clique para ver em tamanho ampliado"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Ampliar</span>
                  </button>
                </div>

                {/* Área da Imagem / Prévia Real com Moldura */}
                <div
                  onClick={() => setActiveModal(item.id)}
                  className="relative p-3 bg-gradient-to-b from-slate-100/60 to-slate-200/40 cursor-pointer overflow-hidden group/preview"
                >
                  <div
                    className={`relative rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover/preview:scale-[1.01] ${
                      isWord ? 'max-h-[260px] overflow-hidden' : 'max-h-[280px] overflow-hidden'
                    }`}
                  >
                    {item.component}
                  </div>

                  {/* Overlay sutil ao passar o mouse */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                      Clique para visualizar completo
                    </span>
                  </div>
                </div>

                {/* Rodapé descritivo do card */}
                <div className="p-3.5 mt-auto bg-white border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-[13px] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Rodapé Informativo da Vitrine */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Formatados segundo as exigências da RDC 1002/2025</span>
          </div>
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Documentos prontos para auditorias sanitárias</span>
          </div>
        </div>
      </div>

      {/* Modal / Dialog de Zoom Ampliado */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span
                  className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                    activeItem.type === 'word'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {activeItem.type === 'word' ? (
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                  ) : (
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  )}
                  {activeItem.badge}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors"
                title="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content / Full Document Render */}
            <div className="p-4 sm:p-6 overflow-y-auto bg-slate-100/80 flex-1">
              <div className="max-w-3xl mx-auto shadow-md rounded overflow-hidden">
                {activeItem.component}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="text-slate-500 text-[11px]">{activeItem.subtitle}</span>
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
              >
                Fechar visualização
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
