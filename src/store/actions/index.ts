import { sagaAppActions } from 'store/actions/app/sagas'
import { storeAppActions } from 'store/actions/app/store'
import { sagaCurrenciesActions } from 'store/actions/currencies/sagas'
import { storeCurrenciesActions } from 'store/actions/currencies/store'

const allActions = {
  ...sagaAppActions,
  ...sagaCurrenciesActions,
  ...storeAppActions,
  ...storeCurrenciesActions
}

export default allActions
