import React from "react";
import Player from "../components/player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistsArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObject) => currentSongObject._id === id
  )[0];

  const artistObject = artistsArray.filter(
    (currentArtistObject) => currentArtistObject.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObject) => currentSongObject.artist === artist
  );

  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  const randomIndex2 = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagem da música 1"
            className="song__image"
          />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObject._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObject.image}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>
        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
