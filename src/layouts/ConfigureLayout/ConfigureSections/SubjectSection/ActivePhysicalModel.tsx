import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectActiveObjectModel } from 'selectors'
import { physicalModels } from 'utils'

export const ActivePhysicalModel = () => {
  const activeModel = useSelector(selectActiveObjectModel)
  const activeModelName = physicalModels.find(
    (m) => m.key === activeModel,
  )?.name

  return <Typography>{`Активная модель тела: ${activeModelName}`}</Typography>
}
