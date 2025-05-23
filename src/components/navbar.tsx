"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { handleLinkClick } from "@/utils/handleClick"
import { navas } from "./footer"


export default function Navbar() {
  const [shrink, setShrink] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY > 80)

      // set active section
      for (const { href } of navas) {
        const id = href.substring(1)
        const el = document.getElementById(id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= 200 && bottom >= 200) {
          setActive(id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const bar = {
    initial: { y: -80, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const linkUnderline = {
    initial: { scaleX: 0 },
    hover:  { scaleX: 1 },
  }

  return (
    <>
      {/* DESKTOP / TABLET  (≥ 1024) */}
      <motion.header
        layout                          /* <— magic line */
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        variants={bar}
        initial="initial"
        animate="animate"
        className={cn(
          "hidden lg:flex fixed left-1/2 top-6 z-50 -translate-x-1/2 items-center rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm transition-all duration-300 px-6",
          shrink ? "h-12 w-fit" : "h-14 w-6xl"
        )}
      >
      {/* Logo text */}
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key="mini"
            initial={{ x: -8, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-[#CF332B] font-bold"
          >
            {shrink ? "TIH" : "The Inner Healing"}
          </motion.span>
        </AnimatePresence>

        {/* nav-links */}
        <ul className="mx-8 flex flex-1 items-center justify-center gap-6 text-sm font-medium">
          {navas
            .filter((i) => i.label !== "Home")
            .map(({ label, href }) => {
              const isActive = active === href.substring(1)
              return (
                <motion.li
                  key={label}
                  className="relative"
                  whileHover="hover"
                  initial="initial"
                  animate={isActive ? "hover" : "initial"}
                >
                  <a
                    onClick={() => handleLinkClick(href)}
                    className={cn(
                      "inline-block px-2 py-1 transition-colors",
                      isActive ? "text-[#8a211c] font-semibold" : "hover:text-[#CF332B]"
                    )}
                  >
                    {label}
                  </a>
                  {/* underline */}
                  <motion.span
                    variants={linkUnderline}
                    className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left bg-[#8a211c]"
                  />
                </motion.li>
              )
            })}
        </ul>

        {/* CTA */}
        <Button
          asChild
          className={cn(
            "flex items-center bg-[#CF332B] hover:bg-[#8a211c] text-white transition",
            shrink ? "h-8 px-3 text-xs" : "h-9 px-4 text-sm"
          )}
          onClick={() => handleLinkClick("#faq")}
        >
          <a className="flex items-center gap-2">
            {shrink ? <ArrowUpRight className="h-4 w-4" /> : <>Get in touch <ArrowUpRight className="h-4 w-4" /></>}
          </a>
        </Button>
      </motion.header>

      {/* MOBILE  (< 1024) */}
      <motion.header
        variants={bar}
        initial="initial"
        animate="animate"
        className={cn(
          "lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all",
          shrink ? "h-12 bg-white/80" : "h-14 bg-transparent border-none shadow-none"
        )}
      >
        <a onClick={()=>handleLinkClick("#")} className="font-semibold tracking-tight text-[#CF332B]">The Inner Healing</a>

        <Button
          asChild
          className={cn(
            "bg-[#CF332B] hover:bg-[#8a211c] text-white transition",
            shrink ? "h-8 px-3 text-xs" : "h-9 px-4 text-sm"
          )}
          onClick={() => handleLinkClick("#faq")}
        >
          <a className="flex items-center gap-2">
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </motion.header>
    </>
  )
}
