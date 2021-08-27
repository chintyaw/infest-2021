import React from "react";
import "./Speaker.css";

function SpeakerWork() {
  return (
    <>
      <div className="speaker-container">

        <div className="judul-speaker">
          <h1>Guide to Make Smart Financial Decisions</h1>
          <div className="datetime">
            <div className="date">
              <i class="fa fa-calendar" aria-hidden="true" style={{ color: 'white' }}></i>
              <h3>11 September 2021</h3>
            </div>
            <div className="time">
              <i class="fa fa-clock" aria-hidden="true" style={{ color: 'white' }}></i>
              <h3>13.00 - 15.25 WIB</h3>
            </div>
          </div>

          <div className="speaker-left">
            <img src="/dega.svg" alt="speaker" />
            <div className="text-speaker-right">
              <h2 style={{ lineHeight: "3rem", alignItems: "center", display: "inline-block" }}>Dega Rapidity, S.E., RSA®., CAP®., CSA®., CPF., AWP®.</h2>
              <h3>
                • Investment Analyst PT ASABRI (Persero)
                <br /> • Fasilitator at Sertifikasiku
              </h3>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default SpeakerWork;
