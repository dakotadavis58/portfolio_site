import React from "react";
import { FaThumbsUp, FaCommentAlt, FaRegEye } from "react-icons/fa";
import { HomeObj1, HomeObj2, HomeObj3, HomeObj4 } from "./data";
import { HeroSection, InfoSection } from "../../components/";
import Card from "../../components/Card/Card";

const Home = () => {
  // const onCommentClick = () => alert("You clicked comments");
  // const onLikesClick = () => alert("You clicked comments");
  // const onViewsClick = () => alert("You clicked comments");

  // const buttons = [
  //   {
  //     label: (
  //       <>
  //         <FaCommentAlt /> 0 Comments
  //       </>
  //     ),
  //     onClick: onCommentClick,
  //   },
  //   {
  //     label: (
  //       <>
  //         <FaThumbsUp /> 242 Likes
  //       </>
  //     ),
  //     onClick: onLikesClick,
  //   },
  //   {
  //     label: (
  //       <>
  //         <FaRegEye /> 187288 Views
  //       </>
  //     ),
  //     onClick: onViewsClick,
  //   },
  // ];
  return (
    <>
      <HeroSection />
      <InfoSection {...HomeObj1} id="first_project" />
      <InfoSection {...HomeObj2} />
      <InfoSection {...HomeObj3} />
      <InfoSection {...HomeObj4} />
      {/* <Card
        title="Project #1"
        date="8/22"
        description="nu8nch of styuff aboput the prioject"
        actions={buttons}
      /> */}
    </>
  );
};

export default Home;
