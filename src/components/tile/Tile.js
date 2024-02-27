import React from "react";

export const Tile = ({name, description}) => {
  const values = Object.values(description);
  
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {values.map((value, index) => (
        <li key={index}>
          <p className="tile">{value}</p>
        </li>
      ))}
    </div>
  );
};
