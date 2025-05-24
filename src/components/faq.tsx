"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgePage } from "./react/badge"

const faqs = [
  {
    question: "Who is The Inner Healing Code™ for?",
    answer:
      "For women who feel stuck in recurring emotional patterns—low confidence, anxiety, or stress—and are ready for a deep subconscious reset.",
  },
  {
    question: "What exactly is RTT®?",
    answer:
      "Rapid Transformational Therapy® combines CBT, NLP, and hypnosis to access the subconscious, identify root causes, and rewire limiting beliefs—often in a single session.",
  },
  {
    question: "How long before I feel results?",
    answer:
      "Many clients notice shifts within days. The 21‑day hypnosis recording plus weekly coaching anchor lasting change over the 6‑week journey.",
  },
  {
    question: "Is the program 100% online?",
    answer:
      "Yes. All RTT® and coaching sessions are hosted on Zoom, and resources are delivered digitally—so you can join from anywhere.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 14‑day money‑back guarantee. If you don't feel a meaningful shift, just let us know and we'll refund you, no questions asked.",
  },
]

export default function FAQSection() {
  return (
    <section className="mx-auto pb-20 px-8 md:px-0 md:max-w-2xl lg:max-w-6xl" id="faq">
      <Card className="border-none shadow-none m-0 p-0">
        <BadgePage text="FAQ" />
        <CardHeader className="text-start p-0 my-6">
          <CardTitle className="text-3xl font-bold text-[#002D5B] md:text-5xl">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#F4EAEA]">
                <AccordionTrigger className="text-left text-base font-medium text-[#002D5B] hover:text-[#EC5B53] hover:no-underline md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#555A5E]">
                  <p className="pt-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 rounded-lg p-4 text-center">
            <p className="text-sm text-[#555A5E]">
              Still have questions? Contact us at{" "}
              <a href="mailto:support@innerhealing.com" className="font-medium text-[#EC5B53] hover:underline">
                isabelle@pathwaytosuccess.be 
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
