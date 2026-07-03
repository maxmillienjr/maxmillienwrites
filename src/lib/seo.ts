import { getTenantMeta, CANONICAL_ORIGIN } from './tenant'

export interface MetaInput {
  title: string
  description: string
  path: string
}

export interface MetaOutput {
  title: string
  description: string
  canonical: string
  ogImage: string
  siteName: string
}

export function buildMeta({ title, description, path }: MetaInput): MetaOutput {
  const tenant = getTenantMeta()
  // Canonical always resolves to the consolidated origin, regardless of which
  // domain served the page. The OG image stays on the tenant's own origin so
  // each domain serves its own social card.
  const canonical = new URL(path, CANONICAL_ORIGIN).toString()
  const ogImage = new URL(tenant.ogImage, tenant.origin).toString()
  return {
    title,
    description,
    canonical,
    ogImage,
    siteName: tenant.siteName,
  }
}
