import { artistsArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistsArray = artistsArray.map((currentArtistObject) => {
  const newArtistObject = { ...currentArtistObject };
  delete newArtistObject.id;

  return newArtistObject;
});

const newSongsArray = songsArray.map((currentSongObject) => {
  const newSongObject = { ...currentSongObject };
  delete newSongObject.id;
  return newSongObject;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistsArray);

console.log(responseSongs);
console.log(responseArtists);
