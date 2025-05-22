"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StageCard } from "./react/card"
import { problemsText } from "@/text/problems"
import { BadgePage } from "./react/badge"
import { SeparatorPage } from "./react/separator"
import { ButtonPage } from "./react/button"


export default function ProblemSection() {
  return (
    <section className="px-8 md:px-0 md:max-w-2xl lg:max-w-6xl mx-auto" id="problems">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Sticky Content */}
          <div className="md:sticky md:top-24 md:self-start space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BadgePage text={problemsText.badge}/>

              <h2 className="text-4xl md:text-5xl font-bold text-[#002D5B] leading-tight my-6">
                {problemsText.heading}
              </h2>

              <p className="text-gray-600 text-lg max-w-md mb-8">
                {problemsText.description}
              </p>

              <ButtonPage text="Start Your Healing Journey Now!"/>
            </motion.div>
          </div>

          {/* Right side - Benefit cards */}
          <div className="space-y-8 pt-8">
            {
              problemsText.problems.map(({ icon: Icon, ...rest }, index) => <StageCard key={index} icon={<Icon />} {...rest} />)
            }
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-20 lg:py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002D5B] leading-tight mb-6">
            It's not your fault. 
            <br/>You just haven’t gone deep enough.
          </h2>
        </div>
      </div>
      <SeparatorPage/>
    </section>
  )
}
