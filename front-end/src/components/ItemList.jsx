import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(useLocation());

  const { pathname } = useLocation();

  const isHome = pathname === "/";

  const finalItems = isHome ? items : itemsArray.length;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currentObject, index) => (
            // ...currentObject = props do currentObject
            // se itemsArray = artistsArray, ...currentObject = id, image, name, banner
            // se itemsArray = songsArray, ...currentObject = image, name, duration, artist, audio, id
            <SingleItem
              {...currentObject}
              key={`${title}-${index}`}
              idPath={idPath}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
