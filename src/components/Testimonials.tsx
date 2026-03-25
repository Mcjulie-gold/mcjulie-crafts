import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quotes, ArrowRight } from "@phosphor-icons/react"

const testimonials = [
  {
    quote: "Finally, a brand that understands that modern women need luxury AND functionality.",
    author: "Amara Okafor",
    location: "Nigeria",
  },
  {
    quote: "I can't wait for bags that work as hard as I do.",
    author: "Thandiwe Mbeki",
    location: "South Africa",
  },
  {
    quote: "This is exactly what modern motherhood needs.",
    author: "Akinyi Wanjiru",
    location: "Kenya",
  },
]

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwSQQ-0CqktEEXiYxB1IULNNZVIRQqYnKXTD9LMtGYv9sd8Q/viewform"

export function Testimonials() {
  const handleSecureSpot = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:mb-20"
        >
          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Designed for
            <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Women Like You
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="group h-full border-2 border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="flex h-full flex-col p-8 lg:p-10">
                    <Quotes className="mb-6 h-10 w-10 text-primary/40" weight="fill" />
                    <p className="mb-8 flex-grow text-base leading-relaxed text-foreground/90 lg:text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
