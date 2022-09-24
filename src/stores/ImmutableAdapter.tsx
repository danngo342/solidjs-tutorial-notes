import { For } from 'solid-js'
import { addTodo, reduxStore, toggleTodo } from './ReduxStore'
import useRedux from './useRedux'

/**
 * - it seems like immutability is generally counter-productive to solidjs's focus on minimal updates for performance
 * - However, in some scenarios, i may have to use redux, xstate, etc. or some other legacy state management
 * - In using these libraries, it appears that the main issue of compatibility that of immutability
 * - Thus, the solidjs tutorial guides devs on setting up an immutable adapter to enable usage of, say, redux
 */
export default function ImmutableAdapter() {
  const store = useRedux(reduxStore)
  let _input: HTMLInputElement

  return (
    <>
      <div>
        <input
          // @ts-ignore
          ref={_input}
        />
        <button
          onClick={() => {
            if (!_input.value.trim()) return
            addTodo(_input.value)
            _input.value = ''
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={store.todos}>
        {x => (
          <div>
            <input
              type='checkbox'
              checked={x.completed}
              onchange={[toggleTodo, x.id]}
            />
            <span
              style={{
                'text-decoration': x.completed ? 'line-through' : 'none',
              }}
            >
              {x.text}
            </span>
          </div>
        )}
      </For>
    </>
  )
}
