import Head from "next/head";
import { useEffect, useState } from "react";
import { apiShop } from "../../services/apis/apiShop";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from './styles.module.scss'

export default function Shop() {
    const [all, setAll] = useState(null)
    const [daily, setDaily] = useState(null)
    const [featured, setFeatured] = useState(null)
    const [specialFeatured, setSpecialFeatured] = useState(null)

    const [totalDaily, setTotalDaily] = useState(0)

    useEffect(() => {
        const res = apiShop.get('/br').then((response) => {
            setAll(response.data)
            setDaily(response.data.data.daily)
            setFeatured(response.data.data.featured)
            setSpecialFeatured(response.data.data.specialFeatured)
        })
    }, [])

    useEffect(() => {
        setTotalDaily(daily?.entries.length)
    }, [daily])

    

    console.log(totalDaily)

    return (
        <>
            <Head>
                <title>Current Fortnite Item Shop</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.headerContent}>
                    <h1>Current Fortnite Item Shop</h1>
                    <span>Friday, October 21, 2022</span>
                    <h3>New items in 2 hours</h3>
                </div>
                <div className={styles.filter}>
                    <button>All</button>
                    <button>New</button>
                    <button>My Wishlist</button>
                    <button>Different than yesterday</button>
                    <button>Outfits</button>
                    <button>Emoters</button>
                    <button>Harvesting Tools</button>
                    <button>Gliders</button>
                </div>
                <div className={styles.shop}>
                    shop here
                </div>
            </div>
        </>
    )
}