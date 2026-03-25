import { motion } from "framer-motion"
import { Sparkle, Package, Gift, Phone, Target, ArrowRight } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const benefits = [
  {
    icon: Sparkle,
    text: "30% off your first purchase",
  },
  {
    icon: Package,
    text: "Priority access to limited collections",
  },
  {
    icon: Gift,
    text: "Exclusive colorways and materials",
  },
  {
    icon: Phone,
    text: "Personal styling consultations",
  },
  {
    icon: Target,
    text: "Early access to new launches",
  },
]

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwSQQ-0CqktEEXiYxB1IULNNZVIRQqYnKXTD9LMtGYv9sd8Q/viewform"

export function Waitlist() {
  const handleSecureSpot = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10" />
      
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.65 0.19 345 / 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
            Be Among the First to
            <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience McJulie Crafts
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
            Join our exclusive community of discerning women worldwide. Get early access, special pricing, and be the first to own bags that truly understand your life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group flex items-start gap-4 rounded-2xl border-2 border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-xl lg:p-8"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-transform duration-300 group-hover:scale-110 lg:h-16 lg:w-16">
                  <benefit.icon className="h-7 w-7 text-primary lg:h-8 lg:w-8" weight="duotone" />
                </div>
                <p className="pt-3 text-base font-medium text-foreground lg:pt-4 lg:text-lg">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <Button
            onClick={handleSecureSpot}
            size="lg"
            className="group h-16 rounded-full bg-primary px-12 text-lg font-bold shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 lg:h-20 lg:px-16 lg:text-xl"
          >
            Secure Your Spot
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" weight="bold" />
          </Button>

          <Badge variant="secondary" className="border-2 border-primary/20 bg-primary/5 px-6 py-3 text-sm font-medium text-foreground">
            ✨ Limited to 2000 Bloom women globally
          </Badge>
        </motion.div>
      </div>
    </section>
  )
}
