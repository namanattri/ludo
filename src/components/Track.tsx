import React from 'react';

function Track(props: { cells: number }) {
  const cellWidth = 40;
  const cellHeight = 40;

  return (
    <div className="Track">
      {Array.from({ length: props.cells }, (_, j) => j + 1).map((j) => (
        <div
          key={j}
          style={{
            border: '1px solid black',
            width: `${cellWidth}px`,
            height: `${cellHeight}px`,
            float: 'left',
          }}
        ></div>
      ))}
    </div>
  );
}

export default Track;
