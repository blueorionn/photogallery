import { query } from '@/lib/db'

export async function isSessionValid(sessionid: string) {
  const session = await query(
    'SELECT * FROM sessions WHERE id = $1 AND expiry_date > CURRENT_DATE',
    [sessionid]
  )
  if ((session.rowCount || 0) > 0) return true
  return false
}
