import { createStore, Reducer } from 'redux'

type Todo = { id: number; text: string; completed: boolean }

type State = {
  todos: Todo[]
}

type ActionsMap = {
  ADD_TODO: Todo['text']
  TOGGLE_TODO: Todo['id']
}

type Actions<T extends keyof ActionsMap> = { type: T; payload: ActionsMap[T] }

const reducer: Reducer<State, Actions<keyof ActionsMap>> = (
  state = { todos: [] },
  { type: actionType, payload },
): State => {
  switch (actionType) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: payload as ActionsMap['ADD_TODO'],
            completed: false,
          },
        ],
      }
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(x =>
          x.id === (payload as ActionsMap['TOGGLE_TODO'])
            ? { ...x, completed: !x.completed }
            : x,
        ),
      }
    default:
      return state
  }
}

export const reduxStore = createStore(reducer)

export const actionCreatorFactory =
  <T extends keyof ActionsMap>(type: T) =>
  (payload: ActionsMap[T]) =>
    reduxStore.dispatch({ type, payload })

// thank god for currying
export const addTodo = actionCreatorFactory('ADD_TODO')
export const toggleTodo = actionCreatorFactory('TOGGLE_TODO')
