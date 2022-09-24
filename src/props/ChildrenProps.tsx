import { children, createEffect, createSignal, For, JSX } from 'solid-js'

function ColorList(p: { children: JSX.Element; color: string }): JSX.Element {
  const c = children(() => p.children)

  createEffect(() =>
    c.toArray().forEach(x => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      x.setAttribute('style', `color: ${p.color}`)
    }),
  )

  return <>{c()}</>
}

const [color, setColor] = createSignal('purple')

export default function ChildrenProps(): JSX.Element {
  return (
    <>
      <ColorList color={color()}>
        <For each={['Most', 'Interesting', 'Thing']}>{x => <div>{x}</div>}</For>
      </ColorList>
      <button onClick={() => setColor('teal')}>Set Color</button>
    </>
  )
}
