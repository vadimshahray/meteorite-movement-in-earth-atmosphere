import { TextSnippetOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

export const ProjectDocumentButton = () => {
  return (
    <Tooltip title='Скачать отчет'>
      <IconButton>
        <TextSnippetOutlined />
      </IconButton>
    </Tooltip>
  )
}
