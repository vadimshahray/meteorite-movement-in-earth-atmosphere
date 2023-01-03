import { Container } from 'components'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { ConfigureLayout } from '../ConfigureLayout'
import { ModelingInfoLayout } from '../ModelingInfoLayout'

export const Content = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return (
    <Container disableGutters sx={{ flexGrow: 1, overflowY: 'auto' }}>
      {modelingStatus === 'idle' ? (
        <ConfigureLayout className={styles.configure_layout} />
      ) : (
        <ModelingInfoLayout />
      )}
    </Container>
  )
}
