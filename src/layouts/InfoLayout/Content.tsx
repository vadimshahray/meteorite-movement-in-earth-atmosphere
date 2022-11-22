import { Container } from 'components'
import { useSelector } from 'react-redux'
import { selectIsModeling } from 'selectors'
import styles from './styles.module.css'
import { ConfigureLayout } from '../ConfigureLayout'
import { ModelingInfoLayout } from '../ModelingInfoLayout'

export const Content = () => {
  const isModeling = useSelector(selectIsModeling)

  return (
    <Container disableGutters sx={{ flexGrow: 1 }}>
      {isModeling ? (
        <ModelingInfoLayout />
      ) : (
        <ConfigureLayout className={styles.configure_layout} />
      )}
    </Container>
  )
}
