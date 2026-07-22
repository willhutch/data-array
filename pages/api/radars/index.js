const { getServerSession } = require('next-auth/next')
const { authOptions } = require('../auth/[...nextauth]')
const config = require('@/config')
const { canAccessRadar } = require('@/util/radarAccess')

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const session = await getServerSession(req, res, authOptions)
    if (!session?.user?.email) {
      return res.status(200).json({ radars: [] })
    }

    const configResult = config()
    const radars = (configResult?.radars || [])
      .filter((radar) => canAccessRadar(radar, session.user.email))
      .map(({ id, name, status }) => ({ id, name, status }))

    return res.status(200).json({ radars })
  } catch (error) {
    console.error('Error fetching radars:', error)
    return res.status(500).json({ error: error.message || 'Internal server error' })
  }
}
