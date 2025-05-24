
import { ExternalLink, Facebook, Instagram, Linkedin, Mail, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SeparatorPage } from "./react/separator"

export const navas = [
  { label: "Home", href: "#" },
  { label: "About", href: "#problems" },
  { label: "Program", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "aedIn" },
  { icon: Mail, href: "mailto:hello@innerhealingcode.com", label: "Email" },
]

export default function SiteFooter() {
  return (
    <footer className="relative bg-[#002D5B] text-white md:rounded-t-[2rem] w-full mx-auto">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="space-y-4 md:col-span-4">
            <h3 className="text-2xl font-bold tracking-tight">The Inner Healing Code™</h3>
            <p className="max-w-xs text-sm text-slate-300">
              A safe, sacred space for women ready to heal deeply and reclaim their power.
            </p>

            {/* Newsletter signup */}
            {/* <div className="pt-4">
              <p className="mb-2 text-sm font-medium text-white">Join our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-[220px] border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-400"
                />
                <Button size="sm" className="bg-[#EC5B53] hover:bg-[#CF332B]">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 md:mx-auto">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Navigation</h4>
            <nav className="flex flew-row gap-1 md:flex-col md:gap-3 ">
              {navas.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  className="group flex w-fit items-center text-sm text-slate-200 transition-colors hover:text-[#EC5B53]"
                >
                  {a.label}
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Connect with us</h4>

            <div className="mb-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-colors hover:bg-[#EC5B53] hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="space-y-2 text-sm text-slate-300">
              <p>
                <span className="font-medium text-white">Email: </span>
                <a href="mailto:isabelle@pathwaytosuccess.be" className="hover:text-[#EC5B53] hover:underline">
                   isabelle@pathwaytosuccess.be
                </a>
              </p>
              <p>
                <span className="font-medium text-white">Hours: </span>Monday - Friday, 9am - 5pm EST
              </p>
            </div>
          </div>
        </div>

        <SeparatorPage className="my-8 bg-slate-700" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} The Inner Shift Challenge. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="/privacy" className="hover:text-[#EC5B53] hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#EC5B53] hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
