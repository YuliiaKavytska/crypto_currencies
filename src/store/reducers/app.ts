import { storeAppActions } from 'store/actions/app/store'
import { StoreAppTypes } from 'types/actions/store'
import { inferActionTypes } from 'types/common'

const initialState = {
  initialized: false
}

type initialStateType = typeof initialState

type actionTypes = inferActionTypes<typeof storeAppActions>

export const app = (state = initialState, action: actionTypes): initialStateType => {
  switch (action.type) {
    case StoreAppTypes.INITIALIZED_SUCCESS:
      return { ...state, initialized: true }
    default:
      return state
  }
}
