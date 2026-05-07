import { getTenant, type Tenant } from './tenant'

const MEASUREMENT_IDS: Record<Tenant, string> = {
  personal: 'G-F98BQH4VE5',
  labs: 'G-CKNCCPQC96',
}

export function initAnalytics(): void {
  if (typeof window === 'undefined') return

  const measurementId = MEASUREMENT_IDS[getTenant()]

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId)
}
