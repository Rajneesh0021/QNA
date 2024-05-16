
import {  Container } from '@mui/material';
import ButtonPrimary from '../components/UI/ButtonPrimary';
import ButtonSecondary from '../components/UI/ButtonSecondary';

const Error = () => {
  return (
    <Container>
      <h1>Error</h1>
      <p>Oops! Page Not Found.</p>
      <ButtonPrimary/>
      <ButtonSecondary/>
    </Container>
  );
};

export default Error;
