import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Are all the flowers and leaves 100% real?",
    answer:
      "Yes! Every botanical element is ethically collected and dried from Himalayan flora. We never use artificial or synthetic flowers.",
  },
  {
    question: "How long will my pressed flower artwork last?",
    answer:
      "With our specialized dehydration and UV-stabilization technique, artworks maintain their vibrant colors for years when kept out of direct sunlight and moisture.",
  },
  {
    question: "Can I request a custom botanical artwork?",
    answer:
      "Absolutely. We accept custom commissions for special flowers, bridal bouquet preservation, and personalized framing. Reach out via our Contact page or WhatsApp.",
  },
  {
    question: "What happens if the glass frame breaks during transit?",
    answer:
      "All parcels are packed with multi-layered protective materials. If any damage occurs during shipping, send us a photo within 7 days for a free immediate replacement or full refund.",
  },
  {
    question: "How long does shipping take across India?",
    answer:
      "Standard orders are dispatched within 24–48 hours and typically arrive within 3 to 5 business days.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Frequently asked questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Himflora botanical artworks. Have a question not listed? Contact our support.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 py-0 my-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-foreground/30"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
