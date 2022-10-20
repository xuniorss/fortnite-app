import Router from "next/router";
import firebase from "../services/firebaseConnection";

type AuthContextData = {
    signIn: (credentials: SignInProps) => Promise<void>
}

type SignInProps = {
    email: string
    password: string
}

type SignUpProps = {
    name: string
    email: string
    password: string
}