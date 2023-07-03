import { Autocomplete } from '@mui/material'
import React from 'react'
import CustomInputField from '../CustomInputField'

export default function CustomInputAndSelectField({
  freeSolo,
  options,
  label,
  required,
  textProps,
  error,
  helperText,
  changeCallBack,
  getOptionLabel,
  name,
  ...props
}) {
  return (
    <Autocomplete
      {...props}
      freeSolo={freeSolo}
      value={props.value ? props.value : ''}
      onChange={changeCallBack}
      options={options}
      getOptionLabel={getOptionLabel}
      renderInput={params => (
        <CustomInputField
          {...params}
          name={name}
          required={required}
          label={label}
          error={error}
          helperText={helperText}
          {...textProps}
        />
      )}
    />
  )
}
