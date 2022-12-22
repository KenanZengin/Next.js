import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <h1>Next js pre-rendering</h1>
      <Link href="/users">
        <h2>Go visit Users</h2>
      </Link>
      <Link href="/posts">
        <h2>Go visit Posts</h2>
      </Link>
    
    </>
  )
}
