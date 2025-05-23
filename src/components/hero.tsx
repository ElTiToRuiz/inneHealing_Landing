"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { ButtonPage } from "./react/button"
import { BadgePage } from "./react/badge"
import { ImagePage } from "./react/image"
import { handleLinkClick } from "@/utils/handleClick"

export default function Hero() {
  const ctaRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Pulse animation for CTA after 3 seconds
    const timer = setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add("pulse")

        // Remove the class after animation completes
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.classList.remove("pulse")
          }
        }, 1500)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[100vh] pt-16 md:pt-10" id="home">
      {/* Abstract shapes/particles background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EC5B53]/50 via-white to-[#fff]">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#EC5B53]/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#EC5B53]/50 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-[#EC5B53]/50 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/noise.jpg')] opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 py-5 h-full">
        <div className="grid md:grid-cols-2 lg:gap-12 justify-center items-center">
          <motion.div
            className="flex flex-col space-y-6 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BadgePage text="6-Week Transformational Program" Icon={Sparkles}/>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#002D5B] tracking-[-0.05em]">
                Heal Deeply. <p className="tracking-[-0.08em]">Rewrite Your Mind.</p>
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Reclaim your peace & power in 6 weeks
                <br/>—a journey designed by women, for women.
              </p>
            </div>

            <div>
              <ButtonPage ctaRef={ctaRef} text="Claim Your Spot Today." />
            </div>
          </motion.div>
          <div>
            <ImagePage className="relative mt-8 md:mt-0 md:-mr-6 lg:-mr-12 px-10 py-20" imgSrc="./hero.webp" alt="Confident woman smiling, representing inner healing and transformation"/>   
          </div>
        </div>
      </div>
    </section>
  )
}
