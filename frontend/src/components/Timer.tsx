
import React from 'react';

const Timer: React.FC<{ seconds: number }> = ({ seconds }) => {
  return <p>Timer: {seconds} seconds</p>;
};

export default Timer;
