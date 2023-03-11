import React from 'react';
import Track from './Track';

function Home() {
  return (
    <div
      className="Home"
      style={{
        backgroundColor: '#2C3333',
        float: 'left',
      }}
    >
      {Array.from({ length: 3 }, (_, j) => j + 1).map((j) => (
        <Track key={j} cells={3} />
      ))}
    </div>
  );
}

export default Home;
