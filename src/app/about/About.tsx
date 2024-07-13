import React from "react";

const AboutDescription = () => {
  return (
    <div className="absolute text-white z-10 w-full h-full flex items-center justify-center">
      <div className="glassmorph p-4 sm:w-[30%] w-[90%] flex flex-col gap-10">
        <p className="text-3xl w-full text-center">About me</p>
        <p className="text-xl leading-8 sm:leading-10">
          I am a Software Engineer adept in offering cutting edge Full-Stack Web
          Engineering solutions and effectively working in developer teams.
          Bringing forth work experience in all aspects of the software
          development life cycle. Skilled in problem solving and executing
          software tasks from start to finish.
        </p>
        <p className="text-xl leading-8 sm:leading-10">Thanks for visiting!</p>
      </div>
    </div>
  );
};

export default AboutDescription;
