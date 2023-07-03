import { makeStyles } from '@mui/styles'

const customDateStyles = makeStyles(theme => ({
  dateRoot: {
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
  }
}))

export default customDateStyles
