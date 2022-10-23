import Head from "next/head";
import { useEffect, useState } from "react";
import { apiShop } from "../../services/apis/apiShop";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from './styles.module.scss'
import { daysInWeek, daysToWeeks } from 'date-fns'
import { useGetDate } from "../../hooks/useGetDate";

export default function Shop() {
    const [all, setAll] = useState(null)
    const [daily, setDaily] = useState(null)
    const [featured, setFeatured] = useState(null)
    const [specialFeatured, setSpecialFeatured] = useState(null)

    const [totalDaily, setTotalDaily] = useState(0)
    const [totalFeatured, setTotalFeatured] = useState(0)
    const [totalSpecialFeatured, setTotalSpecialFeatured] = useState(0)

    useEffect(() => {
        const res = apiShop.get('/br').then((response) => {
            setAll(response?.data)
            setDaily(response?.data.data.daily)
            setFeatured(response?.data.data.featured)
            setSpecialFeatured(response?.data.data.specialFeatured)
            console.log(response.data)
        })
    }, [])

    useEffect(() => {
        setTotalDaily(daily?.entries.length)
        setTotalFeatured(featured?.entries.length)
        setTotalSpecialFeatured(specialFeatured?.entries.length)
    }, [daily, featured, specialFeatured])

    
    let allItems = Number(totalDaily + totalFeatured + totalSpecialFeatured)


    let date = useGetDate()

    return (
        <>
            <Head>
                <title>Current Fortnite Item Shop</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.headerContent}>
                    <h1>Current Fortnite Item Shop</h1>
                    <span>{date}</span>
                    <h3>New items in 8 hours</h3>
                </div>
                <div className={styles.filter}>
                    <button><span>{allItems}</span> All</button>
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