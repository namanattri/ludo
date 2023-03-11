import React from 'react';
import Home from './Home';
import PlayerBase from './PlayerBase';
import Tracks from './Tracks';

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
        <Tracks direction="verticle" />
        <PlayerBase color="#C9F4AA" />
      </div>
      <div className="middle">
        <Tracks direction="horizontal" />
        <Home />
        <Tracks direction="horizontal" />
      </div>
      <div className="bottom">
        <PlayerBase color="#62CDFF" />
        <Tracks direction="verticle" />
        <PlayerBase color="#FBFFB1" />
      </div>
    </div>
  );
}

export default Board;
