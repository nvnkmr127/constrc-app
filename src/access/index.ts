import type { Access, FieldAccess } from 'payload'

// Shared access-control helpers. Users have a `role`: 'admin' | 'editor'.
type WithRole = { id?: string | number; role?: 'admin' | 'editor' }

export const anyone: Access = () => true

export const isAuthenticated: Access = ({ req }) => Boolean(req.user)

// Field-level: any logged-in staff (blocks values sent by anonymous public creates).
export const isAuthenticatedFieldLevel: FieldAccess = ({ req }) => Boolean(req.user)

export const isAdmin: Access = ({ req }) => (req.user as WithRole)?.role === 'admin'

// Admins can touch any user; anyone else is limited to their own record.
export const isAdminOrSelf: Access = ({ req }) => {
  const user = req.user as WithRole | undefined
  if (!user) return false
  if (user.role === 'admin') return true
  return { id: { equals: user.id } }
}

// Field-level: only admins may set/change the value (e.g. the role field itself).
export const isAdminFieldLevel: FieldAccess = ({ req }) => (req.user as WithRole)?.role === 'admin'
