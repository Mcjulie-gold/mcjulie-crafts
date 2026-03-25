import { motion } from "framer-motion"
import { Sparkle, Heart, Briefcase } from "@phosphor-icons/react"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Sparkle,
    title: "Warmly Premium",
    description: "Luxurious materials and finishes that feel as good as they look, because you deserve the best.",
  },
  {
    icon: Briefcase,
    title: "Functionally Beautiful",
    description: "Every pocket, strap, and detail designed with your real life in mind—from morning meetings to midnight feeds.",
  },
  {
    icon: Heart,
    title: "Thoughtfully Crafted",
    description: "Founded for women, by women. Created for those who navigate motherhood and career with grace, confidence, and uncompromising standards.",
  },
]

export function ValueProposition() {
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
            Soft Luxury. Thoughtful Design. Made for You.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-accent/20 bg-card/50 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
                <CardContent className="p-8">
                  <pillar.icon className="mb-6 h-12 w-12 text-primary" weight="duotone" />
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {pillar.description}
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
