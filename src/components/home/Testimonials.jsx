import SectionHeading from "../ui/SectionHeading"
import GlassCard from "../ui/GlassCard"
import { StaggerContainer, StaggerItem } from "../ui/AnimatedSection"
import Button from "../ui/Button"
import { testimonials } from "../../data/siteContent"

export default function Testimonials() {
  return (
    <section className="section-padding bg-navy-900/40">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Client Love"
          title="Trusted by athletes, physicians & dreamers"
          description="Real results from real clients — and recognition from the health and fitness community nationwide."
        />

        <StaggerContainer className="grid gap-5 md:grid-cols-2">
          {testimonials.slice(0, 4).map((item) => (
            <StaggerItem key={item.name + item.quote.slice(0, 20)}>
              <GlassCard className="flex h-full flex-col overflow-hidden p-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-3 flex gap-1 text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="flex-1 text-base leading-relaxed text-slate-200">
                    "{item.quote}"
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-slate-400">{item.role}</p>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Button to="/testimonials" variant="secondary">
            Read More Testimonials
          </Button>
        </div>
      </div>
    </section>
  )
}
