import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const stats = [
  { number: '5-Year', label: 'Warranty Coverage' },
  { number: 'Zero', label: 'Toxic Biocides' },
  { number: '850 PSI', label: 'Bond Strength' },
  { number: '3000-Hour', label: 'UV Tested' },
]

const features = [
  '100% solids, no VOC thermoplastic coatings',
  'UV stable, corrosion-resistant finish',
  'Advanced surface preparation techniques',
  'Substrate-specific pretreatment plans',
  'Quality checks for thickness and coverage',
  'Custom solutions for unique vessel requirements',
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Choose <span className="text-primary">Ocean Armour</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ocean Armour is the licensed Aquaphobix dealer delivering shipyard-grade marine protection with a focus on long-term performance and clean waterways.
            </p>
            <div className="space-y-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <Card
                key={idx}
                className="p-8 text-center border-0 bg-gradient-to-br from-primary/10 to-accent/10 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certification Badge */}
        <div className="bg-secondary rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Technical Data Driven</h3>
          <p className="max-w-2xl mx-auto mb-4">
            Every project follows the Aquaphobix technical data sheet for surface preparation, application
            parameters, and handling guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded">Surface Prep Standards</span>
            <span className="bg-white/20 px-4 py-2 rounded">Thickness Targets</span>
            <span className="bg-white/20 px-4 py-2 rounded">Performance Specs</span>
          </div>
        </div>
      </div>
    </section>
  )
}
