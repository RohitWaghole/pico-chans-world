"use client";
import React, { useEffect } from "react";
import AboutDescription from "./About";
import AboutCanvas from "../../components/CommonCanvas/AboutCanvas";
import Navbar from "@/components/navbar/Navbar";

const About = () => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (
        event.ctrlKey &&
        event.shiftKey &&
        (event.key === "I" ||
          event.key === "C" ||
          event.key === "J" ||
          event.key === "U")
      ) {
        event.preventDefault();
      }
      if (event.key === "F12") {
        event.preventDefault();
      }
    };
    const handleContextMenu = (event: any) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <Navbar curr={"about"} />
      <AboutDescription />
      <AboutCanvas />
    </>
  );
};

export default About;
