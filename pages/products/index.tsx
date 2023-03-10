import Head from "next/head"
import { GetStaticProps } from "next"
import Image from "next/image"
import styles from "../../styles/Product.module.css"
import Link from "next/link"

export default function Index({ products }: Props) {

   // console.log('inIndex product : ' + JSON.stringify(products))
    return (
        <>
            <Head>
                <title>สินค้าของของเรา | Arlak </title>
                <meta name="keyword" content="arlak,ร้านค้า" />
            </Head>
            <h1>สินค้าของของเรา</h1>
            <div className={styles.container}>
                {products.map(item => (
                    <div key={item.id}>
                        <Link href={'/products/'+item.id}>   <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.des}>{item.description}</p>
                            <p className={styles.price}>ราคา {item.price} บาท</p>
                            <Image src={item.thumbnail} width={300} height={300} alt={item.title}></Image>
                        </Link>

                    </div>
                ))}
            </div>

        </>
    )
}

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
}

interface Props {
    products: Product[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const resp = await fetch("https://dummyjson.com/products?limit=10")
    const data = await resp.json()
    // console.log(data.products)
    // console.log(data.products)
    return {
        props: {
            products: data.products,

        },
    }
}