"use client"
import { useEffect, useState } from "react"
import { ArrowRight, Smartphone, RefreshCcw, Truck } from "lucide-react"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let rafId: number
    let currentProgress = 0

    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 400
      const targetProgress = Math.min(scrollY / maxScroll, 1)

      const smoothUpdate = () => {
        currentProgress += (targetProgress - currentProgress) * 0.1

        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          setScrollProgress(currentProgress)
          rafId = requestAnimationFrame(smoothUpdate)
        } else {
          setScrollProgress(targetProgress)
        }
      }

      cancelAnimationFrame(rafId)
      smoothUpdate()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const frameOpacity = easeOutCubic(scrollProgress)
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  return (
    <section className="pt-32 pb-12 px-6 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 top-0 flex items-start justify-center pt-12">
        {/* Background Image */}
        <div
          className="w-full will-change-transform overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: "0px",
            height: `${heightVh}vh`,
            backgroundImage: "url(/images/pressed-flowers-bg.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Golden Frame Outline */}
        <div
          className="absolute will-change-transform"
          style={{
            opacity: frameOpacity,
            transform: `scale(${scale})`,
            height: `${heightVh}vh`,
            width: "100%",
            pointerEvents: "none",
            border: "8px solid #d4a574",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(212, 165, 116, 0.3)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-8">
          <div
            className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <h1 className="font-serif text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] font-normal leading-tight mb-4 w-full px-4 max-w-6xl mx-auto text-balance">
              <AnimatedText text="Nature's art, brought home" delay={0.3} />
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-8">
          <button
            className={`relative flex items-center gap-2 rounded-full px-8 py-3 transition-all duration-300 group overflow-hidden bg-[#d4a574] text-background hover:bg-[#c49464] transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="relative z-10 text-sm md:text-base font-medium">Shop Now</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <div
            className={`transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
              <div>
                <p className="text-xl md:text-2xl font-semibold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Customizable Artworks</p>
              </div>
              <div className="h-px md:h-12 bg-border md:bg-border w-full md:w-px" />
              <div>
                <p className="text-xl md:text-2xl font-semibold text-foreground">Multiple Sizes</p>
                <p className="text-sm text-muted-foreground">A4, A3, A2 & More</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div
            className={`transition-all duration-1000 delay-1200 mt-6 md:mt-8 flex justify-center w-full px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-background/40 backdrop-blur-sm p-6 md:p-4 rounded-2xl border border-primary/10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full max-w-sm md:max-w-fit mx-auto md:w-fit shadow-sm">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground text-sm whitespace-nowrap">10% Cashback</h3>
                  <p className="text-muted-foreground text-xs whitespace-nowrap">on App orders</p>
                </div>
              </div>
              
              <div className="w-full h-px md:h-8 md:w-px bg-border/50 shrink-0" />
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                  <RefreshCcw className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground text-sm whitespace-nowrap">30 Days Return</h3>
                  <p className="text-muted-foreground text-xs whitespace-nowrap">Easy Exchanges</p>
                </div>
              </div>

              <div className="w-full h-px md:h-8 md:w-px bg-border/50 shrink-0" />
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground text-sm whitespace-nowrap">Free & Fast</h3>
                  <p className="text-muted-foreground text-xs whitespace-nowrap">Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
