import { FC } from 'react'
import './FlowerDetails.css'
import { BuyButton } from './_components/BuyButton'
import { Link } from 'react-router-dom'

interface Prosps {
  name: string
  image: string
  price: number
  wateringsPerWeek: number
  fertilizerType: string
  binomialName: string
  isSmallScreen: boolean
}

export const FlowerDetails: FC<Prosps> = ({
  name,
  fertilizerType,
  price,
  wateringsPerWeek,
  image,
  binomialName,
  isSmallScreen
}) => {
  return (
    <div className="flower-details-page">
      <div className="location">
        <Link to="/" className="location-link">
          Inicio
        </Link>
        <img src="/img/Frame.svg" />
        <p>{name}</p>
      </div>
      <div className="flower-details-container">
        <img className="flower-image" src={image} alt={name} />
        <div className="flower-details">
          <h1>{name}</h1>
          {isSmallScreen && <p className="binomialNameQuery">{binomialName}</p>}
          <h3>€{price}</h3>
          <ul>
            <li>Regar {wateringsPerWeek} vez por semana</li>
            <li>Fertilizar con {fertilizerType}</li>
          </ul>
          <BuyButton />
        </div>
      </div>
    </div>
  )
}
