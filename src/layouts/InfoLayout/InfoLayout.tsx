import { FullContainer } from 'components'
import { ToolbarProvider } from 'providers'
import { useSelector } from 'react-redux'
import { selectIsModeling } from 'selectors'
import { ModelingControl } from './ModelingControl'
import styles from './styles.module.css'
import { ConfigureLayout } from '../ConfigureLayout'
import { ModelingInfoLayout } from '../ModelingInfoLayout'

export const InfoLayout = () => {
  const isModeling = useSelector(selectIsModeling)

  return (
    <FullContainer>
      <ToolbarProvider>
        {isModeling ? (
          <ModelingInfoLayout />
        ) : (
          <ConfigureLayout className={styles.configure_layout} />
        )}

        <ModelingControl />
      </ToolbarProvider>
    </FullContainer>
  )
}
