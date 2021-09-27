export type TRadioButtonKind = 'one' | 'two'
export type TRadioButtonSize = 'one' | 'two'

export interface IRadioButtonProps {
  src: string | undefined | null
  kind?: TRadioButtonKind
  size?: TRadioButtonSize
  className?: string
  withOverlayOnHover?: boolean
}
