import React from "react";
import "../../App.css";
import JudulInfest from "../JudulInfest";
import Tentang from "../Tentang";
import Tema from "../Tema";
import AcaraKami from "../AcaraKami";
import Timeline from "../Timeline";

export default function Home() {
  return (
    <div>
      <JudulInfest />
      <Tentang />
      <Tema />
      <AcaraKami />
      <Timeline />
    </div>
  );
}
