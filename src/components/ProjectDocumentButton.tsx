import { TextSnippetOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

export const ProjectDocumentButton = () => {
  return (
    <Tooltip title='Скачать отчет'>
      <a
        href={process.env.PUBLIC_URL + '/docs/ProjectDocument.pdf'}
        download
        style={{ textDecoration: 'none' }}
      >
        <IconButton>
          <TextSnippetOutlined />
        </IconButton>
      </a>
    </Tooltip>
  )
}
