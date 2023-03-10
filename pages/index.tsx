import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซต์</h1>
        <Image src="./shopping.svg" alt="shopping photo" width={400} height={400}/>
        <p>ยินดีตอนรับสู้ร้านค้า</p>
        <Link href="./products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>
      </div>


    </>
  )
}
