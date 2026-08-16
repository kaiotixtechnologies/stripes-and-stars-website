import { FadeIn, GoldDivider, Rule, CheckIcon, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_MILKY, IMG_TIGER2, IMG_TIGER3, IMG_STARS } from '../components/shared'

const PENCH_THEMES  = ['Milky Way landscapes & star-field compositions','Night-sky storytelling with silhouettes','Blue-hour to night workflow & star-tracker photography','Daylight wildlife & habitat photography']
const TADOBA_THEMES = ['Tiger portraits & environmental wildlife scenes','Behavior, movement, dust & backlight','Birds, deer, langurs & storytelling subjects','Fast wildlife settings & long-lens technique']
const PHOTOGRAPH = ['Star-filled Pench landscapes with jungle silhouettes in the foreground','Bengal tigers — waterhole encounters to deep forest stalks','Broader wildlife: spotted deer, langurs, gaur, sloth bears, raptors','Milky Way galactic core rising over open plains','Golden-hour and dust-backlit safari scenes at Tadoba','The contrast between still nightscapes and dynamic wildlife action']
const LEARN = ['Planning and exposing wide-field nightscapes from scratch','Low-light focus techniques for stars and fast-moving wildlife','Image stacking and noise control in Lightroom / Photoshop','Fast-response wildlife camera settings for moving subjects','Long-lens field craft from an open 4×4 safari vehicle','Working with golden-hour light, dust, and harsh midday conditions','Building a cohesive travel story across two photography genres']

const Tag = ({ children }: { children: string }) => (
  <span className="text-xs px-3 py-1.5 rounded-full font-medium"
    style={{ background:'rgba(160,120,40,0.1)', color:'#7A5C1E', border:'1px solid rgba(160,120,40,0.2)' }}>
    {children}
  </span>
)

export default function Destinations() {
  return (
    <>
      <PageHero eyebrow="Two Iconic Locations" title={<>Pench &amp;<br />Tadoba-Andhari</>}
        subtitle="Two ecosystems, two photographic worlds — one seamless 11-day itinerary."
        bg={IMG_MILKY} />

      <GoldDivider />

      {/* Pench */}
      <section style={{ background:'#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <Eyebrow className="mb-3">April 5–9, 2027</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-4 leading-tight" style={{ color:'#0D1B2A' }}>Pench National Park</h2>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-semibold mb-6"
              style={{ background:'#E8F0FA', color:'#1A4080', border:'1px solid rgba(26,64,128,0.15)' }}>
              India's First Dark Sky Park · Bortle 2 · Designated Jan 2024
            </div>
            <p className="text-base leading-relaxed mb-4" style={{ color:'#3D4F60' }}>
              Pench occupies a unique position in world photography travel: it is simultaneously a Bortle 2 certified dark-sky park and a working tiger reserve, with jungle silhouettes, lakes, and hilltops providing extraordinary foreground for the Milky Way above.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color:'#637282' }}>
              The skies rank among the darkest in Asia. At new moon in April, the galactic core is visible from 10:30 PM to 4 AM — over five hours of prime shooting window every clear night.
            </p>
            <Eyebrow className="mb-4">Photography Themes</Eyebrow>
            <div className="flex flex-wrap gap-2">{PENCH_THEMES.map(t => <Tag key={t}>{t}</Tag>)}</div>
          </FadeIn>

          <FadeIn delay={150} className="rounded-sm overflow-hidden"
            style={{ aspectRatio:'3/4', background:'#c8bfb0', boxShadow:'var(--shadow-md)' }}>
            <img src={IMG_MILKY} alt="Milky Way over Pench" className="w-full h-full object-cover" />
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* Astro deep dive — kept dark, it's a photo moment */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage:`url(${IMG_STARS})` }} />
        <div className="absolute inset-0" style={{ background:'rgba(5,10,18,0.86)' }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow dark className="mb-4">Astrophotography Deep Dive</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Bortle 2 Skies,<br />New Moon April 6
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-3xl">
              April 6, 2027 is new moon — guaranteeing maximum darkness through all four astrophotography nights. The Milky Way is visible from ~10:30 PM to 4 AM with the galactic core fully exposed: <strong className="text-white">5+ hours of prime shooting time per night</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {[
                { time:'~10:30 PM', title:'Early Evening', desc:'Milky Way at 5° — wide panoramas with jungle silhouettes and lake foreground.' },
                { time:'~Midnight',  title:'Mid-Night',    desc:'Core at 30–40° — textbook wide-angle arch compositions.' },
                { time:'~3–4 AM',   title:'Pre-Dawn',     desc:'Core rises to 70° — tall verticals showing full ground-to-zenith depth.' },
              ].map(item => (
                <div key={item.title} className="p-5 rounded-sm"
                  style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(201,162,75,0.2)' }}>
                  <p className="eyebrow text-[10px] mb-1" style={{ color:'#C9A24B' }}>{item.time}</p>
                  <p className="text-white font-semibold text-sm mb-2">{item.title}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-3xl">
              Sessions at the Sillari gate observatory (Bortle 2, lake + hills foreground) and an optional Bortle 3 session at the lodge. Pre-monsoon April means crystal-clear skies and no humidity.
            </p>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* Tadoba */}
      <section style={{ background:'#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn delay={150} className="order-2 lg:order-1 rounded-sm overflow-hidden"
            style={{ aspectRatio:'3/4', background:'#c8bfb0', boxShadow:'var(--shadow-md)' }}>
            <img src={IMG_TIGER3} alt="Tiger at Tadoba" className="w-full h-full object-cover" />
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <Eyebrow className="mb-3">April 9–15, 2027</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-4 leading-tight" style={{ color:'#0D1B2A' }}>Tadoba-Andhari Tiger Reserve</h2>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-semibold mb-6"
              style={{ background:'#E8F5EE', color:'#1A5030', border:'1px solid rgba(26,80,48,0.15)' }}>
              Central India's Oldest Park · Highest Tiger Density
            </div>
            <p className="text-base leading-relaxed mb-4" style={{ color:'#3D4F60' }}>
              Tadoba-Andhari is central India's most reliably productive tiger photography destination. The dry deciduous forest — teak groves, grassland clearings, and seasonal waterholes — creates the open sight-lines and concentrated wildlife activity that produce extraordinary portraits.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color:'#637282' }}>
              At peak dry season in April, waterholes concentrate all animal activity. Tigers visit multiple times daily — often remaining for extended periods — giving photographers unhurried time for portrait work, behavioral sequences, and environmental compositions.
            </p>
            <Eyebrow className="mb-4">Photography Themes</Eyebrow>
            <div className="flex flex-wrap gap-2">{TADOBA_THEMES.map(t => <Tag key={t}>{t}</Tag>)}</div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* Photo & Learn */}
      <section style={{ background:'#F2EDE2' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Photography Program</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-14" style={{ color:'#0D1B2A' }}>What You'll Capture &amp; Learn</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[{ heading:"What You'll Photograph", items:PHOTOGRAPH }, { heading:"What You'll Learn", items:LEARN }].map((col, i) => (
              <FadeIn key={col.heading} delay={i*100}>
                <div className="p-8 rounded-sm h-full" style={{ background:'#FFFFFF', boxShadow:'var(--shadow)', border:'1px solid rgba(13,27,42,0.06)' }}>
                  <h3 className="font-serif text-xl font-semibold mb-6" style={{ color:'#0D1B2A' }}>{col.heading}</h3>
                  <ul className="flex flex-col gap-3.5">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm leading-relaxed" style={{ color:'#4A5568' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      <section style={{ background:'#FAFAF7' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-6" style={{ color:'#0D1B2A' }}>Interested in joining?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/itinerary">View Itinerary</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
