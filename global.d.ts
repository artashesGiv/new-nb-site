import type { IconsId } from '@/shared'
import type { ReactNode } from 'react'

declare global {
  type Maybe<T> = T | null | undefined
  type Icons = IconsId
  type DefaultProps<T = object> = {
    className?: string
    onClick?: () => void
    ref?: Ref<HTMLElement>
  } & T
  type DefaultPropsWithChildren<T = object> = DefaultProps<T> & {
    children?: ReactNode
  }
}

export {}
