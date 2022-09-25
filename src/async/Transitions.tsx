import {
  createSignal,
  JSX,
  Match,
  Suspense,
  Switch,
  useTransition,
} from 'solid-js'
import Child from './Child'

import './styles.css'

export default function Transitions(): JSX.Element {
  const [tab, setTab] = createSignal(0)
  const [pending, start] = useTransition()
  const updateTab = (index: number) => () => start(() => setTab(index))

  return (
    <>
      <ul class='inline'>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <li classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
          Uno
        </li>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <li classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
          Dos
        </li>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <li classList={{ selected: tab() === 2 }} onClick={updateTab(2)}>
          Tres
        </li>
      </ul>
      <div class='tab' classList={{ pending: pending() }}>
        <Suspense fallback={<div class='loader'>Loading...</div>}>
          <Switch>
            <Match when={tab() === 0}>
              <Child page='Uno' />
            </Match>
            <Match when={tab() === 1}>
              <Child page='Dos' />
            </Match>
            <Match when={tab() === 2}>
              <Child page='Tres' />
            </Match>
          </Switch>
        </Suspense>
      </div>
    </>
  )
}
