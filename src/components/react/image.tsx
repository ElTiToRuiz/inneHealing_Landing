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
  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:-translate-y-2">
    <img
      src="/"
      width={300}
      height={400}
      alt="Confident woman smiling, representing inner healing and transformation"
      className="w-full max-h-[500px] object-cover bg-red-500"
    />
  </div>
</motion.div>