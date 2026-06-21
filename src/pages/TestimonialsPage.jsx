import SectionHeading from "../components/ui/SectionHeading"
import GlassCard from "../components/ui/GlassCard"
import Button from "../components/ui/Button"
import ImageGrid from "../components/ui/ImageGrid"
import { StaggerContainer, StaggerItem } from "../components/ui/AnimatedSection"
import { testimonials, testimonialGraphics, pressLogos } from "../data/siteContent"

export default function TestimonialsPage() {
  return (
    <div className="page-shell">
      <section className="section-padding hero-glow">
        <div className="container-xl">
          <SectionHeading eyebrow="Testimonials" title="Client testimonials & as seen in" description="Google reviews, client stories, and national media recognition." />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <StaggerItem key={item.image}>
                <GlassCard className="flex h-full flex-col overflow-hidden p-0">
                  <img src={item.image} alt={item.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 text-gold-400">★★★★★</div>
                    <p className="flex-1 text-sm text-slate-200">"{item.quote}"</p>
                    <div className="mt-4 border-t border-white/10 pt-3">
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <GlassCard className="mx-auto mt-12 max-w-2xl p-8 text-center">
            <Button href="https://www.google.com/search?q=Kivett+Kinetic+Solutions+reviews" variant="secondary">
              Read Google Reviews
            </Button>
          </GlassCard>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-xl">
          <SectionHeading eyebrow="As Seen In" title="Client testimonials & press graphics" />
          <ImageGrid images={testimonialGraphics} columns="sm:grid-cols-2 lg:grid-cols-4" aspect="aspect-[4/3]" objectFit="object-contain p-3 bg-white/5" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <SectionHeading eyebrow="Publications" title="Featured in national media" />
          <ImageGrid images={pressLogos} columns="grid-cols-2 sm:grid-cols-4" aspect="aspect-square" objectFit="object-contain p-3 bg-white/5" />
        </div>
      </section>
    </div>
  )
}
