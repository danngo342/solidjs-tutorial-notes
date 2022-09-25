import { JSX, Suspense } from 'solid-js'
import fetchProfileData from './fetchProfileData'
import Profile from './Profile'

export default function SuspenseList(): JSX.Element {
  const { user, posts, trivia } = fetchProfileData()

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Profile user={user()} posts={posts()} trivia={trivia()} />
    </Suspense>
  )
}
