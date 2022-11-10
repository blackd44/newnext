import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  console.log(Date.now())
  return (
    <>
      <Head>
        <title>Strikers</title>
      </Head>
      <main>
        <h1>helloooo</h1>
      </main>
    </>
  )
}
