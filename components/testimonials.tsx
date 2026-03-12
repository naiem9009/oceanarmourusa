import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Captain James Mitchell',
    role: 'Fleet Manager',
    company: 'Global Shipping Co.',
    content: 'Ocean Armour delivered a durable, corrosion-resistant finish that is holding up in harsh conditions.',
    rating: 5,
  },
  {
    name: 'Sarah Anderson',
    role: 'Yacht Owner',
    company: 'Luxury Marine Group',
    content: 'The team was meticulous with prep and application. The finish looks smooth and consistent.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Operations Director',
    company: 'Port Authority',
    content: 'Reliable, efficient, and clear on technical requirements. Ocean Armour is our go-to partner.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Vessel Captain',
    company: 'Commercial Fleet Services',
    content: 'Outstanding coating quality with strong adhesion and a smooth, glossy appearance.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trust from industry leaders and satisfied vessel operators
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl bg-white border border-muted/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-4 flex-grow">{testimonial.content}</p>

              {/* Author */}
              <div className="border-t border-muted/20 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-primary font-medium mt-1">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
