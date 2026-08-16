import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

// ── Images ───────────────────────────────────────────────────────────────────
export const IMG_HERO = 'https://images.unsplash.com/photo-1592636120953-3d2b28ebfd69?w=1800&h=1000&fit=crop&auto=format'
export const IMG_MILKY = 'https://images.unsplash.com/photo-1519681894595-7fc78e06f2d7?w=1600&h=900&fit=crop&auto=format'
export const IMG_TIGER1 = 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=900&h=700&fit=crop&auto=format'
export const IMG_TIGER2 = 'https://images.unsplash.com/photo-1680140979890-101e2798dddf?w=900&h=700&fit=crop&auto=format'
export const IMG_TIGER3 = 'https://images.unsplash.com/photo-1659421893105-65170be042ea?w=900&h=700&fit=crop&auto=format'
export const IMG_TIGER_J = 'https://images.unsplash.com/photo-1589657429197-ecba47e3acd8?w=900&h=700&fit=crop&auto=format'
export const IMG_STARS = 'https://images.unsplash.com/photo-1595510253629-c231be4125f9?w=1600&h=900&fit=crop&auto=format'
export const IMG_LOGO = '/logo.jpg'

// ── Fade-in on scroll ────────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export function FadeIn({ children, className = '', delay = 0, style }: {
  children: React.ReactNode; className?: string; delay?: number; style?: React.CSSProperties
}) {
  const { ref, visible } = useFadeIn()
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  )
}

// ── Primitives ───────────────────────────────────────────────────────────────
export const GoldDivider = () => <div className="gold-divider" />

export function Eyebrow({ children, dark = false, className = '' }: {
  children: React.ReactNode; dark?: boolean; className?: string
}) {
  return (
    <p className={`eyebrow ${className}`} style={{ color: dark ? '#C9A24B' : '#A07828' }}>
      {children}
    </p>
  )
}

export function CheckIcon({ size = 18, color = '#A07828' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="9" cy="9" r="9" fill={color} fillOpacity="0.12" />
      <path d="M5 9l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function XIcon({ dark = true }: { dark?: boolean }) {
  const c = dark ? 'rgba(13,27,42,0.38)' : 'rgba(255,255,255,0.4)'
  const bg = dark ? 'rgba(13,27,42,0.07)' : 'rgba(255,255,255,0.07)'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="9" cy="9" r="9" fill={bg} />
      <path d="M6 6l6 6M12 6l-6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// Gold filled CTA
export function GoldBtn({ children, to, href, type = 'button', fullWidth = false, onClick }: {
  children: React.ReactNode; to?: string; href?: string; type?: 'button' | 'submit'
  fullWidth?: boolean; onClick?: () => void
}) {
  const cls = `inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all duration-200 ${fullWidth ? 'w-full' : ''}`
  const s = { background: '#A07828', color: '#fff' }
  const over = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#7A5C1E'
  const out = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#A07828'
  if (to) return <Link to={to} className={cls} style={s} onMouseEnter={over} onMouseLeave={out}>{children}</Link>
  if (href) return <a href={href} className={cls} style={s} onMouseEnter={over} onMouseLeave={out}>{children}</a>
  return <button type={type} className={cls} style={s} onClick={onClick} onMouseEnter={over} onMouseLeave={out}>{children}</button>
}

// Outline / ghost button
export function OutlineBtn({ children, to, href }: {
  children: React.ReactNode; to?: string; href?: string
}) {
  const cls = 'inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm border transition-all duration-200'
  const s = { borderColor: 'rgba(13,27,42,0.22)', color: '#0D1B2A' }
  const over = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.borderColor = '#A07828'
  const out = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(13,27,42,0.22)'
  if (to) return <Link to={to} className={cls} style={s} onMouseEnter={over} onMouseLeave={out}>{children}</Link>
  return <a href={href ?? '#'} className={cls} style={s} onMouseEnter={over} onMouseLeave={out}>{children}</a>
}

// Dark ghost (for dark sections)
export function DarkGhostBtn({ children, to }: { children: React.ReactNode; to: string }) {
  const cls = 'inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm border transition-all duration-200'
  const s = { borderColor: 'rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.75)' }
  const over = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.borderColor = '#C9A24B'; e.currentTarget.style.color = '#C9A24B' }
  const out = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }
  return <Link to={to} className={cls} style={s} onMouseEnter={over} onMouseLeave={out}>{children}</Link>
}

// ── Page hero (inner pages) ──────────────────────────────────────────────────
export function PageHero({ eyebrow, title, subtitle, bg }: {
  eyebrow: string; title: React.ReactNode; subtitle?: string; bg: string
}) {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden" style={{ background: '#0A1520' }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(10,21,32,0.88) 50%, rgba(10,21,32,0.55) 100%)' }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Eyebrow dark className="mb-4">{eyebrow}</Eyebrow>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.05] max-w-2xl">{title}</h1>
        {subtitle && <p className="mt-5 text-white/55 text-base md:text-lg max-w-xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}

// ── Horizontal rule ──────────────────────────────────────────────────────────
export const Rule = () => <div style={{ height: 1, background: 'var(--border)' }} />

// ── Navigation ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Overview', to: '/' },
  { label: 'Itinerary', to: '/itinerary' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Instructors', to: '/instructors' },
  { label: "What's Included", to: '/pricing' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Always white navbar
  const bg = '#FFFFFF'
  const border = '1px solid rgba(13,27,42,0.08)'
  const shadow = '0 1px 16px rgba(13,27,42,0.07)'
  const textBase = 'rgba(13,27,42,0.55)'
  const textHov = '#A07828'
  const logo = '#A07828'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: bg, borderBottom: border, boxShadow: shadow, backdropFilter: 'blur(0)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[84px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0 py-1">
          <img
            src={IMG_LOGO}
            alt="Stars, Stripes & Wild India"
            className="h-16 md:h-[68px] max-w-[280px] sm:max-w-[360px] object-contain transition-transform duration-200 hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(l => {
            const active = pathname === l.to
            return (
              <Link key={l.label} to={l.to}
                className="text-[11px] tracking-wider uppercase font-medium transition-colors duration-200"
                style={{ color: active ? '#A07828' : textBase }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = textHov }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = textBase }}
              >
                {l.label}
              </Link>
            )
          })}
          <Link to="/book"
            className="ml-3 px-5 py-2.5 text-[10px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all"
            style={{ background: '#A07828', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
            onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}
          >
            Book Now
          </Link>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden flex flex-col gap-[5px] p-2" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {[0, 1, 2].map(i => (
            <span key={i} className="block w-6 transition-all duration-300"
              style={{
                height: 1.5,
                background: '#0D1B2A',
                transform: open
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)' : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'scaleX(0)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        maxHeight: open ? '440px' : '0', overflow: 'hidden',
        transition: 'max-height 0.35s ease',
        background: '#FFFFFF', borderBottom: '1px solid rgba(13,27,42,0.08)',
      }}>
        <div className="flex flex-col px-6 py-5 gap-4" style={{ borderTop: '1px solid rgba(13,27,42,0.07)' }}>
          {NAV_LINKS.map(l => (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)}
              className="text-sm tracking-wider uppercase font-medium"
              style={{ color: '#0D1B2A' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/book" onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 text-[10px] tracking-[0.18em] uppercase font-semibold text-center rounded-sm"
            style={{ background: '#A07828', color: '#fff' }}>
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}

// ── Footer ───────────────────────────────────────────────────────────────────
const FOOTER_LINKS = [
  { label: 'Overview', to: '/' },
  { label: 'Itinerary', to: '/itinerary' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Instructors', to: '/instructors' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
]

export function Footer() {
  return (
    <footer style={{ background: '#0D1B2A', borderTop: '3px solid #A07828' }} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="eyebrow text-[10px] tracking-[0.22em] mb-4" style={{ color: '#C9A24B' }}>
              Stars, Stripes &amp; Wild India
            </p>
            <p className="font-serif text-lg text-white/80 italic leading-relaxed mb-3">
              "Two extraordinary worlds.<br />One perfectly timed journey."
            </p>
            <p className="text-white/35 text-xs leading-relaxed">
              Astrophotography &amp; Bengal tiger safari expedition<br />
              April 5–15, 2027 · Pench &amp; Tadoba, Central India
            </p>
          </div>
          <div>
            <p className="eyebrow text-[10px] mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Navigation</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {FOOTER_LINKS.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-white/45 text-sm hover:text-white/80 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-[10px] mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Contact</p>
            <a href="mailto:info@starsandwildindia.com"
              className="text-sm block mb-4 hover:underline transition-colors"
              style={{ color: '#C9A24B' }}>
              info@starsandwildindia.com
            </a>
            <Link to="/book"
              className="inline-block px-6 py-2.5 text-[10px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all"
              style={{ background: '#A07828', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
              onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}
            >
              Reserve Your Spot
            </Link>
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} className="mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white/40 text-xs">
          <div>
            <p>© 2027 Stars, Stripes &amp; Wild India. All rights reserved.</p>
            <p className="mt-1 text-xs text-white/35">
              Developed by <span className="text-[#C9A24B] font-medium">Kaiotix Technologies</span> &nbsp;·&nbsp; Mail : <a href="mailto:sales@kaiotix.com" className="hover:underline text-white/50 transition-colors">sales@kaiotix.com</a>
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
