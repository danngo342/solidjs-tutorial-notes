import { JSX, splitProps } from 'solid-js'

export default function SplitProps(p: {
  [k: string]: unknown
  name: string
  greeting: string
}): JSX.Element {
  const [local, rest] = splitProps(p, ['greeting', 'name'])
  return (
    <h3 {...rest}>
      {local.greeting} {local.name}
    </h3>
  )
}
