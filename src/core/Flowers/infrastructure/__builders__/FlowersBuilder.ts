import { Flower } from 'core/Flowers/domain/Flower'
import { FlowerDto } from '../dto/FlowerDto'

export const aFlower = (...options: Partial<FlowerDto>[]): FlowerDto => {
  const defaults: FlowerDto = {
    id: '1',
    name: 'Rosa',
    price: 10,
    binomialName: 'RosusLupus',
    fertilizerType: 'nitrato',
    heightInCm: 1,
    wateringsPerWeek: 1,
    imgUrl: 'image'
  }

  return Object.assign({}, defaults, ...options)
}
