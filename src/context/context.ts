'use client'
import React, { createContext } from 'react'
import type { StateType, Action } from '@/manager/manager'

export const PhotoContext = createContext<
  | { state: StateType; dispatch: React.ActionDispatch<[action: Action]> }
  | undefined
>(undefined)
