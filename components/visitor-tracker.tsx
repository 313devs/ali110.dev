'use client'

import { useEffect } from 'react'

export function VisitorTracker() {
  useEffect(() => {
    const tracked = sessionStorage.getItem('visitor-tracked')
    if (tracked) return

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: window.location.pathname,
      }),
    })
      .then(() => {
        sessionStorage.setItem('visitor-tracked', '1')
      })
      .catch(() => {})
  }, [])

  return null
}
