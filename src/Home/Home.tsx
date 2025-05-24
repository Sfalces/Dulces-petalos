import { Flower } from 'core/Flowers/domain/Flower'
import './Home.css'
import { FC } from 'react'
import { FlowerCard } from './_components/FlowerCard/FlowerCard'

interface Props {
  flowers: Flower[]
}

export const Home: FC<Props> = ({ flowers }) => {
  return (
    <div className="home">
      {flowers.map((flower: Flower) => {
        return (
          <FlowerCard
            key={flower.id}
            binomialName={flower.binomialName}
            image={flower.imgUrl}
            name={flower.name}
            price={flower.price}
          />
        )
      })}
    </div>
  )
}
