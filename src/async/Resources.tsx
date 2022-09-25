import { createResource, createSignal, Suspense } from 'solid-js'

type Person = {
  name: string
  height: 172
  mass: 77
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

const fetchUser = async (id: number): Promise<Person> =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json()

export default function Resources() {
  const [userId, setUserId] = createSignal<number>()
  // Super cool signal that refectches if the source, ie `userId`, changes
  // Unfortunately, the fetch is made, even if the Accessor value were never invoked/read
  const [user] = createResource(userId, fetchUser)

  return (
    <>
      <input
        type='number'
        min='1'
        placeholder='Enter Numeric Id'
        onInput={e => setUserId(e.currentTarget.valueAsNumber)}
      />
      {/* NOTE: Suspense is trigged from the reading of the async-derived value, not the async fetching itself */}
      <Suspense fallback={<p>Loading...</p>}>
        <div>
          <pre>{JSON.stringify(user(), null, 2)}</pre>
        </div>
      </Suspense>
    </>
  )
}
