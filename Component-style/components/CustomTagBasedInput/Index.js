import { TextField, Typography } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import customTagBasedInputStyles from '/styles/components/CustomTagBasedInput/index.styles'
import CustomPill from '../CustomPill/Index'
import CustomInputField from '../CustomInputField'

export default function CustomTagBasedInput({
  label,
  uapWrapperClass,
  uapPillClass,
  required,
  chipsArr,
  handleDeleteCallback,
  ...props
}) {
  const classes = customTagBasedInputStyles()

  return (
    <div>
      <CustomInputField label={label} {...props} />
      {chipsArr.toString() ? (
        <Typography variant='subtitle1' component={'div'} className={classNames(uapWrapperClass, classes.body)}>
          {chipsArr.map((chip, idx) => (
            <CustomPill
              className={`${uapPillClass}_${idx}`}
              key={idx}
              value={chip}
              handleDeleteCallback={() => handleDeleteCallback(idx)}
            />
          ))}
        </Typography>
      ) : (
        ''
      )}
    </div>
  )
}
