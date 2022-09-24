import { Accessor, createSignal, For, JSX, Setter } from 'solid-js'

export default function NestedReactivity(): JSX.Element {
  const [todos, setTodos] = createSignal<
    {
      id: number
      text: string
      completed: Accessor<boolean>
      setCompleted: Setter<boolean>
    }[]
  >([])
  let _input: HTMLInputElement
  let todoId = 0

  const addTodo = (text: string): void => {
    const [completed, setCompleted] = createSignal(false)
    setTodos([...todos(), { id: ++todoId, text, completed, setCompleted }])
  }

  // Nested signals prevents the need to re-clone the object with changed values
  const toggleTodo = (id: number): void => {
    todos()
      .find(x => x.id === id)
      ?.setCompleted(prev => !prev)
  }

  return (
    <>
      <div>
        <input
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={_input}
        />
        <button
          onClick={() => {
            if (!_input.value.trim) return
            addTodo(_input.value)
            _input.value = ''
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos()}>
        {x => {
          const { id, text } = x
          // eslint-disable-next-line no-console
          console.log(`Creating ${text}`)
          return (
            <div>
              <input
                type='checkbox'
                checked={x.completed()}
                onchange={[toggleTodo, id]}
              />
              <span
                style={{
                  'text-decoration': x.completed() ? 'line-through' : 'none',
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
