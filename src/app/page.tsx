import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, Web!
      <br />
      <img src="/flamingos.png" alt="flamingo" />
    </>
  )
}
