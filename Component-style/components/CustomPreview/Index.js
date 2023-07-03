import { Typography } from '@mui/material'
import React from 'react'

export default function CustomPreview({ url, message, width = '50%', msgHead }) {
  return (
    <div>
      <img
        style={{
          margin: 'auto',
          display: 'block'
        }}
        src={url}
        alt='not found'
        width={width}
      />
      <Typography variant='h4' maxWidth={400} margin='auto' textAlign={'center'} mb={2}>
        {msgHead}
      </Typography>
      <Typography variant='body2' maxWidth={500} margin='auto' textAlign={'center'} fontWeight={'thin'} color='#666'>
        {message}
      </Typography>
    </div>
  )
}
