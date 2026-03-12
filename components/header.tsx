"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, Phone, X } from "lucide-react"
import { useEffect, useState, useRef } from "react"

import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      // Debounce rapid scroll events
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [isHomePage])

  const phoneNumber = "561-569-0936"
  const phoneHref = "tel:+15615690936"

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-gradient-to-r from-[#003B73]/90 via-[#001a2e]/90 to-[#000c18]/90 border-b border-[#00B4D8]/30 shadow-lg backdrop-blur-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
           <div className="flex h-16 items-center justify-between gap-4 py-2">
              <Link href="/" className="group" aria-label="Ocean Armour Home">
                <span className="block text-2xl md:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-display)] text-white">
                   Ocean Armour
                 </span>
             </Link>

             <nav className="relative z-50 hidden items-center gap-1 rounded-full px-2 py-2 lg:flex border border-white/10 bg-white/5">
              {navItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={`group relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#6ed0ff] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </div>
                )
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                variant="link"
                className="rounded-full border-white/25 text-white hover:bg-white/10"
              >
                <a id="phone_call_cp" href={phoneHref} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {phoneNumber}
                </a>
              </Button>
              <Button asChild className="rounded-full bg-[#00B4D8] px-6 text-white hover:bg-[#2ECC71]">
                <Link href="/contact">
                  Free Consultation
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

             <Button
               variant="ghost"
               size="icon"
               className="lg:hidden relative z-50 text-white/80 hover:text-[#2ECC71] hover:bg-white/10"
               aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
               aria-expanded={isMobileMenuOpen}
               aria-controls="mobile-nav-panel"
               onClick={() => setIsMobileMenuOpen((prev) => !prev)}
             >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {(isScrolled || !isHomePage) && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#00B4D8]/20" />
        )}
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

        <aside
          id="mobile-nav-panel"
          className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[88vw] border-l border-[#00B4D8]/20 bg-gradient-to-b from-[#003B73]/95 via-[#001a2e]/95 to-[#000c18]/95 px-5 pb-6 pt-24 text-white transition-transform duration-200 ease-out lg:hidden backdrop-blur-sm ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
        <div className="flex flex-col space-y-8">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-[0.18em] transition-colors ${
                    isActive ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <Button className="w-full rounded-full bg-white/10 text-white hover:bg-white/15" asChild variant={"link"}>
              <a id="phone_call_cp" href={phoneHref} onClick={() => setIsMobileMenuOpen(false)}>
                <span className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  {phoneNumber}
                </span>
              </a>
            </Button>
            <Button className="w-full rounded-full bg-[#00B4D8] py-4 text-white shadow-lg hover:bg-[#2ECC71]" asChild>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
