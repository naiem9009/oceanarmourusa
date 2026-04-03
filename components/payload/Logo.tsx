import React from 'react'

export function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img
        src="/images/ocean-armour-logo.webp"
        alt="Ocean Armour"
        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
      />
      <span style={{ color: 'gray', fontWeight: 700, fontSize: '18px', letterSpacing: '0.02em' }}>
        Ocean Armour
      </span>
    </div>
  )
}

export default Logo
