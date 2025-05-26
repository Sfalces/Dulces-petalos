import { FC } from 'react'
import './PriceCell.css'

interface Props {
  price: number
}

export const PriceCell: FC<Props> = ({ price }) => {
  return (
    <div className="container">
      <p className="text">€{price}</p>
    </div>
  )
}
