import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import graphQLClient from '../GraphQLClient/graphQLClients'
import { ALL_ASSET_DATA } from '../GraphQLClient/queries'
import { Header }  from '../Components/Header/header'
import { Card } from '../Components/Card/card'
import { Loader } from '../Components/Loader/loader'

export const getStaticProps: GetStaticProps = async () => {

  const data = await graphQLClient.request(ALL_ASSET_DATA);

  if(data.loading) {
    return <Loader />
  } else{
  return{
    props: { data }
  };
}
}
const Home: NextPage = ({data}: any) => {

  return (
    <div className= "container">
      <Head>
        <title>Asalytics</title>
        <meta name="description" content="List of Algorand project" />
      </Head>

        {/* <Loader />  */}
      <main className={styles.content}>
        <Header />

        <div className={styles.text}>
          <h2>List of Algorand Standard Assets <br />on ASAlytics</h2>
        </div>


        <div className={styles.cards}>
          {data.loading ? <Loader /> : 
            data.asalist.result.map((asset: any) => {
            return(
              <Card asset= {asset} key={asset.assetId}/>  
          )
        })}
        </div>

      </main>

    </div>
  )
}


export default Home
