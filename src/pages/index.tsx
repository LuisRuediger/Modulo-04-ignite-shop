import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} height={480} width={520} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.90 </span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} height={480} width={520} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.90 </span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
