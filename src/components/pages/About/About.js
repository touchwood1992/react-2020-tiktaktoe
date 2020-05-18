import React, { useState, useEffect } from "react";

const AboutAllItem = () => {
  return <li>ITEM</li>;
};

const AboutAllItems = () => {
  return (
    <ul>
      <AboutAllItem></AboutAllItem>
      <AboutAllItem></AboutAllItem>
    </ul>
  );
};

const About = () => {
  const [state, setstate] = useState("Prashant");
  const [state2, setstate2] = useState("Prashant");
  const [state3, setstate3] = useState("Prashant");

  useEffect(() => {
    if (state !== "Ramm") {
    }
    setstate2("Ramm");
    console.log("About useeffect2 called");
  });
  useEffect(() => {
    if (state !== "Ramm") {
    }
    setstate3("Ramm");
    console.log("About useeffect3 called");
  });
  useEffect(() => {
    if (state !== "Ramm") {
    }
    setstate("Raj kumar Rao");
    console.log("About useeffect1 called");
  });
  console.log("ABOUT MAIN COMPONENT RENDERED");
  return (
    <>
      <h1 className="main-heading">About</h1>
      <AboutAllItems></AboutAllItems>
    </>
  );
};
export default About;
