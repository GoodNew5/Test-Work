export type TFieldKind = 'one'
export type TFieldSize = 'one'

export interface IFieldProps {
  kind?: TFieldKind
  name?: string
  placeholder?: string
  classNameLabel?: string
  children?: React.ReactNode
  startComponent?: React.ReactNode
  endComponent?: React.ReactNode
  className?: string
  size?: TFieldSize
  isValid?: boolean
  disabled?: boolean
  component?: React.ReactElement
  classNameEndComponent?: string
  type?: string
  value?: any
  classNameMessage?: string
  readOnly?: boolean
  onBlur?: ((event: React.FocusEvent) => void) | null
  maxLength?: number
  label?: string | React.ReactNode
  defaultValue?: string
  autoFocus?: boolean
  message?: React.ReactNode
  isTouched?: boolean
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>, ...rest: any) => void) | null
  onEnter?: (() => void) | null
}
