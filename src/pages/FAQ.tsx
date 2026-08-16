import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_TIGER2 } from '../components/shared'

const FAQS: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: 'Photography & Skill Level',
    items: [
      { q: 'What photography skill level is required?', a: 'No prior astrophotography or wildlife photography experience is needed. The tour is structured to guide complete beginners through every technique while offering enough depth and independent shooting time for experienced photographers. You must be comfortable operating a DSLR or mirrorless camera in manual mode.' },
      { q: 'Do I need a full-frame camera?', a: 'Full-frame is preferred for astrophotography due to better high-ISO performance, but a crop-sensor mirrorless or DSLR will produce excellent results, especially for wildlife. What matters more is a wide-angle lens for stars and a telephoto of at least 200mm for wildlife.' },
      { q: 'Is a star tracker required for astrophotography?', a: 'No — you will photograph the night sky with and without a tracker. Tracker-based exposures are covered in sessions. If you do not own one, the guides use trackers you can practice alongside. They are available for rent in India before departure.' },
      { q: 'What focal lengths should I bring?', a: 'Wildlife: 100–400mm minimum; 500mm or longer is excellent. Astrophotography: 14–24mm f/2.8 is ideal; 28mm or 35mm also works. A standard 24–70mm is useful for environmental portraits and lodge life.' },
    ]
  },
  {
    category: 'Logistics & Travel',
    items: [
      { q: 'Which airport should I fly into?', a: 'Nagpur (NAG) is the gateway airport for both reserves. Fly to Nagpur on April 5 and depart from Nagpur on April 15. The tour includes a welcome transfer from Nagpur airport to Pench and a farewell transfer to Nagpur from Tadoba on departure day.' },
      { q: 'Do I need a visa for India?', a: 'Most nationalities can apply for an Indian e-Visa online before departure — usually approved within 72 hours. Apply at least 2 weeks before travel. Participants are responsible for securing their own visa. Your passport must be valid for at least 6 months from the date of arrival.' },
      { q: 'What is the best way to get travel insurance?', a: 'Comprehensive travel and health insurance is required. Look for a policy that covers trip cancellation, emergency medical evacuation, and camera/equipment theft or damage. We recommend purchasing this immediately after reserving your spot.' },
      { q: "What is the weather like in April?", a: "April is central India's peak dry season — hot daytime temperatures (35–42°C / 95–108°F), cool pre-dawn mornings (20–24°C), and virtually zero chance of rain. Humidity is very low, giving exceptional clarity for astrophotography. Bring sun protection and light breathable clothing." },
    ]
  },
  {
    category: 'Safari & Wildlife',
    items: [
      { q: 'Is tiger sighting guaranteed?', a: 'Tiger sightings cannot be guaranteed in any national park. However, April is the single best month of the year for tiger encounters in both Pench and Tadoba — dry-season waterholes concentrate animals, and both reserves have been operating dedicated photography programs for years. Multiple sightings per guest are the norm, not the exception.' },
      { q: 'How many safaris are there in total?', a: 'Pench: one afternoon safari per day (Days 2–4), plus the Day 5 afternoon arrival safari. Tadoba: two safaris per day for five days (Days 6–10) — morning at 5 AM and afternoon at 2:30 PM. Total: approximately 12–13 safari sessions over 10 shooting days.' },
      { q: "Are drones allowed in the reserves?", a: "Drones are strictly prohibited inside all national park zones. Drone use is permitted only at the external Bortle 2 astrophotography site near Pench's Sillari gate. Please ensure your drone has the appropriate Indian civil aviation registration if you plan to bring one." },
      { q: 'What wildlife besides tigers will I see?', a: 'Both reserves support rich biodiversity. Common sightings include spotted deer (chital), sambar, langur monkeys, wild boar, peacock, raptors and kingfishers. Sloth bear, leopard, gaur (Indian bison), and wild dog (dhole) are also present — occasionally more reliably photographed than tigers.' },
    ]
  },
  {
    category: 'Booking & Cancellation',
    items: [
      { q: 'How do I reserve my place?', a: 'Complete the enquiry form on the booking page. You will receive a reservation confirmation and deposit invoice within 48 hours. Your place is held from receipt of deposit. The tour has a maximum of 8 participants and typically fills well in advance of the departure date.' },
      { q: 'What is the cancellation and refund policy?', a: 'Cancellations made more than 120 days before departure receive a full deposit refund minus a processing fee. Cancellations between 90–120 days lose 50% of the full tour price. Cancellations within 90 days of departure are non-refundable. We strongly recommend travel insurance that covers trip cancellation.' },
      { q: 'Can I join as a solo traveller?', a: 'Yes — the tour is designed for individuals and small groups alike. Solo travellers are paired with same-gender roommates by default. A single-occupancy room upgrade is available for an additional fee, subject to availability at the lodges.' },
      { q: 'Is the tour suitable for non-photographers travelling with photographers?', a: 'The itinerary is built exclusively around photography and the entire schedule reflects photography priorities. Non-photographers are welcome to travel with the group, but they should be comfortable with the same early starts, late nights, and multiple-hour safaris as everyone else.' },
    ]
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <>
      <PageHero eyebrow="Frequently Asked Questions" title="FAQ"
        subtitle="Everything you need to know before booking your spot on the expedition."
        bg={IMG_TIGER2} />

      <GoldDivider />

      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-14">
          {FAQS.map((section) => (
            <FadeIn key={section.category}>
              <Eyebrow className="mb-5">{section.category}</Eyebrow>
              <div className="rounded-sm overflow-hidden" style={{ border: '1px solid rgba(13,27,42,0.1)', boxShadow: 'var(--shadow)' }}>
                {section.items.map((item, idx) => {
                  const id = `${section.category}-${idx}`
                  const isOpen = open === id
                  return (
                    <div key={id}
                      style={{ borderBottom: idx < section.items.length - 1 ? '1px solid rgba(13,27,42,0.07)' : 'none', background: '#FFFFFF' }}>
                      <button
                        className="w-full flex items-start justify-between px-7 py-5 text-left transition-colors"
                        style={{ background: isOpen ? '#FAFAF7' : '#FFFFFF' }}
                        onClick={() => setOpen(o => o === id ? null : id)}>
                        <span className="font-semibold text-sm leading-snug pr-6" style={{ color: '#0D1B2A' }}>{item.q}</span>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="mt-0.5 flex-shrink-0"
                          style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                          <path d="M5 7.5l5 5 5-5" stroke="#A07828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                        <p className="px-7 pb-6 text-sm leading-[1.85]" style={{ color: '#4A5568' }}>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Rule />

      <section style={{ background: '#F2EDE2', borderTop: '1px solid rgba(13,27,42,0.07)' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Still have questions?</p>
            <p className="text-sm mb-8" style={{ color: '#637282' }}>Contact us directly and we will respond within 48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Send an Enquiry</GoldBtn>
              <OutlineBtn to="/pricing">View Pricing</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
