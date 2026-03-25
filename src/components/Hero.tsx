import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkle } from "@phosphor-icons/react"

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwSQQ-0CqktEEXiYxB1IULNNZVIRQqYnKXTD9LMtGYv9sd8Q/viewform"

export function Hero() {
  const handleSecureSpot = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-36">
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute left-[15%] top-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-transparent blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute right-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-secondary/30 via-primary/20 to-transparent blur-3xl" 
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 backdrop-blur-sm">
              <Sparkle className="h-5 w-5 text-primary" weight="fill" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Coming Soon
              </span>
            </div>
          </motion.div>

          <h1 className="text-center font-serif text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl">
            Where Motherhood
            <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Meets Modern Luxury
            </span>
          </h1>
          
          <p className="mt-10 text-center text-xl font-medium leading-relaxed text-foreground/70 md:text-2xl lg:text-3xl">
            Thoughtfully designed bags for the woman who refuses to choose between style and function.
          </p>
          
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-foreground/60 md:text-lg lg:text-xl">
            <span className="font-bold text-primary">Founded for women, by women.</span> We're crafting the future of premium functional design — bags that understand your journey from boardroom to baby room.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-14 flex justify-center"
          >
            <Button
              onClick={handleSecureSpot}
              size="lg"
              className="group h-16 rounded-full bg-primary px-10 text-lg font-bold shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30"
            >
              Secure Your Spot
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" weight="bold" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            Join 1,200 women already on the list
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
