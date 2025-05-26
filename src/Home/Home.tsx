import { Flower } from 'core/Flowers/domain/Flower'
import './Home.css'
import { FC } from 'react'
import { FlowerCard } from './_components/FlowerCard/FlowerCard'

interface Props {
  filteredFlowers: Flower[]
  flowerFilter: string
  setflowerFilter: React.Dispatch<React.SetStateAction<string>>
}

export const Home: FC<Props> = ({ filteredFlowers, flowerFilter, setflowerFilter }) => {
  return (
    <div className="home">
      <div className="search-container">
        <img src="/img/Search.svg" alt="Buscar" className="search-image" />
        <input
          data-testid={'search'}
          type="text"
          placeholder="Busca en nuestra tienda"
          value={flowerFilter}
          onChange={e => setflowerFilter(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="card-container">
        {filteredFlowers.map((flower: Flower) => {
          return (
            <FlowerCard
              key={flower.id}
              id={flower.id}
              binomialName={flower.binomialName}
              image={flower.imgUrl}
              name={flower.name}
              price={flower.price}
            />
          )
        })}
      </div>
    </div>
  )
}
