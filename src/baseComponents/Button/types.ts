export type TButtonKind = 'one'

export type TButtonSize = 'one'

export type TButtonShape = 'square' | 'round'

export interface IButtonProps {
  kind?: TButtonKind
  shape?: TButtonShape
  wide?: boolean
  stretchUp?: boolean
  size?: TButtonSize
  disabled?: boolean
  isActive?: boolean
  className?: string
  children?: React.ReactNode
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void
  component?: React.ReactElement
}
