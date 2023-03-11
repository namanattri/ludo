import React from 'react'

function PlayerBase(props: { color: string }) {
  const cellHeight = 40
  const cellWidth = 40
  const cellRowCount = 6
  const cellColCount = 6

  return (
    <div
      className="Homebase"
      style={{
        float: 'left',
        backgroundColor: props.color,
      }}
    >
      {Array.from({ length: cellRowCount }, (_, i) => i + 1).map((i) => (
        <div key={i}>
          {Array.from({ length: cellColCount }, (_, j) => j + 1).map((j) => (
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
      ))}
    </div>
  )
}

export default PlayerBase
