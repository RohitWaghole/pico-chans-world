"use client";
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import Home from "@/components/Home";
import { imagesList } from "@/components/utilities/Store";
import Navbar from "@/components/navbar/Navbar";
import PicoWorld from "@/components/PicoWorld";

const Dashboard = () => {
  const [images, setImages] = useAtom(imagesList);
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

    const enterFullscreen = async () => {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        try {
          await element.requestFullscreen();
        } catch (error) {
          console.error("Failed to enter fullscreen mode:", error);
        }
      }
    };

    enterFullscreen();

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <Navbar curr={"home"} />
      {images.length === 0 ? <Home /> : <PicoWorld />}
    </>
  );
};

export default Dashboard;
