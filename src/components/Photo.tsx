'use client'

import path from 'path'
import Image from 'next/image'
import { useReadLocalStorage } from 'usehooks-ts'

export default function Photo({
  photo,
}: {
  photo: {
    id: number
    uuid: string
    photoname: string
    tag: string
    height: number
    width: number
    delete: boolean
  }
}) {
  const resourceURL = useReadLocalStorage<string>('resource-url')
  const photoURL = path.join(`${resourceURL}`, photo.photoname)

  return (
    <>
      <Image
        src={photoURL}
        alt={photo.photoname}
        width={photo.width}
        height={photo.height}
        className='aspect-auto h-full w-full overflow-hidden rounded object-cover'
        quality={100}
      />
    </>
  )
}
