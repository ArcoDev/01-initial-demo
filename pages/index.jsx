import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Christian</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Home</h1>
        <h1 className={styles.title}>
          {/* Ir a <a href="/about">About</a> */}
          {/* Next/Link es equivalente al anchor tag (a) nativo de html5, para que cuando apunte a cierta pagina, ya este cargada en memoria y se mas facil acceder (Link renderiza el a tal cual de html5) */}
          Ir a <Link href="/about">About</Link>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
