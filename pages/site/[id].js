import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import getOneSiteServices from '../../services/getOneSiteServices';
import styles from './Site.module.css'

export default function Menu() {
    const [site, setSite] = useState({})
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (id) {
            getOneSiteServices(id).then(data => setSite(data))
        }
    }, [id])

    return (
        <div className={styles.container}>
            <div className={styles.containerChildren}>
                <div className={styles.title}>
                    <h2>{site.name}</h2>
                </div>
                <div className={styles.row}>
                    <div className={styles.name}>Name: </div>
                    <div className={styles.text}>{site.name}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.name}>Id: </div>
                    <div className={styles.text}>{site._id}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.name}>Description: </div>
                    <div className={styles.text}>{site.description}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.name}>Key: </div>
                    <div className={styles.text}>{site.key}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.name}>Path: </div>
                    <div className={styles.text}>{site.path}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.name}>PublicPath: </div>
                    <div className={styles.text}>{site.publicPath}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.name}>Site: </div>
                    <div className={styles.text}>{site.site}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.name}>CreateDate: </div>
                    <div className={styles.text}>{site.createDate}</div>
                </div>
            </div>
        </div>
    )
}
