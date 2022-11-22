import { useSelector } from 'react-redux'
import { selectIsModeling } from 'selectors'
import styles from './styles.module.css'
import { ConfigureLayout } from '../ConfigureLayout'
import { ModelingInfoLayout } from '../ModelingInfoLayout'

export const InfoLayout = () => {
  const isModeling = useSelector(selectIsModeling)

  return isModeling ? (
    <ModelingInfoLayout />
  ) : (
    <ConfigureLayout className={styles.configure_layout} />
  )
}
