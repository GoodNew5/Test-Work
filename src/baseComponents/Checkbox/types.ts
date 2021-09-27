export type TCheckboxKind = 'one'
export type TCheckboxSize = 'one'
export type TCheckboxShape = 'round' | 'square'

export interface ICheckboxProps {
  disabled?: boolean
  checked?: boolean
  yCenter?: boolean
  shape?: TCheckboxShape
  className?: string
  placeholder?: string
  classNameBox?: string
  classNameLabel?: string
  kind?: TCheckboxKind
  size?: TCheckboxSize
  children?: React.ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  value?: string
}
