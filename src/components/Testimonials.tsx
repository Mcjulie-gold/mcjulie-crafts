import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quotes } from "@phosphor-icons/react"

const testimonials = [
  {
    quote: "Finally, a brand that understands that modern women need luxury AND functionality.",
    author: "Amara Okafor, Nigeria",
    isComingSoon: false,
  },
  {
    quote: "I can't wait for bags that work as hard as I do.",
    author: "Thandiwe Mbeki, South Africa",
    isComingSoon: false,
  },
  {
    quote: "This is exactly what modern motherhood needs.",
    author: "Akinyi Wanjiru, Kenya",
    isComingSoon: false,
  },
]

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwSQQ-0CqktEEXiYxB1IULNNZVIRQqYnKXTD9LMtGYv9sd8Q/viewform"

export function Testimonials() {
  const handleSecureSpot = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

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

        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-accent/20 bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <Quotes className="mb-4 h-8 w-8 text-primary" weight="fill" />
                    <p className="mb-4 text-base leading-relaxed italic text-foreground">
                      {testimonial.quote}
                    </p>
                    <p className={`font-medium ${testimonial.isComingSoon ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                      - {testimonial.author}
                    </p>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Button
            onClick={handleSecureSpot}
            size="lg"
            className="h-16 bg-primary px-12 text-lg font-semibold transition-all hover:scale-105 hover:bg-primary/90"
          >
            Secure Your Spot
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
