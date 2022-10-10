import { Box, Typography } from '@mui/material'
import { Selector, SelectorItem } from 'components/Selector'

export type PlanetTemplateSelectorProps<T> = {
  templates: [T, string][]
  activeTemplate: T
  onActiveChange: (activeTemplate: T) => void
}

export const PlanetTemplateSelector = <T,>({
  templates,
  activeTemplate,
  onActiveChange,
}: PlanetTemplateSelectorProps<T>) => {
  const items = templates.map(
    (t): SelectorItem<T> => ({ key: t[0], name: t[1] }),
  )

  return (
    <Box>
      <Typography>Шаблон: </Typography>
      <Selector
        items={items}
        activeItemKey={activeTemplate}
        onActiveChange={onActiveChange}
      />
    </Box>
  )
}
