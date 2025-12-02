import { ButtonProps } from '../../interfaces'
import type { ReactElement } from 'react'

const colorMap: Record<NonNullable<ButtonProps['buttonBackgroundColor']>, [string, string, string]> = {
  red: ['bg-red-500', 'hover:bg-red-400', 'focus:ring-red-300'],
  blue: ['bg-blue-500', 'hover:bg-blue-400', 'focus:ring-blue-300'],
  orange: ['bg-orange-500', 'hover:bg-orange-400', 'focus:ring-orange-300'],
  green: ['bg-green-500', 'hover:bg-green-400', 'focus:ring-green-300'],
}

const Button = ({
  buttonLabel,
  buttonSize,
  buttonBackgroundColor,
  action,
  ariaLabel,
  disabled,
  type,
  icon,
}: ButtonProps): ReactElement => {
  const [bgClass, hoverClass, focusRing] = buttonBackgroundColor
    ? colorMap[buttonBackgroundColor]
    : ['bg-slate-500', 'hover:bg-slate-400', 'focus:ring-slate-300']

  const sizeClass = buttonSize ?? ''

  return (
    <button
      type={type ?? 'button'}
      onClick={action}
      aria-label={ariaLabel ?? buttonLabel}
      disabled={disabled}
      className={`${bgClass} ${hoverClass} ${sizeClass} px-6 py-2 text-sm font-semibold rounded-lg transition duration-150 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${focusRing} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      {buttonLabel}
    </button>
  )
}

export default Button;
