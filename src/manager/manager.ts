export type StateType = {
  photos:
    | {
        id: number
        uuid: string
        photoname: string
        tag: string
        height: number
        width: number
        delete: boolean
      }[]
    | []
  currentPage: number
}

export const INITIAL_STATE: StateType = {
  photos: [],
  currentPage: 1,
}

export type Action =
  | { type: 'Increment Page' }
  | {
      type: 'Add Photos'
      payload: {
        id: number
        uuid: string
        photoname: string
        tag: string
        height: number
        width: number
        delete: boolean
      }[]
    }

export function reducer(state: StateType, action: Action): StateType {
  if (action.type === 'Increment Page') {
    return { ...state, currentPage: state.currentPage + 1 }
  }

  if (action.type === 'Add Photos') {
    state.photos.splice(state.photos.length, 0, ...action.payload)
    return {
      ...state,
    }
  }

  return state
}
