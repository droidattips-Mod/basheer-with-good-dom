'use client'
import React from 'react'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// Next.js 15 bundles a React canary (19.2.0-canary-20250409) that doesn't
// export useEffectEvent, but sanity@5 structure tool requires it.
// Both this file and Sanity share the exact same webpack React module, so
// patching it here before the first render is sufficient.
const R = React as any
if (typeof R.useEffectEvent !== 'function') {
  const { useRef, useInsertionEffect } = React
  R.useEffectEvent = function useEffectEvent<T extends (...args: any[]) => any>(fn: T): T {
    const ref = useRef<T>(fn)
    useInsertionEffect(() => { ref.current = fn })
    return ((...args: any[]) => ref.current(...args)) as unknown as T
  }
}

export default function StudioClient() {
  return <NextStudio config={config} />
}
