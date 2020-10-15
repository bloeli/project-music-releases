import React from 'react';
import data from './data.json';
import Header from './Header';
// import { AlbumContainer } from './AlbumContainer';
import AlbumList from './AlbumList'


console.log(data)


export const App = (props) => {



  return (
    <div>
      <Header />
      <AlbumList dataList={data} />

    </div>


  );
}
