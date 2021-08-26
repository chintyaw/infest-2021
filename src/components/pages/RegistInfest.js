import React from "react";
import "../../App.css";
import { Widget } from "@typeform/embed-react";
import "./RegistInfest.css";

const RegistWebinar = () => {
  return (
    <div className={"formcontainer"}>
      <div style={{ backgroundColor: "#F1F4F8" }} className={"postercontainer"}>
        <img
          src={"/speakerweb.png"}
          alt={""}
          style={{ width: "100%", margin: "auto" }}
          className={"posterimage"}
        />
      </div>
      <Widget
        id="YDMVdcb8"
        style={{
          width: "100%",
          height: "calc(100vh - 70px)",
          color: "#F1F4F8",
        }}
        className="my-form"
      />
    </div>
  );
};

export default RegistWebinar;
