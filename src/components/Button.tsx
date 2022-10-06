import {
  ButtonProps as MUIButtonProps,
  Button as MUIButton,
} from '@mui/material'

/** Основная кнопка */
export const Button = (props: MUIButtonProps) => {
  return <MUIButton {...props} />
}
