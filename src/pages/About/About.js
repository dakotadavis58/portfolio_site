import React from "react";
import { InfoSection } from "../../components";
import { AboutObj1 } from "./data";

export const About = () => {
  return (
    <>
      <InfoSection {...AboutObj1} id="first_project" />
    </>
  );
};
