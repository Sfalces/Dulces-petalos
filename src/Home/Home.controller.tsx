import { useInject } from '_di/container'
import { Home } from './Home'
import { useEffect } from 'react'

export const HomeController = () => {
  const getFlowers = useInject('getFlowers')

  useEffect(() => {
    getFlowers().then(flowers => {
      console.log(flowers)
    })
  }, [getFlowers])

  return <Home />
}
