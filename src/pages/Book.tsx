import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, Eyebrow, OutlineBtn, PageHero, IMG_TIGER1, CreditCardIcon } from '../components/shared'
import PaymentModal from '../components/PaymentModal'

const STEPS = [
  { n: '01', title: 'Submit Your Enquiry', body: 'Complete the form below. We will review your dates and availability and respond within 48 hours with a reservation confirmation.' },
  { n: '02', title: 'Pay Deposit', body: 'A deposit of $1,500 USD secures your place. We accept bank transfer, UPI, and major credit cards via our secure gateway.' },
  { n: '03', title: 'Pre-Trip Planning Call', body: 'Within 4 weeks of booking, join a 45-minute online planning and gear-review call with the guides to prepare for both photography disciplines.' },
  { n: '04', title: 'Arrival in Nagpur', body: 'Fly into Nagpur (NAG) on April 5. Our driver meets you at arrivals and transfers you directly to your Pench lodge — the expedition begins.' },
]

export default function Book() {
  const [form, setForm] = useState({ name: '', email: '', country: '', experience: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [showPayModal, setShowPayModal] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPayModal(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', border: '1px solid rgba(13,27,42,0.18)',
    borderRadius: 2, fontSize: 14, color: '#0D1B2A', background: '#FFFFFF',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <>
      <PageHero eyebrow="Reserve Your Place" title="Book the Expedition"
        subtitle="Maximum 8 places. April 5–15, 2027. Contact us to begin the reservation process."
        bg={IMG_TIGER1} />

      <GoldDivider />

      {/* How it works */}
      <section style={{ background: '#FAFAF7' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Booking Process</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-12" style={{ color: '#0D1B2A' }}>How to Reserve Your Spot</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <FadeIn key={step.n} delay={i * 80} className="p-7 rounded-sm"
                style={{ background: '#FFFFFF', border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
                <p className="font-serif font-black mb-4" style={{ fontSize: 36, color: 'rgba(160,120,40,0.18)', lineHeight: 1 }}>{step.n}</p>
                <h3 className="font-serif text-base font-semibold mb-3" style={{ color: '#0D1B2A' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{step.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* Form */}
      <section style={{ background: '#FFFFFF' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Sidebar */}
          <FadeIn className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <Eyebrow className="mb-3">What to Expect</Eyebrow>
              <h2 className="font-serif text-3xl font-bold mb-5" style={{ color: '#0D1B2A' }}>Enquiry Form</h2>
              <p className="text-sm leading-relaxed" style={{ color: '#637282' }}>
                Fill in your details below and we will be in touch within 48 hours to confirm availability and next steps.
              </p>
            </div>
            <div className="p-6 rounded-sm" style={{ background: '#FBF3E0', border: '1px solid rgba(160,120,40,0.18)' }}>
              <p className="eyebrow text-[10px] mb-4" style={{ color: '#A07828' }}>Quick Facts</p>
              {[
                ['Tour dates', 'April 5–15, 2027'],
                ['Departure city', 'Nagpur (NAG)'],
                ['Group size', 'Max 8 guests'],
                ['Occupancy', 'Double / single upgrade available'],
                ['Deposit', '$1,500 USD'],
                ['Balance due', '120 days before departure'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-start py-2.5" style={{ borderBottom: '1px solid rgba(13,27,42,0.07)' }}>
                  <span className="text-xs" style={{ color: '#637282' }}>{label}</span>
                  <span className="text-xs font-semibold text-right ml-4" style={{ color: '#0D1B2A' }}>{value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowPayModal(true)}
              className="w-full py-3 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all flex items-center justify-center gap-2 border border-[#A07828] text-[#A07828] hover:bg-[#A07828] hover:text-white"
            >
              <CreditCardIcon className="w-4 h-4" /> Pay Deposit Directly ($1,500)
            </button>
            <OutlineBtn to="/pricing">Review Full Pricing</OutlineBtn>
          </FadeIn>

          {/* Form card */}
          <FadeIn delay={100} className="lg:col-span-3 rounded-sm overflow-hidden"
            style={{ background: '#FAFAF7', border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow-md)' }}>
            {submitted ? (
              <div className="p-12 text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: '#E8F5EE' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#1A5030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: '#0D1B2A' }}>Enquiry & Payment Received</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#637282' }}>
                  Thank you, {form.name}. Your deposit payment has been confirmed and we sent a copy of your receipt to {form.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="p-8 md:p-10 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A07828')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handle}
                      placeholder="you@email.com"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A07828')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Country of Residence</label>
                    <input name="country" value={form.country} onChange={handle}
                      placeholder="Country"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A07828')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Photography Experience</label>
                    <select name="experience" value={form.experience} onChange={handle}
                      style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select level</option>
                      <option>Beginner — learning manual mode</option>
                      <option>Intermediate — comfortable in manual</option>
                      <option>Advanced — experienced in low-light / wildlife</option>
                      <option>Professional</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Message / Questions</label>
                  <textarea name="message" rows={5} value={form.message} onChange={handle}
                    placeholder="Tell us about your interest in the tour, any special requirements, or questions you have..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = '#A07828')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                </div>

                <div className="p-4 rounded-sm text-xs leading-relaxed" style={{ background: '#F2EDE2', color: '#637282' }}>
                  By submitting this form you agree to proceed to secure demo deposit authorization ($1,500 USD).
                </div>

                <button type="submit"
                  className="w-full py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all flex items-center justify-center gap-2"
                  style={{ background: '#A07828', color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}>
                  <CreditCardIcon className="w-4 h-4" /> Proceed to Payment ($1,500 Deposit)
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      <section style={{ background: '#FAFAF7' }} className="py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm" style={{ color: '#637282' }}>
              Questions about the tour? Read the <a href="/faq" className="font-semibold" style={{ color: '#A07828' }}>FAQ</a> or{' '}
              <a href="/pricing" className="font-semibold" style={{ color: '#A07828' }}>review pricing</a> before submitting.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Payment Gateway Modal */}
      <PaymentModal
        isOpen={showPayModal}
        onClose={() => setShowPayModal(false)}
        itemTitle="Expedition Reserve Deposit"
        amountUSD={1500}
        onSuccess={() => setSubmitted(true)}
      />
    </>
  )
}
