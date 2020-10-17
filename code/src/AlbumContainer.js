import React from 'react';
import { Artists } from './Artists'


export const AlbumContainer = (props) => {
  return (
    <div className="album-container">
      <div className="image-container">
        <img className="album-cover" src={props.image} alt="album cover" />
        <div className="icons">
          <img className="heart" src="./icons/heart.svg" alt="heart" />
          <img className="play" src="./icons/play.svg" alt="play icon" />
          <img className="dots" src="./icons/dots.svg" alt="three dots" />
        </div>
      </div>

      <a href={props.albumPage}><h2>{props.title}</h2></a>
      <Artists artistsInfo={props} />
    </div>
  );
}