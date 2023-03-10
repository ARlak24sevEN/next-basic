import styles from "../styles/About.module.css"
import Image from "next/image"
import Link from "next/link"
export default function About() {
  return (

    <div className={styles.container}>
      <h1>เกี่ยวกับเรา</h1>
      <Image src="./about.svg" alt="about logo" width={400} height={400} />
    </div>
  )
}
