import {
  Dialog,
  List,
  ListItem,
  DialogTitle,
  ListItemText,
  ListItemButton,
} from '@mui/material'

export type ListDialogItem = {
  key: string
  label: string
}

export type ListDialogProps = {
  title: string
  items: ListDialogItem[]
  selectedItem?: string
  onItemSelected: (item: ListDialogItem) => void
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
        {items.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              selected={selectedItem === item.key}
              onClick={() => onItemSelected(item)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}
