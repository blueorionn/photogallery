import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
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

    return NextResponse.json({
      message: 'Login successful',
      user: { id: user.id, username: user.username },
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
