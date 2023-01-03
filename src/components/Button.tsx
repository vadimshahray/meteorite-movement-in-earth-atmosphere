import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material'

/** Основная кнопка */
export const Button = (props: MUIButtonProps) => {
  return <MUIButton {...props} />
}
