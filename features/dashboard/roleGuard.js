export function roleGuard(userRole, allowedRoles) {
  return allowedRoles.includes(userRole)
}