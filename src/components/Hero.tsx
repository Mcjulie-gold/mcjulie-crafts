import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwSQQ-0CqktEEXiYxB1IULNNZVIRQqYnKXTD9LMtGYv9sd8Q/viewform"

export function Hero() {
  const handleSecureSpot = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-16 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute right-[5%] top-[40%] h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl lg:leading-[1.1]">
            Where Motherhood Meets Modern Luxury
          </h1>
          
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Thoughtfully designed bags for the woman who refuses to choose between style and function.
          </p>
          
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
            We're crafting the future of premium functional design—bags that understand your journey from boardroom to baby room, created for the modern woman who values both beauty and purpose.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-12"
          >
            <Button
              onClick={handleSecureSpot}
              size="lg"
              className="h-16 bg-primary px-12 text-lg font-semibold transition-all hover:scale-105 hover:bg-primary/90"
            >
              Secure Your Spot
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
