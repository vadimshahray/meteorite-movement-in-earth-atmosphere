import { Button } from 'components'
import { useDialog } from 'hooks'
import { PickPlanetModelDataDialog } from './PickPlanetModelDataDialog'

export const PickPlanetModelDataButton = () => {
  const { show, close } = useDialog()

  const handleClick = () => {
    show(<PickPlanetModelDataDialog onClose={close} />)
  }

  return (
    <Button variant='outlined' onClick={handleClick}>
      Данные планет
    </Button>
  )
}
