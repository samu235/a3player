import { useState } from 'react';
import ModifySiteService from '../../services/ModifySiteService';
import newSiteService from '../../services/newSiteService';
import Button from '../button/Button';
import { useDispatch } from 'react-redux'
import { addOneSite, modifyOneSite } from '../../reducers/sitesReducer';
import styles from './FormSite.module.css'

export default function FromSite(props) {
    const [msnError, setMsnError] = useState("")
    const dispatch = useDispatch(state => state.sitesStore)

    function returnOk() {
        setMsnError("")
        props?.returnOK()

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        const id = props?.item?._id

        if (id) {
            ModifySiteService(
                id,
                event.target.elements.path.value,
                event.target.elements.description.value,
                event.target.elements.publicPath.value,
                event.target.elements.key.value,
                event.target.elements.name.value,
            ).then(data => {
                if (data?.error) {
                    console.log("error -- ", data?.error)
                    setMsnError(data?.error)
                } else {
                    dispatch(modifyOneSite(data))
                    returnOk()
                }

            }).catch(e => {
                console.log("error --", e)
                setMsnError(e)
            })
        } else {
            const fromdata = new FormData(form)
            const payload = new URLSearchParams(fromdata)
            newSiteService(payload).then(data => {
                if (data?.error) {
                    console.log("error -- ", data?.error)
                    setMsnError(data?.error)
                } else {
                    dispatch(addOneSite(data))
                    returnOk()
                }
            }).catch(e => {
                console.log("error --", e)
                setMsnError(e)
            })
        }

    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <div className={styles.name}>
                        <label htmlFor="name">name:</label>
                    </div>
                    <div className={styles.text}>
                        <input type='text' name="name" defaultValue={props?.item?.name} required></input>
                    </div>
                </div>
                <div  className={styles.row}>
                    <div className={styles.name}>
                        <label htmlFor="path">path:</label>
                    </div>
                    <div className={styles.text}>
                        <input type='text' name="path" defaultValue={props?.item?.path} required></input>
                    </div>
                </div>
                <div  className={styles.row}>
                    <div className={styles.name}>
                        <label htmlFor="publicPath">publicPath:</label>
                    </div>
                    <div className={styles.text}>
                        <input type='text' name="publicPath" defaultValue={props?.item?.publicPath} required></input>
                    </div>
                </div>
                <div  className={styles.row}>
                    <div className={styles.name}>
                        <label htmlFor="key">key:</label>
                    </div>
                    <div className={styles.text}>
                        <input type='text' name="key" defaultValue={props?.item?.key} required></input>
                    </div>
                </div>
                <div  className={styles.row}>
                    <div className={styles.name}>
                        <label htmlFor="description">description:</label>
                    </div>
                    <div className={styles.text}>
                        <input type='text' name="description" defaultValue={props?.item?.description} required></input>
                    </div>
                </div>
                <div  className={styles.row}>
                    <div className={styles.name}>
                        <label htmlFor="site">site:</label>
                    </div>
                    <div className={styles.text}>
                        <input type='text' name="site" defaultValue={props?.item?.site} required></input>
                    </div>
                </div>
                <div>
                    {msnError}
                </div>
                <div>
                    <Button  type='submit'>Guardar</Button>
                </div>
            </form>
        </>
    );
}