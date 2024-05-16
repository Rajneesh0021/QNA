// EditQuestion.tsx

import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { fetchQuestions, postQuestion, deleteQuestion } from '../API/Qustions';
import QuestionForm from '../components/QuestionForm'; 
import QuestionList from '../components/QuestionList'; 

const EditQuestion: React.FC = () => {
  const [formData, setFormData] = useState({
    text: '',
    audioUrl: '',
    options: ['', '', '', ''],
    correctOption: '',
  });
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const questionsData = await fetchQuestions();
        setQuestions(questionsData);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    getQuestions();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  

    if (name.includes('options[')) {
      const index = parseInt(name.match(/\[(\d+)\]/)?.[1] || '0');
      setFormData(prevData => ({
        ...prevData,
        options: prevData.options.map((option, i) => (i === index ? value : option)),
      }));
    } else {
   
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await postQuestion(formData);
      setQuestions(prevQuestions => [...prevQuestions, response]);
      setFormData({
        text: '',
        audioUrl: '',
        options: ['', '', '', ''],
        correctOption: '',
      });
    } catch (error) {
      console.error('Error posting question:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteQuestion(id);
      setQuestions(prevQuestions => prevQuestions.filter(question => question.id !== id));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>Add Questions</h1>
      <QuestionForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <QuestionList questions={questions} handleDelete={handleDelete} />
    </Container>
  );
};

export default EditQuestion;
