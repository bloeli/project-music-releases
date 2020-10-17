import React from 'react';
import data from './data.json';
import Header from './Header';
import AlbumList from './AlbumList'


export const App = () => {
  return (
    <>
      <Header />
      <AlbumList dataList={data} />
    </>
  );
}
