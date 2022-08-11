import Button from '../button/Button'
import ModalCreateItem from '../modalCreateItem/ModalCreateItem'
import styles from './ItemList.module.css'
export default function ItemList(props){

    function deleteItem(){

    }

    return(
        <div className={styles.container}>
            <div className={styles.name}>{props?.item?.name}</div>
            <ModalCreateItem item={props?.item}/>
            <Button>Eliminar</Button>
            
        </div>
    )
}