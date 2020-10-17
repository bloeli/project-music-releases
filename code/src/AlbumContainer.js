import React from 'react';
import { Artists } from './Artists'


export const AlbumContainer = (props) => {
  return (
    <div className="album-container">
      <div className="image-container">
        <img src={props.image} alt="album cover" />
        <div className="icons">
          <img className="dots" src="./icons/dots.svg" alt="three dots" />
          <img className="play" src="./icons/play.svg" alt="play icon" />
          <img className="heart" src="./icons/heart.svg" alt="heart" />
        </div>
      </div>

      <a href={props.albumPage}><h2>{props.title}</h2></a>
      <Artists artistsInfo={props} />
    </div>
  );
}