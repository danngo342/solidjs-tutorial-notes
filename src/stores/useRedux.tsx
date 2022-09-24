import { Store } from 'redux'
import { onCleanup } from 'solid-js'
import { createStore, reconcile } from 'solid-js/store'

export default function useRedux<T extends NonNullable<unknown>>(
  store: Store<T>,
): T {
  const [state, setState] = createStore(store.getState())

  const unsubscribe = store.subscribe(() =>
    setState(reconcile(store.getState())),
  )

  onCleanup(unsubscribe)

  return state
}
