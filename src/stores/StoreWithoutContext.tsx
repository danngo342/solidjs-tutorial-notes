import reactiveStore from './reactiveStore'

export default function StoreWithoutContext() {
  const { count, doubleCount, increment } = reactiveStore

  return (
    <button type='button' onClick={increment}>
      {count()}, {doubleCount()}
    </button>
  )
}
