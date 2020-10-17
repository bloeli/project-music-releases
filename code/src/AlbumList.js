import React from 'react';
import { AlbumContainer } from './AlbumContainer'



const AlbumList = (props) => {
  const albumArray = props.dataList.albums.items;

  return (
    <section className="album-list">
      {albumArray.map(album => {
        return (
          <AlbumContainer
            key={album.name}
            title={album.name}
            image={album.images[1].url}
            artist={album.artists}
            albumPage={album.external_urls.spotify}
          />
        );
      })}
    </section>
  )
}

export default AlbumList