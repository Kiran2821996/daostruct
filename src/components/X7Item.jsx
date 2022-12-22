import React from "react";
import Item from "./Item";

function X7Item({ data }) {
  return (
    <div className="card_item">
      {data.map((item) => {
        return (
          <>
            <Item item={item} />
          </>
        );
      })}
    </div>
  );
}

export default X7Item;
