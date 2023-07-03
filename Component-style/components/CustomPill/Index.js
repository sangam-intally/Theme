import * as React from 'react'
import Chip from '@mui/material/Chip'

export default function CustomPill({ value, size = 'small', handleDeleteCallback, ...props }) {
  return <Chip size={size} label={value} onDelete={handleDeleteCallback} {...props} />
}
