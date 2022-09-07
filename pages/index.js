import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Register from './Register'
import RegisterCarousel from './RegisterCarousel'

export default function Home() {
  return (
    <div className={`row g-0 wrapper ${styles.wrapper}`}>
      <div className={`col-lg-6 col-12 p-3 ${styles.loginWrapper}`}>
        <Register />
      </div>
      <div className={`col-lg-6 d-lg-block d-none  ${styles.carouselWrapper}`} style={{minHeight:'100vh', backgroundColor:'#3E1149'} }> 
        <RegisterCarousel />
      </div>
    </div>
  )
}
