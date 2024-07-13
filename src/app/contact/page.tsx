"use client";
import AboutCanvas from "@/components/CommonCanvas/AboutCanvas";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect } from "react";
import ContactForm from "./Contact";

const Contact = () => {
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
      <Navbar curr={"contact"} />
      <ContactForm />
      <AboutCanvas />
    </>
  );
};

export default Contact;
