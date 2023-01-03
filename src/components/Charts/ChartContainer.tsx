import { ReactElement } from 'react'
import { Typography } from '@mui/material'
import { ResponsiveContainer } from 'recharts'
import { Container } from 'components/Container'

export type ChartContainerProps = {
  label?: string
  children: ReactElement
}

export const ChartContainer = ({ label, children }: ChartContainerProps) => {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='caption'>{label}</Typography>

      <ResponsiveContainer width='100%' height={300}>
        {children}
      </ResponsiveContainer>
    </Container>
  )
}
