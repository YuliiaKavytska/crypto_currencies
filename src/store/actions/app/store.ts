import { IInitSuccess, StoreAppTypes } from 'types/actions/store'

export const storeAppActions = {
  initializedSuccess: (): IInitSuccess => ({ type: StoreAppTypes.INITIALIZED_SUCCESS } as const)
}
