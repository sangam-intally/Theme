import { FormLabel, InputLabel, Typography } from '@mui/material'

const CustomHeader = ({ type, headerText, weight, size, color, lineheight, id, formLabeltype }) => {
  return (
    <>
      {type == 'header' ? (
        <Typography
          sx={{ transform: 'translate(0, -4px) scale(0.75)' }}
          variant='body'
          style={{ fontWeight: weight, fontStyle: 'normal', fontSize: size, color: color, lineHeight: lineheight }}
        >
          {headerText}
        </Typography>
      ) : formLabeltype ? (
        <FormLabel
          id={id}
          style={{ fontWeight: weight, fontStyle: 'normal', fontSize: size, color: color, lineHeight: lineheight }}
        >
          {headerText}
        </FormLabel>
      ) : (
        <InputLabel
          sx={{ transform: 'translate(0, -4px) scale(0.75)' }}
          style={{ fontWeight: weight, fontStyle: 'normal', fontSize: size, color: color, lineHeight: lineheight }}
          shrink
          id={id}
        >
          {headerText}
        </InputLabel>
      )}
    </>
  )
}

export default CustomHeader
