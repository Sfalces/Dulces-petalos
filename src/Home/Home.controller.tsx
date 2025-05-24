import { useInject } from '_di/container'
import { Home } from './Home'
import { useEffect, useState } from 'react'
import { Flower } from 'core/Flowers/domain/Flower'

export const HomeController = () => {
  const getFlowers = useInject('getFlowers')
  const [flowers, setFlowers] = useState<Flower[]>([])

  useEffect(() => {
    const fetchFlowers = async () => {
      const flowers = await getFlowers()
      setFlowers(flowers || [])
    }
    fetchFlowers()
  }, [])

  return <Home flowers={flowers} />
}
