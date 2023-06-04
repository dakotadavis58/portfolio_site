import React from "react";

import { data } from "../../data";
import { HeroSection, InfoSection } from "../../components/";

const Home = () => {
  return (
    <>
      <HeroSection />
      {data.map((project) => {
        return <InfoSection key={project.topLine} {...project} />;
      })}
    </>
  );
};

export default Home;
