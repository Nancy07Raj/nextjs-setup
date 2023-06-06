import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/users">User</Link> <br />
      <Link href="/about">About</Link>
      <h1>Home page</h1>
    </main>
  )
}
