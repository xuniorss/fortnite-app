import Head from "next/head";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from '../../styles/styles.module.scss'
import { toast } from 'react-toastify'

export default function SignUp() {
    const { signUp } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignUp = async(event: FormEvent) => {
        event.preventDefault()

        if(email === '' || username === '' || password === '') {
            toast.warn('Fill in all fields')
            return
        }

        setLoading(true)
        let data = { email, username, password }
        await signUp(data)
        setLoading(false)
    }

    return (
        <>
            <Head>
                <title>Account - Fortnite.GG</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.login}>                    
                    <form onSubmit={handleSignUp}>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit">{!loading ? 'Sign Up' : 'Registering you...'}</button>
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