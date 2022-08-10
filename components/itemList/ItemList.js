import styles from './ItemList.module.css'
export default function ItemList(props){

    return(
        <div className={styles.container}>
            <div className={styles.name}>{props?.item?.name}</div>
            <button className={styles.btn}>editar</button>
            <button className={styles.btn}>eliminar</button>
        </div>
    )
}