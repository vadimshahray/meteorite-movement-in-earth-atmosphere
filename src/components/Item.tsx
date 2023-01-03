import { PropsWithChildren } from 'react'
import { Box, Typography } from '@mui/material'

export type ItemProps = {
  label: string
} & PropsWithChildren

export const Item = ({ label, children }: ItemProps) => {
  return (
    <>
      {/**@ts-ignore */}
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography variant='subtitle2'>{label}</Typography>
        {children}
      </Box>
    </>
  )
}
