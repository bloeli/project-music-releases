import React from 'react';



  export const AlbumContainer = (props) => {

  return (

    <section>
      <div className="album-container">
        <img src={props.image} alt="album cover"/>
        <h2>{props.title}</h2>
        <a href="{props.artistPage}"><h3>{props.artist}</h3></a>
      </div>
      <div className="icons">
          <img src="./icons/dots.svg" alt="three dots"/>
          <img src="./icons/play.svg" alt="play icon"/>
          <img src="./icons/heart.svg" alt="heart"/>
      </div>
   
    
    </section>

  );
}

