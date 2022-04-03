import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="quote_item">
      <Link to={`/quotes/${item.quote_id}`}>
        <q>{item.quote}</q> /{" "}
        <strong style={{ color: "aqua" }}>{item.author}</strong>
      </Link>
    </div>
  );
}

export default Item;
