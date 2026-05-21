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
  window.gtag = function gtag() {
    // gtag.js expects the IArguments object, not a real Array — pushing a spread-args
    // array silently breaks beacon dispatch.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId)
}
