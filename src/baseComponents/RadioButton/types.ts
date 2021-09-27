export type TRadioButtonKind = 'one'
export type TRadioButtonTSize = 'one'

export interface IRadioButtonProps {
  children?: React.ReactNode
  className?: string
  classNameLabel?: string
  size?: TRadioButtonTSize
  kind?: TRadioButtonKind
  checked?: boolean
  disabled?: boolean
  name?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
