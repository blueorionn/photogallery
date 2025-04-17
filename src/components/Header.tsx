import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Header() {
  return (
    <>
      <header className='flex w-full items-center justify-start bg-gray-950 p-8'>
        <div className='flex items-center justify-start gap-4'>
          <Image
            src={'/android-chrome-192x192.png'}
            alt='Site Logo'
            height={192}
            width={192}
            className='aspect-auto h-8 w-8'
          />
          <h1
            className={`${spaceGrotesk.className} text-lg font-bold text-gray-200 xl:text-xl`}
          >
            Photogallery
          </h1>
        </div>
      </header>
    </>
  )
}
