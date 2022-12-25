import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, IconButton, Stack, Typography } from '@mui/material'
import { useState, PropsWithChildren } from 'react'
import { Container } from './Container'

export type SectionProps = {
  title: string
  Icon?: Icon
  collapsible?: boolean
} & PropsWithChildren

export const Section = ({
  title,
  Icon,
  children,
  collapsible,
}: SectionProps) => {
  const [expanded, setExpanded] = useState(true)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Container disableGuttersH>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography variant='subtitle1' display='flex' alignItems='center'>
          {Icon && <Icon sx={{ marginRight: 1 }} />}
          {title}
        </Typography>

        {collapsible && (
          <IconButton onClick={handleClick}>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        )}
      </Stack>

      <Collapse in={expanded}>{children}</Collapse>
    </Container>
  )
}
