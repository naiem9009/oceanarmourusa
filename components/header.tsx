"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowUpRight, Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"
  const isTransparent = !isScrolled && isHomePage
  const phoneNumber = "561-569-0936"
  const phoneHref = "tel:+15615690936"

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? "bg-[#00111f]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ top: "0px" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between gap-4 py-3">
            <Link href="/" className="group flex items-center gap-1" aria-label="Ocean Armour USA Home">
              <Image
                src={"/images/ocean-armour-logo.png"}
                alt="Ocean Armour Logo"
                width={70}
                height={70}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />

              <div className="leading-tight">
                <span
                  className={`block md:text-[11px] text-[8px] uppercase tracking-[0.32em] ${
                    isTransparent ? "text-white/70" : "text-white/60"
                  }`}
                >
                  Aquaphobix Licensed Dealer
                </span>

                <span
                  className={`block md:text-lg text-[12px] font-semibold ${
                    isTransparent ? "text-white" : "text-white"
                  }`}
                >
                  Ocean Armour USA
                </span>
              </div>
            </Link>

            <nav
              className={`relative z-50 hidden items-center gap-1 rounded-full px-2 py-2 backdrop-blur lg:flex ${
                isTransparent ? "border border-white/35 bg-white/10" : "border border-white/10 bg-white/5"
              }`}
            >
              {navItems.map((item, index) => {
                const isActive = pathname === item.href

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 * index }}
                  >
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
                  </motion.div>
                )
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center gap-3"
            >
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
            </motion.div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden relative z-50 ${
                    isTransparent
                      ? "text-[#6ed0ff] hover:text-[#6ed0ff] hover:bg-[#00B4D8]/10"
                      : "text-white/80 hover:text-[#2ECC71] hover:bg-white/10"
                  }`}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </motion.div>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 bg-[#00111f] text-white border-white/10 overflow-y-auto h-full">
                <div className="flex flex-col space-y-8 mt-10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <Image src={"/images/ocean-armour-logo.png"} alt="Ocean Armour Logo" width={60} height={60} />
                      <div>
                        <span className="block text-[8px] uppercase tracking-[0.32em] text-white/60">
                          Aquaphobix Licensed Dealer
                        </span>
                        <span className="block text-[12px] font-semibold tracking-wide text-white">
                          Ocean Armour USA
                        </span>
                      </div>
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.href

                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.08 }}
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-[0.18em] transition-colors ${
                              isActive
                                ? "text-white bg-white/10"
                                : "text-white/70 hover:text-white hover:bg-white/10"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </nav>

                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <Button
                      className="w-full rounded-full bg-white/10 text-white hover:bg-white/15"
                      asChild
                      variant={"link"}
                    >
                      <a id="phone_call_cp" href={phoneHref} onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4" />
                          {phoneNumber}
                        </span>
                      </a>
                    </Button>
                    <Button
                      className="w-full rounded-full bg-[#00B4D8] py-4 text-white shadow-lg hover:bg-[#2ECC71]"
                      asChild
                    >
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Free Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        {(isScrolled || !isHomePage) && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00FF9C]/70 to-transparent" />
        )}
      </motion.header>
    </>
  )
}
