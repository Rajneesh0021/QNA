
import {  Container } from '@mui/material';
import ButtonPrimary from '../components/UI/ButtonPrimary';
import ButtonSecondary from '../components/UI/ButtonSecondary';

const TimesUp = () => {
  return (
    <Container style={{ margin: 'auto',display:'flex', flexDirection:'column',justifyContent:'center',textAlign:'center' }}>
      <h1>Times Up!</h1>
      <p>Sorry, your time is up.</p>
     
      <ButtonPrimary/>
      <ButtonSecondary/>
      
    </Container>
  );
};

export default TimesUp;
