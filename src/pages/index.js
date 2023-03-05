import Head from 'next/head'
import { JetBrains_Mono } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const JetBrains = JetBrains_Mono({
  subsets: ['latin'],
})
export default function Home() {
  return (
    <>
      <Head>
        <title>Terminal</title>
        <meta
          name="description"
          content="Terminal feito para treinar ReactJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={(styles.main, JetBrains.className)}>
        <div className={styles.content_terminal}>
          <div className={styles.content_header}>
            <section>
              <div></div>
              <div></div>
              <div></div>
            </section>
            <p>Bash</p>
            <span></span>
          </div>
          <hr className={styles.divider} />
          <div className={styles.content_body}>
            <p>
              <span>$</span>yarn init{' '}
              <span className={styles.content_my_profile}>my_profile</span>
            </p>
            <p>yarn init v.2.0.2.3</p>
            <p>
              <span>name:</span>Msamuelsons
            </p>
            <p>
              <span>version(1.0.0):</span>1.1.0
            </p>
            <p>
              <span>description:</span>Olá, quero agradecer a todos que
              dedicaram seu tempo visitando essa humilde, porém acolhedora
              página.
            </p>
            <p>
              <span>git repository:</span>(
              <a href="https://github.com/Msamuelsons" target={'_blank'}>
                https://github.com/Msamuelsons
              </a>
              )
            </p>
            <p>
              <span>author (Msamuelsons):</span>Marcos Samuel
            </p>
            <section className={styles.content_footer}>
              <p>✨ Done in 4.06s.</p>
              <p>success Saved package.json</p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
