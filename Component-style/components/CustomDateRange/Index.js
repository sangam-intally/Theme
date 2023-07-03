import * as React from 'react'
import customDateStyles from '/styles/components/CustomDateField/index.styles'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CustomInputField from '../CustomInputField'
import { FaCalendarAlt } from 'react-icons/fa'

export default function CustomDateRangePicker({
  selectsRange,
  startDate,
  endDate,
  label,
  handleEndDate,
  handleStartDate,
  maxDate,
  minDate,
  value,
  ...props
}) {
  const classes = customDateStyles()

  const handleDatePickerChange = dates => {
    console.log(dates)
    if (dates[0]) {
      handleStartDate(dates[0])
    }
    if (dates[1]) {
      handleEndDate(dates[1])
    }
    if (!dates[0] && !dates[1]) {
      handleEndDate(null)
      handleStartDate(null)
    }
  }

  return (
    <ReactDatePicker
      selectsRange={selectsRange}
      startDate={startDate}
      endDate={endDate}
      maxDate={maxDate}
      minDate={minDate}
      onChange={handleDatePickerChange}
      selected={value}
      className={classes.dateRoot}
      customInput={<CustomInputField label={label} {...props} endAdornment={<FaCalendarAlt />} />}
      {...props}
    />
  )
}
