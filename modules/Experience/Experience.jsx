import ExperiencePill from "../../components/ExperiencePill/ExperiencePill";
import styles from "./Experience.module.css";
import React, { useState, useEffect } from "react";
import YearLine from "../../components/YearLine/YearLine";
import DownLine from "../../components/DownLine";

const Experience = ({ id, experiences }) => {
  let last_row = 1;
  let right_direction = false;
  return (
    <section className="section" id={id}>
      <h1 className="title mb-10">experience()</h1>
      <div className="grid" style={{ gridTemplateColumns: "36px auto 36px" }}>
        {/* <YearLine
          className="h-10 w-full col-span-3 row-start-1"
          id="test"
          year="2016"
          leftSide={false}
          rightSide={true}
          rightConector="down"
        />

        <DownLine
          className="h-full w-full col-start-3 row-start-2"
          isRight={true}
          id="second"
        />

        <ExperiencePil
          className="row-start-2 col-start-2 my-5"
          position="Bachelor's degree - Compute Science"
          company="University of Vigo"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <YearLine
          className="h-10 w-full col-span-3 row-start-3"
          id="test2"
          year="2020"
          leftSide={true}
          rightSide={true}
          leftConector="down"
          rightConector="up"
        />

        <DownLine
          className="h-full w-full col-start-1 row-start-4"
          isRight={false}
          id="testsw"
        />

        <ExperiencePill
          className="row-start-4 col-start-2 my-5"
          position="Bachelor's degree - Compute Science"
          company="University of Vigo"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <YearLine
          className="h-10 w-full col-span-3 row-start-5"
          id="test3"
          leftSide={true}
          rightSide={false}
          leftConector="up"
        /> */}
        {experiences.map((experience, index) => {
          right_direction = !right_direction;
          return (
            <React.Fragment>
              <YearLine
                className={`h-10 w-full col-span-3 row-start-${last_row++}`}
                year={experience.year}
                id={`${index}year`}
                leftSide={index !== 0}
                rightSide={true}
                leftConector={
                  (index !== 0 && !right_direction && "down") ||
                  (index !== 0 && "up")
                }
                rightConector={
                  (index !== 0 && !right_direction && "up") || "down"
                }
              />
              <ExperiencePill
                className={`row-start-${last_row} col-start-2 my-5`}
                position={experience.title}
                company={experience.place}
                description={experience.description}
              />
              {right_direction && (
                <DownLine
                  className={`h-full w-full col-start-3 row-start-${last_row++}`}
                  isRight={true}
                  id={`index${index}down`}
                />
              )}
              {!right_direction && (
                <DownLine
                  className={`h-full w-full col-start-1 row-start-${last_row++}`}
                  isRight={false}
                  id={`index${index}down`}
                />
              )}
              {index === experiences.length - 1 && (
                <YearLine
                  className={`h-10 w-full col-span-3 row-start-${last_row++}`}
                  id={`final${index}`}
                  leftSide={!right_direction}
                  rightSide={right_direction}
                  leftConector={!right_direction && "up"}
                  rightConector={right_direction && "up"}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
