import styles from '../Card/card.module.css'


export const Card = ({asset}: any) => {
    return(
        <div className={styles.card}>
              <img src={asset?.logo} width='50px' height="50px" alt="" />
              <p className={styles.name}>{asset?.name}</p>
              <p className={`${asset?.available ? styles.greenBg : styles.redBg}`} id= {styles.availabilty}>
                {asset?.available ? 'Available' : 'Unavailable'}
            </p>
        </div>
    )
}