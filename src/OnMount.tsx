import './OnMount.css'
import { createSignal, For, JSX, onMount } from 'solid-js'

type Photo = { thumbnailUrl: string; title: string }

const [photos, setPhotos] = createSignal<Photo[]>([])

export default function OnMount(): JSX.Element {
  /*
  // alternative without async await, as a more concise solution
  // to the eslint error @typescript-eslint/no-misused-promises/
  // this is the issue that the rule is trying to address:
  // https://github.com/typescript-eslint/typescript-eslint/issues/508
  onMount(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
      .then(res => res.json().then(setPhotos))
      .catch(() => null)
  })
 */

  onMount(() => {
    const getPhotos = async (): Promise<Photo[]> => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=20`,
      )
      return res.json() as Promise<Photo[]>
    }

    getPhotos()
      .then(setPhotos)
      .catch(() => null)
  })

  return (
    <>
      <h1>Photo Album</h1>
      <div class='photos'>
        <For each={photos()} fallback={<h1>Loading...</h1>}>
          {x => (
            <figure>
              <img src={x.thumbnailUrl} alt={x.title} />
              <figcaption>{x.title}</figcaption>
            </figure>
          )}
        </For>
      </div>
    </>
  )
}
