import type { LucideProps } from "lucide-react"
import { motion } from "framer-motion"

type BadgeProps = {
  text: string,
  Icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>
}


export const BadgePage = ({text, Icon}:BadgeProps) =><motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 0.5 }}
  className="inline-flex items-center self-start rounded-full bg-gradient-to-r from-[#CF332B]/10 to-[#EC5B53]/10 px-2 py-1.5 border-t border-[#EC5B53] shadow-sm shadow-[#6b110d]/30"
>
  {Icon && <Icon className="h-4 w-4 text-[#CF332B] mr-2"/>}
  <span className="text-sm font-medium text-[#CF332B]">{text}</span>
</motion.div>