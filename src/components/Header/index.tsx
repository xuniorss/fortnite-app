import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import logo from '../../../public/assets/logo.png'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href={'/shop'}>
                    <Image src={logo} alt='logo' width={300} height={50} />
                </Link>
                <nav>
                    <Link href={'/shop'}>
                        <a>Shop</a>
                    </Link>
                    <Link href={'/profile'}>
                        <a>Profile</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}