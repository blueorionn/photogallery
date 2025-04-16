import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { parse } from 'cookie'
import { isSessionValid } from '@/auth/auth'
import Header from '@/components/Header'

export default async function Home() {
  // Check if user is logged in
  const headerList = await headers()
  const cookieHeader = await headerList.get('cookie')
  const cookies = cookieHeader ? parse(cookieHeader) : {}
  const sessionId = cookies['sessionid']

  // Check if session ID is present
  if (!sessionId || !(await isSessionValid(sessionId))) {
    return redirect('/login')
  }

  return (
    <>
      <Header />
      <main className='min-h-[100vh] w-full overflow-x-hidden bg-gray-950'></main>
    </>
  )
}
