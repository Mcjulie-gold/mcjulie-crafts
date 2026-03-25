import { Button } from "@/components/ui/button"
import { InstagramLogo, ArrowRight } from "@phosphor-icons/react"
import { motion } from "framer-motion"

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwSQQ-0CqktEEXiYxB1IULNNZVIRQqYnKXTD9LMtGYv9sd8Q/viewform"

export function Footer() {
  const handleJoinMovement = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-foreground/95 px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px'
        }} />
      </div>

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            Your Journey Deserves
            <span className="mt-3 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Beautiful Tools
            </span>
          </h2>
          
          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl lg:text-2xl">
            Don't miss your chance to be part of something special. Join women worldwide who know that motherhood and style aren't mutually exclusive.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              onClick={handleJoinMovement}
              size="lg"
              className="group mt-12 h-16 rounded-full bg-primary px-12 text-lg font-bold shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/40 lg:h-20 lg:px-16 lg:text-xl"
            >
              Join the Movement
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" weight="bold" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-col items-center gap-6 lg:mt-20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Follow Our Journey
            </p>
            <a
              href="https://instagram.com/Mcjulie_crafts"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full border-2 border-white/10 bg-white/5 px-8 py-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white/10 hover:shadow-xl hover:shadow-primary/20"
            >
              <InstagramLogo className="h-7 w-7 text-primary transition-transform group-hover:scale-110" weight="fill" />
              <span className="text-lg font-semibold text-white">@Mcjulie_crafts</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-20 border-t border-white/5 pt-10 lg:mt-24">
          <p className="text-center text-sm text-white/40">
            © 2026 McJulie Crafts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
