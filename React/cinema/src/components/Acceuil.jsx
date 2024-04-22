import React from "react";
import Card from "./Card";

let API_key ="api_key=4814bdf6f5a651f9666651d6ac18636d";
let base_url = "https://api.themoviedb.org/3"
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
        <form className="d-flex mx-auto py-1">
          <div className="search-btn">
            <input type="text" placeholder="Entrer le nom de movie" className="inputText" />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
        <h5><a href="#">Favoris</a></h5>
      </div>
      <div className="container">
          <Card/>
          {/* <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/> */}
      </div>
    </>
  );
}

export default Acceuil;
