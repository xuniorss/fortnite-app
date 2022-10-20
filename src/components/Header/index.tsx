import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href={'#'}>
                    <a>Fortnite.gg</a>
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