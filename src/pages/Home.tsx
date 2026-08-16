import { Link } from 'react-router-dom'
import { FadeIn, GoldDivider, Rule, CheckIcon, Eyebrow, GoldBtn, OutlineBtn, IMG_HERO, IMG_MILKY, IMG_TIGER1, IMG_TIGER2, IMG_STARS } from '../components/shared'

const STATS = [
  { value: '11', label: 'Days' },
  { value: '8',  label: 'Max Participants' },
  { value: '3',  label: 'Expert Instructors' },
  { value: '2',  label: 'Tiger Reserves' },
  { value: 'Apr 6', label: 'New Moon' },
]

const WHY = [
  'Two genres in one trip: astrophotography and wildlife photography',
  'Bortle 2 certified dark skies inside a working tiger reserve — unique in the world',
  'April 6, 2027 is new moon — full Milky Way visible for 5+ hours every night',
  'Prime dry-season timing: waterholes concentrate tigers for extended encounters',
  'Dedicated astrophotography and wildlife photography instructors on every session',
]

export default function Home() {
  return (
    <>
      {/* ── Hero (always dark — cinematic photo section) ──────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ background: '#070D16' }}>
        <div className="absolute inset-x-0 bottom-0 top-[84px] bg-cover bg-center" style={{ backgroundImage: `url(${IMG_HERO})` }} />
        <div className="absolute inset-x-0 bottom-0 top-[84px]" style={{
          background: 'linear-gradient(to bottom, rgba(7,13,22,0.42) 0%, rgba(7,13,22,0.2) 30%, rgba(7,13,22,0.65) 72%, rgba(7,13,22,0.97) 100%)',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-[130px] pb-12 flex flex-col items-center gap-5">
          <p className="hero-in eyebrow" style={{ color: '#C9A24B' }}>
            An Astrophotography + Tiger Photography Expedition
          </p>
          <h1 className="hero-in hero-in-d1 font-serif font-black text-white leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
            Stars, Stripes<br />&amp; Wild India
          </h1>
          <p className="hero-in hero-in-d2 font-serif text-xl md:text-2xl italic font-normal" style={{ color: '#C9A24B' }}>
            Pench National Park &amp; Tadoba-Andhari Tiger Reserve
          </p>
          <p className="hero-in hero-in-d2 eyebrow text-white/50 mt-1">April 05 – 15, 2027</p>
          <p className="hero-in hero-in-d3 text-white/68 text-base md:text-lg max-w-xl leading-relaxed">
            Photograph pristine night skies in India's first Dark Sky Park, then track Bengal tigers through two of the country's most celebrated reserves. Designed for all levels of photographers.
          </p>

          {/* Pill callout */}
          <div className="hero-in hero-in-d4 mt-2 px-7 py-5 max-w-2xl w-full text-center rounded-sm"
            style={{ background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(10px)', border: '1px solid rgba(201,162,75,0.25)' }}>
            <p className="font-serif italic text-white/80 text-sm md:text-base leading-relaxed">
              "Milky Way nights. Tiger safaris at golden light.<br />One seamless photography journey."
            </p>
            <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(201,162,75,0.35),transparent)', margin: '12px 0' }} />
            <p className="eyebrow text-white/50 text-[10px]">
              Apr 5–9: Pench — Astrophotography &amp; Safaris &nbsp;·&nbsp; Apr 9–15: Tadoba — Tiger Photography
            </p>
          </div>

          <div className="hero-in hero-in-d5 flex flex-col sm:flex-row gap-4 mt-2">
            <Link to="/pricing"
              className="px-9 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all"
              style={{ background: '#A07828', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
              onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}>
              Reserve Your Spot
            </Link>
            <Link to="/itinerary"
              className="px-9 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm border transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A24B'; e.currentTarget.style.color = '#C9A24B' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}>
              View Itinerary
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 animate-bounce">
          <span className="eyebrow text-white/60 text-[9px]">Scroll</span>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
            <path d="M6 1v10M1 8l5 6 5-6" stroke="#C9A24B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(13,27,42,0.08)' }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-6">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 60} className="flex flex-col items-center text-center gap-1.5">
              <span className="font-serif font-bold" style={{ fontSize: 28, color: '#A07828' }}>{s.value}</span>
              <span className="eyebrow text-[10px]" style={{ color: '#637282' }}>{s.label}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── Overview ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <Eyebrow className="mb-4">Overview</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#0D1B2A' }}>
              Two Worlds.<br />One Unforgettable Journey.
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#3D4F60' }}>
              This 11-day photography tour combines dark-sky astrophotography and Bengal tiger wildlife photography in one seamless itinerary. It opens in the Bortle 2 skies of Pench National Park — designated India's first Dark Sky Park in January 2024. The second half moves to Tadoba-Andhari Tiger Reserve, one of central India's most celebrated tiger destinations.
            </p>
            <div className="p-5 mb-8 rounded-sm" style={{ background: '#F2EDE2', borderLeft: '3px solid #A07828' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>
                Built for photographers of all levels — luxury accommodation, expedition-style wildlife experience, and expert photography guidance throughout every session.
              </p>
            </div>

            <Eyebrow className="mb-5">Why This Tour Stands Out</Eyebrow>
            <ul className="flex flex-col gap-3.5 mb-10">
              {WHY.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <OutlineBtn to="/itinerary">See Full Itinerary</OutlineBtn>
              <GoldBtn to="/pricing">View Pricing</GoldBtn>
            </div>
          </FadeIn>

          <FadeIn delay={160} className="rounded-sm overflow-hidden" style={{ aspectRatio: '3/4', background: '#e8e0d4', boxShadow: 'var(--shadow-md)' }}>
            <img src={IMG_TIGER1} alt="Bengal tiger in golden light" className="w-full h-full object-cover" />
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── Destination preview ────────────────────────────────────────────── */}
      <section style={{ background: '#F2EDE2' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-14">
            <Eyebrow className="mb-3">Two Destinations</Eyebrow>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-serif text-4xl font-bold" style={{ color: '#0D1B2A' }}>Pench &amp; Tadoba</h2>
              <Link to="/destinations" className="text-sm font-medium transition-colors" style={{ color: '#A07828' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7A5C1E')}
                onMouseLeave={e => (e.currentTarget.style.color = '#A07828')}>
                Explore all destinations →
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              { title: 'Pench National Park', dates: 'April 5–9, 2027', tag: 'Astrophotography + Wildlife', desc: "India's first Dark Sky Park. Bortle 2 certified skies — the Milky Way rises over jungle silhouettes for 5+ hours every night around new moon.", img: IMG_MILKY },
              { title: 'Tadoba-Andhari Tiger Reserve', dates: 'April 9–15, 2027', tag: 'Tiger Photography Focus', desc: "Central India's most tiger-dense reserve. Dry-season waterholes concentrate tigers for extended encounters — the conditions that produce the finest portrait photography.", img: IMG_TIGER2 },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 100}
                className="group rounded-sm overflow-hidden"
                style={{ background: '#FFFFFF', boxShadow: 'var(--shadow)' }}>
                <div className="h-56 relative overflow-hidden" style={{ background: '#c8bfb0' }}>
                  <img src={card.img} alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.75) 25%, transparent 70%)' }} />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="eyebrow text-[10px] mb-1" style={{ color: '#C9A24B' }}>{card.tag}</p>
                    <h3 className="font-serif text-lg font-bold text-white">{card.title}</h3>
                    <p className="text-white/50 text-xs mt-0.5 tracking-wide">{card.dates}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A5568' }}>{card.desc}</p>
                  <Link to="/destinations" className="text-xs font-semibold tracking-wide uppercase transition-colors" style={{ color: '#A07828' }}>
                    Learn more →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── Comfort section ────────────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-14">
            <Eyebrow className="mb-3">Comfort &amp; Expectations</Eyebrow>
            <h2 className="font-serif text-4xl font-bold" style={{ color: '#0D1B2A' }}>Is This Trip Right for Me?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Built for comfort, not endurance.',
                body: 'All safaris are conducted in open 4×4 jeeps — no hiking required. Night astrophotography spots are a short flat walk from the vehicle. If you can sit for 3-hour drives and walk short distances on level ground, you\'re well prepared.',
              },
              {
                title: 'What to expect.',
                body: 'Early mornings and late nights — safaris depart at 5 AM for golden light; clear nights run until 2–3 AM at Pench. The schedule is demanding in a rewarding way, built entirely around the best photography windows.',
                tag: 'Low elevation throughout — no altitude concerns.',
              },
            ].map(col => (
              <FadeIn key={col.title} className="p-8 rounded-sm"
                style={{ background: '#F2EDE2', border: '1px solid rgba(13,27,42,0.06)' }}>
                <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: '#0D1B2A' }}>{col.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{col.body}</p>
                {col.tag && (
                  <div className="mt-5 px-4 py-2.5 rounded-sm text-xs font-semibold inline-block"
                    style={{ background: '#A07828', color: '#fff' }}>
                    {col.tag}
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ── Dark sky teaser (keeps dark — photo moment) ───────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_STARS})` }} />
        <div className="absolute inset-0" style={{ background: 'rgba(5,10,18,0.82)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <Eyebrow dark className="mb-5">Bortle 2 · New Moon April 6, 2027</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Five Hours of<br />Uninterrupted Dark Sky
            </h2>
            <p className="text-white/62 text-lg leading-relaxed mb-10">
              The Milky Way is visible over Pench from 10:30 PM to 4 AM — rising over jungle silhouettes in one of Asia's darkest environments. April conditions are as clear as they come: pre-monsoon, no humidity, no cloud cover.
            </p>
            <GoldBtn to="/destinations">Astrophotography Details</GoldBtn>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
              Maximum 8 participants. April 2027.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#637282' }}>
              Places are strictly limited to ensure an intimate, high-quality experience for every photographer on the expedition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/faq">Read FAQ</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
