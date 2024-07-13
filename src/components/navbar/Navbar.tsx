import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({ curr }: { curr: string }) => {
  return (
    <div
      className="absolute w-full  text-white p-3 flex justify-between items-center "
      style={{
        zIndex: 100000,
      }}
    >
      <div className="glassmorph px-6 py-1  flex gap-2 items-center relative cursor-pointer hover-container">
        <div className="hover-message glassmorph">Pico Chan</div>
        <Image
          src={"/pico-chan.jpg"}
          alt="pico-chan logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        ピコちゃん
      </div>
      <div className="flex gap-2 justify-between">
        <Link
          href={"/"}
          className={`glassmorph py-1 px-4 hover:cursor-pointer hover:underline hover:uppercase ${
            curr === "home" && "underline uppercase"
          }`}
        >
          home
        </Link>
        <Link
          href={"/about"}
          className={`glassmorph py-1 px-4 hover:cursor-pointer hover:underline hover:uppercase ${
            curr === "about" && "underline uppercase"
          }`}
        >
          about
        </Link>
        <Link
          href={"/contact"}
          className={`glassmorph py-1 px-4 hover:cursor-pointer hover:underline hover:uppercase ${
            curr === "contact" && "underline uppercase"
          }`}
        >
          contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
