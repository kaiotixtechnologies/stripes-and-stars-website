import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Nav, Footer } from './shared'
import loaderVideo from '../assets/loader.mp4'

export default function Layout() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(false)
  const isFirstRender = useRef(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // Trigger video loader overlay on route change
    setLoading(true)

    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(() => {})
      } catch (err) {
        // ignore autoplay restriction catch
      }
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif", background: '#0E1A2B' }}>
      {/* Fullscreen Video Transition Loader */}
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#070D16]/95 backdrop-blur-md transition-opacity duration-300 ${
          loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-[#A07828]/60 shadow-2xl bg-[#0D1B2A]">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src={loaderVideo} type="video/mp4" />
              <source src="/loader.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="eyebrow text-xs tracking-[0.25em] text-[#C9A24B] uppercase animate-pulse">
            Loading Expedition...
          </p>
        </div>
      </div>

      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
