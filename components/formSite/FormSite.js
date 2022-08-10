import React, { useState } from 'react';
import newSiteService from '../../services/newSiteService';

export default function FromSite(props) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        const fromdata = new FormData(form)
        const payload = new URLSearchParams(fromdata)
        console.log([...payload])
       
        newSiteService(payload).then(data => {
            console.log(data)
            if(data?.error){
                console.log("error -- ",data?.error)
            }
        }).catch(e =>{
            console.log("error --",e)
        })
    };
    
    return (
        <>
            <form onSubmit={handleSubmit} method='post'>
                <div>
                    <label htmlFor="name">name:</label>
                    <input type='text' name="name" required></input>
                </div>
                <div>
                    <label htmlFor="path">path:</label>
                    <input type='text' name="path" required></input>
                </div>
                <div>
                    <label htmlFor="publicPath">publicPath:</label>
                    <input type='text' name="publicPath" required></input>
                </div>
                <div>
                    <label htmlFor="key">key:</label>
                    <input type='text' name="key" required></input>
                </div>
                <div>
                    <label htmlFor="description">description:</label>
                    <input type='text' name="description" required></input>
                </div>
                <div>
                    <label htmlFor="site">site:</label>
                    <input type='text' name="site" required></input>
                </div>
                <div>
                    <button type='submit'>Guardar</button>
                </div>
            </form>
        </>
    );
}