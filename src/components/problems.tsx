"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StageCard } from "./react/card"
import { problemsText } from "@/text/problems"
import { Separator } from "./ui/separator"
import { BadgePage } from "./react/badge"


export default function ProblemSection() {
  return (
    <section className="py-24">
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

              <Button className="bg-[#CF332B] hover:bg-[#EC5B53] text-white px-8 py-6 rounded-md text-lg">
                {problemsText.ctaText}
              </Button>
            </motion.div>
          </div>

          {/* Right side - Benefit cards */}
          <div className="space-y-8 pt-8">
            {
              problemsText.problems.map(({ icon: Icon, ...rest }, index) => <StageCard key={index} icon={<Icon />} {...rest} />)
            }
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-20 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002D5B] leading-tight mb-6">
            It's not your fault. 
            <br/>You just haven’t gone deep enough.
          </h2>
        </div>
      <Separator/>
      </div>
    </section>
  )
}
