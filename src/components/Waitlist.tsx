import { motion } from "framer-motion"
import { Sparkle, Package, Gift, Phone, Target } from "@phosphor-icons/react"
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
    <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-16 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Be Among the First to Experience Soft Luxury
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Join our exclusive community of discerning women worldwide. Get early access, special pricing, and be the first to own bags that truly understand your life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" weight="bold" />
                </div>
                <p className="text-lg text-foreground">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-accent/30 to-secondary/30 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Professional woman in modern setting"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop"
                alt="Elegant woman with confidence"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/30 to-primary/30 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop"
                alt="Modern professional woman"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
                alt="Confident woman in professional attire"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 flex justify-center"
        >
          <Button
            onClick={handleSecureSpot}
            size="lg"
            className="h-16 bg-primary px-12 text-lg font-semibold transition-all hover:scale-105 hover:bg-primary/90"
          >
            Secure Your Spot
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Badge variant="secondary" className="border-accent/30 bg-secondary/50 px-4 py-2 text-sm text-muted-foreground">
            Limited to 2000 founding members globally
          </Badge>
        </motion.div>
      </div>
    </section>
  )
}
