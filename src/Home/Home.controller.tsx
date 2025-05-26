import { useInject } from '_di/container'
import { Home } from './Home'
import { useEffect, useState } from 'react'
import { Flower } from 'core/Flowers/domain/Flower'

export const HomeController = () => {
  const getFlowers = useInject('getFlowers')
  const [flowers, setFlowers] = useState<Flower[]>([])
  const [flowerFilter, setflowerFilter] = useState('')

  const filteredFlowers = flowers.filter(flower => flower.name.toLowerCase().includes(flowerFilter.toLowerCase()))

  useEffect(() => {
    const fetchFlowers = async () => {
      const flowers = await getFlowers()
      setFlowers(flowers || [])
    }
    fetchFlowers()
  }, [])

  return <Home filteredFlowers={filteredFlowers} flowerFilter={flowerFilter} setflowerFilter={setflowerFilter} />
}
