import React from 'react'
import PlayerBase from './PlayerBase'

function Board() {
  return (
    <div
      className="Board"
      style={{
        float: 'left',
      }}
    >
      <div className="top">
        <PlayerBase color="#FD8A8A" />
        <PlayerBase color="#C9F4AA" />
      </div>
      <div className="bottom">
        <PlayerBase color="#62CDFF" />
        <PlayerBase color="#FBFFB1" />
      </div>
    </div>
  )
}

export default Board
