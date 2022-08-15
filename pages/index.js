import Head from 'next/head'
import { Suspense, useEffect } from 'react'
import ItemList from '../components/itemList/ItemList'
import ModalCreateItem from '../components/modalCreateItem/ModalCreateItem'
import getSitesServices from '../services/getSitesServices'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Home.module.css'
import { setSitesAll } from '../reducers/sitesReducer'

export default function Home() {
    const dispatch = useDispatch()
    const sites = useSelector(state => state.sitesStore)

    useEffect(() => {
        if (dispatch) {
            getSitesServices().then(data => dispatch(setSitesAll(data)))
        }
    }, [dispatch])

    return (
        <Suspense fallback={<div>cargando</div>}>
            <div>
                <Head>
                    <title>A3media</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <ModalCreateItem />
                <div className={styles.containerListItem}>
                    <div className={styles.listItem}>
                        {sites.sites?.map(item => {
                            return (
                                <ItemList key={item._id} item={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Suspense>

    )
}
