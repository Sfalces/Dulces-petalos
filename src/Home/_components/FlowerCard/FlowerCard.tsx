import { ArrowCircle } from './_components/ArrowCircle'
import { PriceCell } from './_components/PriceCell'
import './FlowerCard.css'
import { FC } from 'react'

interface Props {
  name: string
  binomialName: string
  image: string
  price: number
}

export const FlowerCard: FC<Props> = ({ name, binomialName, image, price }) => {
  return (
    <div className="card-container">
      <p className="name">{name}</p>
      <p className="binomialName">{binomialName}</p>
      <div className="image-wrapper">
        <img className="image-container" src={image} alt={name} />
        <div className="price">
          <PriceCell price={price} />
        </div>
        <div className="arrow-circle">
          <ArrowCircle />
        </div>
      </div>
    </div>
  )
}
