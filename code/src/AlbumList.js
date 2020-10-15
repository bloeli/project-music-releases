import React from 'react';
import { AlbumContainer } from './AlbumContainer'

// console.log(props);

const AlbumList = (props) => {

  const AlbumArray = props.dataList.albums.items;
  // console.log(AlbumArray);

  return (
    <section className="albumList">
      {AlbumArray.map((album) => {
        return (
            <AlbumContainer 
                title={album.name}
                image={album.images[1].url}
                artist={album.artists[0].name}
                artistPage={album.artists[0].external_urls.spotify}
            />
        ); 
        })}
    </section>
  )}

export default AlbumList