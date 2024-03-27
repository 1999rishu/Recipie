import React, { useState } from "react";
import "./Item.css";
import ViewItem from "./viewItem";

const Items = (props) => {
  const [isItemVisible, setItemVisible] = useState(false);
  const obj = props.data;

  const toggleItemVisibility = () => {
    setItemVisible(!isItemVisible);
  };

  return (
    <>
      <div className="showContainer">
      <img className="showImage" src={obj.image} alt="Img" />
        <p>{obj.label}</p>
        <button type="button" onClick={toggleItemVisibility}>
          {isItemVisible ? "Hide" : "View"}
        </button>
      </div>
      {isItemVisible && <ViewItem obj={obj} />}
    </>
  );
};

export default Items;
