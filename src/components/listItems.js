import React from "react";
import RecipeItems from "./Item";
import "./Item.css";
const ListItems = (props) => {
  return (
    <>
      <div className="show">
        {props.data.map((map) => (
          <div key={map.recipe.label}>
            <RecipeItems data={map.recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ListItems;
