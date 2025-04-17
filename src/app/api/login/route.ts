import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { query } from '@/lib/db'

export async function POST(req: Request) {
  const { username, password } = await req.json()

  try {
    const result = await query(
      'SELECT username,password FROM users WHERE username = $1 LIMIT 1',
      [`${username}`]
    )

    const user = result.rows[0]

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }

    // Compare input password with hashed one from DB
    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const response = NextResponse.json({
      message: 'Login successful',
      user: { id: user.id, username: user.username },
    })

    // create session
    const sessionId = uuidv4()
    await query('INSERT INTO sessions (id) VALUES ($1)', [sessionId])
    const session = await query(
      'SELECT id FROM sessions WHERE id = $1 LIMIT 1',
      [sessionId]
    )
    response.cookies.set('sessionid', session.rows[0].id, {
      httpOnly: true,
      secure: true,
      path: '/',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
