"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BadgePage } from "./react/badge"
import { SeparatorPage } from "./react/separator"

interface Review {
  name: string
  date: string
  img: string
  text: string
  initials: string
  tag?: string
}

const reviews: Review[] = [
  {
    name: "Anna ",
    date: "Jan 12, 2025",
    img: "/avatar1.jpg",
    initials: "AT",
    text: "I made more progress in 6 weeks than in years of therapy. I finally feel calm and confident again!",
    tag: "Inner Healing Program",
  },
  {
    name: "Maria",
    date: "Feb 03, 2025",
    img: "/avatar2.jpg",
    initials: "ML",
    text: "The Inner Healing Code helped me break toxic cycles I thought would haunt me forever.",
    tag: "Transformation Journey",
  },
  {
    name: "Sarah",
    date: "Mar 27, 2025",
    img: "/avatar3.jpg",
    initials: "SK",
    text: "The RTT session was life‑changing, and the coaching kept me accountable every step of the way.",
    tag: "RTT Therapy",
  },
  {
    name: "Lina",
    date: "Apr 15, 2025",
    img: "/avatar4.jpg",   // or leave empty to fall back to initials
    initials: "LD",
    text: "For the first time in years I wake up without that heavy knot of anxiety in my chest.",
    tag: "Anxiety Relief",
  },
  {
    name: "Olivia",
    date: "Mar 08, 2025",
    img: "/avatar5.jpg",
    initials: "OR",
    text: "Week by week I felt layers of self-doubt peel away. Friends keep asking what I’ve done differently!",
    tag: "Confidence Boost",
  },
  {
    name: "Zoe",
    date: "May 02, 2025",
    img: "/avatar6.jpg",
    initials: "ZH",
    text: "The combination of RTT and coaching is pure magic—fast, gentle, and deeply empowering.",
    tag: "Rapid Results",
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handleIndicatorClick = (i: number) => {
    setIndex(i)
    setAutoplay(false) // Pause autoplay when user interacts

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000)
  }

  return (
    <section className="relative px-8 md:px-0 md:max-w-2xl lg:max-w-6xl mx-auto" id="testimonials">

      <div className="mx-auto px-4">
        <BadgePage text="Recent History"/>
      
        <h2 className="mx-auto mb-12 my-6 md:mb-16 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-800">
          Don't just take our word for it—hear from women who transformed their lives
        </h2>

        {/* Testimonial carousel */}
        <div className="relative mx-auto max-w-2xl">
          {/* Testimonial cards */}
          <div className="w-full overflow-hidden h-fit py-10 px-2">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="relative mx-auto max-w-xl bg-white rounded-xl p-8 md:p-10 shadow-xl overflow-hidden">
                  {/* Subtle top accent - much thinner now */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-rose-400" />

                  {/* Quote mark - more subtle and positioned better */}
                  <div className="absolute top-6 right-8 text-5xl font-serif text-rose-100">"</div>

                  {/* Content with improved layout */}
                  <div className="relative">
                    {/* Tag badge - new element for visual interest */}
                    {reviews[index].tag && (
                      <Badge variant="secondary" className="mb-4 bg-rose-50 text-rose-600 hover:bg-rose-50">
                        {reviews[index].tag}
                      </Badge>
                    )}

                    <blockquote className="text-lg md:text-xl leading-relaxed text-slate-700 mb-8 relative z-10">
                      {reviews[index].text}
                    </blockquote>

                    <div className="flex flex-row justify-start items-center gap-6 mt-6 pt-6 border-t border-slate-100">
                      <Avatar className="h-12 w-12 border border-rose-100">
                        <AvatarImage src={reviews[index].img || "/placeholder.svg"} alt={reviews[index].name} />
                        <AvatarFallback className="bg-rose-50 text-rose-600 font-medium">
                          {reviews[index].initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 w-full">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-800">{reviews[index].name}</h3>
                          <time className="text-sm text-slate-500">{reviews[index].date}</time>
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Improved indicators matching the provided image */}
          <div className="flex justify-center mt-8 gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => handleIndicatorClick(i)}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-full"
                aria-label={`View testimonial ${i + 1}`}
                aria-current={i === index ? "true" : "false"}
              >
                <div
                  className={`rounded-full transition-all duration-300 ${
                    i === index ? "w-6 h-3 bg-rose-500" : "w-3 h-3 bg-rose-200 hover:bg-rose-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <SeparatorPage />
    </section>
  )
}
