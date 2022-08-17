import LOGO from '../../Assets/images/logo.png'
import Image from 'next/image'
import styles from '../Header/header.module.css' 
 
 export const Header = () => {
    return(
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <div>
                <Image src={LOGO}  width='30px' height='30px' alt="logo" />
            </div>
            <div>
                <p className={styles.logoText}>SAlytics</p>
            </div>
        </div>
        <div>
            <button>ANALYZE ASAs</button>
        </div>
    </div>
    )
 }