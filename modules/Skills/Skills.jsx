import SkillArea from "../../components/SkillArea/SkillArea";
import Skill from "../../components/Skill/Skill";
import React, { useState, useEffect } from "react";

const Skills = (props) => {
  useEffect(() => {
    const canvas = document.getElementById("triangle");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.fillStyle = "#1D2A4E";
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(canvas.width, 0);

    ctx.fill();
  });

  return (
    <section
      className="alternative-section"
      style={{ padding: "0 !important" }}
      id="triangle-background"
    >
      <div className="grid grid-cols-2 grid-rows-1">
        <canvas
          className="col-start-2 row-start-1 w-full h-full"
          id="triangle"
        ></canvas>
        <div className="col-span-2 col-start-1 row-start-1 p-10 lg:py-20 lg:px-40">
          <h1 className="title mb-16">skills() && interest()</h1>
          <SkillArea>
            <Skill text="react.js" color="#F00"></Skill>
            <Skill text="react.js" color="#F00"></Skill>
          </SkillArea>
        </div>
      </div>
    </section>
  );
};

export default Skills;
