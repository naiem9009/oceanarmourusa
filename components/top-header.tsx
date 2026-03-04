"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"

interface TopHeaderProps {
  isScrolled: boolean
}

const TopHeader = ({ isScrolled }: TopHeaderProps) => {
  return (
    <motion.div
      className={`bg-[#003B73] backdrop-blur-sm text-white py-3 px-4 text-[13px] relative z-50 transition-all duration-500 border-b border-[#C0C0C0]/30 ${
        isScrolled ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <motion.a
            href="tel:+15615690936"
            id="phone_call_cp"
            className="flex items-center gap-2 hover:text-[#2ECC71] transition-colors group"
            whileHover={{ scale: 1.02 }}
          >
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">561-569-0936</span>
          </motion.a>
          <motion.a
            href="mailto:oceanarmourusa@gmail.com"
            id="email_contact_cp"
            className="flex items-center gap-2 hover:text-[#2ECC71] transition-colors group"
            whileHover={{ scale: 1.02 }}
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-medium">oceanarmourusa</span>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/oceanarmourusa?igsh=MWUzcnZsb3Jldm10&utm_source=qr"
            className="flex items-center gap-2 hover:text-[#2ECC71] transition-colors group"
            whileHover={{ scale: 1.02 }}
          >
            <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Instagram</span>
          </motion.a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/#cta"
            className="rounded-full border border-transparent bg-[#00B4D8] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#2ECC71] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default TopHeader
