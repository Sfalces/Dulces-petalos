import { Flower } from 'core/Flowers/domain/Flower'

export const aFlower = (...options: Partial<Flower>[]): Flower => {
  const defaults: Flower = {
    id: '1',
    name: 'Rosa',
    price: 10,
    binominalName: 'RosusLupus',
    fertilizerType: 'yes',
    heightInCm: 1,
    wateringsPerWeek: 1,
    imgUrl: 'image'
  }

  return Object.assign({}, defaults, ...options)
}
