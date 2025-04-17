import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { parse } from 'cookie'
import { query } from '@/lib/db'
import { isSessionValid } from '@/auth/auth'

export async function GET(request: Request) {
  // Check if user is logged in
  const headerList = await headers()
  const cookieHeader = await headerList.get('cookie')
  const cookies = cookieHeader ? parse(cookieHeader) : {}
  const sessionId = cookies['sessionid']

  // Check if session ID is present
  if (!sessionId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  } else if (!(await isSessionValid(sessionId))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get page number from query string
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')

  // Default page size
  const pageSize = 12

  // Validate page number
  if (Number.isNaN(Number(page)) || Number(page) < 1) {
    return NextResponse.json({ error: 'Invalid page number' }, { status: 400 })
  }

  // Validate offset
  const offset = (Number(page) - 1) * pageSize

  // Query photos from database
  const photos = await query(
    "SELECT * FROM photos WHERE delete = FALSE AND tag <> 'hidden' ORDER BY id LIMIT $1 OFFSET $2",
    [`${pageSize}`, `${offset}`]
  )

  return NextResponse.json(
    { result: photos?.rows, page: page },
    { status: 200 }
  )
}
