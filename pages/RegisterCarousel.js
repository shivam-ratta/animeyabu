import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import ellipse from '../public/image/Ellipse2.png'
import Carousel from 'react-bootstrap/Carousel';
import avatar from '../public/image/avatar.png';
import logoxl from '../public/image/logotextXl.png';

export default function RegisterCarousel() {
  return (
    
      <Carousel interval={5000} controls={false} style={{minHeight:'100vh'}}>
        <Carousel.Item style={{minHeight:'100vh'}}>
          <div className={`my-5 ${styles.carouselEllipse}`}>
            <Image src={ellipse} />
            <div  className={`${styles.avatar}`}>
              <Image  src={avatar} />
            </div>
          </div>
          <Carousel.Caption>
            <Image src={logoxl} />
            <p className='w-75 mx-auto'>Assista animes online em HD, legendado ou dublado,
              no seu celular ou computador. 
              Animeyabu, o seu portal de animes online!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{minHeight:'100vh'}}>
          <div className={`my-5 ${styles.carouselEllipse}`}>
            <Image src={ellipse} />
            <div  className={`${styles.avatar}`}>
              <Image  src={avatar} />
            </div>
          </div>
          <Carousel.Caption>
            <Image src={logoxl} />
            <p className='w-75 mx-auto'>Assista animes online em HD, legendado ou dublado,
              no seu celular ou computador. 
              Animeyabu, o seu portal de animes online!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{minHeight:'100vh'}}>
          <div className={`my-5 ${styles.carouselEllipse}`}>
            <Image src={ellipse} />
            <div  className={`${styles.avatar}`}>
              <Image  src={avatar} />
            </div>
          </div>
          <Carousel.Caption>
            <Image src={logoxl} />
            <p className='w-75 mx-auto'>Assista animes online em HD, legendado ou dublado,
              no seu celular ou computador. 
              Animeyabu, o seu portal de animes online!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   
  )
}
