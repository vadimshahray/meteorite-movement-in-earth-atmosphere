import { Snackbar } from '@components'
import { OptionsObject } from 'notistack'

const DURATION = 3000

const defaultOptions: OptionsObject = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  autoHideDuration: DURATION,
}

export const errorSnackbar = (
  title: string,
  options?: OptionsObject,
): OptionsObject => ({
  content: (key, message) => (
    <Snackbar
      id={key.toString()}
      variant='error'
      title={title}
      message={message!.toString()}
    />
  ),
  preventDuplicate: true,
  ...defaultOptions,
  ...options,
})

export const infoSnackbar = (
  title: string,
  options?: OptionsObject,
): OptionsObject => ({
  content: (key, message) => (
    <Snackbar
      id={key.toString()}
      variant='info'
      title={title}
      message={message!.toLocaleString()}
    />
  ),
  ...defaultOptions,
  ...options,
})
