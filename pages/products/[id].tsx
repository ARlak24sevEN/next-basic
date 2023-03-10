import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import style from "../../styles/ProductDetail.module.css"

interface Product {
  id: string
  title: string
  description: string
  price: number
  thumbnail: string
  category:string
  brand:string
  rating:number
}
export default function ProductDerail({ product }: { product: Product }) {
  //  console.log('id is : '+JSON.stringify({id}))
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className={style.container}>
        <div>
          <Image src={product.thumbnail} alt={product.title} width={300} height={300}></Image>
        </div>
        <div className={style.detail}>
          <h1>รหัสสินค้า : {product.id}</h1>
          <h1>ชื่อ : {product.title}</h1>
          <h2 >หมวดหมุ่ : {product.category}</h2>
          <h3>แบรนด์ {product.brand}</h3>
          <p>{product.description}</p>
          <h2>ราคา {product.price} บาท</h2>
          <p>เรตติ้ง {product.rating}</p>
        </div>
      </div>

    </>
  )
}



export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await fetch("https://dummyjson.com/products?limit=10")
  const data = await resp.json()
  //  console.log('data response: ' + JSON.stringify(data))
  const paths = data.products.map((item: { id: string }) => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  })
  console.log('paths : ' + JSON.stringify(paths))
  return {
    paths,
    fallback: false
  }
}



// interface Props {
//     products: {id: string};
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  console.log('id is : ' + id)
  const resp = await fetch("https://dummyjson.com/products/" + id)
  const data = await resp.json()
  // console.log(data.products)
  // console.log(data.products)
  return {
    props: {
      product: data,

    },
  }
}
