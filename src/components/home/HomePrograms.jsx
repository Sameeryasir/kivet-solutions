import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SectionHeading from "../ui/SectionHeading"
import CTAButton from "../ui/CTAButton"
import MotionSection from "../ui/MotionSection"
import { services } from "../../data/siteContent"
import { scaleIn, staggerContainer, staggerItem, viewportOnce } from "../../utils/motionPresets"

const programs = services.slice(0, 4)

export default function HomePrograms() {
  return (
    <section className="section-padding">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Training Programs"
          title="Programs built for real transformation"
          description="Sports medicine, performance, wellness, and the mind-game — integrated into one MAGIKAL coaching experience."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {programs.map((program, i) => (
            <motion.article
              key={program.title}
              variants={scaleIn}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: i % 2 ? -2 : 2 }}
              className="group glass-card flex flex-col overflow-hidden rounded-2xl"
              style={{ transformPerspective: 800 }}
            >
              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-2xl">{program.icon}</span>
                <h3 className="mt-2 font-semibold text-white">{program.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-3">
                  {program.description}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-success-500">
                  60–90 min sessions
                </p>
                <Link
                  to="/services"
                  className="mt-4 text-sm font-semibold text-brand-400 transition hover:text-brand-300"
                >
                  Learn more →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <MotionSection className="mt-10 text-center" as="div">
          <CTAButton to="/services">View All Programs</CTAButton>
          <p className="mt-3 text-sm text-slate-500">Step 1 of your transformation — pick your path.</p>
        </MotionSection>
      </div>
    </section>
  )
}
