import { useParams } from 'react-router-dom'
import { FlowerDetails } from './FlowerDetails'
import { useEffect, useState } from 'react'
import { useInject } from '_di/container'
import { Flower } from 'core/Flowers/domain/Flower'

export const FlowerDetailsController = () => {
  const { id } = useParams<{ id: string }>()
  const getFlowerDetails = useInject('getFlowerDetails')

  const [flowerDetails, setflowerDetails] = useState<Flower | undefined>()

  useEffect(() => {
    const fetchFlowers = async () => {
      const flowers = await getFlowerDetails(id!)
      setflowerDetails(flowers || [])
    }
    fetchFlowers()
  }, [])

  return (
    <FlowerDetails
      fertilizerType={flowerDetails?.fertilizerType}
      name={flowerDetails?.name}
      price={flowerDetails?.price}
      wateringsPerWeek={flowerDetails?.wateringsPerWeek}
      image={flowerDetails?.imgUrl}
    />
  )
}
