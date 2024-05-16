import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ButtonPrimary = () => {
  return (
    <div>
        <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        style={{ margin: '20px' }}
      >
        Go back to Quiz
      </Button>
    </div>
  )
}

export default ButtonPrimary