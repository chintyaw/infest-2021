import React from "react";
import { Link } from "react-router-dom";
import "./AcaraKami.css";

function AcaraKami() {
  return (
    <>
      <h1 className="judul">Acara Kami</h1>
      <div className="acara-container">
        <Link className="acara-card" to="/webinar">
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
          <h2 className="acara-link">Selengkapnya</h2>
        </Link>
        <Link className="acara-card" to="/workshop">
          <img
            className="acara-icon"
            src="/workshop-icon.svg"
            alt="workshop-icon"
          />
          <h1>Workshop</h1>
          <p>
            Workshop online mengenai investasi dan pasar modal yang akan
            dibawakan oleh pembicara ternama dan berpengalaman di bidangnya
          </p>
          <h2 className="acara-link">Selengkapnya</h2>
        </Link>
        <Link className="acara-card" to="/competition">
          <img className="acara-icon" src="/compe-icon.svg" alt="compe-icon" />
          <h1>Competition</h1>
          <p>
            Kompetisi trading yang menitikberatkan kemampuan analisis peserta
            dalam upaya memperoleh keuntungan sebesar-besarnya.
          </p>
          <h2 className="acara-link">Selengkapnya</h2>
        </Link>
      </div>
    </>
  );
}

export default AcaraKami;
