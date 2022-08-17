import styles from '../Loader/loader.module.css'

export const Loader = () => {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    )
}