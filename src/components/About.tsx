import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "@phosphor-icons/react"

const values = [
  "Premium materials sourced with care",
  "Functional design tested by real mothers",
  "Timeless style that grows with you",
  "Celebrating modern womanhood everywhere",
]

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwSQQ-0CqktEEXiYxB1IULNNZVIRQqYnKXTD9LMtGYv9sd8Q/viewform"

export function About() {
  const handleSecureSpot = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute left-[20%] top-[20%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent/20 via-secondary/20 to-transparent blur-3xl" 
        />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Founded for Women,
            <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              by Women
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80 md:text-xl lg:text-2xl">
            Born from the real experiences of working mothers who couldn't find bags that matched their sophisticated taste while meeting their practical needs. We're women who understand the journey—because we're living it too. Every detail is considered, every choice intentional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 lg:mt-20"
        >
          <h3 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Founding Values
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group flex items-start gap-4 rounded-2xl border-2 border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-xl lg:p-8"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-transform duration-300 group-hover:scale-110">
                  <Check className="h-6 w-6 text-primary" weight="bold" />
                </div>
                <p className="pt-1 text-base font-medium text-foreground lg:text-lg">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Button
            onClick={handleSecureSpot}
            size="lg"
            className="group h-16 rounded-full bg-primary px-12 text-lg font-bold shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30"
          >
            Secure Your Spot
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" weight="bold" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
