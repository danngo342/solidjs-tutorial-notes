import './Popup.css'
import { JSX } from 'solid-js'
import { Portal } from 'solid-js/web'

export default function Popup(): JSX.Element {
  return (
    <div class='app-container'>
      <p>Just some text inside a div that has a restricted size.</p>
      <Portal>
        <div class='popup'>
          <h1>Popup</h1>
          <p>Some text you might need for something or other.</p>
        </div>
      </Portal>
    </div>
  )
}
