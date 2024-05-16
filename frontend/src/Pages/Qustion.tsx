import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { fetchQuestions } from '../API/Qustions';
import Timer from '../components/Timer';
import AudioPlayer from '../components/AudioPlayer'; 

const Question: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [seconds, setSeconds] = useState(15);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchQuestions(); 
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (seconds === 0) {
      history('/timesUp');
      setSeconds(15); 
    }
  }, [seconds, history]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setAnswered(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (selectedOption === currentQuestion.correctOption) {
      setScore(prevScore => prevScore + 1);
    }

    if (isLastQuestion) {
      const finalScore = selectedOption === currentQuestion.correctOption ? score + 1 : score;
      history(`/quiz-completed?score=${finalScore}`);
    } else {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSeconds(15);
    }

    setSelectedOption('');
    setAnswered(false);
  };

  return (
    <Container style={{ margin: 'auto',display:'flex', flexDirection:'column',justifyContent:'center',textAlign:'center' }}>
      <Timer seconds={seconds} />
      <form onSubmit={handleSubmit}>
        <div key={currentQuestionIndex}>
          <h2>{questions[currentQuestionIndex]?.text}</h2>
          <AudioPlayer audioUrl={questions[currentQuestionIndex]?.audioUrl} />
          <br />
          <FormControl component="fieldset">
            <FormLabel component="legend">Options</FormLabel>
            <RadioGroup style={{ display:'grid', 
            gridTemplateColumns:'repeat(2,1fr)'
             }} aria-label="quiz" name="quiz" value={selectedOption} onChange={handleOptionChange}>
              {questions[currentQuestionIndex]?.options.map((option: string) => (
                <FormControlLabel style={{ textAlign:'center', border:'1px solid blue', padding:'3px 30px'}} key={option} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          <br />
          <Button type="submit" variant="contained" color="primary" disabled={!answered} style={{ marginTop: '20px' }}>
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Question;
