import React from 'react';
import Track from './Track';

function Tracks(props: { direction: 'horizontal' | 'verticle' }) {
  return (
    <div
      className="Tracks"
      style={{
        backgroundColor: '#FFFBF5',
        float: 'left',
      }}
    >
      {props.direction === 'horizontal' &&
        Array.from({ length: 3 }, (_, j) => j + 1).map((j) => (
          <Track key={j} cells={6} />
        ))}
      {props.direction === 'verticle' &&
        Array.from({ length: 6 }, (_, j) => j + 1).map((j) => (
          <Track key={j} cells={3} />
        ))}
    </div>
  );
}

export default Tracks;
