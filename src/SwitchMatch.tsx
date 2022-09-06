import { createSignal, JSX, Match, Switch } from 'solid-js'

const [x] = createSignal(7)

export default function SwitchMatch(): JSX.Element {
  return (
    <Switch fallback={<p>{x()} is between 5 and 10</p>}>
      <Match when={x() > 10}>
        <p>{x()} is greater than 10</p>
      </Match>
    </Switch>
  )
}
