import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [slidesRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={slidesRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} height={480} width={520} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.90 </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} height={480} width={520} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.90 </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} height={480} width={520} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.90 </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} height={480} width={520} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.90 </span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
