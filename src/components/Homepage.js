import React from "react";
import header from "./assets/header-homepage.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <header>
        <img className="header-img" src={header} alt={header} />
      </header>
      <div className="container-homepage">
        <h1>Yuri & Neil Inc.</h1>
        <div className="container-menu-notion">
          <ul>
            <h2>Entreprise</h2>
            <li>
              <Link to="/seo">🚀 Actualités</Link>
            </li>
            <li>Ressources Humaines</li>
          </ul>
          <ul>
            <h2>Connaissances</h2>
            <li>SEO</li>
            <li>SEA</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
