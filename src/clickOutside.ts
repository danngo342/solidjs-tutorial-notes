import { Accessor, JSX, onCleanup } from 'solid-js'

type DomClickHandler = NonNullable<HTMLElement['onclick']>

// TODO: clean up code
export default function clickOutside(
  el: Element,
  accessor: Accessor<JSX.Directives['clickOutside']>,
): void {
  const onClick: DomClickHandler = e => {
    if (!el.contains(e.target as Element)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      accessor()?.(e)
    }
  }

  document.body.addEventListener('click', onClick)

  onCleanup(() => document.body.removeEventListener('click', onClick))
}
