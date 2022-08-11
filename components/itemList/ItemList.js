import ModalCreateItem from '../modalCreateItem/ModalCreateItem'
import styles from './ItemList.module.css'
export default function ItemList(props){

    function deleteItem(){

    }

    return(
        <div className={styles.container}>
            <div className={styles.name}>{props?.item?.name}</div>
            <ModalCreateItem stylesBtn={styles.btn} item={props?.item}/>
            <button className={styles.btn}>eliminar</button>
        </div>
    )
}