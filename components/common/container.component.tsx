import { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}
export const Container = ({ children, className = '' }: Props) => {
  return (
    <div
      className={`relative mx-auto h-full w-full max-w-screen-2xl grow px-4 py-4 pb-10 sm:py-8 xl:px-0 landscape:sm:px-8 ${className}`}
    >
      {children}
    </div>
  )
}
