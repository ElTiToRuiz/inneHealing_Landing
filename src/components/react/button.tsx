import { Button } from "@/components/ui/button"
import { redirectPricing } from "@/utils/handleClick"

type ButtonProps = {
  text: string
  ctaRef?: React.RefObject<HTMLButtonElement | null>
  handleClick?: () => void
}

export const ButtonPage = ({ctaRef, text, handleClick}:ButtonProps) => <Button
  ref={ctaRef}
  className="rounded-full bg-[#CF332B] hover:bg-[#8a211c] text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-[#6b110d] cursor-pointer"
  aria-label="Book your free discovery call to start your healing journey"
  onClick={handleClick ? handleClick : redirectPricing}
>
  {text}
</Button>