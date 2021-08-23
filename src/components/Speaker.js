import React from "react";
import "./Speaker.css";

function Speaker() {
  return (
    <>
      <div className="speaker-container">
        <div className="judul-speaker">
          <h1>In-Depth Spoiler to Reach Financial Freedom</h1>
          <div className="datetime">
            <div className="date">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <h3>25 September 2021</h3>
            </div>
            <div className="time">
              <i class="fa fa-clock" aria-hidden="true"></i>
              <h3>13.00 - 15.00 WIB</h3>
            </div>
          </div>

          <div className="speaker-left">
            <img src="/melvin-mumpuni.svg" alt="speaker" />
            <div className="text-speaker-right">
              <h2>Melvin Mumpuni</h2>
              <h3>• Founder of Finansialku</h3>
            </div>
          </div>
        </div>

        <div className="judul-speaker-right">
          <h1>Unleashing Indonesia’s Post Pandemic Economic Potential</h1>
          <div className="datetime-right">
            <div className="date-right">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <h3>25 September 2021</h3>
            </div>
            <div className="time-right">
              <i class="fa fa-clock" aria-hidden="true"></i>
              <h3>15.00 - 17.30 WIB</h3>
            </div>
          </div>

          <div className="speaker-right">
            <div className="text-speaker-left">
              <h2>Ilham Muslim</h2>
              <h3>• Mirae Asset</h3>
            </div>
            <img src="/ilham-muslim.svg" alt="speaker" />
          </div>
        </div>

        <div className="judul-speaker">
          <h1>Tech-Stocks, Take It Or Leave It</h1>
          <div className="datetime">
            <div className="date">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <h3>26 September 2021</h3>
            </div>
            <div className="time">
              <i class="fa fa-clock" aria-hidden="true"></i>
              <h3>13.00 - 15.00 WIB</h3>
            </div>
          </div>

          <div className="speaker-left">
            <img src="/timothy-ronald.svg" alt="speaker" />
            <div className="text-speaker-right">
              <h2>Timothy Ronald</h2>
              <h3>
                • Young Investor <br /> • CO-Founder of Ternak Uang
              </h3>
            </div>
          </div>
        </div>

        <div className="judul-speaker-right">
          <h1>
            Maximizing Value and Growth Investing through Portfolio Management
          </h1>
          <div className="datetime-right">
            <div className="date-right">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <h3>26 September 2021</h3>
            </div>
            <div className="time-right">
              <i class="fa fa-clock" aria-hidden="true"></i>
              <h3>15.00 - 17.30 WIB</h3>
            </div>
          </div>

          <div className="speaker-right">
            <div className="text-speaker-left">
              <h2>Bernardus Wijaya</h2>
              <h3>
                • CEO of Sucor Sekuritas
                <br /> • Forbes 30 Under 30 2021
              </h3>
            </div>
            <img src="/bernard-wijaya.svg" alt="speaker" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Speaker;
