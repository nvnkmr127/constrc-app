import assert from 'node:assert'
import {
  isAdmin,
  isAuthenticated,
  isAuthenticatedFieldLevel,
  isAdminOrSelf,
  isAdminFieldLevel,
  anyone,
} from './index'

const req = (user: any) => ({ req: { user } }) as any

// anyone
assert.equal(anyone(req(null)), true)

// isAuthenticated
assert.equal(isAuthenticated(req(null)), false)
assert.equal(isAuthenticated(req({ id: 1 })), true)

// isAdmin
assert.equal(isAdmin(req({ id: 1, role: 'editor' })), false)
assert.equal(isAdmin(req({ id: 1, role: 'admin' })), true)
assert.equal(isAdmin(req(null)), false)

// isAdminOrSelf: admin -> true, self -> scoped query, other -> ...also scoped to self
assert.equal(isAdminOrSelf(req(null)), false)
assert.equal(isAdminOrSelf(req({ id: 7, role: 'admin' })), true)
assert.deepEqual(isAdminOrSelf(req({ id: 7, role: 'editor' })), { id: { equals: 7 } })

// field-level role guard
assert.equal(isAdminFieldLevel(req({ role: 'admin' })), true)
assert.equal(isAdminFieldLevel(req({ role: 'editor' })), false)

// field-level staff guard (blocks anonymous public creates, allows any staff)
assert.equal(isAuthenticatedFieldLevel(req(null)), false)
assert.equal(isAuthenticatedFieldLevel(req({ id: 1, role: 'editor' })), true)

console.log('access helpers: all assertions passed')
