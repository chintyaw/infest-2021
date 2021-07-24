import React from "react";
import "../../App.css";
import Speaker from "../Speaker";
import WebinarAbout from '../WebinarAbout';
import BottomRegistWebi from '../BottomRegistWebi';

export default function Webinar() {
  return (
    <>
      <h1 className="webinar"> Coming Soon </h1>
      <WebinarAbout />
      <Speaker />
      <BottomRegistWebi />
    </>
  );
}
