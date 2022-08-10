import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ItemList from '../components/itemList/ItemList'
import getSitesServices from '../services/getSitesServices'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [sites, setSites] = useState([])

  useEffect(() => {
    getSitesServices().then(data => setSites(data))
  }, [])

  return (
    <div >
      <Head>
        <title>A3media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.containerListItem}>
        <div className={styles.listItem}>
          {sites?.map(item => {
            return (
              <ItemList item={item} />
            )
          })}
        </div>
      </div>


    </div>
  )
}
