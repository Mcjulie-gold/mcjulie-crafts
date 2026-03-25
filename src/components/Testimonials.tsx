import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quotes } from "@phosphor-icons/react"

const testimonials = [
  {
    quote: "Finally, a brand that understands that modern women need luxury AND functionality.",
    author: "Coming Soon",
  },
  {
    quote: "I can't wait for bags that work as hard as I do.",
    author: "Founding Member",
  },
  {
    quote: "This is exactly what modern motherhood needs.",
    author: "Early Access",
  },
]

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Designed for Women Like You
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-accent/20 bg-card/50 backdrop-blur">
                <CardContent className="p-8">
                  <Quotes className="mb-6 h-10 w-10 text-primary" weight="fill" />
                  <p className="mb-6 text-lg leading-relaxed italic text-foreground">
                    {testimonial.quote}
                  </p>
                  <p className="font-medium text-muted-foreground">
                    - {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
