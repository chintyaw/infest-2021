import React from "react";
import { Link } from "react-router-dom";
import "./AcaraKami.css";

function AcaraKami() {
  return (
    <div className="acara-container">
      <div className="acara-card">
        <img
          className="acara-icon"
          src="/webinar-icon.svg"
          alt="webinar-icon"
        />
        <h1>Webinar</h1>
        <p>
          Seminar online mengenai investasi dan pasar modal oleh pembicara
          ternama dengan topik-topik yang menarik
        </p>
        <Link to="/">
          <h2 className="acara-link">Selengkapnya</h2>
        </Link>
      </div>
      <div className="acara-card">
        <img
          className="acara-icon"
          src="/workshop-icon.svg"
          alt="workshop-icon"
        />
        <h1>Workshop</h1>
        <p>
          Workshop online mengenai investasi dan pasar modal yang akan dibawakan
          oleh pembicara ternama dan berpengalaman di bidangnya
        </p>
        <Link to="/">
          <h2 className="acara-link">Selengkapnya</h2>
        </Link>
      </div>
      <div className="acara-card">
        <img className="acara-icon" src="/compe-icon.svg" alt="compe-icon" />
        <h1>Competition</h1>
        <p>
          Kompetisi trading yang menitikberatkan kemampuan analisis peserta
          dalam upaya memperoleh keuntungan sebesar-besarnya.
        </p>
        <Link to="/">
          <h2 className="acara-link">Selengkapnya</h2>
        </Link>
      </div>
    </div>
  );
}

export default AcaraKami;
