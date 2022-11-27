import { Box, Typography } from '@mui/material'

export type DataItemProps = {
  label: string
  value: string
}

export const DataItem = ({ label, value }: DataItemProps) => {
  return (
    /** @ts-ignore */
    <Box display='flex' justifyContent='space-between'>
      <Typography>{label}</Typography>
      <Typography>{value}</Typography>
    </Box>
  )
}
