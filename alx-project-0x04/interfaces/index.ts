import type { ReactNode } from 'react'

export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
  ariaLabel?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
}

export interface LayoutProps {
  children: ReactNode
}

export interface PageRouteProps {
  pageRoute: string
}
