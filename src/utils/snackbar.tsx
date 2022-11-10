import { Snackbar } from 'components'
import { OptionsObject } from 'notistack'

export const errorSnackbar = (title: string): OptionsObject => ({
  content: (key, message) => (
    <Snackbar
      id={key.toString()}
      variant='error'
      title={title}
      message={message!.toString()}
    />
  ),
  autoHideDuration: 3000,
  preventDuplicate: true,
})
