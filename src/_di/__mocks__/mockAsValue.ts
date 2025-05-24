import { mock, MockProxy } from 'jest-mock-extended'
import { asValue } from '../resolvers'
import { container } from '../container'
import { Container } from '../types'

export const mockAsValue = <T extends keyof Container>(moduleName: T): MockProxy<Container[T]> => {
  const mockedValue = mock<Container[T]>()

  container.register({
    [moduleName]: asValue(mockedValue)
  })

  return mockedValue
}
