export const dynamic = 'force-static'
export { metadata, viewport } from 'next-sanity/studio'

import StudioNoSSR from './StudioNoSSR'

export default function StudioPage() {
  return <StudioNoSSR />
}
