import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'

export type ListDialogItem = {
  key: string
  label: string
}

export type ListDialogProps = {
  title: string
  items: ListDialogItem[]
  selectedItem?: string
  onItemSelected: (key: string) => void
  onClose: () => void
}

export const ListDialog = ({
  title,
  items,
  selectedItem,
  onItemSelected,
  onClose,
}: ListDialogProps) => {
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>

      <List>
        {items.map((i) => (
          <ListItem key={i.key} disablePadding>
            <ListItemButton
              selected={selectedItem === i.key}
              onClick={() => onItemSelected(i.key)}
            >
              <ListItemText primary={i.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}
