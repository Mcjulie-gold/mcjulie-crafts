import { motion } from "framer-motion"
import { Check } from "@phosphor-icons/react"

const values = [
  "Premium materials sourced with care",
  "Functional design tested by real mothers",
  "Timeless style that grows with you",
  "Celebrating modern womanhood everywhere",
]

export function About() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Founded by Mothers, For Mothers
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/90 md:text-xl">
            Born from the real experiences of working mothers who couldn't find bags that matched their sophisticated taste while meeting their practical needs. Every detail is considered, every choice intentional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">
            Founding Values
          </h3>
          <div className="space-y-4">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-center gap-4"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" weight="bold" />
                </div>
                <p className="text-lg text-foreground">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
