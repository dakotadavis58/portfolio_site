import React, { useEffect, useState } from "react";
import { Button, Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  Heading,
  Img,
  ImgWrapper,
  InfoCol,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
  BtnWrapper,
  Tech,
  TechItem,
} from "./InfoSection.elements";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  headline,
  description,
  lightTextDesc,
  liveDemoBtn,
  demoLink,
  sourceCodeBtn,
  sourceCodeLink,
  start,
  img,
  alt,
  id,
  noButtons,
  tech,
  imgsm,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // finally you can render components conditionally if isMobile is True or False

  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoCol>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Tech>
                  {tech.map((tech) => {
                    return (
                      <TechItem lightBg={!lightBg} key={tech}>
                        {tech}
                      </TechItem>
                    );
                  })}
                </Tech>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {noButtons ? (
                  ""
                ) : (
                  <BtnWrapper>
                    <a rel="noreferrer" target="_blank" href={sourceCodeLink}>
                      <Button big fontBig primary={primary}>
                        {sourceCodeBtn}
                      </Button>
                    </a>
                    <a rel="noreferrer" target="_blank" href={demoLink}>
                      <Button big fontBig primary={primary}>
                        {liveDemoBtn}
                      </Button>
                    </a>
                  </BtnWrapper>
                )}
              </TextWrapper>
            </InfoCol>
            <InfoCol>
              <ImgWrapper start={start}>
                <a rel="noreferrer" target="_blank" href={demoLink}>
                  <Img src={imgsm && isMobile ? imgsm : img} alt={alt} />
                </a>
              </ImgWrapper>
            </InfoCol>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
