import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/styles.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Account - Fortnite.GG</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.login}>                    
                    <form>
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />

                        <button type="submit">Sign In</button>
                    </form>
                    <Link href={'/signup'}>
                        <a>Create account</a>
                    </Link>
                    <p>This account is for this site only</p>
                    <p>Do NOT enter your Epic Games login credentials</p>
                </div>
            </div>
        </>
    )
}