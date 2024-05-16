import React from 'react';
import { TextField, Button } from '@mui/material';

interface Props {
  formData: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const QuestionForm: React.FC<Props> = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Text"
        fullWidth
        margin="normal"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />
      <TextField
        label="Audio URL"
        fullWidth
        margin="normal"
        name="audioUrl"
        value={formData.audioUrl}
        onChange={handleChange}
      />
      {formData.options.map((option: string, index: number) => (
        <TextField
          key={index}
          label={`Option ${index + 1}`}
          fullWidth
          margin="normal"
          name={`options[${index}]`}
          value={option}
          onChange={handleChange}
        />
      ))}
      <TextField
        label="Correct Option"
        fullWidth
        margin="normal"
        name="correctOption"
        value={formData.correctOption}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>Submit</Button>
    </form>
  );
};

export default QuestionForm;
