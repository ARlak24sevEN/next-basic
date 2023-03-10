import styles from "../styles/About.module.css"
import Image from "next/image"
import Head from "next/head"
export default function About() {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา | Arlak </title>
        <meta name="keyword" content="arlak,ร้านค้า" />
      </Head>
      <div className={styles.container}>
        <h1>เกี่ยวกับเรา</h1>
        <Image src="./about.svg" alt="about logo" width={400} height={400} />
      </div>

    </>)
}
