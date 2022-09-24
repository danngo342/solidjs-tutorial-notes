import { For } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

type Todo = { id: number; text: string; completed: boolean }

export default function ImmutableChange() {
  let _input: HTMLInputElement
  let todoId = 0
  const [todos, setTodos] = createStore<Todo[]>([])

  const addTodo = (text: string): void => {
    setTodos(
      produce(x => {
        x.push({ id: ++todoId, text, completed: false })
      }),
    )
  }

  const toggleTodo = (id: number): void => {
    setTodos(
      x => x.id === id,
      'completed',
      y => !y,
    )
  }

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
      <For each={todos}>
        {x => {
          const { id, text } = x
          console.log(`Creating ${text}`)
          return (
            <div>
              <input
                type='checkbox'
                checked={x.completed}
                onchange={[toggleTodo, id]}
              />
              <span
                style={{
                  'text-decoration': x.completed ? 'line-through' : 'none',
                }}
              >
                {text}
              </span>
            </div>
          )
        }}
      </For>
    </>
  )
}
