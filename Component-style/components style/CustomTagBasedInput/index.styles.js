import { makeStyles } from '@mui/styles'

const customTagBasedInputStyles = makeStyles(theme => ({
  inputLabelNoShrink: {
    textTransform: 'uppercase',
    transform: 'translate(2px, -30px) scale(1)',
    color: theme.palette.text.secondary
  },
  root: {
    '& .MuiInputBase-root': {
      color: theme.palette.text.secondary,
      height: 50
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.text.secondary
    }
  },
  notchedOutline: {
    borderWidth: '1px',
    boxShadow: '2px 5px 15px rgba(0, 0, 0, 0.17)',
    borderColor: 'white'
  },
  body: {
    margin: '15px 0px',
    border: `1px solid ${theme.palette.divider}`,
    padding: 10,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10
  }
}))

export default customTagBasedInputStyles
