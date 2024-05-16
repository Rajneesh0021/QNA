import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Qustion from './Pages/Qustion';
import EditQustion from './Pages/EditQustion';
import QuizCompletedPage from './Pages/QuizCompletedPage';
import TimesUp from './Pages/TimesUp';
import Error from './Pages/Error';

const App: React.FC = () => {
  return (
  <Routes>
    <Route path='/' element={<Qustion/>}/>
    <Route path='/edit-question' element={<EditQustion/>}/>
    <Route path='/quiz-completed' element={<QuizCompletedPage />}/>
    <Route path='/timesUp' element={<TimesUp/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  );
}

export default App;
