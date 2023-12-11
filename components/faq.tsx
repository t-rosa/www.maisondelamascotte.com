import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/faq"

export function Faq() {
  return (
    <section id="faq" className="mt-10 py-20 border-b border-b-indigo-300" >
      <header>
        <h2 className="shrink-0 font-allura text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-center">Des questions ?</h2>
      </header>
      <Accordion type="single" collapsible className=" w-2/3 mx-auto mt-10 lg:text-2xl">
        {
          faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id.toString()}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="md:text-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </section>

  )
}
