import { useEffect, useState, useCallback } from 'react'

export type Route = '/' | '/about' | '/construction' | '/gallery' | '/donors' | '/donation' | '/contact'

function normalize(hash: string): Route {
  const clean = hash.replace(/^#/, '') || '/'
  const valid: Route[] = ['/', '/about', '/construction', '/gallery', '/donors', '/donation', '/contact']
  return (valid as string[]).includes(clean) ? (clean as Route) : '/'
}

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(() => normalize(window.location.hash))

  useEffect(() => {
    const onChange = () => {
      setRoute(normalize(window.location.hash))
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const navigate = useCallback((to: Route) => {
    window.location.hash = to
  }, [])

  return { route, navigate }
}
