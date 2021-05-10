import styles from './layout.module.css';
import Navigation from './navigation';
import Link from 'next/link'; 

export const siteTitle = 'Miami Happy Hour Finder'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Navigation></Navigation>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}