import { useState } from 'react';
import ModifySiteService from '../../services/ModifySiteService';
import newSiteService from '../../services/newSiteService';

export default function FromSite(props) {
    const [msnError,setMsnError] = useState("")

    function returnOk(){
        console.log("TODO OK")
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
                console.log(data)
                if (data?.error) {
                    console.log("error -- ", data?.error)
                    setMsnError(data?.error)
                }else{
                    returnOk()
                }

            }).catch(e => {
                console.log("error --", e)
                setMsnError(data?.error)
            })
        } else {
            const fromdata = new FormData(form)
            const payload = new URLSearchParams(fromdata)
            newSiteService(payload).then(data => {
                console.log(data)
                if (data?.error) {
                    console.log("error -- ", data?.error)
                    setMsnError(data?.error)
                }else{
                    returnOk()
                }
            }).catch(e => {
                console.log("error --", e)
                setMsnError(data?.error)
            })
        }

    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">name:</label>
                    <input type='text' name="name" defaultValue={props?.item?.name} required></input>
                </div>
                <div>
                    <label htmlFor="path">path:</label>
                    <input type='text' name="path" defaultValue={props?.item?.path} required></input>
                </div>
                <div>
                    <label htmlFor="publicPath">publicPath:</label>
                    <input type='text' name="publicPath" defaultValue={props?.item?.publicPath} required></input>
                </div>
                <div>
                    <label htmlFor="key">key:</label>
                    <input type='text' name="key" defaultValue={props?.item?.key} required></input>
                </div>
                <div>
                    <label htmlFor="description">description:</label>
                    <input type='text' name="description" defaultValue={props?.item?.description} required></input>
                </div>
                <div>
                    <label htmlFor="site">site:</label>
                    <input type='text' name="site" defaultValue={props?.item?.site} required></input>
                </div>
                <div>
                    {msnError}
                </div>
                <div>
                    <button type='submit'>Guardar</button>
                </div>
            </form>
        </>
    );
}