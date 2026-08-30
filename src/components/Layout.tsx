import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Nav, Footer } from './shared'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif", background: '#0E1A2B' }}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
