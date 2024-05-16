import { Button } from '@mui/material'

import { Link } from 'react-router-dom'

const ButtonSecondary = () => {
  return (
    <div>
         <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/edit-question"
        style={{ margin: '20px' }}
      >
        Edit Question
      </Button>
    </div>
  )
}

export default ButtonSecondary