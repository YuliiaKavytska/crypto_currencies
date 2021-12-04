import { IInitializeApp, sagasAppTypes } from 'types/actions/sagas'

export const sagaAppActions = {
  initializeApp: (): IInitializeApp =>
    ({
      type: sagasAppTypes.INITIALIZE_APP
    } as const)
}
