import { IInitSuccess, storeAppTypes } from 'types/actions/store'

export const storeAppActions = {
  initializedSuccess: (): IInitSuccess => ({ type: storeAppTypes.INITIALIZED_SUCCESS } as const)
}
