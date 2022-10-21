import Head from 'next/head'
import Link from 'next/link'
import { FormEvent, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/AuthContext'
import styles from '../styles/styles.module.scss'
import { canSSRGuest } from '../utils/canSSRGuest'

export default function Home() {
    const { signIn } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async(event: FormEvent) => {
        event.preventDefault()

        if(email === '' || password === '') {
            toast.warn('Fill in all fields.')
            return
        }

        setLoading(true)
        let data = { email, password }
        await signIn(data)
        setLoading(false)
    }

    return (
        <>
            <Head>
                <title>Account - Fortnite.GG</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.login}>                    
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit">{!loading ? 'Sign In' : 'Entering...'}</button>
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

export const getServerSideProps = canSSRGuest(async(ctx) => {
    return {
        props: {}
    }
})