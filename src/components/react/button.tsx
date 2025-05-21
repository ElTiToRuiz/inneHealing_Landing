import { Button } from "@/components/ui/button"

type ButtonProps = {
  text: string
  ctaRef?: React.RefObject<HTMLButtonElement | null>
}

export const ButtonPage = ({ctaRef, text}:ButtonProps) => <Button
  ref={ctaRef}
  className="rounded-full bg-[#CF332B] hover:bg-[#8a211c] text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-[#6b110d]"
  aria-label="Book your free discovery call to start your healing journey"
>
  {text}
</Button>