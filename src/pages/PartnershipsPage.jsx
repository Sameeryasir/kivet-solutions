import SectionHeading from "../components/ui/SectionHeading"
import GlassCard from "../components/ui/GlassCard"
import Button from "../components/ui/Button"
import { StaggerContainer, StaggerItem } from "../components/ui/AnimatedSection"
import { partnerships } from "../data/siteContent"

export default function PartnershipsPage() {
  return (
    <div className="page-shell">
      <section className="section-padding hero-glow">
        <div className="container-xl">
          <SectionHeading eyebrow="Partnerships" title="Discount codes & affiliate partners" description="Shop trusted products Amber recommends." />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <StaggerContainer className="grid gap-8 sm:grid-cols-2">
            {partnerships.map((partner) => (
              <StaggerItem key={partner.image}>
                <GlassCard className="overflow-hidden">
                  <img src={partner.image} alt={partner.name} className="aspect-[4/3] w-full object-contain bg-white/5 p-4" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                    <p className="mt-2 text-sm text-slate-400">{partner.description}</p>
                    {partner.code && (
                      <p className="mt-3 inline-block rounded-full bg-brand-500/15 px-3 py-1.5 text-xs font-semibold text-brand-300">
                        Use code: {partner.code} for 10% off
                      </p>
                    )}
                    <div className="mt-4">
                      <Button variant="secondary">{partner.cta}</Button>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <GlassCard className="mx-auto mt-12 max-w-3xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white">B3 Sciences</h3>
            <p className="mt-3 text-slate-400">
              Try BFR bands FREE for 30 days. Call "Big Mike" at 972-214-5844.
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
