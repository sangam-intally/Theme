import { CircularProgress } from '@mui/material'
import React from 'react'

export default function CustomProgress({ size = 'small', color = 'primary', thickness = 6, ...props }) {
  return (
    <div>
      <CircularProgress disableShrink size={size} color={color} thickness={thickness} {...props} />
    </div>
  )
}
