"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, Phone, X, Instagram, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  return (
    <>
      {/* ── Main Header ───────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#00111f]/90 backdrop-blur-md border-b border-white/8 shadow-[0_1px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between gap-6 py-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              {/* <Image
                src="/images/ocean-armour-logo.webp"
                alt="Ocean Armour"
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
              /> */}
              <span className="text-white font-bold text-lg tracking-tight leading-none">
                Ocean<br />
                <span className="text-[#6ed0ff]">Armour</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white hover:bg-white/6"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#6ed0ff] to-transparent" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:+15615690936"
                className="flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden lg:inline">561-569-0936</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-full bg-[#00B4D8] hover:bg-[#00B4D8]/85 px-4 py-2 text-sm font-semibold text-white transition-colors"
              >
                Free Consultation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden relative z-50 flex h-9 w-9 items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/8 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((p) => !p)}
            >
              <span
                className={`absolute transition-all duration-200 ${isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
              >
                <X className="h-5 w-5" />
              </span>
              <span
                className={`absolute transition-all duration-200 ${isMobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
              >
                <Menu className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ───────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#00111f]/96 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute inset-x-0 top-0 flex flex-col min-h-screen px-6 pt-24 pb-10 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {/* Nav Links */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ transitionDelay: isMobileMenuOpen ? `${i * 40}ms` : "0ms" }}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-lg font-semibold transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  } ${
                    isActive
                      ? "bg-white/8 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#6ed0ff]" />}
                </Link>
              )
            })}
          </nav>

          {/* Divider */}
          <div className="my-8 border-t border-white/8" />

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:+15615690936"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 text-[#6ed0ff]" />
              561-569-0936
            </a>
            <a
              href="mailto:oceanarmourusa@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-[#6ed0ff]" />
              oceanarmourusa@gmail.com
            </a>
            <a
              href="https://www.instagram.com/oceanarmourusa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="h-4 w-4 text-[#6ed0ff]" />
              @oceanarmourusa
            </a>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-[#00B4D8] hover:bg-[#00B4D8]/85 px-6 py-4 text-base font-semibold text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
