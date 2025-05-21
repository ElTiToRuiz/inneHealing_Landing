"use client"
import { motion } from "framer-motion"
import { Check, ShieldCheck, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "./ui/separator"

export default function PricingCard() {
  const features = [
    "6‑Week RTT® + Coaching Program",
    "90‑120 min Deep‑Dive RTT® Session",
    "Custom Hypnosis Recording (21 days)",
    "5 Weekly Integration Calls",
    "WhatsApp/Voxer Support",
    "Bonus Healing Toolkit",
  ]

  return (
    <section>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-xl"
        > 
          <div className="relative">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 transform">
              <Badge className="bg-gradient-to-r from-[#3C50E0] to-[#9EB3FF] px-4 py-1 text-sm font-medium text-white shadow-md">
                Most Popular
              </Badge>
            </div>

            <Card className="relative overflow-hidden rounded-[2rem] border border-[#E3E8FF] bg-white shadow-xl">
              {/* Top accent gradient */}
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#3C50E0] to-[#9EB3FF]" />

              <CardHeader className="pb-4 pt-10 text-center">
                <CardTitle className="text-3xl font-bold text-[#002D5B] md:text-4xl">Invest in Yourself</CardTitle>
                <CardDescription className="pt-2 text-base text-[#555A5E]">
                  Unlock the full program for a one‑time payment of
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8 px-8 pb-6 pt-2">
                {/* Price section */}
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="relative">
                    <span className="text-6xl font-extrabold text-[#3C50E0]">$2,000</span>
                    <div className="absolute -right-12 -top-2">
                      <Badge className="bg-[#E3E8FF] text-[#3C50E0]">Save 20%</Badge>
                    </div>
                  </div>
                  <span className="text-sm text-[#555A5E]">Payment plan available</span>
                </div>

                {/* Features list */}
                <ul className="space-y-5">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-[#E3E8FF] p-1.5 text-[#3C50E0] shadow-sm">
                        <Check size={16} className="stroke-[2.5px]" />
                      </div>
                      <span className="text-base text-[#555A5E]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Guarantee box */}
                <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#F5F7FF] to-[#FAFBFF] p-5 shadow-sm">
                  <div className="rounded-full bg-white p-2 shadow-sm">
                    <ShieldCheck className="h-6 w-6 flex-shrink-0 text-[#3C50E0]" />
                  </div>
                  <p className="text-sm font-medium text-[#555A5E]">
                    14‑day money‑back guarantee if you don't feel a shift.
                  </p>
                </div>

                {/* Bonus section */}
                <div className="rounded-2xl border border-[#E3E8FF] bg-[#F8FAFF] p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="rounded-full bg-[#3C50E0] p-1.5 text-white">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <Badge className="bg-gradient-to-r from-[#3C50E0] to-[#9EB3FF] px-3 text-white">
                      EXCLUSIVE BONUS
                    </Badge>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="mt-0.5 h-4 w-4 text-[#3C50E0]" />
                    <p className="text-sm font-medium text-[#002D5B]">First 3 clients get a private check-in session</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-center pb-10 pt-2">
                <Button
                  size="lg"
                  className="relative w-full max-w-xs overflow-hidden rounded-xl bg-gradient-to-r from-[#3C50E0] to-[#4A5DE0] text-white transition-all hover:shadow-lg hover:shadow-[#3C50E0]/20"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#3C50E0]/0 via-white/20 to-[#3C50E0]/0"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 200, opacity: 1 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      repeatType: "loop",
                      ease: "linear",
                      delay: 1,
                    }}
                  />
                  Book Your Spot Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      </div>
      <Separator className="my-10 lg:my-16 max-w-6xl mx-auto" />
    </section>
  )
}
