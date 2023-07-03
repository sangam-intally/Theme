import * as React from 'react'
import customDateStyles from '/styles/components/CustomDateField/index.styles'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CustomInputField from '../CustomInputField'
import { FaCalendarAlt } from 'react-icons/fa'

export default function CustomDatePicker({ label, changeCallBack, maxDate, minDate, value, ...props }) {
  const classes = customDateStyles()

  return (
    <ReactDatePicker
      maxDate={maxDate}
      minDate={minDate}
      onChange={changeCallBack}
      selected={value}
      className={classes.dateRoot}
      customInput={<CustomInputField label={label} {...props} endAdornment={<FaCalendarAlt />} />}
    />
  )
}
