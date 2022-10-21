import Router from "next/router";
import { api } from "../services/apiClient";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean
    signOut: () => void
    signUp: (credentials: SignUpProps) => Promise<void>
    signIn: (credentials: SignInProps) => Promise<void>
}

type UserProps = {
    readonly id: string
    email: string
    username: string
}

type SignInProps = {
    email: string
    password: string
}

type SignUpProps = {
    email: string
    username: string
    password: string
}

type AuthProviderProps = { children: ReactNode }

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    try {
        destroyCookie(undefined, '@nextauth.token.fortnite')
        Router.push('/')
    } catch (error) {
        toast.error('Problem logging out')
        console.log('Problem logging out: ', error)
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user

    useEffect(() => {
        const { '@nextauth.token.fortnite': token } = parseCookies()
        if(token) {
            api.get('/me').then(response => {
                const { id, email, username } = response.data
                setUser({ id, email, username })
            }).catch(() => { signOut() })
        }
    }, [])

    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post('/session', { email, password })
            const { id, username, token } = response.data

            setCookie(undefined, '@nextauth.token.fortnite', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            setUser({ id, username, email })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            toast.success('Successfully logged in.')
            Router.push('/shop')
        } catch (error) {
            toast.error(error.response?.data.error)
            console.log('Error accessing', error)
        }
    }

    async function signUp({ email, username, password }: SignUpProps) {
        try {
            const response = await api.post('/user', { email, username, password })
            toast.success('Account created successfully.')
            Router.push('/')
        } catch (error) {
            toast.error(error.response.data.error)
            console.log('Error registering: ', error)
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            signOut,
            signUp,
            signIn
        }}>
            { children }
        </AuthContext.Provider>
    )
}