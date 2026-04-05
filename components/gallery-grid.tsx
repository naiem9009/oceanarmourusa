"use client"

import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

type GalleryImage = {
  id: string | number
  url: string
  alt: string
  category: string
}

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "application", label: "Application" },
  { value: "before-after", label: "Before & After" },
  { value: "vessel", label: "Vessel" },
  { value: "process", label: "Process" },
]

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === "all"
    ? images
    : images.filter((img) => img.category === activeCategory)

  const isOpen = lightboxIndex !== null
  const current = isOpen ? filtered[lightboxIndex] : null

  const close = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  }, [filtered.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))
  }, [filtered.length])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, close, prev, next])

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Close lightbox if filtered set changes and index is out of range
  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= filtered.length) {
      setLightboxIndex(filtered.length > 0 ? 0 : null)
    }
  }, [filtered.length, lightboxIndex])

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {CATEGORIES.filter((c) =>
          c.value === "all" || images.some((img) => img.category === c.value)
        ).map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${
              activeCategory === cat.value
                ? "bg-[#00B4D8] text-white shadow-[0_0_16px_rgba(0,180,216,0.35)]"
                : "border border-white/15 bg-white/5 text-white/55 hover:border-white/25 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
        <span className="ml-auto text-xs text-white/30">
          {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex items-center justify-center py-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-10 py-14 text-center max-w-sm">
            <p className="text-white/40 text-base">Project photos coming Soon</p>
          </div>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, index) => (
            <div
              key={img.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-zoom-in"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  {CATEGORIES.find((c) => c.value === img.category)?.label ?? img.category}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-white">
                  <ZoomIn className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />

        {/* Close */}
        <button
          className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/70 hover:text-white hover:bg-white/15 transition-colors"
          onClick={close}
        >
          <X className="h-4 w-4" />
        </button>

        {/* Counter */}
        {isOpen && (
          <div className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs text-white/60 backdrop-blur-sm">
            {(lightboxIndex ?? 0) + 1} / {filtered.length}
          </div>
        )}

        {/* Prev */}
        {filtered.length > 1 && (
          <button
            className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/70 hover:text-white hover:bg-white/15 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {/* Image */}
        {current && (
          <div
            className="relative z-10 max-h-[85vh] max-w-[90vw] flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={current.url}
              src={current.url}
              alt={current.alt}
              className="max-h-[80vh] max-w-[88vw] rounded-xl object-contain shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
            />
            <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
              {CATEGORIES.find((c) => c.value === current.category)?.label ?? current.category}
            </span>
          </div>
        )}

        {/* Next */}
        {filtered.length > 1 && (
          <button
            className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/70 hover:text-white hover:bg-white/15 transition-colors"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </>
  )
}
