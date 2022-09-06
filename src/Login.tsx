import { Component, createSignal, Show } from 'solid-js'

const [loggedIn, setLoggedIn] = createSignal(false)

const toggle = (): void => {
  setLoggedIn(!loggedIn())
}

const Login: Component = () => (
  <Show when={loggedIn()} fallback={<button onClick={toggle}>Log in</button>}>
    <button onClick={toggle}>Log out</button>
  </Show>
)

export default Login
