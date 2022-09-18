import type { JSX } from 'solid-js'
import { createSignal, Show } from 'solid-js'
import './BindingDirectives.css'
import clickOutsideDirective from './clickOutside'

// work-around for directives to avoid throwing tsc build errors
// eslint-disable @typescript-eslint/no-unused-vars
const clickOutside = clickOutsideDirective
// eslint-enable @typescript-eslint/no-unused-vars

export default function BindingDirectives(): JSX.Element {
  const [visible, setVisible] = createSignal(false)

  return (
    // work-around for brave browser shrinking body element to the largest, existing descendant element (not sure if brave browser actually does this, but that's how it seems)
    <div
      style={{
        display: 'grid',
        height: '100vh',
        'justify-content': 'center',
        'align-items': 'center',
      }}
    >
      <Show
        when={visible()}
        fallback={<button onClick={() => setVisible(true)}>Open Modal</button>}
      >
        <div class='modal' use:clickOutside={() => setVisible(false)}>
          Some Modal
        </div>
      </Show>
    </div>
  )
}
