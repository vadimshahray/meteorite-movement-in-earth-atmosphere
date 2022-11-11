import { Snackbar } from 'components'
import { OptionsObject } from 'notistack'

const DURATION = 3000

export const errorSnackbar = (title: string): OptionsObject => ({
  content: (key, message) => (
    <Snackbar
      id={key.toString()}
      variant='error'
      title={title}
      message={message!.toString()}
    />
  ),
  autoHideDuration: DURATION,
  preventDuplicate: true,
})

export const infoSnackbar = (title: string): OptionsObject => ({
  content: (key, message) => (
    <Snackbar
      id={key.toString()}
      variant='info'
      title={title}
      message={message!.toLocaleString()}
    />
  ),
  autoHideDuration: DURATION,
})
