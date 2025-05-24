import { Container } from './types'
import { createContainer, InjectionMode } from 'awilix'
import { useMemo } from 'react'

export const container = createContainer<Container>({
  injectionMode: InjectionMode.PROXY
})

export const inject = <T extends keyof Container>(module: T): Container[T] => container.resolve<T>(module)

export const useInject = <T extends keyof Container>(module: T): Container[T] =>
  useMemo(() => inject<T>(module), [module])
