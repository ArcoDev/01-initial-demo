import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../../components/Navbar'
import styles from '../../styles/Home.module.css'

export default function ContactPage() {
  return (
    <div className={styles.container}>
     {/* Head es un componente de especial de next, la información del head del html5 se diferencia por la inicial en mayuscula, se puede tener mas de un Head, pero no se recomienda sobreescribir los elementos */}
      <Head>
        <title>Contact - Christian</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <h1>Contact Page</h1>
        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact/index.jsx</code>
        </p>
      </main>
    </div>
  )
}
