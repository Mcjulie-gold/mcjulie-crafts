import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { InstagramLogo } from "@phosphor-icons/react"

export function Footer() {
  const handleScrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border/50 px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Your Journey Deserves Beautiful Tools
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Don't miss your chance to be part of something special. Join women worldwide who know that motherhood and style aren't mutually exclusive.
          </p>

          <Button
            onClick={handleScrollToWaitlist}
            size="lg"
            className="mt-8 h-14 bg-primary px-10 text-base font-semibold hover:scale-105 hover:bg-primary/90"
          >
            Join the Movement
          </Button>
        </div>

        <Separator className="my-12 bg-border/30" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Luxury Motherhood Bags. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Follow our journey:</span>
            <a
              href="https://instagram.com/Mcjulie_crafts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 transition-all hover:bg-primary/20 hover:scale-105"
            >
              <InstagramLogo className="h-5 w-5 text-primary" weight="fill" />
              <span className="text-sm font-medium text-primary">@Mcjulie_crafts</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
