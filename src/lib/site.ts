// Single source of truth for the public site origin.
// Override per-environment with NEXT_PUBLIC_SITE_URL (e.g. https://screwwood.com).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://screwwood.com'
).replace(/\/$/, '')

export const SITE_NAME = 'Screw Wood'

export const absoluteUrl = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
