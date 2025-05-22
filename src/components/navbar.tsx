"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Problems", href: "#problems" },
  { label: "Solution", href: "#solution" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#faq" },
]

export default function Navbar() {
  const [shrink, setShrink] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY > 800)

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1))

      // Find the current section in view
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the section is in view (with some buffer for better UX)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
    <header
      className={cn(
        "lg:fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-xl px-4 transition-all duration-300 bg-white/80 h-12 backdrop-blur-md border border-gray-200 shadow-sm",
        shrink ? "w-fit max-w-1/2" : "w-3/4",
      )}
    >
      <nav className="flex h-full items-center justify-between gap-6 text-black-800">
        {/* logo */}
        <a href="#" className="flex items-center gap-2 text-base font-semibold tracking-tight hover:opacity-90">
          <span className="inline text-[#CF332B]">{shrink ? "TIH" : "The Inner Healing"}</span>
        </a>

        {/* Desktop nav as */}
        <ul
          className={cn(
            "flex-1 items-center justify-center gap-6 font-medium md:flex text-sm",
          )}
        >
          {navItems.map((item) => (
            item.label === "Home" ? null : (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  "relative inline-block px-2 py-1 transition",
                  activeSection === item.href.substring(1)
                    ? shrink
                      ? "text-[#8a211c] font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#8a211c]"
                      : "text-[#8a211c] font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#8a211c]"
                    : shrink
                      ? "hover:text-[#CF332B]"
                      : "hover:text-[#CF332B]",
                )}
              >
                {item.label}
              </a>
            </li>
          )))}
        </ul>

        {/* CTA */}
        <Button
          asChild
          className={cn(
            "flex bg-[#CF332B] hover:bg-[#8a211c] text-white",
            shrink
              ? "h-8 text-xs px-3 py-1"
              : "h-9 text-sm px-4 py-2",
          )}
        >
          <a href="#cta" className="flex items-center gap-2">
            {shrink ? (
              <ArrowUpRight className="h-4 w-4" />
            ) : (
              <>
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </>
            )}
          </a>
        </Button>
      </nav>
    </header>
     {/* Mobile header for smaller screens */}
    <header className={cn("max-w-[100vw] fixed lg:hidden top-0 left-0 right-0 z-50 px-4 transition-all duration-300 bg-white/60 h-12 backdrop-blur-md border border-gray-200 shadow-sm", 
      shrink ? "bg-white/70" : "bg-transparent border-none blackdrop-blur-none", 
    )}>
      <nav className="flex h-full items-center justify-between gap-6 text-black-800">
        {/* logo */}
        <a href="#" className="flex items-center gap-2 text-base font-semibold tracking-tight hover:opacity-90">
          <span className="inline text-[#CF332B]">The Inner Healing</span>
        </a> 
        {/* CTA */}
        <Button
          asChild
          className={cn(
            "bg-[#CF332B] hover:bg-[#8a211c] text-white",
            shrink
              ? "h-8 text-sm px-3 py-2"
              : "h-9 text-sm px-4 py-2",
          )}
        >
          <a href="#cta" className="flex items-center gap-2">
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button> 
      </nav> 
    </header>
    </>
  )
}
