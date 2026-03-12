export function SectionBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,180,216,0.28),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(110,208,255,0.18),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(0,23,45,0.8),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.75))]" />
      <div className="absolute inset-0 hidden opacity-[0.08] bg-[linear-gradient(120deg,transparent_0%,transparent_45%,rgba(255,255,255,0.4)_50%,transparent_55%,transparent_100%)] md:block" />
    </div>
  )
}
