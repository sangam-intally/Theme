import { makeStyles } from '@mui/styles'

const customSelectStyles = makeStyles(theme => ({
  inputLabelNoShrink: {
    textTransform: 'uppercase',
    fontSize: '12px',
    lineHeight: '16.39px',
    letterSpacing: '-0.004em',
    fontWeight: '500',
    transform: 'translate(2px, -25px) scale(1)',
    color: '#666666 !important'
  },
  notchedOutline: {
    boxShadow: 'none',
    background: '#fff',
    '& .MuiSelect-select': {
      minHeight: 'auto',
      height: 25,
      border: '2px solid #E5E4E2'
    },
    '& .MuiInputLabel-root': {
      textTransform: 'uppercase',
      fontSize: '12px',
      lineHeight: '16.39px',
      letterSpacing: '-0.004em',
      fontWeight: '500',
      transform: 'translate(2px, -25px) scale(1)'
    }
  },
  formControl: {
    [theme.breakpoints.down('md')]: {
      margin: '20px 0'
    }
  }
}))

export default customSelectStyles
