import { For, JSX, Resource, Show, Suspense, SuspenseList } from 'solid-js'
import { Post, Trivia, User } from './fetchProfileData'

type ResourceData<T> = ReturnType<Resource<T>>

function ProfileDetails(p: { user: User | undefined }): JSX.Element {
  return <h1>{p.user?.name}</h1>
}

function ProfileTimeline(p: { posts: Post[] | undefined }): JSX.Element {
  return (
    <ul>
      <For each={p.posts}>{x => <li>{x.text}</li>}</For>
    </ul>
  )
}

function ProfileTrivia(p: { trivia: Trivia[] | undefined }): JSX.Element {
  return (
    <>
      <h2>Fun Facts</h2>
      <ul>
        <For each={p.trivia}>{x => <li>{x.text}</li>}</For>
      </ul>
    </>
  )
}

export default function Profile(p: {
  user: ResourceData<User>
  posts: ResourceData<Post[]>
  trivia: ResourceData<Trivia[]>
}): JSX.Element {
  return (
    <SuspenseList revealOrder='forwards' tail='collapsed'>
      <Show
        when={p.user && p.posts && p.trivia}
        fallback={<div>Profile not found</div>}
      >
        <ProfileDetails user={p.user} />
        <Suspense fallback={<h2>Loading posts...</h2>}>
          <ProfileTimeline posts={p.posts} />
        </Suspense>
        <Suspense fallback={<h2>Loading fun facts...</h2>}>
          <ProfileTrivia trivia={p.trivia} />
        </Suspense>
      </Show>
    </SuspenseList>
  )
}
