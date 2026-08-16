import { FadeIn, GoldDivider, Rule, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_TIGER_J, CameraIcon, ShirtIcon, CreditCardIcon, BackpackIcon } from '../components/shared'

const INSTRUCTORS = [
  { name:'P S Srinivas', role:'Astrophotography Guide', initials:'PS', color:'#A07828',
    bio:"Leads all night-sky sessions covering star tracking, exposure stacking, Milky Way composition, and advanced post-processing. Has photographed India's dark-sky sites for over a decade and was instrumental in the observatory program that contributed to Pench's Dark Sky Park designation.",
    specialties:['Wide-field Milky Way','Star trackers & mounts','Stacking & noise reduction','Foreground composition'] },
  { name:'Himanshu', role:'Wildlife Photography Guide', initials:'H', color:'#1A5030',
    bio:'Lead wildlife tour leader and photography guide, responsible for positioning guests for the highest-probability, best-light tiger and safari encounters. Intimately familiar with tiger behavior, territory ranges, and movement timing across both Pench and Tadoba.',
    specialties:['Tiger behavior & tracking','Safari vehicle positioning','Long-lens technique','Golden-hour & dust light'] },
  { name:'TBD', role:'Wildlife Photography Guide', initials:'?', color:'#1A4080',
    bio:'Second dedicated wildlife photography instructor — bio and full details to be announced. Provides additional coverage during twice-daily safari days in Tadoba, ensuring personalized guidance for every guest across all jeeps.',
    specialties:['Wildlife photography','Post-processing review','Compositional coaching','Field craft'] },
]

const BRING = [
  { icon: <CameraIcon className="w-5 h-5 text-[#A07828]" />, title:'Photography Gear', items:['DSLR or mirrorless camera body (full-frame preferred)','Sturdy tripod — essential for astrophotography','Telephoto 100–400mm or longer for wildlife','Wide-angle 14–24mm for astro & landscape','Star tracker (optional but highly recommended)','Red-light headlamp (preserves night vision)','Extra batteries and memory cards','Dust-proof camera bag or rain cover'] },
  { icon: <ShirtIcon className="w-5 h-5 text-[#A07828]" />, title:'Clothing', items:['Neutral/earth-tone safari clothing (khaki, olive)','Thermal base layer for pre-dawn sessions','Light fleece or jacket for night sessions','Wide-brim hat and UV sunglasses','High-SPF sunscreen (50+)','Closed-toe shoes','Insect repellent (DEET-based)'] },
  { icon: <CreditCardIcon className="w-5 h-5 text-[#A07828]" />, title:'Money & Documents', items:['Indian Rupee (INR) cash for tips & villages','Major cards accepted at lodges','e-Visa or tourist visa — apply in advance','Passport with 6+ months validity','Travel & health insurance documents','Emergency contact information'] },
  { icon: <BackpackIcon className="w-5 h-5 text-[#A07828]" />, title:'Other Essentials', items:['Binoculars (8×42 recommended)','Reusable water bottle','Power bank & universal adapter (Type D/M)','Basic first-aid and personal medications',"Prescription medications with doctor's note",'Notebook or voice recorder for field notes'] },
]

export default function Instructors() {
  return (
    <>
      <PageHero eyebrow="Your Expert Team" title="Meet Your Instructors"
        subtitle="One astrophotography guide, two wildlife photography guides, plus local naturalists and jeep drivers at each reserve."
        bg={IMG_TIGER_J} />

      <GoldDivider />

      {/* Instructors */}
      <section style={{ background:'#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Instructors</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-14" style={{ color:'#0D1B2A' }}>Your Instructors During the Tour</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {INSTRUCTORS.map((ins, i) => (
              <FadeIn key={ins.name} delay={i*100}
                className="rounded-sm overflow-hidden"
                style={{ background:'#FFFFFF', boxShadow:'var(--shadow)', border:'1px solid rgba(13,27,42,0.07)' }}>
                <div className="h-2 w-full" style={{ background: ins.color }} />
                <div className="p-7">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-lg font-bold mb-5 text-white"
                    style={{ background: ins.color }}>
                    {ins.initials}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-1" style={{ color:'#0D1B2A' }}>{ins.name}</h3>
                  <p className="eyebrow text-[10px] mb-5" style={{ color:'#A07828' }}>{ins.role}</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color:'#4A5568' }}>{ins.bio}</p>
                  <p className="eyebrow text-[9px] mb-3" style={{ color:'#637282' }}>Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {ins.specialties.map(s => (
                      <span key={s} className="text-[10px] px-2.5 py-1 rounded-sm font-medium"
                        style={{ background:'#F2EDE2', color:'#7A5C1E' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200} className="mt-8 p-6 rounded-sm"
            style={{ background:'#F2EDE2', border:'1px solid rgba(160,120,40,0.15)' }}>
            <p className="text-sm leading-relaxed" style={{ color:'#4A5568' }}>
              <strong style={{ color:'#0D1B2A' }}>Supporting team:</strong> Every safari jeep is accompanied by an experienced local naturalist guide and driver with intimate knowledge of the individual animals and territories in their reserve. Their expertise in reading behavior and positioning the vehicle is fundamental to the quality of photography on each drive.
            </p>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* What to bring */}
      <section style={{ background:'#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Preparation</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-3" style={{ color:'#0D1B2A' }}>What to Bring</h2>
            <p className="text-sm leading-relaxed mb-14 max-w-lg" style={{ color:'#637282' }}>
              A curated packing guide for photographers. Most items are available in larger Indian cities if needed.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRING.map((cat, i) => (
              <FadeIn key={cat.title} delay={i*80}
                className="p-7 rounded-sm"
                style={{ background:'#F2EDE2', border:'1px solid rgba(13,27,42,0.07)' }}>
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="font-serif text-base font-semibold mb-5" style={{ color:'#0D1B2A' }}>{cat.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-xs flex-shrink-0 mt-px font-bold" style={{ color:'#A07828' }}>—</span>
                      <span className="text-xs leading-relaxed" style={{ color:'#4A5568' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      <section style={{ background:'#F2EDE2' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-6" style={{ color:'#0D1B2A' }}>Ready to photograph with our team?</p>
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
