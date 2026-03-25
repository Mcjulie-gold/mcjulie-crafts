import { Toaster } from "@/components/ui/sonner"
import { Hero } from "@/components/Hero"
import { ValueProposition } from "@/components/ValueProposition"
import { Waitlist } from "@/components/Waitlist"
import { Testimonials } from "@/components/Testimonials"
import { About } from "@/components/About"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProposition />
      <div id="waitlist">
        <Waitlist />
      </div>
      <Testimonials />
      <About />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default App