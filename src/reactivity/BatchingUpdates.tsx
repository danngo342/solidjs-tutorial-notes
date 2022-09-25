import { batch, createSignal } from 'solid-js'

export default function BatchingUpdates() {
  const [firstName, setFirstName] = createSignal('John')
  const [lastName, setLastName] = createSignal('Smith')

  const fullName = () => `${firstName()} ${lastName()}` as const

  const updateNames = () => {
    batch(() => {
      setFirstName(x => x + 'n')
      setLastName(x => x + '!')
    })
  }

  return <button onClick={updateNames}>My name is {fullName()}</button>
}
