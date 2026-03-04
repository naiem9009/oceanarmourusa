import { Card } from '@/components/ui/card'
import { Shield, Droplet, Zap, Award } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Corrosion Protection',
    description: 'Marine-grade coating systems engineered to resist corrosion and harsh weather exposure.',
  },
  {
    icon: Droplet,
    title: 'Surface Preparation',
    description: 'Grit/media blasting and substrate prep to ensure optimal adhesion and performance.',
  },
  {
    icon: Zap,
    title: 'Thermoplastic Application',
    description: 'Low-temperature powder coating for heat-sensitive substrates and complex geometries.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Thickness targets, coverage checks, and guidance for long-term durability.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive marine coating solutions designed to protect and enhance your vessel&apos;s performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-shadow border-0 bg-muted/50"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
