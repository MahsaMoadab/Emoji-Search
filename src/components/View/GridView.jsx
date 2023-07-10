import React from "react";

export default function GridView({ data, handleModalDetails }) {
  const setData = data
    ? data.map((emoji, index) => (
        <div
          key={index}
          onClick={() => handleModalDetails(emoji)}
          className="grid_view_item"
        >
          {emoji.character}
        </div>
      ))
    : null;
  return <div className="view_state grid_view">{setData}</div>;
}
