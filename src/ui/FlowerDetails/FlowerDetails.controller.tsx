import { useParams } from 'react-router-dom'
import { FlowerDetails } from './FlowerDetails'
import { useEffect, useState } from 'react'
import { useInject } from '_di/container'
import { FlowerDetails as FlowerData } from 'core/Flowers/domain/FlowerDetails'

export const FlowerDetailsController = () => {
  const { id } = useParams<{ id: string }>()
  const getFlowerDetails = useInject('getFlowerDetails')

  const [flowerDetails, setflowerDetails] = useState<FlowerData | undefined>()
  const [isSmallScreen, setisSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setisSmallScreen(mediaQuery.matches)

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setisSmallScreen(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    const fetchFlowers = async () => {
      const flowers = await getFlowerDetails(id!)
      setflowerDetails(flowers || [])
    }

    fetchFlowers()

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  if (!flowerDetails) {
    return (
      <div className="loader-container">
        <div className="spinner" />
      </div>
    )
  }

  return (
    <FlowerDetails
      fertilizerType={flowerDetails.fertilizerType}
      name={flowerDetails.name}
      price={flowerDetails.price}
      wateringsPerWeek={flowerDetails.wateringsPerWeek}
      image={flowerDetails.imgUrl}
      binomialName={flowerDetails.binomialName}
      isSmallScreen={isSmallScreen}
    />
  )
}
