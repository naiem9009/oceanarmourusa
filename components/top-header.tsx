import { Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"

interface TopHeaderProps {
  isScrolled: boolean
}

const TopHeader = ({ isScrolled }: TopHeaderProps) => {
  return (
    <div
      className={`bg-[#003B73] md:backdrop-blur-sm text-white py-3 px-4 text-[13px] relative z-50 transition-all duration-300 border-b border-[#C0C0C0]/30 ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="container mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="tel:+15615690936"
            id="phone_call_cp"
            className="flex items-center gap-2 hover:text-[#2ECC71] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">561-569-0936</span>
          </a>
          <a
            href="mailto:oceanarmour@gmail.com"
            id="email_contact_cp"
            className="flex items-center gap-2 hover:text-[#2ECC71] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="font-medium">Ocean Armour</span>
          </a>
          <a
            href="https://www.instagram.com/oceanarmour"
            className="flex items-center gap-2 hover:text-[#2ECC71] transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/#cta"
            className="rounded-full border border-[#00B4D8] bg-transparent px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#00B4D8]/10 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
