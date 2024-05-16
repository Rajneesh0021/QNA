import React from 'react';

const AudioPlayer: React.FC<{ audioUrl: string }> = ({ audioUrl }) => {
  return <audio src={audioUrl} controls />;
};

export default AudioPlayer;
