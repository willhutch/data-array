function canAccessRadar(radar, userEmail) {
  if (!userEmail) {
    return false
  }
  const allowedUsers = radar.allowedUsers || []
  if (allowedUsers.length === 0) {
    return true
  }
  const email = userEmail.toLowerCase()
  return allowedUsers.some((allowed) => allowed.toLowerCase() === email)
}

module.exports = { canAccessRadar }
