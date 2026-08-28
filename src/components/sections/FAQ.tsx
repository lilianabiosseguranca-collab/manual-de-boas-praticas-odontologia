import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface FAQItem {
  q: string
  a: ReactNode
}

const faqs: FAQItem[] = [
  {
    q: 'Por quanto tempo tenho acesso ao conteúdo?',
    a: 'A partir da compra você tem acesso de um ano ao curso.',
  },
  {
    q: 'Como acessar o curso?',
    a: (
      <div className="space-y-3">
        <p>
          O curso é 100% on-line. Você receberá o acesso por e-mail. O conteúdo será acessado por um
          computador, celular, tablet ou outro dispositivo digital com acesso à internet. Siga o
          passo a passo:
        </p>
        <ol className="list-decimal list-inside space-y-1.5 ml-1 text-slate-700">
          <li>Faça login na Hotmart clicando em 'Entrar'</li>
          <li>Acesse o menu lateral, clique em 'Minha conta'</li>
          <li>Clique em 'Minhas compras' e lá estarão todos os produtos que você já comprou!</li>
        </ol>
      </div>
    ),
  },
  {
    q: 'Tem certificado?',
    a: 'Sim! Assim que você terminar as aulas poderá emitir o certificado pela própria Hotmart (plataforma digital intuitiva onde o curso está hospedado).',
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: 'Você pode realizar o pagamento via pix, cartão de crédito, boleto bancário e parcelamento sem comprometer o seu limite no cartão de crédito. Você pode parcelar em até 7x. Tudo processado de forma segura pela Hotmart.',
  },
  {
    q: 'O curso tem garantia?',
    a: 'Sim! Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o curso não é para você, devolvemos 100% do seu investimento.',
  },
]

export const FAQ = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Ficou com alguma dúvida? Veja se a resposta está aqui embaixo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Accordion
            type="single"
            collapsible
            className="w-full mb-16 bg-white rounded-2xl shadow-sm border border-slate-100 p-2 md:p-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-slate-100 last:border-0"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-slate-800 hover:text-primary hover:no-underline py-4 px-2">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 px-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-lg mx-auto">
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900 text-xl">Ainda tem dúvidas?</h3>
              <p className="text-muted-foreground">
                Nossa equipe de suporte está pronta para te ajudar a tomar a melhor decisão.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium text-base h-14 px-8 rounded-full shadow-lg shadow-green-500/20 transition-all hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/message/3PBHNXERRAGPN1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Dúvidas no WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
