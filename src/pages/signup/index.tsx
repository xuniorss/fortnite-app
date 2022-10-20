import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/styles.module.scss'

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Account - Fortnite.GG</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.login}>                    
                    <form>
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />

                        <button type="submit">Sign Up</button>
                    </form>
                    <Link href={'/'}>
                        <a>Come back and Sign In</a>
                    </Link>
                    <p>This account is for this site only</p>
                    <p>Do NOT enter your Epic Games login credentials anywhere</p>
                </div>
            </div>
        </>
    )
}