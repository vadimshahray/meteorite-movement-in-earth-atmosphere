import { Typography } from '@mui/material'
import { Container } from 'components/Container'
import { PropsWithChildren } from 'react'
import { ResponsiveContainer } from 'recharts'

export type ChartContainerProps = {
  label?: string
} & PropsWithChildren

export const ChartContainer = ({ label, children }: ChartContainerProps) => {
  return (
    <Container disableGutters>
      <Typography variant='caption'>{label}</Typography>

      <ResponsiveContainer width='100%' height={300}>
        {children}
      </ResponsiveContainer>
    </Container>
  )
}
