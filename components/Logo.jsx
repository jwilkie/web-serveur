import styles from './Logo.module.css'

export default function Logo() {
    return <div className={styles.logo}>
        <div className={styles.title}>
            <div>Web</div>
            <span>Client</span>
        </div>
    </div>
}
