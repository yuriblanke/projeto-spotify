import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObject, index) => (
          <SongItem {...currentSongObject} index={index} key={index} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() => {
          // Adiciona 5 ao número de itens e re renderiza o componente
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
