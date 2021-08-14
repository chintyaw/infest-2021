import React from "react";
import "../../App.css";
import JudulInfest from "../JudulInfest";
import Tentang from "../Tentang";
import Tema from "../Tema";
import AcaraKami from "../AcaraKami";
import Timeline from "../Timeline";
import Tabs from "../FAQHome/Tabs";
import Teaser from "../Teaser";
import Sponsor from "../Sponsor";

export default function Home() {
  return (
    <div>
      <JudulInfest />
      <Tentang />
      <Tema />
      <Teaser />
      <AcaraKami />
      <Timeline />
      <Tabs />
      <Sponsor />
    </div>
  );
}
