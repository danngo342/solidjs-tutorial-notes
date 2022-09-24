import { JSX, mergeProps } from 'solid-js'

// TODO: confirm if currying the fn will lose reactivity
function mergeDefaultProps<T>(
  defaults: Partial<T>,
  props: T,
): ReturnType<typeof mergeProps<[Partial<T>, T]>> {
  return mergeProps(defaults, props)
}

export default function DefaultProps(props: {
  greeting?: string
  name?: string
}): JSX.Element {
  const p = mergeDefaultProps({ greeting: 'Hi', name: 'John' }, props)

  return (
    <h3>
      {p.greeting} {p.name}
    </h3>
  )
}
