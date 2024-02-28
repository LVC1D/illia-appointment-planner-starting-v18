import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({arrayOfData}) => {
  
  return (
    <div>
      <ul>
        {arrayOfData.map((data, index) => {
          const {name, ...rest} = data;
          return (
          <li key={index}>
            <Tile name={name} description={{...rest}} />
          </li>
          )
          })}
      </ul>
    </div>
  );
};
