import React from 'react';
import {  useLocation  } from 'react-router-dom';

import ButtonPrimary from '../components/UI/ButtonPrimary';
import ButtonSecondary from '../components/UI/ButtonSecondary';
const QuizCompletedPage: React.FC = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get('score') || '0');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Quiz Completed!</h1>
      <p>Your score: {score}</p>
      <ButtonPrimary/>
      <ButtonSecondary/>
    </div>
  );
};

export default QuizCompletedPage;
