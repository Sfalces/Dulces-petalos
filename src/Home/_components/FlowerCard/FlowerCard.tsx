import './FlowerCard.css'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ArrowCircle } from './_components/ArrowCircle'
import { PriceCell } from './_components/PriceCell'

interface Props {
  name: string
  binomialName: string
  image: string
  id: string
  price: number
}

export const FlowerCard: FC<Props> = ({ name, binomialName, image, price, id }) => {
  return (
    <Link to={`/flowerDetails/${id}`} className="link">
      <div className="flower-card">
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
    </Link>
  )
}
