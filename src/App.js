import React, { useState } from "react";
import "./styles.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard";
const App = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <nav className="navbar">
        <h1>
          <div className="btn-group">
            <button
              className="btn-group__item"
              onClick={() => setMenuData(Menu)}
            >
              All
            </button>

            <button
              className="btn-group__item"
              onClick={() => filterItem("Science fiction")}
            >
              Science fiction
            </button>
            <button
              className="btn-group__item"
              onClick={() => filterItem("Historical fiction")}
            >
              Historical fiction
            </button>
            <button
              className="btn-group__item"
              onClick={() => filterItem("Adventure stories")}
            >
              Adventure stories
            </button>
          </div>
        </h1>
      </nav>

      <MenuCard menuData={menuData} />
    </>
  );
};
export default App;
