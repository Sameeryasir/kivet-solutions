import SectionHeading from "../components/ui/SectionHeading"
import GlassCard from "../components/ui/GlassCard"
import Button from "../components/ui/Button"

export default function CancellationPolicyPage() {
  return (
    <div className="page-shell">
      <section className="section-padding hero-glow">
        <div className="container-xl max-w-3xl">
          <SectionHeading
            eyebrow="Policy"
            title="Cancellation policy"
            description="We respect your time and ours. Please review our appointment cancellation guidelines below."
          />

          <GlassCard className="p-8">
            <p className="leading-relaxed text-slate-300">
              As a courtesy, please give us at least a{" "}
              <strong className="text-white">24-hour notice</strong> if you need
              to cancel your appointment. Failure to give less than a 24-hour
              notice will result in a{" "}
              <strong className="text-white">$150 late cancellation fee</strong>.
              If you miss an appointment or fail to give us notice, you will be
              charged for the full cost of the scheduled appointment.
            </p>
            <p className="mt-6 leading-relaxed text-slate-300">
              All new clients must provide a card on file before their first
              appointment.
            </p>
            <div className="mt-8">
              <Button to="/contact">Contact Us</Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
