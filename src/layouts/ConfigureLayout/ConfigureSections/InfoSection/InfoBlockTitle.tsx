import { Typography } from '@mui/material'

export type InfoBlockTitleProps = {
  title: string
}

export const InfoBlockTitle = ({ title }: InfoBlockTitleProps) => {
  return (
    <Typography variant='subtitle1' textAlign='center'>
      {title}
    </Typography>
  )
}
