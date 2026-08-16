import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_MILKY } from '../components/shared'

const DAYS = [
  { id:'d1', label:'Day 1 — April 5', title:'Arrival in Nagpur → Transfer to Pench', phase:'Pench',
    content:"Arrive in Nagpur (NAG) and transfer directly to your jungle lodge near the Sillari gate of Pench National Park (approx. 2.5 hrs). After settling in, attend a welcome briefing and gear review with the expedition team. The evening begins with your first group dinner followed by your first astrophotography session — an introduction to the extraordinary Bortle 2 skies that await you throughout the week." },
  { id:'d2', label:'Days 2–4 — April 6–8', title:'Pench: Safari Days + Night Sky Sessions', phase:'Pench',
    content:"Relaxed mornings give way to afternoon wildlife safaris into the Pench core reserve. Evenings shift to the observatory near the Sillari gate for full astrophotography sessions under peak new-moon skies, returning at 2–3 AM. Optional midday post-processing sessions in Lightroom and Photoshop are available with guide support. April 6 is new moon — the single darkest night of the year in this region." },
  { id:'d3', label:'Day 5 — April 9', title:'Farewell Pench → Transfer to Tadoba', phase:'Transfer',
    content:"After a farewell breakfast, depart on the 3-hour private drive south to Tadoba-Andhari Tiger Reserve. Check in at your lodge near the reserve gate. The afternoon includes your first tiger safari into Tadoba — a chance to orient yourself to a completely different, denser forest ecosystem favored by tigers year-round." },
  { id:'d4', label:'Days 6–10 — April 10–14', title:'Tadoba: Twice-Daily Tiger Safaris', phase:'Tadoba',
    content:"The heart of the tiger photography experience. Two safaris daily: early morning at 5 AM (prime golden light, coolest temperatures, highest tiger activity) and afternoon at 2:30 PM (golden-hour dust backlight). A scenic breakfast inside the reserve on select mornings. Optional daily photo-review and post-processing sessions allow you to develop your work in real time with instructor feedback." },
  { id:'d5', label:'Day 11 — April 15', title:'Farewell Breakfast → Nagpur Airport', phase:'Departure',
    content:"Farewell breakfast at the lodge, then transfer to Nagpur airport. Flights departing after 2 PM are recommended. End of tour — with a portfolio of Milky Way landscapes and Bengal tiger images unlike anything you've created before." },
]

const GLANCE = [
  { date:'Apr 5',     location:'Pench',    morning:'—', afternoon:'Arrival + Briefing', evening:'Astro Session' },
  { date:'Apr 6',     location:'Pench',    morning:'Free / Post-processing', afternoon:'Wildlife Safari', evening:'Astro Session (New Moon)' },
  { date:'Apr 7',     location:'Pench',    morning:'Free / Post-processing', afternoon:'Wildlife Safari', evening:'Astro Session' },
  { date:'Apr 8',     location:'Pench',    morning:'Free / Post-processing', afternoon:'Wildlife Safari', evening:'Astro Session' },
  { date:'Apr 9',     location:'Transfer', morning:'Farewell Breakfast', afternoon:'Drive + First Safari', evening:'Lodge check-in' },
  { date:'Apr 10–14', location:'Tadoba',   morning:'5 AM Safari', afternoon:'2:30 PM Safari', evening:'Photo review / Dinner' },
  { date:'Apr 15',    location:'Departure',morning:'Farewell Breakfast', afternoon:'Airport Transfer', evening:'—' },
]

const PHASE_PILL: Record<string,{bg:string;text:string}> = {
  Pench:     { bg:'#EAF0F8', text:'#1A4080' },
  Transfer:  { bg:'#FBF3E0', text:'#7A5000' },
  Tadoba:    { bg:'#E8F5EE', text:'#1A5030' },
  Departure: { bg:'#F0F0F0', text:'#444' },
}

export default function Itinerary() {
  const [open, setOpen] = useState<string|null>(null)

  return (
    <>
      <PageHero eyebrow="April 5–15, 2027" title="Day-by-Day Itinerary"
        subtitle="Flexible to optimise photography and wildlife viewing conditions. April is the driest month in central India."
        bg={IMG_MILKY} />

      <GoldDivider />

      {/* At a Glance */}
      <section style={{ background: '#FAFAF7' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Schedule Overview</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-10" style={{ color:'#0D1B2A' }}>At a Glance</h2>
          </FadeIn>
          <FadeIn delay={80} className="overflow-x-auto rounded-sm"
            style={{ boxShadow:'var(--shadow)', border:'1px solid rgba(13,27,42,0.08)', background:'#fff' }}>
            <table className="w-full text-sm" style={{ minWidth:580 }}>
              <thead>
                <tr style={{ background:'#F2EDE2', borderBottom:'1px solid rgba(13,27,42,0.08)' }}>
                  {['Date','Location','Morning','Afternoon','Evening'].map(h => (
                    <th key={h} className="text-left px-5 py-3.5 eyebrow text-[10px]" style={{ color:'#A07828' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {GLANCE.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < GLANCE.length-1 ? '1px solid rgba(13,27,42,0.06)' : 'none' }}>
                    <td className="px-5 py-3.5 font-semibold text-xs whitespace-nowrap" style={{ color:'#A07828' }}>{row.date}</td>
                    <td className="px-5 py-3.5">
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-semibold"
                        style={{ background: PHASE_PILL[row.location]?.bg, color: PHASE_PILL[row.location]?.text }}>
                        {row.location}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-xs" style={{ color:'#637282' }}>{row.morning}</td>
                    <td className="px-5 py-3.5 text-xs font-medium" style={{ color:'#3D4F60' }}>{row.afternoon}</td>
                    <td className="px-5 py-3.5 text-xs" style={{ color:'#3D4F60' }}>{row.evening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* Accordion */}
      <section style={{ background: '#FFFFFF' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Full Detail</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-10" style={{ color:'#0D1B2A' }}>Detailed Itinerary</h2>
          </FadeIn>
          <FadeIn delay={80} className="rounded-sm overflow-hidden"
            style={{ border:'1px solid rgba(13,27,42,0.1)', boxShadow:'var(--shadow)' }}>
            {DAYS.map((day, idx) => (
              <div key={day.id} style={{ borderBottom: idx<DAYS.length-1 ? '1px solid rgba(13,27,42,0.08)' : 'none' }}>
                <button
                  className="w-full flex items-start justify-between px-7 py-6 text-left transition-colors hover:bg-amber-50/30"
                  onClick={() => setOpen(o => o===day.id ? null : day.id)}>
                  <div className="flex items-start gap-4 min-w-0">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ background: PHASE_PILL[day.phase]?.bg, color: PHASE_PILL[day.phase]?.text }}>
                      {idx+1}
                    </span>
                    <div>
                      <p className="eyebrow text-[10px] mb-1" style={{ color:'#A07828' }}>{day.label}</p>
                      <p className="font-serif text-lg font-semibold leading-snug" style={{ color:'#0D1B2A' }}>{day.title}</p>
                    </div>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="mt-2 flex-shrink-0 ml-4"
                    style={{ transform: open===day.id ? 'rotate(180deg)' : 'none', transition:'transform 0.3s ease' }}>
                    <path d="M5 7.5l5 5 5-5" stroke="#A07828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div style={{ maxHeight: open===day.id ? '500px' : '0', overflow:'hidden', transition:'max-height 0.4s ease' }}>
                  <p className="px-7 pb-7 text-sm leading-[1.9]" style={{ color:'#4A5568' }}>{day.content}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      <section style={{ background:'#F2EDE2' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-6" style={{ color:'#0D1B2A' }}>Ready to join the expedition?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/pricing">View Pricing</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
