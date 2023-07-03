/* eslint-disable newline-before-return */
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import customInputStyles from 'styles/components/CustomInputField/index.styles'
import classNames from 'classnames'

export default function CustomInputField({ value, variant, onChange, label, startAdornment, endAdornment, ...props }) {
  const classes = customInputStyles()
  return (
    <div className={classes.inputContainer}>
      <label>{label}</label>
      <TextField
        value={value}
        variant={variant}
        onChange={onChange}
        className={
          props.type === 'textarea'
            ? classNames(props.className, 'text-area')
            : classNames(classes.root, props.className)
        }
        InputProps={{
          startAdornment: <InputAdornment position='start'>{startAdornment}</InputAdornment>,
          classes: {
            notchedOutline: classes.notchedOutline
          },
          endAdornment: <InputAdornment position='end'>{endAdornment}</InputAdornment>,
          ...props.InputProps
        }}
        {...props}
      />
    </div>
  )
}
