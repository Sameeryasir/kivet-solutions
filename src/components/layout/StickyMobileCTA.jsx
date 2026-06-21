import Button from "../ui/Button"

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-950/95 p-3 backdrop-blur-md lg:hidden">
      <div className="container-xl">
        <Button to="/contact" fullWidth className="w-full">
          Book Free Session
        </Button>
      </div>
    </div>
  )
}
