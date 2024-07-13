import { useAtom } from "jotai";
import React from "react";
import { imagesList } from "./utilities/Store";
import "./Home.css";

const Home = () => {
  const [images, setImages] = useAtom(imagesList);
  const handleAddImages = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const imageData = {
            url: URL.createObjectURL(file),
            width: img.width,
            height: img.height,
          };
          setImages((prevImages) => [...prevImages, imageData]);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <div className="home-background flex w-[100vw] h-[100vh] flex-col justify-center items-center gap-10">
      <div className="typewriter">
        <h1>Welcome to PICO Chan&apos;s World</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <label
          htmlFor="images"
          className="border-4 flex justify-center items-center w-[60vw] h-[20vh] border-dashed border-gray-400 text-[#E4C547] text-8xl cursor-pointer images-label"
        >
          click to upload images
        </label>
        <input
          type="file"
          name="images"
          id="images"
          accept="image/*"
          multiple={true}
          onChange={(e) => handleAddImages(e)}
          required
          hidden
        />
      </div>
    </div>
  );
};

export default Home;
