import React from "react";
import Card from "./Card";

const Acceuil = () => {
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              <a href="#">S_FILMS</a>
            </li>
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input type="text" placeholder="Entrer le nom de movie" className="inputText" />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
      </div>
      <div className="container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </>
  );
}

export default Acceuil;
