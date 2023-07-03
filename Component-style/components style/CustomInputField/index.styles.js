import { makeStyles } from '@mui/styles'

const customInputStyles = makeStyles(theme => ({
  inputContainer: {
    position: 'relative',
    '& label': {
      textTransform: 'uppercase',
      fontSize: '12px',
      lineHeight: '16.39px',
      letterSpacing: '-0.004em',
      fontWeight: '500',
      transform: 'translate(2px, -25px) scale(1)',
      position: 'absolute',
      top: '20px',
      color: '#666666 !important'
    }
  },
  root: {
    marginTop: 20,
    borderRadius: 7,
    '& .MuiInputBase-root': {
      background: '#fff !important',
      height: 45
    },
    '& input': {
      color: '#000'
    },
    '& .MuiFormLabel-root': {
      color: '#5b6a7e'
    }
  },
  notchedOutline: {
    borderWidth: '2px',
    boxShadow: 'none'
  }
}))

export default customInputStyles
