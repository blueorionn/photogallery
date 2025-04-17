'use client'
import { useContext, useReducer, useEffect, useState } from 'react'
import { PhotoContext } from '@/context/context'
import { reducer, INITIAL_STATE } from '@/manager/manager'

export const PhotoProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false)
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return

  return (
    <PhotoContext.Provider value={{ state, dispatch }}>
      {children}
    </PhotoContext.Provider>
  )
}

export const usePhotoProvider = () => {
  const context = useContext(PhotoContext)
  if (!context) {
    throw new Error(
      'usePhotoProvider must be used within a <PhotoProvider> component. ' +
        'Ensure that your component tree is wrapped with a PhotoProvider to provide the necessary context.'
    )
  }
  return context
}
