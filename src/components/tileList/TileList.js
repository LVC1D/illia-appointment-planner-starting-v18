import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <div>
      <ul>
        {contacts.map((contact, index) => {
          const {name, ...rest} = contact;
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
