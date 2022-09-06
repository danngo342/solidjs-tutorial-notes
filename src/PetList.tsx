import { createSignal, Index, JSX } from 'solid-js'

const [cats] = createSignal([
  { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
  { id: 'z_AbfPXTKms', name: 'Maru' },
  { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
])

/**
 * - `Index` should be used instead of `For`, in this component, because Index reduces re-rendering, but would break if the elements change indicies
 * - `For` is used when elements can change indicies, as a more general, less efficient solution. This is particularily problematic for an array of primitivies, or an array of arrays
 */
export default function PetList(): JSX.Element {
  return (
    <ul>
      <Index each={cats()}>
        {(cat, i): JSX.Element => (
          <li>
            <a
              target='_blank'
              href={`https://www.youtube.com/watch?v=${cat().id}`}
            >
              {i + 1}: {cat().name}
            </a>
          </li>
        )}
      </Index>
    </ul>
  )
}
