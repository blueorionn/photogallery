import { query } from '@/lib/db'

export async function isSessionValid(sessionid: string) {
  const session = await query(
    'SELECT * FROM sessions WHERE sessionid = $1 AND expiry_date > CURRENT_DATE',
    [sessionid]
  )
  console.log(session)
  return false
}
