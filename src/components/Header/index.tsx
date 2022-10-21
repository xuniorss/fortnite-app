import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import logo from '../../../public/assets/logo.png'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export function Header() {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>                
                <Image src={logo} alt='logo' width={300} height={50} />
                <nav>
                    <Link href={'/shop'}>
                        <a>Shop</a>
                    </Link>
                    {isAuthenticated ? (
                        <Link href={'/profile'}>
                            <a>Profile</a>
                        </Link>
                    ) : ''}
                </nav>
            </div>
        </header>
    )
}