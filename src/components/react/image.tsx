import { motion } from "framer-motion"

type ImageProps = {
  imgSrc?: string,
  width?: number,
  height?: number, 
  alt?: string
  className?: string
}

export const ImagePage = ({imgSrc, width, height, alt, className}:ImageProps) => <motion.div
  className={`${className}`}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  whileHover={{ scale: 1.03 }}
>
  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 max-w-[100vw]">
    <img
      src={imgSrc}
      width={width}
      height={height}
      alt={alt}
      className="w-full max-h-[600px] object-cover"
      loading="lazy"
      decoding="async"
    />
  </div>
</motion.div>