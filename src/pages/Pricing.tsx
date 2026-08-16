import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, CheckIcon, XIcon, Eyebrow, OutlineBtn, PageHero, IMG_TIGER1, CreditCardIcon, UsersIcon, GradCapIcon, CompassIcon, TentIcon, UtensilsIcon } from '../components/shared'
import PaymentModal from '../components/PaymentModal'

const INCLUDED = [
  'Nagpur airport pickup and final drop-off',
  'All private vehicle transportation throughout',
  'All safari jeep fees and national park permit fees',
  'Shared jungle lodge accommodation with private en-suite',
  'Breakfasts daily and most dinners',
  'Four dedicated dark-sky astrophotography sessions (Pench)',
  'Instruction from astrophotography and wildlife photography guides',
  'Pre-tour online planning and gear-review call',
  'Optional daily post-processing review sessions',
]
const NOT_INCLUDED = [
  'International and domestic flights to/from Nagpur',
  'Private single-occupancy room upgrade (additional fee)',
  'Lunches and selected dinners not noted as included',
  'Health and travel insurance (required)',
  'Visa fees and passport costs',
  'Tips for guides, drivers, and lodge staff',
  'Personal expenses, gear rental, and alcohol',
]
const GROUP = [
  { icon: <UsersIcon className="w-5 h-5 text-[#A07828]" />, value: 'Max 8', label: 'Participants' },
  { icon: <GradCapIcon className="w-5 h-5 text-[#A07828]" />, value: '2 + 1', label: 'Wildlife + Astro Guides' },
  { icon: <CompassIcon className="w-5 h-5 text-[#A07828]" />, value: 'Included', label: 'Local Naturalists' },
  { icon: <TentIcon className="w-5 h-5 text-[#A07828]" />, value: 'Luxury', label: 'Jungle Lodge Standard' },
  { icon: <UtensilsIcon className="w-5 h-5 text-[#A07828]" />, value: 'Full Board', label: 'Most Meals Included' },
]

export default function Pricing() {
  const [members, setMembers] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [payAmount, setPayAmount] = useState(1500)
  const [payTitle, setPayTitle] = useState('Expedition Deposit')

  const totalPrice = members * 4950
  const totalDeposit = members * 1500

  const openCheckout = (amount: number, title: string) => {
    setPayAmount(amount)
    setPayTitle(title)
    setShowModal(true)
  }

  return (
    <>
      <PageHero eyebrow="Investment & Inclusions" title={<>Pricing &amp;<br />What's Included</>}
        subtitle="A transparent breakdown of everything covered — and what you arrange independently."
        bg={IMG_TIGER1} />

      <GoldDivider />

      {/* Main card */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="rounded-sm overflow-hidden" style={{ background: '#FFFFFF', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(13,27,42,0.08)' }}>

            {/* Price header */}
            <div className="px-10 py-12 text-center" style={{ background: '#0D1B2A', borderBottom: '3px solid #A07828' }}>
              <p className="eyebrow text-[10px] mb-2" style={{ color: '#C9A24B' }}>Tour Price · Double Occupancy · Dynamic Member Rate</p>

              {/* Dynamic Member Counter Selector */}
              <div className="my-5 inline-flex items-center gap-4 bg-white/10 px-5 py-2.5 rounded-full border border-white/15">
                <span className="text-xs text-white/80 font-medium">Select Members / Guests:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMembers(m => Math.max(1, m - 1))}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-[#A07828] text-white flex items-center justify-center text-sm font-bold transition-all"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-[#C9A24B] min-w-[65px] text-center">
                    {members} {members === 1 ? 'Guest' : 'Guests'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMembers(m => Math.min(8, m + 1))}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-[#A07828] text-white flex items-center justify-center text-sm font-bold transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-baseline justify-center gap-1.5 font-serif text-[#C9A24B] tabular-nums my-3">
                <span className="text-3xl sm:text-4xl font-bold">$</span>
                <span className="text-5xl sm:text-6xl font-black tracking-tight">{totalPrice.toLocaleString()}</span>
                <span className="text-lg sm:text-xl font-semibold tracking-wider text-white/70 ml-1">USD</span>
              </div>
              <p className="text-white/60 text-xs mt-3 max-w-sm mx-auto leading-relaxed">
                ($4,950 USD per person × {members} {members === 1 ? 'guest' : 'guests'})
              </p>
              <p className="text-white/45 text-xs mt-1">
                Deposit required now: <strong className="text-[#C9A24B]">${totalDeposit.toLocaleString()} USD</strong> ($1,500 × {members})
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openCheckout(totalDeposit, `Expedition Deposit (${members} ${members === 1 ? 'Guest' : 'Guests'})`)}
                  className="inline-flex items-center justify-center px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all gap-2"
                  style={{ background: '#A07828', color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}>
                  <CreditCardIcon className="w-4 h-4" /> Pay Deposit (${totalDeposit.toLocaleString()})
                </button>
                <button
                  onClick={() => openCheckout(totalPrice, `Full Expedition Payment (${members} ${members === 1 ? 'Guest' : 'Guests'})`)}
                  className="inline-flex items-center justify-center px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm border transition-colors gap-2"
                  style={{ borderColor: 'rgba(201,162,75,0.4)', color: '#C9A24B' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A24B' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,162,75,0.4)' }}>
                  Pay Full (${totalPrice.toLocaleString()})
                </button>
              </div>
            </div>

            {/* Included / Not included */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-9 py-10" style={{ borderRight: '1px solid rgba(13,27,42,0.08)' }}>
                <p className="eyebrow text-[10px] mb-6" style={{ color: '#A07828' }}>Included in Tour Price</p>
                <ul className="flex flex-col gap-3.5">
                  {INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-9 py-10">
                <p className="eyebrow text-[10px] mb-6" style={{ color: '#637282' }}>Not Included</p>
                <ul className="flex flex-col gap-3.5">
                  {NOT_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XIcon dark />
                      <span className="text-sm leading-relaxed" style={{ color: '#637282' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* Group stats */}
      <section style={{ background: '#F2EDE2', borderTop: '1px solid rgba(13,27,42,0.07)', borderBottom: '1px solid rgba(13,27,42,0.07)' }} className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {GROUP.map((s, i) => (
            <FadeIn key={s.label} delay={i * 60} className="flex flex-col items-center text-center gap-2">
              <span className="text-2xl">{s.icon}</span>
              <p className="font-semibold text-sm" style={{ color: '#0D1B2A' }}>{s.value}</p>
              <p className="eyebrow text-[10px]" style={{ color: '#637282' }}>{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <Rule />

      {/* Logistics */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Logistics</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-10" style={{ color: '#0D1B2A' }}>Accommodation &amp; Transport</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Luxury Jungle Lodges', label: 'Accommodation',
                body: 'Double-occupancy rooms with private en-suite bathrooms at hand-selected lodges near each reserve gate. Single occupancy available on request for a supplemental fee, subject to availability.'
              },
              {
                title: 'Private Vehicle Throughout', label: 'Transportation',
                body: 'All transport via private safari jeeps and a shared transfer vehicle. Window seat rotation on all safari drives ensures equal access to prime shooting positions for every guest.'
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} className="p-8 rounded-sm"
                style={{ background: '#F2EDE2', border: '1px solid rgba(13,27,42,0.07)' }}>
                <p className="eyebrow text-[10px] mb-3" style={{ color: '#A07828' }}>{item.label}</p>
                <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#0D1B2A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{item.body}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={150} className="mt-6 p-7 rounded-sm"
            style={{ background: '#FBF3E0', border: '1px solid rgba(160,120,40,0.18)' }}>
            <p className="eyebrow text-[10px] mb-4" style={{ color: '#A07828' }}>Safari &amp; Park Rules</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                <strong style={{ color: '#0D1B2A' }}>Gate rotation:</strong> Daily assignments based on forest department permits — standard practice that often benefits photographers by accessing different territories.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                <strong style={{ color: '#0D1B2A' }}>Drone policy:</strong> Not permitted inside either reserve. Drones permitted only at the external Bortle 2 dark-sky site near Pench's Sillari gate.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      <section style={{ background: '#FAFAF7' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Ready to secure your place?</p>
            <p className="text-sm mb-8" style={{ color: '#637282' }}>Maximum 8 participants. Deposit required to reserve.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openCheckout(1500, 'Expedition Reserve Deposit')}
                className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all"
                style={{ background: '#A07828', color: '#fff' }}>
                <span className="flex items-center gap-2"><CreditCardIcon className="w-4 h-4" /> Pay Deposit ($1,500)</span>
              </button>
              <OutlineBtn to="/faq">Read FAQ</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Payment Gateway Modal */}
      <PaymentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        itemTitle={payTitle}
        amountUSD={payAmount}
      />
    </>
  )
}
