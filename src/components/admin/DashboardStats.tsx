import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

const PIPELINE = [
  { value: 'new', label: 'New', color: '#3b82f6' },
  { value: 'contacted', label: 'Contacted', color: '#8b5cf6' },
  { value: 'quoted', label: 'Quoted', color: '#f59e0b' },
  { value: 'won', label: 'Won', color: '#22c55e' },
  { value: 'lost', label: 'Lost', color: '#ef4444' },
] as const

const leadsHref = (status?: string) =>
  status
    ? `/admin/collections/leads?where[status][equals]=${status}`
    : '/admin/collections/leads'

// Server component rendered above the default admin dashboard (`beforeDashboard`).
// Live lead metrics, sales pipeline, and recent leads via the local API.
export async function DashboardStats() {
  const payload = await getPayload({ config })
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()

  const [leadsTotal, leadsWeek, recent, projects, posts, ...pipeline] = await Promise.all([
    payload.count({ collection: 'leads' }),
    payload.count({ collection: 'leads', where: { createdAt: { greater_than: weekAgo } } }),
    payload.find({ collection: 'leads', limit: 5, sort: '-createdAt', depth: 1 }),
    payload.count({ collection: 'projects' }),
    payload.count({ collection: 'posts' }),
    ...PIPELINE.map((s) =>
      payload.count({ collection: 'leads', where: { status: { equals: s.value } } }),
    ),
  ])

  const stats = [
    { label: 'Total Leads', value: leadsTotal.totalDocs, href: leadsHref() },
    { label: 'New (7 days)', value: leadsWeek.totalDocs, href: leadsHref('new') },
    { label: 'Projects', value: projects.totalDocs, href: '/admin/collections/projects' },
    { label: 'Blog Posts', value: posts.totalDocs, href: '/admin/collections/posts' },
  ]

  const pipelineMax = Math.max(1, ...pipeline.map((p) => p.totalDocs))

  return (
    <div style={{ marginBottom: '2rem' }}>
      {/* Stat cards */}
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        }}
      >
        {stats.map((s) => (
          <Link key={s.label} href={s.href} style={cardStyle}>
            <div style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.1 }}>{s.value}</div>
            <div style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '0.25rem' }}>{s.label}</div>
          </Link>
        ))}
      </div>

      {/* Sales pipeline */}
      <h3 style={{ margin: '1.75rem 0 0.75rem' }}>Sales Pipeline</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {PIPELINE.map((s, i) => {
          const count = pipeline[i].totalDocs
          return (
            <Link
              key={s.value}
              href={leadsHref(s.value)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--theme-text, inherit)' }}
            >
              <span style={{ width: 80, fontSize: '0.85rem', opacity: 0.8 }}>{s.label}</span>
              <span style={{ flex: 1, background: 'var(--theme-elevation-100)', borderRadius: 4, height: 22, overflow: 'hidden' }}>
                <span
                  style={{
                    display: 'block',
                    height: '100%',
                    width: `${(count / pipelineMax) * 100}%`,
                    minWidth: count ? 4 : 0,
                    background: s.color,
                  }}
                />
              </span>
              <span style={{ width: 32, textAlign: 'right', fontWeight: 600 }}>{count}</span>
            </Link>
          )
        })}
      </div>

      {/* Recent leads */}
      <h3 style={{ margin: '1.75rem 0 0.75rem' }}>Recent Leads</h3>
      {recent.docs.length === 0 ? (
        <p style={{ opacity: 0.7 }}>No leads yet.</p>
      ) : (
        <div style={{ border: '1px solid var(--theme-elevation-100)', borderRadius: 6, overflow: 'hidden' }}>
          {recent.docs.map((lead: Record<string, any>, i: number) => {
            const badge = PIPELINE.find((p) => p.value === lead.status)
            return (
              <Link
                key={lead.id}
                href={`/admin/collections/leads/${lead.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '0.75rem 1rem',
                  textDecoration: 'none',
                  color: 'var(--theme-text, inherit)',
                  borderTop: i === 0 ? 'none' : '1px solid var(--theme-elevation-100)',
                }}
              >
                <span style={{ fontWeight: 600, flex: 1 }}>{lead.name}</span>
                <span style={{ opacity: 0.7, fontSize: '0.85rem' }}>
                  {[lead.city, lead.packageInterest].filter(Boolean).join(' · ')}
                </span>
                {badge && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.5rem',
                      borderRadius: 999,
                      color: '#fff',
                      background: badge.color,
                    }}
                  >
                    {badge.label}
                  </span>
                )}
                <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>{lead.mobile}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

const cardStyle = {
  display: 'block',
  padding: '1.25rem',
  borderRadius: 6,
  textDecoration: 'none',
  color: 'var(--theme-text, inherit)',
  background: 'var(--theme-elevation-50)',
  border: '1px solid var(--theme-elevation-100)',
} as const
