import React, { useState } from "react";
import "./style.css";
import HomeAAA from "./FAQCompe/FaqMapping";
import HomeWebi from "./FAQWebi/FaqMappingWe";
import HomeWork from "./FAQWork/FaqMappingWo";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="containerA">
        <h1 style={{textAlign:"center", marginBottom:"40px"}}>Frequently Asked Question</h1>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Competition
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Workshop
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Webinar
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <HomeAAA />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <HomeWork />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <HomeWebi />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
