'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Clock } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    boatType: '',
    waterlineLength: '',
    serviceArea: '',
    details: '',
    contactMethod: 'phone',
    website: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError('')
    setIsSubmitting(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch(() => null)

    if (!response || !response.ok) {
      setIsSubmitting(false)
      setError('We could not send your request right now. Please call 561-569-0936 or try again shortly.')
      return
    }

    setSubmitted(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        boatType: '',
        waterlineLength: '',
        serviceArea: '',
        details: '',
        contactMethod: 'phone',
        website: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="relative overflow-hidden bg-[#000c18] py-24 lg:py-28">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <p className="text-md uppercase tracking-[0.35em] text-white/60">Contact Us</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white">
            Start your Aquaphobix consultation.
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Tell us about your vessel and we’ll outline the shipyard prep, application scope, and service timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <Card className="border-white/10 bg-white/5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
            <div className="p-6 flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#6ed0ff] mt-1" />
              <div>
                <p className="text-sm text-white/60">Call Us</p>
                <a className="text-base font-semibold hover:text-[#6ed0ff]" href="tel:+15615690936">
                  561-569-0936
                </a>
              </div>
            </div>
          </Card>
          <Card className="border-white/10 bg-white/5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
            <div className="p-6 flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#6ed0ff] mt-1" />
              <div>
                <p className="text-sm text-white/60">Email Us</p>
                <a className="text-base font-semibold hover:text-[#6ed0ff]" href="mailto:oceanarmour@gmail.com">
                  Ocean Armour
                </a>
              </div>
            </div>
          </Card>
          <Card className="border-white/10 bg-white/5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
            <div className="p-6 flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#6ed0ff] mt-1" />
              <div>
                <p className="text-sm text-white/60">Business Hours</p>
                <p className="text-base font-semibold">Mon-Fri: 9 AM - 5 PM</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="border-white/10 bg-white/5 text-white shadow-[0_22px_55px_rgba(0,0,0,0.35)]">
          <div className="p-8">
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-display font-semibold">Thank you!</h3>
                <p className="text-white/70 mt-2">
                  We received your request and will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white/70">
                      First Name*
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white/70">
                      Last Name*
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/70">
                      Email Address*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/70">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="boatType" className="text-white/70">
                      Boat Type
                    </Label>
                    <Input
                      id="boatType"
                      name="boatType"
                      value={formData.boatType}
                      onChange={handleChange}
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="waterlineLength" className="text-white/70">
                      Boat Waterline Length
                    </Label>
                    <Input
                      id="waterlineLength"
                      name="waterlineLength"
                      value={formData.waterlineLength}
                      onChange={handleChange}
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white/70">Service Area*</Label>
                    <Select
                      value={formData.serviceArea}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceArea: value }))}
                    >
                      <SelectTrigger className="bg-white/10 border-white/10 text-white">
                        <SelectValue placeholder="Select county" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="broward">Broward County</SelectItem>
                        <SelectItem value="palm-beach">Palm Beach County</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70">Preferred Method of Contact</Label>
                    <RadioGroup
                      value={formData.contactMethod}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, contactMethod: value }))}
                      className="grid grid-cols-3 gap-3"
                    >
                      {['phone', 'email', 'text'].map((method) => (
                        <div key={method} className="flex items-center space-x-2">
                          <RadioGroupItem value={method} id={`contact-${method}`} />
                          <Label htmlFor={`contact-${method}`} className="capitalize text-white/70">
                            {method}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details" className="text-white/70">
                    Questions or Details
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={5}
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/40 resize-none"
                  />
                </div>

                <input
                  tabIndex={-1}
                  autoComplete="off"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-xs text-white/60">*Required Fields</p>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="border border-[#00B4D8] text-white font-semibold rounded-full h-12 px-8 bg-transparent hover:bg-[#00B4D8]/10 transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </Button>
                </div>

                {error && <p className="text-sm text-[#ffb4b4] text-center">{error}</p>}

                <p className="text-xs text-white/50 text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
