import React, { useState } from "react";
import ListItems from "./listItems";

const Recipe = () => {
  const keys = "eb3012014462d4663a84b227a3d7efd8";
  const [data, setData] = useState();
  const [value, setValue] = useState("");
  const id = "f75f0f38";

  const Search = () => {
    if (value.length === 0) {
      setData();
    } else {
      getData();
    }
  };

  const getData = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=${id}&app_key=${keys}`
    );

    const data = await response.json();
    setData(data.hits);
  };

  const searching = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={searching} />
      <button type="Submit" onClick={Search}>
        Search
      </button>

      {data && <ListItems data={data} />}
    </div>
  );
};

export default Recipe;
