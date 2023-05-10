import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat burgers | Main</title>
        <meta name="title" content="Fat burgers" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}> Main page</h1>
        <div className={styles.mainImage}>
          <Image src='/fatburger.png' alt='fat burger' width={400} height={300} />
        </div>
        <Link href="/burgers">All burgers</Link>
      </div>
    </>
  )
}
