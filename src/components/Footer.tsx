import { Button } from "@/components/ui/button"
import { InstagramLogo } from "@phosphor-icons/react"

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwSQQ-0CqktEEXiYxB1IULNNZVIRQqYnKXTD9LMtGYv9sd8Q/viewform"

export function Footer() {
  const handleJoinMovement = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 px-6 py-24 md:px-12 lg:px-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            currentColor 35px,
            currentColor 36px
          )`
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Your Journey Deserves
            <span className="block mt-2 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Beautiful Tools
            </span>
          </h2>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 md:text-xl">
            Don't miss your chance to be part of something special. Join women worldwide who know that motherhood and style aren't mutually exclusive.
          </p>

          <Button
            onClick={handleJoinMovement}
            size="lg"
            className="mt-12 h-16 bg-primary px-12 text-lg font-semibold text-primary-foreground shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/50"
          >
            Join the Movement
          </Button>

          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm uppercase tracking-wider text-white/60">
              Follow Our Journey
            </p>
            <a
              href="https://instagram.com/Mcjulie_crafts"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white/10"
            >
              <InstagramLogo className="h-6 w-6 text-primary transition-transform group-hover:scale-110" weight="fill" />
              <span className="text-base font-medium text-white">@Mcjulie_crafts</span>
            </a>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/50">
            © 2024 Mcjulie Crafts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
