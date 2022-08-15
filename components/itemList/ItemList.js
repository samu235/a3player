import Link from 'next/link'
import DeleteSiteService from '../../services/DeleteSiteService'
import Button from '../button/Button'
import ModalCreateItem from '../modalCreateItem/ModalCreateItem'
import ModalDeleteItem from '../modalDeleteItem/ModalDeleteItem'
import styles from './ItemList.module.css'

export default function ItemList(props) {

    return (

        <div className={styles.container}>
            <div className={styles.name}>{props?.item?.name}</div>
            <ModalCreateItem item={props?.item} />
            <ModalDeleteItem item={props?.item} />
            <Link href={"/site/" + props?.item?._id}>
                <a className={styles.aDefault}>
                    <Button cancelEventPrevent>Detalle</Button>
                </a>
            </Link>
        </div >


    )
}