import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "./AnimatedSection"
import { imageLabel } from "../../data/galleries"

export default function ImageGrid({
  images,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
  aspect = "aspect-[4/3]",
  objectFit = "object-cover",
  showLabels = false,
  className = "",
}) {
  if (!images?.length) return null

  return (
    <StaggerContainer className={`grid gap-4 ${columns} ${className}`}>
      {images.map((src) => (
        <StaggerItem key={src}>
          <motion.div
            className="group overflow-hidden rounded-2xl glass-card"
            whileHover={{ y: -4 }}
          >
            <img
              src={src}
              alt={imageLabel(src)}
              className={`w-full transition duration-500 group-hover:scale-105 ${objectFit} ${aspect}`}
              loading="lazy"
            />
            {showLabels && (
              <p className="border-t border-white/10 px-4 py-3 text-sm text-slate-300">
                {imageLabel(src)}
              </p>
            )}
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
