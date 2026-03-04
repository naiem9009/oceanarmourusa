const specRows = [
  {
    property: 'Recommended Thickness',
    value: '15-20 mils',
    method: 'Typical film build',
  },
  {
    property: 'Theoretical Coverage',
    value: '10-15 sq ft/lb',
    method: 'Varies by substrate and conditions',
  },
  {
    property: 'Impact Resistance',
    value: '>140 in./lbs',
    method: 'ASTM B2794',
  },
  {
    property: 'Hardness',
    value: 'Shore D 42',
    method: 'Typical',
  },
  {
    property: 'Taber Abrasion',
    value: '37.5 mg',
    method: 'ASTM D4060',
  },
  {
    property: 'Adhesion to Steel',
    value: '>1200 PSI',
    method: 'ASTM D4541 (blasted substrate)',
  },
  {
    property: 'Adhesion to Concrete',
    value: '>868 PSI',
    method: 'ASTM D7234 (pre-treated)',
  },
  {
    property: 'Salt Fog Resistance',
    value: '5,000 hours',
    method: 'ASTM B117 on steel',
  },
  {
    property: 'Melting Point',
    value: '208 F',
    method: 'ASTM D3418',
  },
  {
    property: 'Vicat Softening Point',
    value: '149 F',
    method: 'ASTM D1525',
  },
]

export function ServicesComparison() {
  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,180,216,0.28),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(110,208,255,0.18),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(0,23,45,0.8),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.75))]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(120deg,transparent_0%,transparent_45%,rgba(255,255,255,0.4)_50%,transparent_55%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Data</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
            Technical data snapshot.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Typical product properties and performance indicators from the technical data sheet.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#001826]/80 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <table className="w-full min-w-[720px] text-left">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-6 py-4 text-xs uppercase tracking-[0.3em]">Property</th>
                <th className="px-6 py-4 text-xs uppercase tracking-[0.3em]">Typical Value</th>
                <th className="px-6 py-4 text-xs uppercase tracking-[0.3em]">Method / Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {specRows.map((row) => (
                <tr key={row.property} className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-sm text-white">{row.property}</td>
                  <td className="px-6 py-4 text-sm text-white/70">{row.value}</td>
                  <td className="px-6 py-4 text-sm text-white/70">{row.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
