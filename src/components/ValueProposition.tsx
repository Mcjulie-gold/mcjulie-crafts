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
    description: "Every pocket, strap, and detail designed with your real life in mind — from morning meetings to midnight feeds.",
  },
  {
    icon: Heart,
    title: "Thoughtfully Crafted",
    description: "Founded for women, by women. Created for those who navigate motherhood and career with grace, confidence, and uncompromising standards.",
  },
]

export function ValueProposition() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            McJulie Crafts.
            <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Thoughtful Design.
            </span>
            <span className="mt-2 block">Made for You.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="group h-full border-2 border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-2xl hover:shadow-primary/10">
                <CardContent className="flex h-full flex-col p-8 lg:p-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/30">
                    <pillar.icon className="h-8 w-8 text-primary" weight="duotone" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
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
