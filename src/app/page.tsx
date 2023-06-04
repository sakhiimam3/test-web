"use client";
import About from "./About/page";
import Contact from "./Contact/page";
import Services from "./Services/page";
import Talent from "./Talent/page";
import Banner from "./component/banner";
import Channels from "./component/channels";
import Partners from "./component/client&Patners";
import OurVedio from "./component/ourvedio";
import Report from "./component/report";
import SliderComponent from "./component/slider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Talent />
      <OurVedio />
      <SliderComponent />
      <Channels />
      <Report />
      <Partners />
      <Contact />
    </>
  );
}
