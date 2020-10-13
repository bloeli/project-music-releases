import React from 'react';
import data from './data.json';
import Header from './Header';
// import AlbumList from './AlbumList'


console.log(data)

export const App = () => {
  return (
    <div>
      <Header />
      {/* <AlbumList /> */}

      <div className="AlbumTitle">
        {data.albums.items[0].name}
        <img src={data.albums.items[0].images[0].url} alt="Album Cover" />
        {data.albums.items[0].artists[0].name}
      </div>

    </div>
  );
}
