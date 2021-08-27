import React from "react";
import "../../App.css";
import Speaker from "../Speaker";
import WebinarAbout from '../WebinarAbout';
import BottomRegistWebi from '../BottomRegistWebi';
import BenefitBiayaWebi from "../BenefitBiayaWebi";
import WebiIntro from "../WebiIntro";
import TopRegistWebi from '../TopRegistWebi'
import Webi from "../FAQWebi/FaqMappingWe";

export default function Webinar() {
  return (
    <>
      <WebiIntro />
      <TopRegistWebi />
      <WebinarAbout />
      <Speaker />
      <BenefitBiayaWebi/>
      <Webi />
      <BottomRegistWebi />
    </>
  );
}
