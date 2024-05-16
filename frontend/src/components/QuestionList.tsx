import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';

interface Props {
  questions: any[];
  handleDelete: (id: number) => void;
}

const QuestionList: React.FC<Props> = ({ questions, handleDelete }) => {
  return (
    <div>
      <h2>Remove Questions:</h2>
      <List>
        {questions.map((question: any) => (
          <ListItem key={question.id}>
            <ListItemText primary={question.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(question.id)}>
                🗑️
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default QuestionList;
