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
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Password' />

                        <button type="submit">Sign In</button>

                        <Link href={'/'}>
                            <a>Create account</a>
                        </Link>
                    </form>
                    <p>This account is for this site only Do NOT enter your Epic Games login credentials</p>
                </div>
            </div>
        </>
    )
}

//https://dash.fortnite-api.com/