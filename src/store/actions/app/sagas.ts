import { IInitializeApp, SagasAppTypes } from 'types/actions/sagas'

export const sagaAppActions = {
  initializeApp: (): IInitializeApp =>
    ({
      type: SagasAppTypes.INITIALIZE_APP
    } as const)
}
