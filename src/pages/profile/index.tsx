import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { canSSRAuth } from "../../utils/canSSRAuth"

export default function Profile() {
    const { signOut, user } = useContext(AuthContext)

    const handleSair = () => { signOut() }

    return (
        <>
            <h2>Profile</h2>
            <span>{user?.id}</span> <br />
            <span>{user?.username}</span> <br />
            <span>{user?.email}</span> <br />
            <button onClick={handleSair}>Sair</button>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async(ctx) => {
    return {
        props: {}
    }
})