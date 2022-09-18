/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-namespace */
export {}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      clickOutside: (event: MouseEvent) => void
    }
    // interface DirectivesFuntion { }
    // interface ExplicitProperties { // prop:____ }
    // interface ExplicitAttributes { // attr:____ }
    // interface CustomEvents { // on:____ }
    // interface CustomCaptureEvents { // oncapture:____ }
  }
}
