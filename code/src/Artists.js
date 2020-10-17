import React from 'react';

// Generate "&" and "," depending on how many artist there is. Using index and array length.
const generateCharacters = (i, length) => {
  if (i === length - 2) {
    return " & "
  } else if (i < length - 2) {
    return ", "
  } else {
    return ""
  }
}

export const Artists = (props) => {
  const artistArray = props.artistsInfo.artist;
  return (
    <div className="artist-container">
      {artistArray.map((artist, i) => {
        return (
          <a key={artist.name} href={artist.external_urls.spotify}><h3>{artist.name}</h3>{generateCharacters(i, artistArray.length)}</a>
        )
      })
      }
    </div>
  )
}
